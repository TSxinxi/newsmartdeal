// 详情页
import { useRef, useMemo, useEffect, useState } from 'react';
import { Listbox } from '@headlessui/react';
import { defer } from '@shopify/remix-oxygen';
import fetch from '../../../fetch/axios';
import {
  useLoaderData,
  useSearchParams,
  useLocation,
  useTransition,
} from '@remix-run/react';
import {
  AnalyticsPageType,
  Money,
  flattenConnection,
} from '@shopify/hydrogen';
import {
  Heading,
  IconCaret,
  IconCheck,
  ProductGallery,
  Section,
  Text,
  Link,
  AddToCartButton,
} from '~/components';
import invariant from 'tiny-invariant';
import clsx from 'clsx';
import { MEDIA_FRAGMENT, PRODUCT_CARD_FRAGMENT } from '~/data/fragments';

const seo = ({ data }) => {
  const media = flattenConnection(data.product.media).find(
    (media) => media.mediaContentType === 'IMAGE',
  );

  return {
    title: data?.product?.seo?.title ?? data?.product?.title,
    media: media?.image,
    description: data?.product?.seo?.description ?? data?.product?.description,
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'Product',
      brand: data?.product?.vendor,
      name: data?.product?.title,
    },
  };
};
let productData = ''

export const handle = {
  seo,
};

export async function loader({ params, request, context }) {
  const { productHandle } = params;
  invariant(productHandle, 'Missing productHandle param, check route filename');

  var canUseDOM = !!(typeof window !== "undefined" && typeof window.document !== "undefined" && typeof window.localStorage !== "undefined");
  if (canUseDOM) {
    alert('111')
  }
  const searchParams = new URL(request.url).searchParams;

  const selectedOptions = [];
  searchParams.forEach((value, name) => {
    selectedOptions.push({ name, value });
  });

  const { shop, product } = await context.storefront.query(PRODUCT_QUERY, {
    variables: {
      handle: productHandle,
      selectedOptions,
      country: context.storefront.i18n.country,
      language: context.storefront.i18n.language,
    },
  });

  if (!product?.id) {
    throw new Response(null, { status: 404 });
  }

  const recommended = getRecommendedProducts(context.storefront, product.id);
  const firstVariant = product.variants.nodes[0];
  const selectedVariant = product.selectedVariant ?? firstVariant;

  const productAnalytics = {
    productGid: product.id,
    variantGid: selectedVariant.id,
    name: product.title,
    variantName: selectedVariant.title,
    brand: product.vendor,
    price: selectedVariant.price.amount,
  };

  return defer({
    product,
    shop,
    recommended,
    analytics: {
      pageType: AnalyticsPageType.product,
      resourceId: product.id,
      products: [productAnalytics],
      totalValue: parseFloat(selectedVariant.price.amount),
    },
  });
}

function GetJudge(product_id) {
  let params = {
    url: 'uniquehzts.myshopify.com',
    shop_domain: 'uniquehzts.myshopify.com',
    platform: 'shopify',
    per_page: 5,
    product_id: product_id
  }
  return (fetch.get(`https://judge.me/reviews/reviews_for_widget`,{params})
    .then(res => {
      if (res && res.data) {
        return res.data
      }
    })
    .catch(function (error) {
    }).finally(() => {
    }))
}

export default function Product() {
  const { product, shop, recommended } = useLoaderData();
  const { media, title, vendor, descriptionHtml } = product;
  const { shippingPolicy, refundPolicy } = shop;
  const strProductId = product.id.lastIndexOf("/");
  let product_id = '';

  const [comment_html, setComment] = useState('');
  if (strProductId) {
    product_id = product.id.slice(strProductId + 1);
    // 评论
    // GetJudge(product_id).then(res => {
    //   if (res && res.html) {
    //     setComment(res.html)
    //   }
    // })
  }
  var canUseDOM = !!(typeof window !== "undefined" && typeof window.document !== "undefined" && typeof window.localStorage !== "undefined");
  if (canUseDOM) {
    let result = new URLSearchParams(window.location.search);
    let param = result.get('source');
    if (param) {
      window.localStorage.setItem('sourceName', param)
      window.localStorage.setItem('sourceProductId', product.id)
    }
  }
  productData = product

  return (
    <>
      <Section padding="x" className="px-0 prodect_section">
        <div className="product_details items-start md:gap-6 md:grid-cols-2">
          {/* 详情页右侧 */}
          <ProductGallery
            media={media.nodes}
            product={product}
            className="w-screen md:w-full lg:col-span-2"
          />
          <div className="left_product sticky md:-mb-nav md:top-nav md:-translate-y-nav md:pt-nav hiddenScroll">
            <section className="flex flex-col w-full max-w-xl gap-8 md:mx-auto md:max-w-sm md:px-0">
              <div className="grid gap-2">
                <Heading as="h1" className="whitespace-normal">
                  {title}
                </Heading>
                {/* {vendor && (
                  <Text className={'opacity-50 font-medium'}>{vendor}</Text>
                )} */}
              </div>
              <ProductForm />
              {descriptionHtml && (
                <div
                  className="prose dark:prose-invert"
                  style={{ overflow: 'hidden' }}
                  dangerouslySetInnerHTML={{ __html: descriptionHtml }}
                />
              )}
              {/* <div className="grid gap-4 py-4">
                {descriptionHtml && (
                  <ProductDetail
                    title="Product Details"
                    content={descriptionHtml}
                  />
                )}
                {shippingPolicy?.body && (
                  <ProductDetail
                    title="Shipping"
                    content={getExcerpt(shippingPolicy.body)}
                    learnMore={`/policies/${shippingPolicy.handle}`}
                  />
                )}
                {refundPolicy?.body && (
                  <ProductDetail
                    title="Returns"
                    content={getExcerpt(refundPolicy.body)}
                    learnMore={`/policies/${refundPolicy.handle}`}
                  />
                )}
              </div> */}
            </section>
          </div>
        </div>
        {comment_html && (
          <div
            className="prose dark:prose-invert"
            dangerouslySetInnerHTML={{ __html: comment_html }}
          />
        )}
      </Section>
    </>
  );
}

function goSettleAccounts() {
  const firstVariant = productData.variants.nodes[0];
  const selectedVariant = productData.selectedVariant ?? firstVariant;
  localStorage.removeItem('selectedVariant')
  localStorage.setItem('selectedVariant', JSON.stringify(selectedVariant))
  window.open(`/settleAccounts?id=${productData.id}`, '_self')
}

export function ProductForm() {
  const { product, analytics } = useLoaderData();

  const [currentSearchParams] = useSearchParams();
  const transition = useTransition();

  /**
   * We update `searchParams` with in-flight request data from `transition` (if available)
   * to create an optimistic UI, e.g. check the product option before the
   * request has completed.
   */
  const searchParams = useMemo(() => {
    return transition.location
      ? new URLSearchParams(transition.location.search)
      : currentSearchParams;
  }, [currentSearchParams, transition]);

  const firstVariant = product.variants.nodes[0];

  /**
   * We're making an explicit choice here to display the product options
   * UI with a default variant, rather than wait for the user to select
   * options first. Developers are welcome to opt-out of this behavior.
   * By default, the first variant's options are used.
   */
  const searchParamsWithDefaults = useMemo(() => {
    const clonedParams = new URLSearchParams(searchParams);

    for (const { name, value } of firstVariant.selectedOptions) {
      if (!searchParams.has(name)) {
        clonedParams.set(name, value);
      }
    }

    return clonedParams;
  }, [searchParams, firstVariant.selectedOptions]);

  /**
   * Likewise, we're defaulting to the first variant for purposes
   * of add to cart if there is none returned from the loader.
   * A developer can opt out of this, too.
   */
  const selectedVariant = product.selectedVariant ?? firstVariant;
  const isOutOfStock = !selectedVariant?.availableForSale;

  const isOnSale =
    selectedVariant?.price?.amount &&
    selectedVariant?.compareAtPrice?.amount &&
    selectedVariant?.price?.amount < selectedVariant?.compareAtPrice?.amount;

  const productAnalytics = {
    ...analytics.products[0],
    quantity: 1,
  };

  return (
    <div className="grid gap-10">
      <div className="grid gap-4">
        <Text
          as="span"
          className="flex items-center gap-2"
        >
          {isOnSale && (
            <Money
              withoutTrailingZeros
              data={selectedVariant?.compareAtPrice}
              as="span"
              className="opacity-50 strike"
            />
          )}
          <Money
            withoutTrailingZeros
            data={selectedVariant?.price}
            as="span"
          />
        </Text>
        <ProductOptions
          options={product.options}
          searchParamsWithDefaults={searchParamsWithDefaults}
        />
        {selectedVariant && (
          <div className="grid items-stretch gap-4">
            <button className={`inline-block rounded font-medium text-center w-full ${isOutOfStock ? 'border border-primary/10 bg-contrast text-primary' : 'bg-primary text-contrast'}`}>
              {isOutOfStock ? (
                <Text className='py-3 px-6'>تم البيع</Text>//卖完了
              ) : (
                <Text
                  as="span"
                  className="flex items-center justify-center gap-2 py-3 px-6"
                  onClick={() => { goSettleAccounts() }}
                >
                  {/* 立即购买 */}
                  <span>اشتر الآن</span>
                </Text>
              )}
            </button>

            {/* <AddToCartButton
              lines={[
                {
                  merchandiseId: selectedVariant.id,
                  quantity: 1,
                },
              ]}
              variant={isOutOfStock ? 'secondary' : 'primary'}
              data-test="add-to-cart"
              analytics={{
                products: [productAnalytics],
                totalValue: parseFloat(productAnalytics.price),
              }}
            >
              {isOutOfStock ? (
                <Text>تم البيع</Text>//卖完了
              ) : (
                <Text
                  as="span"
                  className="flex items-center justify-center gap-2" //加入购物车
                >
                  <span>أضف إلى السلة</span> <span>·</span>{' '}
                </Text>
              )}
            </AddToCartButton> */}
            {/* {!isOutOfStock && (
              <ShopPayButton variantIds={[selectedVariant?.id]} />
            )} */}
          </div>
        )}
      </div>
    </div>
  );
}

function ProductOptions({ options, searchParamsWithDefaults }) {
  const closeRef = useRef(null);
  return (
    <>
      {options
        .filter((option) => option.values.length > 1)
        .map((option) => (
          <div
            key={option.name}
            className="flex flex-col flex-wrap mb-4 gap-y-2 last:mb-0"
          >
            <Heading as="legend" size="lead" className="min-w-[4rem]">
              {option.name}
            </Heading>
            <div className="flex flex-wrap items-baseline gap-4">
              {/**
               * First, we render a bunch of <Link> elements for each option value.
               * When the user clicks one of these buttons, it will hit the loader
               * to get the new data.
               *
               * If there are more than 7 values, we render a dropdown.
               * Otherwise, we just render plain links.
               */}
              {option.values.length > 7 ? (
                <div className="relative w-full">
                  <Listbox>
                    {({ open }) => (
                      <>
                        <Listbox.Button
                          ref={closeRef}
                          className={clsx(
                            'flex items-center justify-between w-full py-3 px-4 border border-primary',
                            open
                              ? 'rounded-b md:rounded-t md:rounded-b-none'
                              : 'rounded',
                          )}
                        >
                          <span>
                            {searchParamsWithDefaults.get(option.name)}
                          </span>
                          <IconCaret direction={open ? 'up' : 'down'} />
                        </Listbox.Button>
                        <Listbox.Options
                          className={clsx(
                            'border-primary bg-contrast absolute bottom-12 z-30 grid h-48 w-full overflow-y-scroll rounded-t border px-2 py-2 transition-[max-height] duration-150 sm:bottom-auto md:rounded-b md:rounded-t-none md:border-t-0 md:border-b',
                            open ? 'max-h-48' : 'max-h-0',
                          )}
                        >
                          {option.values.map((value) => (
                            <Listbox.Option
                              key={`option-${option.name}-${value}`}
                              value={value}
                            >
                              {({ active }) => (
                                <ProductOptionLink
                                  optionName={option.name}
                                  optionValue={value}
                                  className={clsx(
                                    'text-primary w-full p-2 transition rounded flex justify-start items-center text-left cursor-pointer',
                                    active && 'bg-primary/10',
                                  )}
                                  searchParams={searchParamsWithDefaults}
                                  onClick={() => {
                                    if (!closeRef?.current) return;
                                    closeRef.current.click();
                                  }}
                                >
                                  {value}
                                  {searchParamsWithDefaults.get(option.name) ===
                                    value && (
                                      <span className="ml-2">
                                        <IconCheck />
                                      </span>
                                    )}
                                </ProductOptionLink>
                              )}
                            </Listbox.Option>
                          ))}
                        </Listbox.Options>
                      </>
                    )}
                  </Listbox>
                </div>
              ) : (
                <>
                  {option.values.map((value) => {
                    const checked =
                      searchParamsWithDefaults.get(option.name) === value;
                    const id = `option-${option.name}-${value}`;

                    return (
                      <Text key={id}>
                        <ProductOptionLink
                          optionName={option.name}
                          optionValue={value}
                          searchParams={searchParamsWithDefaults}
                          className={clsx(
                            'leading-none py-1 border-b-[1.5px] cursor-pointer transition-all duration-200',
                            checked ? 'border-primary/50' : 'border-primary/0',
                          )}
                        />
                      </Text>
                    );
                  })}
                </>
              )}
            </div>
          </div>
        ))}
    </>
  );
}

function funcUrlDel(name) {
  var loca = window.location;
  var baseUrl = loca.pathname + "?";
  var query = loca.search.substr(1);
  if (query.indexOf(name) > -1) {
    var obj = {}
    var arr = query.split("&");
    for (var i = 0; i < arr.length; i++) {
      arr[i] = arr[i].split("=");
      obj[arr[i][0]] = arr[i][1];
    };
    delete obj[name];
    var url = JSON.stringify(obj).replace(/[\"\{\}]/g, "").replace(/\:/g, "=").replace(/\,/g, "&").replace(/\?/g, "=");
    return url
  } else {
    return window.location.pathname;
  };
}

function ProductOptionLink({
  optionName,
  optionValue,
  searchParams,
  children,
  ...props
}) {
  const { pathname } = useLocation();
  const isLangPathname = /\/[a-zA-Z]{2}-[a-zA-Z]{2}\//g.test(pathname);
  // fixes internalized pathname
  const path = isLangPathname
    ? `/${pathname.split('/').slice(2).join('/')}`
    : pathname;

  const clonedSearchParams = new URLSearchParams(searchParams);
  clonedSearchParams.set(optionName, optionValue);
  let splicParam = clonedSearchParams.toString()
  var canUseDOM = !!(typeof window !== "undefined" && typeof window.document !== "undefined" && typeof window.location !== "undefined");
  if (canUseDOM && window.location.search && window.location.search.indexOf('source') > -1) {
    // window.open(`${window.location.pathname}?${funcUrlDel('source')}`, '_self')
    // console.log(window.location)
    // splicParam = funcUrlDel('source')
  }
  // console.log(splicParam)
  // console.log(clonedSearchParams.toString())

  return (
    <Link
      {...props}
      preventScrollReset
      prefetch="intent"
      replace
      to={`${path}?${splicParam}`}
    >
      {children ?? optionValue}
    </Link>
  );
}


const PRODUCT_VARIANT_FRAGMENT = `#graphql
  fragment ProductVariantFragment on ProductVariant {
    id
    availableForSale
    selectedOptions {
      name
      value
    }
    image {
      id
      url
      altText
      width
      height
    }
    price {
      amount
      currencyCode
    }
    compareAtPrice {
      amount
      currencyCode
    }
    sku
    title
    unitPrice {
      amount
      currencyCode
    }
    product {
      title
      handle
    }
  }
`;

const PRODUCT_QUERY = `#graphql
  ${MEDIA_FRAGMENT}
  ${PRODUCT_VARIANT_FRAGMENT}
  query Product(
    $country: CountryCode
    $language: LanguageCode
    $handle: String!
    $selectedOptions: [SelectedOptionInput!]!
  ) @inContext(country: $country, language: $language) {
    product(handle: $handle) {
      id
      title
      vendor
      handle
      descriptionHtml
      description
      options {
        name
        values
      }
      selectedVariant: variantBySelectedOptions(selectedOptions: $selectedOptions) {
        ...ProductVariantFragment
      }
      media(first: 7) {
        nodes {
          ...Media
        }
      }
      variants(first: 1) {
        nodes {
          ...ProductVariantFragment
        }
      }
      seo {
        description
        title
      }
    }
    shop {
      name
      shippingPolicy {
        body
        handle
      }
      refundPolicy {
        body
        handle
      }
    }
  }
`;

const RECOMMENDED_PRODUCTS_QUERY = `#graphql
  ${PRODUCT_CARD_FRAGMENT}
  query productRecommendations(
    $productId: ID!
    $count: Int
    $country: CountryCode
    $language: LanguageCode
  ) @inContext(country: $country, language: $language) {
    recommended: productRecommendations(productId: $productId) {
      ...ProductCard
    }
    additional: products(first: $count, sortKey: BEST_SELLING) {
      nodes {
        ...ProductCard
      }
    }
  }
`;

async function getRecommendedProducts(storefront, productId) {
  const products = await storefront.query(RECOMMENDED_PRODUCTS_QUERY, {
    variables: { productId, count: 12 },
  });

  invariant(products, 'No data returned from Shopify API');

  const mergedProducts = products.recommended
    .concat(products.additional.nodes)
    .filter(
      (value, index, array) =>
        array.findIndex((value2) => value2.id === value.id) === index,
    );

  const originalProduct = mergedProducts
    .map((item) => item.id)
    .indexOf(productId);

  mergedProducts.splice(originalProduct, 1);

  return mergedProducts;
}

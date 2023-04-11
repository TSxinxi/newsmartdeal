// 结账页
import { useEffect, useState } from 'react';
import { Text } from '~/components';
import fetch from '../../fetch/axios';

export default function thank_you() {
  const [hasMounted, setHasMounted] = useState(false);
  const [orderData, setOrderData] = useState('');
  let shop = 'newsmartdeal.myshopify.com'
  useEffect(() => {
    setHasMounted(true);
    var canUseDOM = !!(typeof window !== "undefined" && typeof window.document !== "undefined" && typeof window.location !== "undefined");
    if (canUseDOM && window.location) {
      let result = new URLSearchParams(window.location.search);
      fetch.get(`https://gateway.antdiy.vip/account-service/media_orders/detail/pass?shop=${shop}&order_id=${result.get('id')}`).then(res => {
        if (res && res.data && res.data.success) {
          let odata = res.data.data ? JSON.parse(res.data.data) : {}
          setOrderData(odata)

          let source_name = window.localStorage.getItem('sourceName')
          let source_product_id = window.localStorage.getItem('sourceProductId')
          if (source_name) {
            let params = {
              source: source_name,
              product_id: setSplit(source_product_id),
              shop: shop,
              total_price: odata.totalOutstandingSet.presentmentMoney.amount,
              create_at: odata.createdAt,
              order_id: setSplit(odata.id)
            }
            fetch.post(`https://gateway.antdiy.vip/account-service/media_orders/set/pass`,params).then(()=>{})
          }
        }
      })
    }
  }, []);
  console.log(orderData)

  if (!hasMounted) {
    return null;
  }

  return (
    <div className='settle_accounts'>
      <ProductBox product={orderData.lineItems && orderData.lineItems.nodes ? orderData.lineItems.nodes[0] : ''} />
      <OrderBox orderData={orderData} />
    </div>
  )
}

export function ProductBox({ product }) {
  if (product) {
    return (
      <div className='product_box thank_product_box' >
        <img src={product.image.url} />
        <div className='product_title'>
          <span>{product.title}</span>
          <span>{product.variantTitle}</span>
          <span>{product.originalTotalSet.presentmentMoney.amount}{product.originalTotalSet.presentmentMoney.currencyCode}</span>
        </div>
      </div >
    );
  }
}

export function OrderBox({ orderData }) {
  if (orderData) {
    return (
      <div className='order_box' >
        <div className="section__header">
          <img src="https://platform.antdiy.vip/static/image/cloudstore_steps_finish.svg" />
          <div className="header__heading">
            <span className="order_number">أوامر {orderData.name}</span>
            <h2 className="header_title">شكراً لك !</h2>
          </div>
        </div>
        <div className='order_list'>
          <div className='order_list_title'>تم تأكيد طلبك</div>
          <div className='order_list_text'>سوف تتلقى قريبا رسالة إلكترونية مؤكدة تحتوي على رقم طلبك.</div>
        </div>
        <div className='order_list'>
          <div className='order_list_title'>تحديث الطلب</div>
          <div className='order_list_text'>سوف تحصل على تحديث معلومات الشحن والتوزيع عن طريق البريد الإلكتروني.</div>
        </div>
        <div className='order_list'>
          <div className='order_list_title'>معلومات العملاء</div>
          <div className='customer_info'>
            <div className='info_li'>
              <div className='info_li_title'>معلومات الاتصال</div>
              <div className='info_li_text'>{orderData.customer.email}</div>
            </div>
            <div className='info_li'>
              <div className='info_li_title'>عنوان التسليم</div>
              {orderData.customer ? <div className='info_li_text'>
                <p>{orderData.shippingAddress.name}</p>
                <p>{orderData.shippingAddress.phone}</p>
                <p>{orderData.shippingAddress.country}</p>
                <p>{orderData.shippingAddress.province}</p>
                <p>{orderData.shippingAddress.city}</p>
                <p>{orderData.shippingAddress.address1}</p>
                <p>{orderData.shippingAddress.address2}</p>
              </div> : null}
            </div>
            <div className='info_li'>
              <div className='info_li_title'>طريقة الدفع</div>
              <div className='info_li_text'>الدفع عند الاستلام</div>
            </div>
            <div className='info_li'>
              <div className='info_li_title'>فاتورة، عنوان</div>
              {orderData.shippingAddress ? <div className='info_li_text'>
                <p>{orderData.shippingAddress.name}</p>
                <p>{orderData.shippingAddress.phone}</p>
                <p>{orderData.shippingAddress.country}</p>
                <p>{orderData.shippingAddress.province}</p>
                <p>{orderData.shippingAddress.city}</p>
                <p>{orderData.shippingAddress.address1}</p>
                <p>{orderData.shippingAddress.address2}</p>
              </div> : null}
            </div>
          </div>
        </div>
        <button className='inline-block rounded font-medium text-center w-full bg-primary text-contrast' style={{ marginTop: '20px' }} onClick={() => { window.open('http://newsmartdeal.myshopify.com', '_self') }}>
          <Text
            as="span"
            className="flex items-center justify-center gap-2 py-3 px-6"
          >
            <span>مواصلة التسوق</span>
          </Text>
        </button>
      </div>
    );
  }
}

function setSplit(data) {
  if (data.indexOf('/') > -1) {
    let arr = data.split('/')
    return arr[arr.length - 1]
  } else {
    return data
  }
}
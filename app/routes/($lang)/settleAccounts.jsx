// 结账页
import { useRef, useMemo, useEffect, useState } from 'react';
import { Money } from '@shopify/hydrogen';
import { Text } from '~/components';
import addressList from '~/components/address';
import fetch from '~/fetch/axios';

export default function settleAccounts() {
  const [hasMounted, setHasMounted] = useState(false);
  useEffect(() => {
    setHasMounted(true);
  }, []);
  if (!hasMounted) {
    return null;
  }


  var canUseDOM = !!(typeof window !== "undefined" && typeof window.document !== "undefined" && typeof window.localStorage !== "undefined");
  let product = '';
  if (canUseDOM && window.localStorage.getItem('selectedVariant')) {
    product = JSON.parse(window.localStorage.getItem('selectedVariant'))
    product.product_id = new URLSearchParams(window.location.search).get('id');
    if (!product.availableForSale) {
      window.open(`/products/${product.product.handle}`, '_self')
    }
  } else {
    window.history.back()
  }

  return (
    <div className='settle_accounts'>
      <div className='settle_accounts_title shadow_box'>
        <div>
          <span onClick={() => { window.history.back() }} className='prev'>{'〈'}</span>
          <span>تأكيد الطلب</span>
          <i></i>
        </div>
      </div>
      <ProductBox product={product} />
      <Information product={product} />
      <PaymentMethod />
    </div>
  )
}

export function ProductBox({ product }) {
  return (
    <div className='product_box shadow_box' >
      <img src={product.image.url} />
      <div className='product_title'>
        <span>{product.product.title}</span>
        <span>{product.title}</span>
        <Text
          as="span"
          className="flex items-center gap-2"
        >
          {/* {
            product.compareAtPrice ? 
            <Money
              withoutTrailingZeros
              data={product.compareAtPrice}
              as="span"
              className="opacity-50 strike"
            /> : null
          } */}
          <Money
            withoutTrailingZeros
            data={product.price}
            as="span"
          />
        </Text>
      </div>
    </div >
  );
}


export function Information({ product }) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [state, setState] = useState('');
  const [city, setCity] = useState('');
  const [area, setArea] = useState('');
  const [building, setBuilding] = useState('');
  const [street, setStreet] = useState('');
  const [nearest, setNearest] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errorText, setErrorText] = useState('');
  if (errorText) {
    timer(setErrorText)
  }
  return (
    <div className='information_in'>
      <div className='information_in_title'>معلومات  المستلم </div>
      <div className='information_in_list'>
        <div className='in_list'>
          <div className='in_list_title'>
            <span>*Name</span>
            <p>اسمك</p>
          </div>
          <input type="text" placeholder='الاسم بالكامل' value={name} onChange={(e) => { setName(e.target.value) }} />
        </div>
        <div className='in_list'>
          <div className='in_list_title'>
            <span>*Email</span>
            <p>البريد الإلكتروني</p>
          </div>
          <input name="email" type="text" placeholder='البريد الإلكتروني' value={email} onChange={(e) => { setEmail(e.target.value) }} />
        </div>
        <div className='in_list'>
          <div className='in_list_title'>
            <span>*966</span>
            <p></p>
          </div>
          <input type="text" placeholder='رقم الهاتف المحمول : 5xxxxxxxx' value={phone} onChange={(e) => { setPhone(e.target.value) }} />
        </div>
        <div className='in_list'>
          <div className='in_list_title'>
            <span>*966</span>
            <p></p>
          </div>
          <input type="text" placeholder='رقم الواتس اب: 5xxxxxxxx' value={whatsapp} onChange={(e) => { setWhatsapp(e.target.value) }} />
        </div>
        <div className='in_list'>
          <div className='in_list_title'>
            <span>*State</span>
            <p>المحافظة</p>
          </div>
          <select name="state" nullmsg="الرجاء تحديد مقاطعتك" value={state} onChange={(e) => { setState(e.target.value); setCity('') }} >
            {
              addressList.map((item, index) => {
                return (
                  <option value={item.value} key={index}>- - {item.value ? item.value + '/' : ''}{item.name}- -</option>
                )
              })
            }
          </select>
        </div>
        <div className='in_list'>
          <div className='in_list_title'>
            <span>*City</span>
            <p>المدينة</p>
          </div>
          <select name="city" nullmsg="الرجاء تحديد مدينتك" value={city} onChange={(e) => { setCity(e.target.value) }}>
            {
              addressList.filter(i => i.value === state)[0].children.map((item, index) => {
                return (
                  <option value={item.value} key={index}>- - {item.value ? item.value + '/' : ''}{item.name}- -</option>
                )
              })
            }
          </select>
        </div>
        <div className='in_list'>
          <div className='in_list_title'>
            <span>*Area</span>
            <p>منطقة</p>
          </div>
          <input type="text" placeholder='مثال: العليا  الرياض' value={area} onChange={(e) => { setArea(e.target.value) }} />
        </div>
        <div className='in_list'>
          <div className='in_list_title'>
            <span>*Building</span>
            <p>مبنى</p>
          </div>
          <input type="text" placeholder='مثال: فيلا 2 دور 3' value={building} onChange={(e) => { setBuilding(e.target.value) }} />
        </div>
        <div className='in_list'>
          <div className='in_list_title'>
            <span>*Street</span>
            <p>الشارع</p>
          </div>
          <input type="text" placeholder='مثال: شارع الملك فهد' value={street} onChange={(e) => { setStreet(e.target.value) }} />
        </div>
        <div className='in_list'>
          <div className='in_list_title'>
            <span>*Nearest landmark</span>
            <p>أقرب معلم معروف</p>
          </div>
          <input type="text" placeholder='مثال: برج المملكة' value={nearest} onChange={(e) => { setNearest(e.target.value) }} />
        </div>
        <div className='in_list'>
          <div className='in_list_title'>
            <span>Message</span>
            <p>ملاحظات</p>
          </div>
          <textarea type="text" placeholder='' value={message} onChange={(e) => { setMessage(e.target.value) }} />
        </div>
      </div>
      <div className='settle_accounts_foot'>
        <div>
          <Text
            as="span"
            className="flex items-center gap-2"
            style={{ marginLeft: '20px' }}
          >
            <Money
              withoutTrailingZeros
              data={product.price}
              as="span"
            />
          </Text>
          <button className='inline-block rounded font-medium text-center w-full bg-primary text-contrast' onClick={() => {
            SettleAccounts(
              product,
              {
                name: name,
                email: email,
                phone: phone,
                whatsapp: whatsapp,
                country: 'Saudi Arabia',
                state: state,
                city: city,
                area: area,
                building: building,
                street: street,
                nearest_land_mark: nearest,
                message: message,
              },
              setErrorText
            )
          }}>
            <Text
              as="span"
              className="flex items-center justify-center gap-2 py-3 px-6"
            >
              <span>التحقق وتقديم الطلب</span>
            </Text>
          </button>
        </div>
      </div>
      {errorText ? <div className='error_box'>
        <span>{errorText}</span>
      </div> : null}
    </div>
  )
}

function timer(setErrorText) {
  var count = 2;
  let countdown = setInterval(function () {
    count--;
    if (count < 1) {
      clearInterval(countdown);
      return setErrorText('')
    }
  }, 800)
}

export function PaymentMethod() {
  return (
    <div className='payment_method'>
      <div className='information_in_title'>طريقة الدفع</div>
      <div>
        <div className="payment_method_check">
          <div>
            <input type="radio" name="payment" defaultChecked="true" />
            <p>الدفع عند الاستلام</p>
          </div>
          <img src="https://oss.giikin.cn/uploads/c83291dfc3c559d226dd403daba4d3d3.png" />
        </div>
        <div className='description'>خفض رسوم المعاملة 30 ريال للدفع عبر الإنترنت.</div>
      </div>
    </div>
  )
}

function SettleAccounts(product, params, setErrorText) {
  if (!params.name || !params.phone || !params.whatsapp || !params.state || !params.city || !params.area || !params.building || !params.street || !params.nearest_land_mark || !params.email) {
    return setErrorText('الحقول لا يمكن أن تكون فارغة')
  }
  var emailRegExp = /^[a-zA-Z0-9]+([-_.][A-Za-zd]+)*@([a-zA-Z0-9]+[-.])+[A-Za-zd]{2,5}$/;
  if (!emailRegExp.test(params.email)) {
    return setErrorText('الرجاء إدخال النموذج الصحيح')
  }
  // var regex = new RegExp(/^(009665|9665|\+9665|05|5)(5|0|3|6|4|9|1|8|7)([0-9]{7})$/);
  // console.log(regex.test('0501234567'))
  // if(params.phone && !(regex.test(params.phone))){
  if (params.phone.length < 4 || params.phone.length > 15) {
    return setErrorText('أدخل رقم هاتف صالح')
  }
  let line_items = [{
    product_id: setSplit(product.product_id),
    quantity: 1,
    variant_id: setSplit(product.id),
  }]
  params.line_items = line_items
  params.count = 1
  params.shop = "newsmartdeal.myshopify.com"

  fetch.post(`https://gateway.antdiy.vip/account-service/media_orders/create/pass`, params).then(res => {
    if (res && res.data) {
      if (res.data.success && res.data.data && res.data.data.oid) {
        window.open(`/thank_you?id=${res.data.data.oid}`, '_self')
      } else {
        return setErrorText(res && res.data.msg)
      }
    }
  })
}

function setSplit(data) {
  if (data.indexOf('/') > -1) {
    let arr = data.split('/')
    return arr[arr.length - 1]
  } else {
    return data
  }
}
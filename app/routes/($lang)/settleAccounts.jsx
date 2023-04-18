// 结账页
import { useRef, useMemo, useEffect, useState } from 'react';
import { Money } from '@shopify/hydrogen';
import { Text } from '~/components';
import fetch from '~/fetch/axios';
import { getShopAddress } from '~/lib/P_Variable';
const addressList = [
  {
    name: '（المحافظة）إختر',
    value: '',
    children: [
      {
        name: '（المدينة）إختر',
        value: '',
      },
    ],
  },
  {
    name: 'الباحة',
    value: 'Al Baha Province',
    children: [
      {
        name: '（المدينة）إختر',
        value: '',
      },
      {
        name: 'أدهم',
        value: 'Adham',
      },
      {
        name: 'العقيق',
        value: 'Al Aqiq',
      },
      {
        name: 'اللأطاولة',
        value: 'Atawleh',
      },
      {
        name: 'الباحة',
        value: 'Al baha',
      },
      {
        name: 'بلجرشي',
        value: 'Baljurashi',
      },
      {
        name: 'قلوة',
        value: 'Qilwah',
      },
      {
        name: 'المندق',
        value: 'Al Mandaq',
      },
      {
        name: 'مخواه',
        value: 'Almakhwah',
      },
      {
        name: 'المظيلف',
        value: 'Almuzaylif',
      },
    ],
  },
  {
    name: 'المدينة المنورة',
    value: 'Madinah Province',
    children: [
      {
        name: '（المدينة）إختر',
        value: '',
      },
      {
        name: 'بدر',
        value: 'Badr',
      },
      {
        name: 'الحناكية',
        value: 'Al Henakiyah',
      },
      {
        name: 'خيبر',
        value: 'Khaybar',
      },
      {
        name: 'المدينة',
        value: 'Madinah',
      },
      {
        name: 'مهد الدهب',
        value: 'Mahd adh Dhahab',
      },
      {
        name: 'العلا',
        value: 'Al Ula',
      },
      {
        name: 'ينبع',
        value: 'Yanbu',
      },
    ],
  },
  {
    name: 'الرياض',
    value: 'Riyadh Province',
    children: [
      {
        name: '（المدينة）إختر',
        value: '',
      },
      {
        name: 'عفيف',
        value: 'Afif',
      },
      {
        name: 'الأفلاج',
        value: 'AlAflaj',
      },
      {
        name: 'الغاط',
        value: 'Al Ghat',
      },
      {
        name: 'المزاحمية',
        value: 'Al Muzahimiyah',
      },
      {
        name: 'الأرطاوية',
        value: 'Al Artawiyah',
      },
      {
        name: 'الدوادمي',
        value: 'Dawadmi',
      },
      {
        name: 'الدرعية',
        value: 'Ad Diriyah',
      },
      {
        name: 'ضرما',
        value: 'Dhurma',
      },
      {
        name: 'الدلم',
        value: 'Ad Dilam',
      },
      {
        name: 'الحريق',
        value: 'Al Hariq',
      },
      {
        name: 'حوطة بني تميم',
        value: 'Howtat Bani Tamim',
      },
      {
        name: 'حريملاء',
        value: 'Huraymila',
      },
      {
        name: 'حوطة سدير',
        value: 'Hautat Sudair',
      },
      {
        name: 'جلاجل',
        value: 'Jalajil',
      },
      {
        name: 'الخرج',
        value: 'Kharj',
      },
      {
        name: 'المجمعة',
        value: 'Al Majmaah',
      },
      {
        name: 'مرات',
        value: 'Marat',
      },
      {
        name: 'العيينة',
        value: 'Al Uyaynah',
      },
      {
        name: 'القصب',
        value: 'Al Qasab',
      },
      {
        name: 'القويعية',
        value: 'Al Quwaiiyah',
      },
      {
        name: 'رماح',
        value: 'Rumah',
      },
      {
        name: 'الرياض',
        value: 'Riyadh',
      },
      {
        name: 'روضة سدير',
        value: 'Raudat Sudair',
      },
      {
        name: 'ساجر',
        value: 'Sajir',
      },
      {
        name: 'صلبوخ',
        value: 'Salbukh',
      },
      {
        name: 'شقراء',
        value: 'Shaqra',
      },
      {
        name: 'السليل',
        value: 'As Sulayyil',
      },
      {
        name: 'ثادق',
        value: 'Thadiq',
      },
      {
        name: 'تمير',
        value: 'Tumair',
      },
      {
        name: 'وادي الدواسر',
        value: 'Wadi adDawasir',
      },
      {
        name: 'الزلفي',
        value: 'Az Zulfi',
      },
    ],
  },
  {
    name: 'الشرقية',
    value: 'Eastern Province',
    children: [
      {
        name: '（المدينة）إختر',
        value: '',
      },
      {
        name: 'بقيق',
        value: 'Buqayq',
      },
      {
        name: 'عين دار',
        value: 'New Ain Dar',
      },
      {
        name: 'الأحساء',
        value: 'Hassa',
      },
      {
        name: 'عنك',
        value: 'Anak',
      },
      {
        name: 'بطحاء',
        value: 'Al Batha',
      },
      {
        name: 'الدمام',
        value: 'Dammam',
      },
      {
        name: 'الظهران',
        value: 'Dhahran',
      },
      {
        name: 'حفر الباطن',
        value: 'Hafar Al Batin',
      },
      {
        name: 'حرض',
        value: 'Haradh',
      },
      {
        name: 'الحوية',
        value: 'Hawiyah',
      },
      {
        name: 'الهفوف',
        value: 'Hofuf',
      },
      {
        name: 'الجبيل',
        value: 'Jubail',
      },
      {
        name: 'الخفجي',
        value: 'Khafji',
      },
      {
        name: 'الخبر',
        value: 'Khobar',
      },
      {
        name: 'المبرز',
        value: 'Al Mubarraz',
      },
      {
        name: 'مليجة',
        value: 'Mulayjah',
      },
      {
        name: 'النعيرية',
        value: 'Nairyah',
      },
      {
        name: 'العثمانية',
        value: 'Uthmaniyah',
      },
      {
        name: 'القارة',
        value: 'Al Qarah',
      },
      {
        name: 'قرية العليا',
        value: 'Qaryat Al Ulya',
      },
      {
        name: 'القطيف',
        value: 'Qatif',
      },
      {
        name: 'القيصومة',
        value: 'Al Qaisumah',
      },
      {
        name: 'رأس الخير',
        value: 'Ras Al Khair',
      },
      {
        name: 'رأس تنورة',
        value: 'Ras Tanura',
      },
      {
        name: 'السفانية',
        value: 'As Saffaniyah',
      },
      {
        name: 'صفوى',
        value: 'Safwa',
      },
      {
        name: 'سلوى',
        value: 'Salwa',
      },
      {
        name: 'الصرّار',
        value: 'As Sarrar',
      },
      {
        name: 'سيهات',
        value: 'Saihat',
      },
      {
        name: 'تاروت',
        value: 'Tarout',
      },
      {
        name: 'العضيلية',
        value: 'Udhailiyah',
      },
      {
        name: 'العيون',
        value: 'Al Uyun',
      },
    ],
  },
  {
    name: 'حائل',
    value: 'Hail Province',
    children: [
      {
        name: '（المدينة）إختر',
        value: '',
      },
      {
        name: 'الحائط',
        value: 'Al Hait',
      },
      {
        name: 'الشملي',
        value: 'Ash Shamli',
      },
      {
        name: 'بقعاء',
        value: 'Baqaa',
      },
      {
        name: 'حائل',
        value: 'Hail',
      },
    ],
  },
  {
    name: 'مكة المكرمة',
    value: 'Makkah Province',
    children: [
      {
        name: '（المدينة）إختر',
        value: '',
      },
      {
        name: 'الهدا',
        value: 'Alhada',
      },
      {
        name: 'عمق',
        value: 'Amaq',
      },
      {
        name: 'عسفان',
        value: 'Asfan',
      },
      {
        name: 'بحره',
        value: 'Bahrah',
      },
      {
        name: 'البرك',
        value: 'Al Birk',
      },
      {
        name: 'ذهبان',
        value: 'Dahaban',
      },
      {
        name: 'جعرانة',
        value: "Al Ju'ranah",
      },
      {
        name: 'جدة',
        value: 'Jeddah',
      },
      {
        name: 'الجموم',
        value: 'Al Jumum',
      },
      {
        name: 'خليص',
        value: 'Khulais',
      },
      {
        name: 'الخرمة',
        value: 'Al Khurma',
      },
      {
        name: 'الليث',
        value: 'Al Lith',
      },
      {
        name: 'مكه',
        value: 'Makkah',
      },
      {
        name: 'مستورة',
        value: 'Mastorah',
      },
      {
        name: 'نمران',
        value: 'Nimran',
      },
      {
        name: 'القنفذة',
        value: 'Al Qunfudhah',
      },
      {
        name: 'رابغ',
        value: 'Rabigh',
      },
      {
        name: 'رنية',
        value: 'Ranyah',
      },
      {
        name: 'الطائف',
        value: 'Taif',
      },
      {
        name: 'ثول',
        value: 'Thuwal',
      },
      {
        name: 'تربة',
        value: 'Turbah',
      },
      {
        name: 'النوارية',
        value: 'An Nawwariyyah',
      },
    ],
  },
  {
    name: 'القصيم',
    value: 'Al Qassim Province',
    children: [
      {
        name: '（المدينة）إختر',
        value: '',
      },
      {
        name: 'الدليمية',
        value: 'Al Dulaymiyah',
      },
      {
        name: 'الرس',
        value: 'Ar Rass',
      },
      {
        name: 'عين ابن فهيد',
        value: 'Ayn Ibn Fuhayd',
      },
      {
        name: 'البدائع',
        value: 'Al Badayea',
      },
      {
        name: 'البكيرية',
        value: 'Al Bukayriyah',
      },
      {
        name: 'بريدة',
        value: 'Buraydah',
      },
      {
        name: 'ضرية',
        value: 'Dariyah',
      },
      {
        name: 'مذنب',
        value: 'Al Mithnab',
      },
      {
        name: 'عنيزة',
        value: 'Unayzah',
      },
      {
        name: 'رياض الخبراء',
        value: 'Riyadh Al Khabra',
      },
      {
        name: 'التنومه',
        value: 'Tanumah',
      },
      {
        name: 'عقلة الصقور',
        value: 'Uglat Asugour',
      },
    ],
  },
  {
    name: 'الجوف',
    value: 'Al Jouf Province',
    children: [
      {
        name: '（المدينة）إختر',
        value: '',
      },
      {
        name: 'أبو عجرم',
        value: 'Abu Ajram',
      },
      {
        name: 'الجوف',
        value: 'Al Jouf',
      },
      {
        name: 'دومة الجندل',
        value: 'Dumah Al Jandal',
      },
      {
        name: 'الحديثة',
        value: 'Al Hadithah',
      },
      {
        name: 'حالة عمار',
        value: 'Halat Ammar',
      },
      {
        name: 'القريات',
        value: 'Al Qurayyat',
      },
      {
        name: 'سكاكا',
        value: 'Sakaka',
      },
      {
        name: 'طبرجل',
        value: 'Tabarjal',
      },
    ],
  },
  {
    name: 'عسير',
    value: 'Asir Province',
    children: [
      {
        name: '（المدينة）إختر',
        value: '',
      },
      {
        name: 'ابها',
        value: 'Abha',
      },
      {
        name: 'أحد رفيدة',
        value: 'Ahad Rafidah',
      },
      {
        name: 'بللسمر',
        value: 'Billasmar',
      },
      {
        name: 'بارق',
        value: 'Bariq',
      },
      {
        name: 'بيشة',
        value: 'Bisha',
      },
      {
        name: 'ظهران الجنوب',
        value: 'Dhahran Al Janub',
      },
      {
        name: 'الحرجة',
        value: 'Harajah',
      },
      {
        name: 'خميس مشيط',
        value: 'Khamis Mushait',
      },
      {
        name: 'المجاردة',
        value: 'Almajaridah',
      },
      {
        name: 'محايل عسير',
        value: 'Muhayil',
      },
      {
        name: 'النماص',
        value: 'Al Namas',
      },
      {
        name: 'رجال ألمع',
        value: 'Ragal Almaa',
      },
      {
        name: 'سبت العلايا',
        value: 'Sabt Al Alayah',
      },
      {
        name: 'سراة عبيدة',
        value: 'Sarat Abidah',
      },
      {
        name: 'تنومة',
        value: 'Tanomah',
      },
      {
        name: 'تثليث',
        value: 'Tathleeth',
      },
      {
        name: 'الواديين',
        value: 'Al Wadeen',
      },
      {
        name: 'وادي ابن هشبل',
        value: 'Wadi Ibn Hashbal',
      },
    ],
  },
  {
    name: 'جازان',
    value: 'Jizan Province',
    children: [
      {
        name: '（المدينة）إختر',
        value: '',
      },
      {
        name: 'أبو عريش',
        value: 'Abu Arish',
      },
      {
        name: 'الداير',
        value: 'Addayer',
      },
      {
        name: 'أحد المسارحة',
        value: 'Ahad Al Masarihah',
      },
      {
        name: 'العارضة',
        value: 'Al Aridhah',
      },
      {
        name: 'بيش',
        value: 'Baish',
      },
      {
        name: 'ضمد',
        value: 'Damad',
      },
      {
        name: 'الدرب',
        value: 'Ad Darb',
      },
      {
        name: 'فرسان',
        value: 'Farasan',
      },
      {
        name: 'جيزان',
        value: 'Jizan',
      },
      {
        name: 'الكربوس',
        value: 'Al Karbus',
      },
      {
        name: 'صبيا',
        value: 'Sabya',
      },
      {
        name: 'صامطة',
        value: 'Samtah',
      },
    ],
  },
  {
    name: 'نجران',
    value: 'Najran Province',
    children: [
      {
        name: '（المدينة）إختر',
        value: '',
      },
      {
        name: 'نجران',
        value: 'Najran',
      },
      {
        name: 'شرورة',
        value: 'Sharorah',
      },
      {
        name: 'حبونا',
        value: 'Hubuna',
      },
      {
        name: 'ثار',
        value: 'Thar',
      },
      {
        name: 'يدمة',
        value: 'Yadamah',
      },
    ],
  },
  {
    name: 'الحدود الشمالية',
    value: 'Northern Borders Province',
    children: [
      {
        name: '（المدينة）إختر',
        value: '',
      },
      {
        name: 'عرعر',
        value: 'Arar',
      },
      {
        name: 'رفحاء',
        value: 'Rafha',
      },
      {
        name: 'طريف',
        value: 'Turaif',
      },
    ],
  },
  {
    name: 'تبوك',
    value: 'Tabuk Province',
    children: [
      {
        name: '（المدينة）إختر',
        value: '',
      },
      {
        name: 'البدع',
        value: 'Al Bad',
      },
      {
        name: 'ضبا',
        value: 'Duba',
      },
      {
        name: 'حقل',
        value: 'Haql',
      },
      {
        name: 'تبوك',
        value: 'Tabuk',
      },
      {
        name: 'تيماء',
        value: 'Tayma',
      },
      {
        name: 'أملج',
        value: 'Umluj',
      },
      {
        name: 'الوجه',
        value: 'Al Wajh',
      },
    ],
  },
]

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
    <div>
      <div className='payment_method'>
        <div className='information_in_title'>طريقة الدفع</div>
        <div>
          <div className="payment_method_check">
            <div>
              <input type="radio" name="payment" defaultChecked="true" />
              <p>الدفع عند الاستلام</p>
            </div>
            <img src="https://platform.antdiy.vip/static/image/hydrogen_icon_delivery.svg" />
          </div>
          <div className='description'>خفض رسوم المعاملة 30 ريال للدفع عبر الإنترنت.</div>
        </div>
      </div>
      <div className='order_tips'>
        <span>شحن مجاني + الدفع عند الاستلام + موقع يستحق الوثق</span>
        <p>نسعي إلى تقديم منتجات عالية الجودة وخدمة ممتازة لكم، ستحصل على إشعار عند توصيل المنتج. إذا لديك أي سؤال، يرجي النقر رمز whatsapp على الصفحة الرئيسية</p>
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
  params.shop = getShopAddress()

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
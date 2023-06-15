// var canUseDOM = !!(typeof window !== "undefined" && typeof window.document !== "undefined" && typeof window.localStorage !== "undefined");
// if (canUseDOM) {
//   // console.log(window.location)
// }

export function getShopAddress() {
  // return 'uniquehzts.myshopify.com';
  return 'newsmartdeal.myshopify.com';
  // return 'modafallonei.myshopify.com';
}
export function getDomain() {
  return 'https://gateway.antdiy.vip';
  // return 'https://gateway.di79.com';
}

export function openWhatsApp() {
  const whatsApp = {
    phone: '8613429685162',
    isOpen: true,
  }
  return whatsApp;
}

export function openComment() {
  return true;
}

export function getDirection() {
  return 'rtl';
  // return 'initial';
}

export function getLanguage() {
  // let LType = 'EN'
  let LType = 'SA'
  // let LType = 'RO'
  let language = {
    EN: {
      type: 'EN',
      country: 'EN',
      deliveryProcess: 'deliveryProcess1.jpg',
      whatsAppText: 'Vă rugăm să faceți clic pe trimite direct, nu ștergeți linkul de mai jos, veți primi cele mai precise răspunsuri de la serviciul nostru pentru clienți',
      buy: 'Buy now',
      comTit: 'Customer Reviews',
      write: 'Write a review',
      sold: 'sold',
      addComment: 'Write a review',
      rating: 'Rating',
      reviewTitle: 'Review Title',
      reviewTiPle: 'Give your review a title',
      review: 'Review',
      reviewPle: 'Write your comments here',
      error: 'This field is required.',
      picture: 'Picture/Video (optional)',
      selectName: 'Name (displayed publicly like ',
      namePle: 'Enter your name (public)',
      emailN: 'Email',
      emailPle: 'Enter your email (private)',
      cancelRe: 'Cancel review',
      submitRe: 'Submit Review',
      screenCreate: 'Most Recent',
      screenDesc: 'Highest Rating',
      screenAsc: 'Lowest Rating',
      screenWith: 'Only Pictures',
      screenPic: 'Pictures First',
      screenVideo: 'Videos First',
      screenMost: 'Most Helpful',
      subReview: 'Review Submitted!',
      subComtent: 'Thank you! Please refresh the page in a few moments to see your review.',
      commentResult: 'Be the first to write a review',
      based1: 'Based on ',
      based2: ' reviews',
      seeAll: 'See All Assessments',
      image5: 'Sorry, we can only accept five images for one review.',
      rightEmail: 'Please enter a valid email',
      unknown: 'Unknown',
      acticleList: [' Payment Methods ', 'Delivery ', ' Information about Us ', 'Terms and Conditions ', ' Returns and Exchange ', 'Privacy Policy ', ' Contact Us '],
      discountZone: 'Discount zone of store',
      free7: 'Free 7 - day replacement and refund service',
      deliver: "Delivery's free.",
      paying: 'Paying Cash Upon Receipt',
      orders: 'Orders',
      thank: 'Oh, thank you.',
      request: 'Your request has been confirmed',
      receive: 'You will soon receive a confirmed email with your order number',
      updateOrder: 'Update order',
      information: 'You will get updated shipping and distribution information by email.',
      customer: 'Customer Information',
      contactInfo: 'Contact info',
      delivery: 'Delivery address',
      payment: 'Payment method',
      payReceipt: 'Pay on Receipt',
      invoice: 'Invoice address',
      keeyshop: 'Keep Shopping',
      confirRequest: 'Confirming Request',
      recipientInfo: 'Recipient info',
      yourName: 'Your name',
      fullName: 'Full name',
      semail: 'E-mail',
      governor: 'Governorate',
      telephone: 'Telephone',
      district: 'Please select your district',
      city: 'City',
      selectCity: 'Please select your city',
      zone: 'region',
      zonePle: 'Example: High Riyadh',
      building: 'Building',
      buildingPle: 'Example: Villa 2 Floor 3',
      street: 'Street',
      streetPle: 'Example: King Fahd Street',
      closest: 'Nearest landmark',
      closestPle: 'Example: Kingdom Tower',
      phonepl1: 'Mobile phone number: 5xxxxxxxxxx',
      phonepl2: 'WhatsApp number: 5xxxxxxx',
      comments: 'Message',
      apply: 'Verify and apply',
      method: 'payment method',
      recieving: 'Paiement when recieving',
      onlinePayment: 'Reducing the transaction fee of 30 riyals for online payment.',
      Website: 'Free Shipping + Cash on Delivery + Trustworthy Website',
      homepage: 'We strive to provide you with high quality products and excellent service, you will get a notification when the product is delivered. If you have any question, please click the whatsapp icon on the homepage',
      empty: 'Fields cannot be empty',
      correct: 'Please enter the correct form',
      validnum: 'Enter a valid phone number',
      noOpinion: 'No opinion',
      addressList: [
        {
          name: '(province) select',
          value: '',
          children: [
            {
              name: '（City）select',
              value: '',
            },
          ],
        },
        {
          name: 'Al-Baha',
          value: 'Al Baha Province',
          children: [
            {
              name: '（City）select',
              value: '',
            },
            {
              name: 'Adham',
              value: 'Adham',
            },
            {
              name: 'agate',
              value: 'Al-Aqiq',
            },
            {
              name: 'table',
              value: 'Atawleh',
            },
            {
              name: 'Al-Baha',
              value: 'Albahah',
            },
            {
              name: 'Baljurashi',
              value: 'Baljurashi',
            },
            {
              name: 'Qilwa',
              value: 'Qilwah',
            },
            {
              name: 'Almandaq',
              value: 'Al Mandaq',
            },
            {
              name: 'Makhwah',
              value: 'Almakhwah',
            },
            {
              name: 'Al Muzaylif',
              value: 'Almuzaylif',
            },
          ],
        },
        {
          name: 'Madinah',
          value: 'Madinah Province',
          children: [
            {
              name: '（City）select',
              value: '',
            },
            {
              name: 'Badr',
              value: 'Badr',
            },
            {
              name: 'Hanakia',
              value: 'Al Henakiyah',
            },
            {
              name: 'Khaybar',
              value: 'Khaybar',
            },
            {
              name: 'City',
              value: 'Madinah',
            },
            {
              name: 'cradle of gold',
              value: 'Mahd adh Dhahab',
            },
            {
              name: 'Al-Ula',
              value: 'Al Ula',
            },
            {
              name: 'Yanbu',
              value: 'Yanbu',
            },
          ],
        },
        {
          name: 'Riyadh',
          value: 'Riyadh Province',
          children: [
            {
              name: '（City）select',
              value: '',
            },
            {
              name: 'afif',
              value: 'Afif',
            },
            {
              name: 'Aflaj',
              value: 'AlAflaj',
            },
            {
              name: 'Al Ghat',
              value: 'Al Ghat',
            },
            {
              name: 'Muzahimiyah',
              value: 'Al Muzahimiyah',
            },
            {
              name: 'artawiyah',
              value: 'Al Artawiyah',
            },
            {
              name: 'Dawadmi',
              value: 'Dawadmi',
            },
            {
              name: 'Diriyah',
              value: 'Ad Diriyah',
            },
            {
              name: 'Dharma',
              value: 'Dhurma',
            },
            {
              name: 'Al Dilam',
              value: 'AdDilam',
            },
            {
              name: 'fire',
              value: 'Al Hariq',
            },
            {
              name: 'Hotat Bani Tamim',
              value: 'Howtat Bani Tamim',
            },
            {
              name: 'Huraymila',
              value: 'Huraymila',
            },
            {
              name: 'Hotat Sudair',
              value: 'Hautat Sudair',
            },
            {
              name: 'Jingle',
              value: 'Jalajil',
            },
            {
              name: 'output',
              value: 'Kharj',
            },
            {
              name: 'bundled',
              value: 'Al Majmaah',
            },
            {
              name: 'times',
              value: 'Marat',
            },
            {
              name: 'eyelet',
              value: 'Al Uyaynah',
            },
            {
              name: 'reed',
              value: 'Al Qasab',
            },
            {
              name: 'Quway',
              value: 'Al Quwaiiyah',
            },
            {
              name: 'Ramah',
              value: 'Ruma',
            },
            {
              name: 'Riyadh',
              value: 'Riyadh',
            },
            {
              name: 'Rawda Sudair',
              value: 'Raudat Sudair',
            },
            {
              name: 'Sajer',
              value: 'Sajir',
            },
            {
              name: 'Salboukh',
              value: 'Salbukh',
            },
            {
              name: 'blonde',
              value: 'Shaqra',
            },
            {
              name: 'descendent',
              value: 'As Sulayyil',
            },
            {
              name: 'Tadq',
              value: 'Thadiq',
            },
            {
              name: 'Tamir',
              value: 'Tumair',
            },
            {
              name: 'Wadi Al-Dawasir',
              value: 'Wadi adDawasir',
            },
            {
              name: 'Al Zulfi',
              value: 'Az Zulfi',
            },
          ],
        },
        {
          name: 'Eastern',
          value: 'Eastern Province',
          children: [
            {
              name: '（City）select',
              value: '',
            },
            {
              name: 'Abqaiq',
              value: 'Buqayq',
            },
            {
              name: 'Ain Dar',
              value: 'New Ain Dar',
            },
            {
              name: 'Al Ahsa',
              value: 'Hassa',
            },
            {
              name: 'about you',
              value: 'Anak',
            },
            {
              name: 'Batha',
              value: 'Al Batha',
            },
            {
              name: 'Dammam',
              value: 'Dammam',
            },
            {
              name: 'Dhahran',
              value: 'Dahran',
            },
            {
              name: 'Hafar Al-Batin',
              value: 'Hafar Al Batin',
            },
            {
              name: 'harad',
              value: 'Haradh',
            },
            {
              name: 'Hawiyah',
              value: 'Hawiya',
            },
            {
              name: 'Al Hofuf',
              value: 'Hofuf',
            },
            {
              name: 'Jubail',
              value: 'Jubail',
            },
            {
              name: 'Al-Khafji',
              value: 'Khafji',
            },
            {
              name: 'news',
              value: 'Khobar',
            },
            {
              name: 'Mubaraz',
              value: 'Al Mubarraz',
            },
            {
              name: 'Miliga',
              value: 'Mulayjah',
            },
            {
              name: 'Nairyah',
              value: 'Nairyah',
            },
            {
              name: 'Ottoman',
              value: 'Uthmaniyah',
            },
            {
              name: 'continent',
              value: 'Al Qarah',
            },
            {
              name: 'Upper Village',
              value: 'Qaryat Al Ulya',
            },
            {
              name: 'Qatif',
              value: 'Qatif',
            },
            {
              name: 'Qaisumah',
              value: 'Al Qaisumah',
            },
            {
              name: 'Ras Al-Khair',
              value: 'Ras Al Khair',
            },
            {
              name: 'Ras Tanura',
              value: 'Ras Tanura',
            },
            {
              name: 'Safaniya',
              value: 'As Saffaniyah',
            },
            {
              name: 'Safwa',
              value: 'Safwa',
            },
            {
              name: 'Salwa',
              value: 'Salwa',
            },
            {
              name: 'Assarar',
              value: 'As Sarrar',
            },
            {
              name: 'Sayhat',
              value: 'Saihat',
            },
            {
              name: 'Tarot',
              value: 'Tarout',
            },
            {
              name: 'Udhailiyah',
              value: 'Udhailiyah',
            },
            {
              name: 'eyes',
              value: 'Al Uyun',
            },
          ],
        },
        {
          name: 'Hail',
          value: 'Hail Province',
          children: [
            {
              name: '（City）select',
              value: '',
            },
            {
              name: 'wall',
              value: 'Al Hait',
            },
            {
              name: 'shamli',
              value: 'Ash Shamli',
            },
            {
              name: 'spot',
              value: 'Baqaa',
            },
            {
              name: 'Hail',
              value: 'Hail',
            },
          ],
        },
        {
          name: 'Makkah',
          value: 'Makkah Province',
          children: [
            {
              name: '（City）select',
              value: '',
            },
            {
              name: 'Alhada',
              value: 'Alhada',
            },
            {
              name: 'depth',
              value: 'amaq',
            },
            {
              name: 'Asfan',
              value: 'Asfan',
            },
            {
              name: 'Bahra',
              value: 'Bahrah',
            },
            {
              name: 'Ponds',
              value: 'Al Birk',
            },
            {
              name: 'Dhaban',
              value: 'Dahban',
            },
            {
              name: 'scarab',
              value: "Al Ju'ranah",
            },
            {
              name: 'Jeddah',
              value: 'Jeddah',
            },
            {
              name: 'Jumum',
              value: 'Al Jumum',
            },
            {
              name: 'Khalis',
              value: 'Khulais',
            },
            {
              name: 'The Khurma',
              value: 'Al Khurma',
            },
            {
              name: 'allith',
              value: 'Al Lith',
            },
            {
              name: 'Makkah',
              value: 'Makkah',
            },
            {
              name: 'Mastoura',
              value: 'Mastorah',
            },
            {
              name: 'Nimran',
              value: 'Nimran',
            },
            {
              name: 'Al Qunfudhah',
              value: 'Al Qunfudhah',
            },
            {
              name: 'Rabigh',
              value: 'Rabigh',
            },
            {
              name: 'ranya',
              value: 'Raniah',
            },
            {
              name: 'Taif',
              value: 'Taif',
            },
            {
              name: 'thul',
              value: 'Thuwal',
            },
            {
              name: 'soil',
              value: 'Turbah',
            },
            {
              name: 'Nuwariya',
              value: 'An Nawwariyyah',
            },
          ],
        },
        {
          name: 'Qassim',
          value: 'Al Qassim Province',
          children: [
            {
              name: '（City）select',
              value: '',
            },
            {
              name: 'Dulaimi',
              value: 'Al Dulaymiyah',
            },
            {
              name: 'Al-Rass',
              value: 'Ar Rass',
            },
            {
              name: 'Ain Ibn Fuhaid',
              value: 'Ayn Ibn Fuhayd',
            },
            {
              name: 'Badi',
              value: 'Al Badaya',
            },
            {
              name: 'Bukayriyah',
              value: 'Al Bukayriyah',
            },
            {
              name: 'Buraydah',
              value: 'Buraydah',
            },
            {
              name: 'Dhariya',
              value: 'Dariyah',
            },
            {
              name: 'guilty',
              value: 'Al Mithnab',
            },
            {
              name: 'Unayzah',
              value: 'Unayzah',
            },
            {
              name: 'Riyad Al-Khubra',
              value: 'Riyadh Al Khabra',
            },
            {
              name: 'Tannomah',
              value: 'Tanumah',
            },
            {
              name: 'Uqlat Al-Suqur',
              value: 'Uglat Asugour',
            },
          ],
        },
        {
          name: 'The Hollow',
          value: 'Al Jouf Province',
          children: [
            {
              name: '（City）select',
              value: '',
            },
            {
              name: 'Abu Ajram',
              value: 'Abu Ajram',
            },
            {
              name: 'The Hollow',
              value: 'Al Jouf',
            },
            {
              name: 'Dumat al-Jandal',
              value: 'Dumah Al Jandal',
            },
            {
              name: 'modern',
              value: 'Al Hadithah',
            },
            {
              name: "Amar's case",
              value: 'Halat Ammar',
            },
            {
              name: 'Qurayyat',
              value: 'Al Qurayyat',
            },
            {
              name: 'Sakaka',
              value: 'Sakaka',
            },
            {
              name: 'Tabarjal',
              value: 'Tabarjal',
            },
          ],
        },
        {
          name: 'Asir',
          value: 'Asir Province',
          children: [
            {
              name: '（City）select',
              value: '',
            },
            {
              name: 'Abha',
              value: 'Abha',
            },
            {
              name: 'Ahad Rufaida',
              value: 'Ahad Rafidah',
            },
            {
              name: 'Bilsamar',
              value: 'Billasmar',
            },
            {
              name: 'Bariq',
              value: 'Bariq',
            },
            {
              name: 'Bishah',
              value: 'Bisha',
            },
            {
              name: 'Dhahran al-Janoub',
              value: 'Dahran Al Janub',
            },
            {
              name: 'critical',
              value: 'Harajah',
            },
            {
              name: 'Khamis Mushait',
              value: 'Khamis Mushait',
            },
            {
              name: 'Almajardah',
              value: 'Almajaridah',
            },
            {
              name: 'Muhayil Aseer',
              value: 'Muhayil',
            },
            {
              name: 'Al-Namas',
              value: 'Al Namas',
            },
            {
              name: 'Brightest Men',
              value: 'Ragal Almaa',
            },
            {
              name: 'Sabbath of the High',
              value: 'Sabt Al Alayah',
            },
            {
              name: 'Sarat Obeida',
              value: 'Sarat Abidah',
            },
            {
              name: 'Tanuma',
              value: 'Tanomah',
            },
            {
              name: 'triangulate',
              value: 'Tathleeth',
            },
            {
              name: 'The Two Valleys',
              value: 'Al-Wadeen',
            },
            {
              name: 'Wadi Ibn Hashbel',
              value: 'Wadi Ibn Hashbal',
            },
          ],
        },
        {
          name: 'Jazan',
          value: 'Jizan Province',
          children: [
            {
              name: '（City）select',
              value: '',
            },
            {
              name: 'Abu Arish',
              value: 'Abu Arish',
            },
            {
              name: 'Aldayer',
              value: 'Addayer',
            },
            {
              name: 'Sun Theater',
              value: 'Ahad Al Masarihah',
            },
            {
              name: 'Keel',
              value: 'Al-Aridah',
            },
            {
              name: 'bish',
              value: 'Baish',
            },
            {
              name: 'ligature',
              value: 'Damad',
            },
            {
              name: 'The Trail',
              value: 'Ad Darb',
            },
            {
              name: 'Knights',
              value: 'Farasan',
            },
            {
              name: 'Jazan',
              value: 'Jizan',
            },
            {
              name: 'corpus',
              value: 'Al Karbus',
            },
            {
              name: 'boy',
              value: 'Sabya',
            },
            {
              name: 'Samta',
              value: 'Samtah',
            },
          ],
        },
        {
          name: 'Najran',
          value: 'Najran Province',
          children: [
            {
              name: '（City）select',
              value: '',
            },
            {
              name: 'Najran',
              value: 'Najran',
            },
            {
              name: 'sharurah',
              value: 'Sharorah',
            },
            {
              name: 'Love Us',
              value: 'Hubuna',
            },
            {
              name: 'Thar',
              value: 'Thar',
            },
            {
              name: 'Yedma',
              value: 'Yadamah',
            },
          ],
        },
        {
          name: 'Northern Border',
          value: 'Northern Border Province',
          children: [
            {
              name: '（City）select',
              value: '',
            },
            {
              name: 'arar',
              value: 'Arar',
            },
            {
              name: 'Rafha',
              value: 'Rafah',
            },
            {
              name: 'Tarif',
              value: 'Turaif',
            },
          ],
        },
        {
          name: 'Tabuk',
          value: 'Tabuk Province',
          children: [
            {
              name: '（City）select',
              value: '',
            },
            {
              name: 'Al-Bida',
              value: 'Al Bad',
            },
            {
              name: 'Daba',
              value: 'Duba',
            },
            {
              name: 'field',
              value: 'Haql',
            },
            {
              name: 'Tabuk',
              value: 'Tabuk',
            },
            {
              name: 'Taima',
              value: 'Tayma',
            },
            {
              name: 'trowel',
              value: 'Umluj',
            },
            {
              name: 'face',
              value: 'Al-Wajh',
            },
          ],
        },
      ]
    },
    SA: {
      type: 'SA',
      country: 'Saudi Arabia',
      deliveryProcess: 'deliveryProcess2.png',
      whatsAppText: 'يرجى نقر الإرسال مباشرة، لا تحذف الرابط أدناه، ستحصل على  الإجابات الأكثر دقة من خدمة العملاء',
      buy: 'اشتر الآن',
      comTit: 'تقييمات العملاء',
      write: 'إلغاء التقييم',
      sold: 'تم البيع',
      addComment: 'اكتب مراجعة',
      rating: 'علامة التقييم',
      reviewTitle: 'عنوان التقييم',
      reviewTiPle: 'كتابة عنوان لتقييمك',
      review: 'مراجعة',
      reviewPle: 'كتابة تعليقك هنا',
      error: 'هذه الخانة مطلوبه.',
      picture: 'صورة / فيديو (اختياري)',
      selectName: 'الإسم (معروضة بشكل عام مثل ',
      namePle: '(ادخال الإسم (عام',
      emailN: 'الإيميل',
      emailPle: 'إدخال إيميلك (خاص)',
      cancelRe: 'إلغاء التقييم',
      submitRe: 'إرسال التقييم',
      screenCreate: 'الأحدث أولاً',
      screenDesc: 'الأعلى تقييماً',
      screenAsc: 'الأدنى تقييماً',
      screenWith: 'صور فقط',
      screenPic: 'الصور أولاً',
      screenVideo: 'مقاطع الفيديو أولاً',
      screenMost: 'الأكثر فائدة',
      subReview: 'المراجعة المقدمة',
      subComtent: 'شكراً لكم! الرجاء تحديث الصفحة في بضع لحظات لرؤية مراجعتك.',

      commentResult: 'لا يوجد تقييمات بعد',
      based1: 'بناءً على ',
      based2: ' تقييمات',
      seeAll: 'مشاهدة جميع التقييمات',
      image5: 'معذرةً ، لا يمكننا قبول سوى 5 images لمراجعة واحدة.',
      rightEmail: 'الرجاء ادخال إيميل صحيح',
      unknown: 'مجهول',
      acticleList: ['طرق الدفع', 'توصيل', 'معلومات عنا', 'البنود و الظروف', 'العوائد والتبادلات', 'سياسة الخصوصية', 'اتصل بنا'],
      discountZone: 'منطقة الخصومات للمتجر',
      free7: 'خدمة الاستبدال والاسترداد المجاني خلال سبع أيام',
      deliver: 'التوصيل مجاناً',
      paying: 'الدفع نقداً عند الاستلام',
      orders: 'أوامر',
      thank: 'شكراً لك !',
      request: 'تم تأكيد طلبك',
      receive: 'سوف تتلقى قريبا رسالة إلكترونية مؤكدة تحتوي على رقم طلبك.',
      updateOrder: 'تحديث الطلب',
      information: 'سوف تحصل على تحديث معلومات الشحن والتوزيع عن طريق البريد الإلكتروني.',
      customer: 'معلومات العملاء',
      contactInfo: 'معلومات الاتصال',
      delivery: 'عنوان التسليم',
      payment: 'طريقة الدفع',
      payReceipt: 'الدفع عند الاستلام',
      invoice: 'فاتورة، عنوان',
      keeyshop: 'مواصلة التسوق',
      confirRequest: 'تأكيد الطلب',
      recipientInfo: 'معلومات  المستلم',
      yourName: 'اسمك',
      fullName: 'الاسم بالكامل',
      semail: 'البريد الإلكتروني',
      governor: 'المحافظة',
      telephone: 'هاتف',

      district: 'الرجاء تحديد مقاطعتك',
      city: 'المدينة',
      selectCity: 'الرجاء تحديد مدينتك',
      zone: 'منطقة',
      zonePle: 'مثال: العليا  الرياض',
      building: 'مبنى',
      buildingPle: 'مثال: فيلا 2 دور 3',
      street: 'الشارع',
      streetPle: 'مثال: شارع الملك فهد',
      closest: 'أقرب معلم معروف',
      closestPle: 'مثال: برج المملكة',
      phonepl1: 'رقم الهاتف المحمول : 5xxxxxxxx',
      phonepl2: 'رقم الواتس اب',
      comments: 'ملاحظة',
      apply: 'التحقق وتقديم الطلب',
      method: 'طريقة الدفع',
      recieving: 'الدفع عند الاستلام',
      onlinePayment: 'خفض رسوم المعاملة 30 ريال للدفع عبر الإنترنت.',
      Website: 'شحن مجاني + الدفع عند الاستلام + موقع يستحق الوثق',
      homepage: 'نسعي إلى تقديم منتجات عالية الجودة وخدمة ممتازة لكم، ستحصل على إشعار عند توصيل المنتج. إذا لديك أي سؤال، يرجي النقر رمز whatsapp على الصفحة الرئيسية',
      empty: 'الحقول لا يمكن أن تكون فارغة',
      correct: 'الرجاء إدخال النموذج الصحيح',
      validnum: 'أدخل رقم هاتف صالح',
      noOpinion: 'لا رأي',

      addressList: [
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
    },
    RO: {
      type: 'RO',
      country: 'Romania',
      deliveryProcess: 'deliveryProcess1.jpg',
      whatsAppText: 'Vă rugăm să faceți clic pe trimite direct, nu ștergeți linkul de mai jos, veți primi cele mai precise răspunsuri de la serviciul nostru pentru clienți',
      buy: 'CUMPǍRǍ ACUM',
      comTit: 'Opinii clienți',
      write: 'anulează evaluarea',
      sold: 'vândut',
      addComment: 'Scrieți o recenzie',
      rating: 'Notă de evaluare',
      reviewTitle: 'Titlul recenziei',
      reviewTiPle: 'Scrieți un titlu pentru recenzia dvs.',
      review: 'recenzie',
      reviewPle: 'Scrieți comentariul dvs. aici',
      error: 'Acest câmp este obligatoriu.',
      picture: 'foto/video (opțional)',
      selectName: 'Nume (afișat generic ca )',
      namePle: '(introduceți numele (public)',
      emailN: 'e-mail',
      emailPle: 'Introduceți adresa dvs. de e-mail (privată)',
      cancelRe: 'Anulează evaluarea',
      submitRe: 'Trimite recenzie',
      screenCreate: 'cel mai nou mai întâi',
      screenDesc: 'Cele mai bine evaluate',
      screenAsc: 'cel mai jos cotat',
      screenWith: 'Numai imagini',
      screenPic: 'În primul rând imaginile',
      screenVideo: 'Videoclipurile în primul rând',
      screenMost: 'Cel mai util',
      subReview: 'Recenzie trimisă',
      subComtent: 'Mulțumesc! Vă rugăm să reîmprospătați pagina în câteva momente pentru a vedea recenzia dvs.',

      commentResult: 'Nu există încă evaluări',
      based1: 'bazat pe ',
      based2: ' evaluări',
      seeAll: 'vezi toate recenziile',
      image5: 'Ne pare rău, putem accepta doar 5 imagini pentru o recenzie.',
      rightEmail: 'Vă rugăm să introduceți un e-mail valid',
      unknown: 'necunoscut',
      acticleList: ['Metode de plată', 'Livrare', 'Despre noi', 'Termeni și condiții', 'Retururi și schimburi', 'Politica de confidențialitate', 'Contactați-ne'],
      discountZone: 'zonă de reducere a magazinului',
      free7: 'Serviciu gratuit de schimb și rambursare în termen de șapte zile',
      deliver: 'Livrare gratuită',
      paying: 'Plată cu ramburs la livrare',
      orders: 'comenzi',
      thank: 'mulțumesc!',
      request: 'Solicitarea dvs. a fost confirmată',
      receive: 'Veți primi în curând un e-mail de confirmare care conține numărul comenzii dvs.',
      updateOrder: 'Comanda de actualizare',
      information: 'Veți primi informații actualizate de livrare și distribuție prin e-mail.',
      customer: 'informații despre client',
      contactInfo: 'informații de contact',
      delivery: 'adresa de livrare',
      payment: 'Metoda de plată',
      payReceipt: 'Plată la primire',
      invoice: 'Factură',
      keeyshop: 'Continuați Cumpărăturile',
      confirRequest: 'Confirmare cerere',
      recipientInfo: 'Informații despre destinatar',
      yourName: 'Numele complet',
      fullName: 'Numele complet',
      semail: 'E-mail',
      governor: 'Province',
      telephone: 'Telefon',

      district: 'Vă rugăm să selectați districtul dvs.',
      city: 'Oraș',
      selectCity: 'Vă rugăm să vă selectați orașul',
      zone: 'Regiune',
      zonePle: 'Exemplu: Olaya, Riyadh',
      building: 'Cladire',
      buildingPle: 'exemplu: vila 2 etaj 3',
      street: 'Stradă',
      streetPle: 'Exemplu: Strada Regelui Fahd',
      closest: 'Cel mai apropiat reper',
      closestPle: 'Exemplu: Turnul Regatului',
      phonepl1: 'număr de telefon mobil: 5xxxxxxxx',
      phonepl2: 'Număr WhatsApp: 5xxxxxxxx',
      comments: 'Mesaj',
      apply: 'Finalizați achiziția',
      method: 'Metoda de plată',
      recieving: 'Plată la primire',
      onlinePayment: 'Taxă de tranzacție redusă de 30 de riali pentru plata online.',
      Website: 'Livrare gratuită + Ramburs la livrare + Site de încredere',
      homepage: 'Ne străduim să vă oferim produse de înaltă calitate și servicii excelente, veți primi o notificare când produsul este livrat. Dacă aveți întrebări, vă rugăm să faceți clic pe "pictograma whatsapp" pe pagina de pornire',
      empty: 'câmpurile nu pot fi goale',
      correct: 'Vă rugăm să introduceți formularul corect',
      validnum: 'Introduceți un număr de telefon valid',
      noOpinion: 'Nici o părere',
      addressList: [
        {
          name: "Province",
          value: ""
        },
        {
          name: "Alba",
          value: "AB"
        }, {
          name: "Arad",
          value: "AR"
        }, {
          name: "Argeș",
          value: "AG"
        }, {
          name: "Bacău",
          value: "BC"
        }, {
          name: "Bihor",
          value: "BH"
        }, {
          name: "Bistrița-Năsăud",
          value: "BN"
        }, {
          name: "Botoșani",
          value: "BT"
        }, {
          name: "Brăila",
          value: "BR"
        }, {
          name: "Brașov",
          value: "BV"
        }, {
          name: "București",
          value: "B"
        }, {
          name: "Buzău",
          value: "BZ"
        }, {
          name: "Caraș-Severin",
          value: "CS"
        }, {
          name: "Cluj",
          value: "CJ"
        }, {
          name: "Constanța",
          value: "CT"
        }, {
          name: "Covasna",
          value: "CV"
        }, {
          name: "Călărași",
          value: "CL"
        }, {
          name: "Dolj",
          value: "DJ"
        }, {
          name: "Dâmbovița",
          value: "DB"
        }, {
          name: "Galați",
          value: "GL"
        }, {
          name: "Giurgiu",
          value: "GR"
        }, {
          name: "Gorj",
          value: "GJ"
        }, {
          name: "Harghita",
          value: "HR"
        }, {
          name: "Hunedoara",
          value: "HD"
        }, {
          name: "Ialomița",
          value: "IL"
        }, {
          name: "Iași",
          value: "IS"
        }, {
          name: "Ilfov",
          value: "IF"
        }, {
          name: "Maramureș",
          value: "MM"
        }, {
          name: "Mehedinți",
          value: "MH"
        }, {
          name: "Mureș",
          value: "MS"
        }, {
          name: "Neamț",
          value: "NT"
        }, {
          name: "Olt",
          value: "OT"
        }, {
          name: "Prahova",
          value: "PH"
        }, {
          name: "Sălaj",
          value: "SJ"
        }, {
          name: "Satu Mare",
          value: "SM"
        }, {
          name: "Sibiu",
          value: "SB"
        }, {
          name: "Suceava",
          value: "SV"
        }, {
          name: "Teleorman",
          value: "TR"
        }, {
          name: "Timiș",
          value: "TM"
        }, {
          name: "Tulcea",
          value: "TL"
        }, {
          name: "Vâlcea",
          value: "VL"
        }, {
          name: "Vaslui",
          value: "VS"
        }, {
          name: "Vrancea",
          value: "VN"
        }]
    }
  }
  return language[LType];
}
// var canUseDOM = !!(typeof window !== "undefined" && typeof window.document !== "undefined" && typeof window.localStorage !== "undefined");
// if (canUseDOM) {
//   // console.log(window.location)
// }

export function getShopAddress() {
  // return 'uniquehzts.myshopify.com';
  return 'newsmartdeal.myshopify.com';
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

export function getLanguage() {
  // let LType = 'EN'
  let LType = 'SA'
  let language = {
    EN: {
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
    },
    SA: {
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
    }
  }
  return language[LType];
}
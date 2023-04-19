export function getShopAddress() {
  return 'uniquehzts.myshopify.com';
  // return 'newsmartdeal.myshopify.com';
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
  const EN = {
    buy: 'Buy now',
    comTit: 'Customer Reviews',
    write: 'Write a review',
    sold: 'sold',
  }
  const SA = {
    buy: 'اشتر الآن',
    comTit: 'تقييمات العملاء',
    write: 'إلغاء التقييم',
    sold: 'تم البيع',
  }
  // return EN;
  return SA;
}
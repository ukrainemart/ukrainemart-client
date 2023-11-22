declare interface Product {
  id: number;
  title_ua: string;
  company_id: number;
  company?: Company; // REVIEW
  description_ua: string;
  priority: any;
  views: any;
  created_at: string;
  updated_at: string;
  title_en: string;
  description_en: string;
  price_type: PriceProduct['type'];
  category_id: number;
  prices: PriceProduct['price'][];
  images?: ImageProduct[];
  main_image?: ImageProduct;
}

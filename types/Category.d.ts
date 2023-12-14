declare interface Category {
  created_at: string;
  creator_id: string;
  id: number;
  image: any;
  logo: any;
  main_category: Category;
  parent_category: Category;
  priority: any;
  product_create: number;
  status: number;
  title_en: string;
  title_ua: string;
  updated_at: string;
  breadcrumb: Breadcrumb;
  same_categories: SameCategories[];
  min_price: number;
  max_price: number;
  products_count: number;
}

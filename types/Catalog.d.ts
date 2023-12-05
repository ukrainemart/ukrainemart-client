declare interface Catalog {
  children: Catalog[];
  created_at: string;
  creator_id: number | null;
  description: string | null;
  id: number;
  image: string | null;
  logo: string | null;
  main_category: string | null;
  parent_category: number;
  priority: number | null;
  product_create: number;
  status: number;
  title_en: string;
  title_ua: string;
  updated_at: string;
}

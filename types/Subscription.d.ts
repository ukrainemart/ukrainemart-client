declare interface Subscription {
  count_dates: number;
  created_at: string;
  date_type: string;
  features: {
    created_at: string;
    id: number;
    plan_id: number;
    title_en: string;
    title_ua: string;
    updated_at: string;
  }[];
  id: number;
  plan_key: string;
  price: number;
  status: number;
  title_en: string;
  title_ua: string;
  updated_at: string;
}

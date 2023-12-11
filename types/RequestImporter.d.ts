declare interface RequestImporter {
  title: string;
  category: Category;
  description:string;
  country: Country;
  company: Company;
  // date_from: string;
  // date_before: string;
  // date_type: string;
  company_requests: Request[];
  same_category: Request[];
  count: number;
  count_type: string;
  active_before: string;
  id: number;
  created_at: string;
}

declare interface Company {
  id: number,
  category_id: number;
  title: string,
  user_id:number,
  email: string,
  phone: string,
  description: string,
  status: '0' | '1' | '-1' | null,
  created_at: string,
  updated_at: string,
  legal_code: number,
  type: CompanyType
}

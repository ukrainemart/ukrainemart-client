declare interface User {
  id: number;
  name: string;
  email: string;
  phone: any;
  type_user: any;
  status: any;
  email_verified_at: string;
  created_at:string;
  updated_at: string;
  google_id: any;
  last_name;
  company: {
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
  },
}

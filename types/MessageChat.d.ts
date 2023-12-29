declare interface MessageChat {
  chat_id: number;
  company_id: number | null;
  content: string;
  created_at: string;
  id: number;
  is_read: number;
  updated_at: string;
  user_id: number;
  request?: RequestImporter;
  product?: Product;
  type: 'text' | 'file' | 'image' | 'product' | 'request';
}

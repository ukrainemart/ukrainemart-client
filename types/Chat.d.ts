declare interface Chat {
  user_id: string;
  product_id: string;
  id: number;
  company_id: any;
  created_at: any;
  updated_at: Category;
  company: Company;
  user: User;
  last_message: MessageChat;
  product: Product;
  not_readable_messages_count: number;
  messages: MessageChat[];
  companion: User[];
}

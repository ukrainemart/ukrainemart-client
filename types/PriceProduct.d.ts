declare interface PriceProduct {
  type: 'variated' | 'fixed' | '';
  fixedPrice: {
    amount: string;
    price: string;
    unitId: any;
  };
  variatedPrice: {
    id?: number;
    minAmount: string;
    maxAmount: string;
    price: string;
    unitId: any;
  };

  price: {
    id: number;
    product_id: number;
    min_amount: number;
    max_amount: number;
    price: number;
    unit: {
      id: number;
      title_ua: string;
      title_en: string;
      created_at: string;
      updated_at: string;
    };
    unit_id: any;
    created_at: string;
    updated_at: string;
  };
}

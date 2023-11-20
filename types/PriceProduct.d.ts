declare interface PriceProduct {
  type: "variated" | "fixed" | '';
  fixedPrice: {
    amount: string;
    price: string;
    unitId: any;
  }
  variatedPrice: {
    id: number;
    minAmount: string;
    maxAmount: string;
    price: string;
    unitId: any;
  }

  price:{
      id: number;
      product_id: number;
      min_amount: number;
      max_amount: null;
      price: number;
      unit_id: number;
      created_at: string;
      updated_at: string;
  }
}

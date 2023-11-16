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
}

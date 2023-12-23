declare interface InputsCreateProduct {
  titleUa: string;
  titleEn: string;
  descriptionUa: string;
  descriptionEn:  string;
  categoryId:  string;
  priceType: PriceProduct['type'];
  fixedPrice: PriceProduct['fixedPrice'] ,
  variatedPrices:  PriceProduct['variatedPrice'][] | [],
  productImages: any[] | [],
  unitId: any;
  sections: any;
  certificates: any[] | []
}

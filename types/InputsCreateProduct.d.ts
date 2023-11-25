declare interface InputsCreateProduct {
  titleUa: string;
  titleEn: string;
  descriptionUa: string;
  descriptionEn:  string;
  categoryId:  string;
  priceType: string;
  fixedPrice?: PriceProduct['fixedPrice'] ,
  variatedPrices:  PriceProduct['variatedPrice'][] | [],
  productImages: any[],
}

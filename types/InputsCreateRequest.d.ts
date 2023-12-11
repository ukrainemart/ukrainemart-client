declare interface InputsCreateRequest {
  title: string;
  categoryId: number | null;
  description: string;
  country: string;
  // dateFrom: string,
  // dateBefore: string,
  // dataType: 'day' | 'month' | 'year' | '',
  count:  number | null;
  countType: string;
  activeBefore: string;
}

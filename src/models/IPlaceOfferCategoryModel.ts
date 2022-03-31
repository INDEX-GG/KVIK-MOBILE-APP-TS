export type PlaceOfferAdditionalFields = 'text_list' | 'number' | 'check_list';

export interface IPlaceOfferAdditionalFields {
  alias: string;
  title: string;
  type: string;
  default_value?: null | string | number;
}

export interface IPlaceOfferCategoryItem {
  name: string;
  alias: string;
  search_name?: string;
  additional_fields: [] | any[];
  children: [] | IPlaceOfferCategoryItem[];
}

export interface IPlaceOfferCategoryModel {
  category: IPlaceOfferCategoryItem[];
}

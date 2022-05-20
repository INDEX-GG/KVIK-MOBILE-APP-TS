// @ts-ignore
import { IAdditionalFieldsItem } from './IAdditionalFieldsModel';

export interface IPlaceOfferCategoryItem {
  name: string;
  alias: string;
  search_name?: string;
  additional_fields: [] | IAdditionalFieldsItem[];
  children: [] | IPlaceOfferCategoryItem[];
  title?: string[];
}

export interface IPlaceOfferCategoryModel {
  category: IPlaceOfferCategoryItem[];
}

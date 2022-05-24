export type PlaceOfferAdditionalFields =
  | 'text_list'
  | 'number'
  | 'check_list'
  | 'text';


export interface IAdditionalFieldsFetchJSON {
  alias: string;
  children?: IAdditionalFieldsFetchJSON[];
  name: string;
  value: string;
}

export interface ITextListAdditionalFields {
  text_list_search_type?: number;
  text_list_filter_type?: number;
  text_list_rendering_type?: number;
  text_list_values: string[];
  dependencies?: string[];
  json?: string;
}

export interface IAdditionalFieldsItem {
  alias: string;
  type: PlaceOfferAdditionalFields;
  title: string;
  dependencies?: string[];
  filter_title?: string;
  default_value?: null | string;
  required?: {
    state: boolean;
    value: string;
  };
}

export type ITextListUIProps = ITextListAdditionalFields &
  IAdditionalFieldsItem;

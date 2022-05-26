export type PlaceOfferAdditionalFields =
  | 'text_list'
  | 'number'
  | 'check_list'
  | 'text'
  | 'boolean'
  | 'period'
  | 'text_list_time';

export interface ILastJsonChildren {
  alias: string,
  name: string,
  value: string | string[],
}

export interface IAdditionalFieldsFetchJSON {
  alias: string;
  children?: IAdditionalFieldsFetchJSON[];
  name: string;
  value: string;
}

export interface ICheckListAdditionalFields {
  check_list_values: string[],
  filter_view: false,
  dependencies: string[],
}

export interface ITextNumberAdditionalFields {
  filter_render_type: number;
  filter_title: string;
  filter_type: string;
  number_max_value: number;
  number_min_value: number;
  number_rendering_type: number;
  number_step: {};
  number_unit_of_measure: string;
  number_version: 'int' | 'float';
  placeholder: ''
}

export interface ITextAdditionalFields {
  text_excludes_symbols: string[],
  text_includes_symbols: string[],
  text_max_len: number,
  text_min_len: number,
  view_product: boolean,
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

export type IPeriodUIProps = ICheckListUIProps

export type ITextListIsCheckList = {isCheckList?: boolean}
export type ITextListIsPeriod = {isPeriod?: boolean}
export type ITextListIsTime = {isTime?: boolean}

export type ICheckListUIProps = IAdditionalFieldsItem & ICheckListAdditionalFields

export type ITextNumberUIProps = IAdditionalFieldsItem & ITextNumberAdditionalFields

export type ITextListUIProps = ITextListAdditionalFields &
  IAdditionalFieldsItem & ITextListIsCheckList & ITextListIsPeriod & ITextListIsTime;

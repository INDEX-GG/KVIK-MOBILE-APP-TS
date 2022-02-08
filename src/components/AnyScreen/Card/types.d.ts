export interface DropDownItem {
  title: string;
  value: string;
}

export interface SortState {
  title: string;
  value: string;
  open: boolean;
}

export interface SortStateFunction {
  title?: string;
  value?: string;
  open?: boolean;
}

export interface SortListState {
  sortData: {
    sort: SortState;
    setSort: (sort: SortStateFunction) => () => void;
  };
  sortItems: DropDownItem[];
}

import { FunctionComponent } from 'react';
import { SvgProps } from 'react-native-svg';
import { StyleProp } from 'react-native';

interface ToggleListItem {
  id: number,
  Icon: FunctionComponent<SvgProps>;
  value: string;
}

export interface ToggleListIemComponentProps {
  styleArr: StyleProp<SvgProps>[];
  item: ToggleListItem;
  onPress: (item: ToggleListItem) => () => void;
  iconStyle: StyleProp<SvgProps>;
}

export interface ToggleListProps {
  listData: ToggleListItem[];
  activeElement: ToggleListItem;
  style: StyleProp<SvgProps>;
  activeStyle: StyleProp<SvgProps>;
  lastItemStyle: StyleProp<SvgProps>;
  iconStyle: StyleProp<SvgProps>;
  onPress: (item: ToggleListItem) => () => void;
}

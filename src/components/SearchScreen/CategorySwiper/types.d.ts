import { FunctionComponent } from 'react';
import { SvgProps } from 'react-native-svg';

export interface SearchScreenCategory {
  title: string;
  icon: FunctionComponent<SvgProps>;
}

export type CategorySwiperPress = (item: SearchScreenCategory) => () => void;

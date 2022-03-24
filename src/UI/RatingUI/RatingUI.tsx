import React, { FC, useMemo } from 'react';
import { AirbnbRating } from 'react-native-elements';
import { useRatingStylesUI } from './style';
import { View } from 'react-native';
import RobotoText from '../RobotoText';

interface IRatingUIProps {
  defaultRating: number | null;
  visibleCount?: boolean;
  isDisabled?: boolean;
  size?: number;
}

const RatingUI: FC<IRatingUIProps> = (props) => {
  const styles = useRatingStylesUI();

  const { defaultRating, visibleCount } = props;

  const isVisibleCount = useMemo(() => {
    return defaultRating && visibleCount;
  }, [defaultRating, visibleCount]);

  return (
    <View style={styles.container}>
      {isVisibleCount ? (
        <RobotoText weight="m" style={styles.count}>
          {defaultRating ? `${defaultRating}.0` : 0}
        </RobotoText>
      ) : null}
      <AirbnbRating
        size={20}
        {...props}
        starContainerStyle={styles.stars}
        selectedColor="#FFF6A5"
        defaultRating={defaultRating ? defaultRating : 0}
        showRating={false}
        count={5}
      />
    </View>
  );
};

export default React.memo(RatingUI);

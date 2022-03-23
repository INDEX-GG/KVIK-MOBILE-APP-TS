import React, { FC } from 'react';
import { TouchableOpacity, View } from 'react-native';
import { useProfileModalStyles } from './style';
import RobotoText from '../../../UI/RobotoText';
import { wordAutoEnding } from '../../../services/services';

interface IProfileModalProps {
  rating: number;
  subscribers: number;
  subscription: number;
}

const ProfileModal: FC<IProfileModalProps> = ({
  rating,
  subscribers,
  subscription,
}) => {
  const styles = useProfileModalStyles();

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.item}>
        <RobotoText weight="m" style={styles.text}>
          {rating}{' '}
          {wordAutoEnding(
            'отзыв',
            rating,
            ['ов', '', 'а', 'ов'],
            [0, 1, 2, 5],
            true
          )}
        </RobotoText>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.item, styles.centerItem]}>
        <RobotoText weight="m" style={styles.text}>
          {subscribers}{' '}
          {wordAutoEnding(
            'подписчик',
            subscribers,
            ['ов', '', 'а', 'ов'],
            [0, 1, 2, 5],
            true
          )}
        </RobotoText>
      </TouchableOpacity>
      <TouchableOpacity style={styles.item}>
        <RobotoText weight="m" style={styles.text}>
          {subscription}{' '}
          {wordAutoEnding(
            'подпис',
            subscription,
            ['ок', 'ка', 'ки', 'ок'],
            [0, 1, 2, 5],
            true
          )}
        </RobotoText>
      </TouchableOpacity>
    </View>
  );
};

export default React.memo(ProfileModal);

import React, { FC } from 'react';
import { View } from 'react-native';
import { useProfileUserStyles } from './style';
import AvatarUI from '../../../UI/AvatarUI/AvatarUI';
import RobotoText from '../../../UI/RobotoText';
import { ToRusAccountDate } from '../../../services/services';
import RatingUI from '../../../UI/RatingUI/RatingUI';
import ProfileModal from '../ProfileModal/ProfileModal';

interface IProfileUser {
  name: string;
  photo: string | null;
  rating: number | null;
  subscribers: number;
  subscription: number;
  createdAt: string;
}

const ProfileUser: FC<IProfileUser> = ({
  name,
  photo,
  rating,
  createdAt,
  subscribers,
  subscription,
}) => {
  const styles = useProfileUserStyles();

  return (
    <View style={styles.container}>
      <AvatarUI userPhoto={photo} title={name} />
      <RobotoText weight="m" style={styles.name}>
        {name}
      </RobotoText>
      <RobotoText weight="r" style={styles.date}>
        на Kvik с {ToRusAccountDate(createdAt)}
      </RobotoText>
      <RatingUI visibleCount={true} defaultRating={rating} isDisabled={true} />
      <View>
        <ProfileModal
          rating={rating ? rating : 0}
          subscribers={subscribers}
          subscription={subscription}
        />
      </View>
    </View>
  );
};

export default React.memo(ProfileUser);

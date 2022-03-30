import React, { FC, useMemo } from 'react';
import { Avatar } from 'react-native-elements';
import { stringToColor } from '../../services/services';
import { IMAGE_SERVER } from '../../constants/constants';

interface IAvatarUIProps {
  title: string;
  size?: number;
  userPhoto: string | null;
}

const AvatarUI: FC<IAvatarUIProps> = (props) => {
  const { title, userPhoto } = props;

  const containerStyle = useMemo(
    () => ({
      backgroundColor: stringToColor(title ? title : ''),
    }),
    [title]
  );

  const avatarTitle = useMemo(() => {
    if (title) {
      return title.split(' ')[0].split('')[0];
    }
    return '';
  }, [title]);

  const avatarImage = useMemo(() => {
    return userPhoto ? { uri: `${IMAGE_SERVER}/${userPhoto}` } : '';
  }, [userPhoto]);

  return (
    <Avatar
      size={80}
      {...props}
      source={avatarImage as {}}
      title={avatarTitle}
      containerStyle={containerStyle}
      rounded
    />
  );
};

export default React.memo(AvatarUI);

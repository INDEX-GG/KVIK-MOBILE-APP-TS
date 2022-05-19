import React, { FC } from 'react';
import { View, Text } from 'react-native';
import { useTextListItemStyles } from './style';

interface ITextListUIItemProps {
  title: string;
  value: string;
  onChange: (state: string) => void;
}

const TextListItem: FC<ITextListUIItemProps> = ({
  title,
  value,
  onChange,
}) => {
  return (
    <View style={styles.container}>
      <Text>{title}</Text>
    </View>
  );
};

const styles = useTextListItemStyles();

export default React.memo(TextListItem);

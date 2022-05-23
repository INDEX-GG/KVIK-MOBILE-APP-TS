import React from 'react';
import { View } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { useTextListSearchStyles } from './style';

const TextListSearch = () => {

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholderTextColor={styles.placeholderTextColor.color}
        placeholder='Категория'
      />
    </View>
  );
};

const styles = useTextListSearchStyles();

export default React.memo(TextListSearch);

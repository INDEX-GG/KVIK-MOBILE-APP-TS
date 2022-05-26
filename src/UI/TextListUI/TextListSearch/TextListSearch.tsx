import React, { FC } from 'react';
import { View } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { useTextListSearchStyles } from './style';
import GlassIcon from '../../../assets/GlassIcon.svg';

interface ITextListSearchProps {
  value: string;
  handleChangeText: (text: string) => void;
}

const TextListSearch: FC<ITextListSearchProps> = ({value, handleChangeText}) => {
  const styles = useTextListSearchStyles();

  return (
    <View style={styles.container}>
      <View style={styles.icon}>
        <GlassIcon/>
      </View>
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={handleChangeText}
        placeholderTextColor={styles.placeholderTextColor.color}
        placeholder="Категория"
      />
    </View>
  );
};


export default React.memo(TextListSearch);

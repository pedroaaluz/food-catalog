import {styles} from './styles';
import {View, Text} from 'react-native';
import React from 'react';

export const Loading = (): JSX.Element => {
  return (
    <View style={styles.loadingBody}>
      <Text style={styles.loadingText}>Carregando...</Text>
    </View>
  );
};

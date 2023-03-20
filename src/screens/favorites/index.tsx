import React from 'react';
import {View, Button, Text} from 'react-native';
import {styles} from './styles';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import type {TabParamsList} from '../../types/rootStackParamListType';

const Favorites = ({
  navigation,
}: NativeStackScreenProps<TabParamsList, 'Favorites'>): JSX.Element => (
  <View style={styles.body}>
    <Text>Favorites</Text>
    <Button
      title="Ir para Catalog"
      onPress={() => navigation.navigate('Catalog')}
    />
  </View>
);

export default Favorites;

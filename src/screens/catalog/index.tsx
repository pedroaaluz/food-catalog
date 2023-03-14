import React from 'react';
import {View, Button, Text} from 'react-native';
import {styles} from './styles';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import type {RootStackParamList} from '../../types/rootStackParamListType';

const Catalog = ({
  navigation,
}: NativeStackScreenProps<RootStackParamList, 'Catalog'>): JSX.Element => (
  <View style={styles.body}>
    <Text>Catalog</Text>
    <Button
      title="Ir para Favorites"
      onPress={() => navigation.navigate('Favorites')}
    />
  </View>
);

Catalog.navigationOptions = {
  title: 'Catalog',
};

export default Catalog;

import React from 'react';
import {
  View,
  Text,
  ListRenderItemInfo,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {styles} from './styles';
import {FlatList} from 'react-native-gesture-handler';
import FeatherIcon from 'react-native-vector-icons/Feather';

import {useQuery} from 'react-query';
import {recipes} from '../../utils/recipes';
import {Loading} from '../../components/loading';
import type {StackParamsList} from '../../types/rootStackParamListType';
import type {RecipeInterface} from '../../types/recipeInterface';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';

const Catalog = ({
  navigation,
}: NativeStackScreenProps<StackParamsList, 'Description'>): JSX.Element => {
  const {data, isLoading} = useQuery('list-recipes', recipes.get);

  const renderItem = ({item}: ListRenderItemInfo<RecipeInterface>) => {
    return (
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Description', {
            ...item,
          });
        }}>
        <View style={styles.cardBody}>
          <Image source={{uri: item.image}} style={styles.cardImage} />
          <View style={styles.cardBodyText}>
            <Text style={styles.cardText}>{item.name}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.body}>
      <View>
        <View style={styles.inputTextView}>
          <FeatherIcon name={'search'} size={20} color={'#fff'} />
          <TextInput style={styles.inputText} />
        </View>
      </View>
      {isLoading ? (
        <Loading />
      ) : (
        <FlatList
          keyExtractor={item => item.id}
          style={styles.flatList}
          renderItem={renderItem}
          data={data}
        />
      )}
    </View>
  );
};

export default Catalog;

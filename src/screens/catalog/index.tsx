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

const Catalog = (): JSX.Element => {
  const {data, isLoading} = useQuery('list-recipes', recipes.get);

  const renderItem = ({item}: ListRenderItemInfo<any>) => {
    return (
      <TouchableOpacity>
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

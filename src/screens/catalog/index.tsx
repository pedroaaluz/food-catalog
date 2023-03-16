import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  ListRenderItemInfo,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {styles} from './styles';
import axios from 'axios';
import {FlatList} from 'react-native-gesture-handler';
import FeatherIcon from 'react-native-vector-icons/Feather';

const Catalog = (/* {
  navigation,
}: NativeStackScreenProps<RootStackParamList, 'Catalog'> */): JSX.Element => {
  const [recipes, setRecipes] = useState([]);

  // Get Foods
  useEffect(() => {
    axios
      .get('http://192.168.100.40:3000/recipes', {
        headers: {
          Accept: 'application/json',
          'content-Type': 'application/json',
        },
      })
      .then((response: any) => {
        setRecipes(response.data);
      })
      .catch(error => {
        console.error(error);
        throw new Error(error);
      });
  }, []);

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
      <FlatList
        keyExtractor={item => item.id}
        style={styles.flatList}
        renderItem={renderItem}
        data={recipes}
      />
    </View>
  );
};

export default Catalog;

/* eslint-disable react/no-unstable-nested-components */
import Catalog from './screens/catalog';
import Favorites from './screens/favorites';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {RootStackParamList} from './types/rootStackParamListType';
import Icon from 'react-native-vector-icons/Feather';
import type {} from '@react-navigation/native-stack';

const Tab = createBottomTabNavigator<RootStackParamList>();
// RouteProp<RootStackParamList, keyof RootStackParamList>

export const Routes = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Catalog"
          component={Catalog}
          options={{
            headerShown: false,
            tabBarIcon: ({color}) => (
              <Icon name="book" size={30} color="#900" />
            ),
          }}
        />
        <Tab.Screen
          name="Favorites"
          component={Favorites}
          options={{
            headerShown: false,
            tabBarIcon: ({color}) => (
              <Icon name="book" size={30} color="#900" />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

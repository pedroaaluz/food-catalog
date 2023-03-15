/* eslint-disable react/no-unstable-nested-components */
import Catalog from './screens/catalog';
import Favorites from './screens/favorites';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {RootStackParamList} from './types/rootStackParamListType';
import FeatherIcon from 'react-native-vector-icons/Feather';
import type {} from '@react-navigation/native-stack';

const Tab = createBottomTabNavigator<RootStackParamList>();
// RouteProp<RootStackParamList, keyof RootStackParamList>

const iconsFocused = {
  Catalog: 'book-open',
  Favorites: 'star',
};

const iconsNoFocused = {
  Catalog: 'book',
  Favorites: 'star',
};

export const Routes = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            const iconName = focused
              ? iconsFocused[route.name]
              : iconsNoFocused[route.name];

            // You can return any component that you like here!
            return <FeatherIcon name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#3f72af',
          tabBarInactiveTintColor: 'gray',
          headerShown: false,
          tabBarAllowFontScaling: true,
          tabBarShowLabel: false,
        })}>
        <Tab.Screen name="Catalog" component={Catalog} />
        <Tab.Screen name="Favorites" component={Favorites} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

/* eslint-disable react/no-unstable-nested-components */
import Catalog from './screens/catalog';
import Favorites from './screens/favorites';
import Description from './screens/description';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {StackParamsList, TabParamsList} from './types/rootStackParamListType';
import FeatherIcon from 'react-native-vector-icons/Feather';

const Tab = createBottomTabNavigator<TabParamsList>();
// RouteProp<RootStackParamList, keyof RootStackParamList>

const TabsStack = () => {
  const iconsFocused = {
    Catalog: 'book-open',
    Favorites: 'star',
  };

  const iconsNoFocused = {
    Catalog: 'book',
    Favorites: 'star',
  };

  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          const iconName = focused
            ? iconsFocused[route.name]
            : iconsNoFocused[route.name];

          return <FeatherIcon name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#11999e',
        tabBarInactiveTintColor: 'gray',
        headerShown: false,
        tabBarAllowFontScaling: true,
      })}>
      {/* @ts-ignore i need read more about it*/}
      <Tab.Screen name="Catalog" component={Catalog} />
      <Tab.Screen name="Favorites" component={Favorites} />
    </Tab.Navigator>
  );
};

const Stack = createNativeStackNavigator<StackParamsList>();

export const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Tabs"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="Tabs" component={TabsStack} />
        <Stack.Screen name="Description" component={Description} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

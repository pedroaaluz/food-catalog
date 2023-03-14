import Catalog from './screens/catalog';
import Favorites from './screens/favorites';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {RootStackParamList} from './types/rootStackParamListType';

const Tab = createBottomTabNavigator<RootStackParamList>();

export const Routes = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Catalog"
          component={Catalog}
          options={{title: 'Catalogo'}}
        />
        <Tab.Screen
          name="Favorites"
          component={Favorites}
          options={{title: 'Favoritos'}}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

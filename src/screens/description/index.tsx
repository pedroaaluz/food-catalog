import React, {useState} from 'react';
import {View, Text, ImageBackground, TouchableOpacity} from 'react-native';
import {styles} from './styles';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import type {StackParamsList} from '../../types/rootStackParamListType';
import {ScrollView} from 'react-native-gesture-handler';
import {IngredientCheck} from '../../components/ingredientCheck';
import {StepRecipe} from '../../components/stepRecipe';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import {recipesHttp} from '../../utils/recipes';
import {useMutation, useQueryClient} from 'react-query';

const Description = ({
  route,
}: NativeStackScreenProps<StackParamsList, 'Description'>): JSX.Element => {
  const {image, name, ingredients, steps, id, favorites} = route.params;

  const queryClient = useQueryClient();

  const {mutate} = useMutation(() => recipesHttp.update(!favorites, id), {
    onSuccess: () => queryClient.invalidateQueries('list-recipes-favorites'),
  });

  const color = favorites ? '#f9ed69' : '#fff';
  const iconName = favorites ? 'star' : 'star-o';

  return (
    <ScrollView>
      <View style={styles.container}>
        <ImageBackground source={{uri: image}} style={{height: 300}}>
          <View style={styles.imageHeaderContainer}>
            <Text style={styles.imageHeaderText}>{name}</Text>

            <TouchableOpacity
              style={styles.buttonPosition}
              onPress={() => {
                mutate();
              }}>
              <FontAwesomeIcon name={iconName} size={22} color={color} />
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </View>
      <View style={styles.ingredientsSection}>
        <Text style={styles.ingredientsHeader}>Ingredients:</Text>
        <View style={styles.ingredientsList}>
          {ingredients?.map((ingredient, index) => {
            return <IngredientCheck ingredient={ingredient} key={index} />;
          })}
        </View>
      </View>
      <View style={styles.stepsSection}>
        <Text style={styles.stepsHeader}>Step by Step:</Text>
        {steps.map((step, index) => {
          return (
            <StepRecipe
              key={index}
              index={index}
              description={step.description}
            />
          );
        })}
      </View>
    </ScrollView>
  );
};

export default Description;

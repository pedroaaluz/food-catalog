import React from 'react';
import {View, Text, ImageBackground} from 'react-native';
import {styles} from './styles';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import type {StackParamsList} from '../../types/rootStackParamListType';
import {ScrollView} from 'react-native-gesture-handler';
import {IngredientCheck} from '../../components/ingredientCheck';
import {StepRecipe} from '../../components/stepRecipe';

const Description = ({
  route,
}: NativeStackScreenProps<StackParamsList, 'Description'>): JSX.Element => {
  const {image, name, ingredients, steps} = route.params;

  return (
    <ScrollView>
      <View style={styles.container}>
        <ImageBackground source={{uri: image}} style={{height: 300}}>
          <View style={styles.imageHeaderContainer}>
            <Text style={styles.imageHeaderText}>{name}</Text>
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

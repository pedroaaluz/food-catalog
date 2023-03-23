import React from 'react';
import {View, Text} from 'react-native';
import {styles} from './styles';

interface StepRecipeInterface {
  description: string;
  index: number;
}

export const StepRecipe = ({
  description,
  index,
}: StepRecipeInterface): JSX.Element => {
  return (
    <>
      <View style={styles.stepContainer}>
        <Text style={styles.stepNumber}>{index + 1}</Text>
        <Text style={styles.stepDescription}>{description}</Text>
      </View>
    </>
  );
};

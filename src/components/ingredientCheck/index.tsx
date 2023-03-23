import React, {useState} from 'react';
import {View, Text} from 'react-native';
import {styles} from './styles';
import CheckBox from '@react-native-community/checkbox';
import {IngredientInterface} from '../../types/recipeInterface';

interface IngredientCheckInterface {
  ingredient: IngredientInterface;
}

export const IngredientCheck = ({
  ingredient,
}: IngredientCheckInterface): JSX.Element => {
  const [toggleCheckBox, setToggleCheckBox] = useState<boolean>(false);

  return (
    <>
      <View style={styles.checkboxContainer}>
        <CheckBox
          value={toggleCheckBox}
          onValueChange={newValue => setToggleCheckBox(newValue)}
          style={styles.checkbox}
          tintColors={{true: '#11999e'}}
        />
        <Text style={styles.label}>{`${ingredient.name} ${
          ingredient.amount || ''
        } ${ingredient.unit || ''}`}</Text>
      </View>
    </>
  );
};

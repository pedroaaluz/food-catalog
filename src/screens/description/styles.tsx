import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttonPosition: {
    position: 'absolute',
    top: 20,
    right: 20,
  },
  imageHeaderContainer: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageHeaderText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    marginTop: 10,
  },
  ingredientsSection: {
    padding: 20,
    flex: 1,
  },
  ingredientsHeader: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    marginVertical: 10,
  },
  ingredientsList: {flex: 1, marginTop: 10},
  stepsSection: {paddingHorizontal: 20, flex: 1, marginBottom: 40},
  stepsHeader: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    marginVertical: 10,
  },
});

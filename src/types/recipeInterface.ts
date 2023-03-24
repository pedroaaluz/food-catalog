export interface DescriptionInterface {
  description: string;
}

export interface IngredientInterface {
  amount: string;
  unit: string;
  name: string;
}

interface IngredientGroupType {
  name: string;
  ingredient: IngredientInterface[];
}

export interface RecipeInterface {
  favorites: boolean;
  image: string;
  name: string;
  id: string;
  description: string;
  tag?: string[];
  ingredients?: IngredientInterface[];
  steps: DescriptionInterface[];
  forked: string;
  ingredientGroup?: IngredientGroupType[];
}

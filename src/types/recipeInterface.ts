interface DescriptionInterface {
  description: string;
}

interface IngredientInterface {
  amount: string;
  unit: string;
  name: string;
}

interface IngredientGroupType {
  name: string;
  ingredient: IngredientInterface[];
}

export interface RecipeInterface {
  image: string;
  name: string;
  id: string;
  description: string;
  tag?: string[];
  ingredient?: string[];
  step: DescriptionInterface[];
  forked: string;
  ingredientGroup: IngredientGroupType[];
}

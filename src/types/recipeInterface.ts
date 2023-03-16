type DescriptionType = {
  description: string;
};

interface IngredientGroupType {
  name: string;
  ingredient: {
    amount: string;
    unit: string;
    name: string;
  }[];
}

export interface RecipeInterface {
  image: string;
  name: string;
  id: string;
  description: string;
  tag?: string[];
  ingredient?: string[];
  step: DescriptionType[];
  forked: string;
  ingredientGroup: IngredientGroupType[];
}

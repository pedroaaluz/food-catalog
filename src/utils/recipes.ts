import axios from 'axios';

const url = 'http://192.168.100.40:3000/recipes';

const getRecipes = async () => {
  const {data} = await axios.get(url, {
    headers: {
      Accept: 'application/json',
      'content-Type': 'application/json',
    },
  });

  return data;
};

const getRecipesFavorites = async () => {
  const {data} = await axios.get(url, {
    headers: {
      Accept: 'application/json',
      'content-Type': 'application/json',
    },
    params: {
      favorites: true,
    },
  });

  return data;
};

const updateRecipes = async (favorites: boolean, id: string) => {
  const {data} = await axios.patch(`${url}/${id}`, {
    favorites,
  });

  return data;
};

export const recipesHttp = {
  get: getRecipes,
  getFavorites: getRecipesFavorites,
  update: updateRecipes,
  delete: {},
  post: {},
};

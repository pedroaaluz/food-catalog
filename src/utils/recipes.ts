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

export const recipes = {
  get: getRecipes,
  update: {},
  delete: {},
  post: {},
};

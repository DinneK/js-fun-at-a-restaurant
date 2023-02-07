const nameMenuItem = (menuItemName) => {
  return `Delicious ${menuItemName}`;
};

const createMenuItem = (name, price, type) => {
  const menuItem = {
    name,
    price,
    type,
  };
  return menuItem;
};

const addIngredients = (ingredient, ingredients) => {
  if (ingredients.includes(ingredient)) {
    return ingredients.length;
  } else {
    ingredients.push(ingredient);
  }
};

const formatPrice = (price) => {
  return `$${price}`;
};

const decreasePrice = (price) => {
  const newPrice = price - price * 0.1;
  return newPrice;
};

const createRecipe = (title, ingredients, type) => {
  const recipe = {
    title,
    ingredients,
    type,
  };
  return recipe;
};

module.exports = {
  nameMenuItem,
  createMenuItem,
  addIngredients,
  formatPrice,
  decreasePrice,
  createRecipe,
};

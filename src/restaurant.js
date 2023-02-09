const createRestaurant = (name) => {
  const restaurant = {
    name,
    menus: {
      breakfast: [],
      lunch: [],
      dinner: [],
    },
  };
  return restaurant;
};

const addMenuItem = (restaurant, item) => {
  // console.log("restaurants", restaurant.menus[item.type]);
  // console.log("item", item.type);

  if (item.type === "breakfast" && !restaurant.menus.breakfast.includes(item)) {
    return restaurant.menus.breakfast.push(item);
  }
  if (item.type === "lunch" && !restaurant.menus.lunch.includes(item)) {
    return restaurant.menus.lunch.push(item);
  }
  if (item.type === "dinner" && !restaurant.menus.dinner.includes(item)) {
    return restaurant.menus.dinner.push(item);
  }
};

const removeMenuItem = (menus, item, time) => {
  if (menus.menus[time].length === 0) {
    return `Sorry, we don't sell ${item}, try adding a new recipe!`;
  }
  if (menus.menus[time][0].type === time) {
    menus.menus[time].splice(0, 1);
    return `No one is eating our ${item} - it has been removed from the ${time} menu!`;
  }
};

module.exports = {
  createRestaurant,
  addMenuItem,
  removeMenuItem,
};

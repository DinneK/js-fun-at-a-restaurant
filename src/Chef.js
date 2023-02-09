class Chef {
  constructor(name, restaurant) {
    this.name = name;
    this.restaurant = restaurant;
  }

  greetCustomer = (name, morning) => {
    if (morning) {
      return `Good morning, ${name}!`;
    }
    return `Hello, ${name}!`;
  };

  checkForFood = (food) => {
    if (!this.restaurant.menus[food.type].length) {
      return `Sorry, we aren't serving ${food.name} today.`;
    } else {
      return `Yes, we're serving ${food.name} today!`;
    }
  };
}

module.exports = Chef;

const takeOrder = (order, deliveryOrders) => {
  if (deliveryOrders.length < 3) {
    deliveryOrders.push(order);
  }
};

const refundOrder = (num, deliveryOrders) => {
  deliveryOrders.forEach((order, idx) => {
    if (order.orderNumber === num) {
      deliveryOrders.splice(idx, 1);
    }
  });
  return deliveryOrders;
};

const listItems = (deliveryOrders) => {
  return deliveryOrders
    .map((order) => order.item)
    .toString()
    .split(",")
    .join(", ");
};

const searchOrder = (deliveryOrders, itemName) => {
  return deliveryOrders.some((order) => order.item === itemName);
};

module.exports = {
  takeOrder,
  refundOrder,
  listItems,
  searchOrder,
};

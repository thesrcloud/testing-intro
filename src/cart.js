function notImplemented() {
  throw new Error("Корзина ещё не реализована. Сначала прочитайте тесты.");
}

function addToCart(arr, product, quantity) {
  if (quantity <= product.stock && quantity != 0) {
    if (arr.length != 0) {
      arr.forEach((item) => {
        if ((item.name = product.name)) item.quantity += quantity;
      });

      return arr;
    }
    product.quantity = quantity;
  } else {
    throw new RangeError("Значение вне допустимого диапазона!");
  }
  arr.push({ ...product });
  return arr;
}
function changeQuantity(array, id, quantity) {
  id -= 1;
  if (array[id] != undefined) {
    if (quantity <= array[id].stock && quantity != 0) {
      array[id].quantity = quantity;
      return array;
    } else {
      throw new RangeError("Значение вне допустимого диапазона!");
    }
  }

  return array;
}
function removeFromCart(array, id) {
  id -= 1;
  array.splice(id, 1)
  return array;
}
function calculateCartSubtotal(array, quantity) {
  let sum = 0;
  array.forEach(item => {
    sum += item.price * item.quantity;
  });

  return sum;
}
function calculateOrderTotal(array, promocode = null) {
  let price = {subtotal: 0, discount: 0, delivery: 0, total: 0};
  price.subtotal = calculateCartSubtotal(array, array[0].quantity);

  if(price.subtotal >= 50000) {
    price.delivery = 0;
  } else {
    price.delivery = 30000
  }

  if((promocode == 'SAVE10' && price.subtotal >= 20000) || (promocode == null && price.subtotal >= 20000)) {
    price.discount = price.subtotal / 10;
  } else {
    price.discount = 0;
  }

  price.total = price.subtotal + price.delivery - price.discount;

  return price;
}

const cartApi = {
  addToCart,
  changeQuantity,
  removeFromCart,
  calculateCartSubtotal,
  calculateOrderTotal,
};

if (typeof module !== "undefined") module.exports = cartApi;
if (typeof window !== "undefined") window.cartApi = cartApi;

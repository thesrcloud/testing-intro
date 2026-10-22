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
function calculateOrderTotal() {
  return notImplemented();
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

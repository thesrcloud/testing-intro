const products = require('../../src/data/products');
const { sortProductsByPrice } = require('../../src/catalog');

describe('sortProductsByPrice', () => {
  test("все товары c 'asc' сортируются как [3, 6, 5, 4, 2, 1]", () => {
    expect(sortProductsByPrice(products, 'asc').map(item => item.id)).toEqual([3, 6, 5, 4, 2, 1]);
  });

  test('все товары без направления сортируются как [3, 6, 5, 4, 2, 1]', () => {
    expect(sortProductsByPrice(products).map(item => item.id)).toEqual([3, 6, 5, 4, 2, 1]);
  });

  test("товары [1, 3, 4] c 'asc' сортируются как [3, 4, 1]", () => {
    const currentIDs = products.filter(item => [1, 3, 4].includes(item.id));
    expect(sortProductsByPrice(currentIDs, 'asc').map(item => item.id)).toEqual([3, 4, 1]);
  });

  test("все товары c 'desc' сортируются как [1, 2, 4, 5, 6, 3]", () => {
    expect(sortProductsByPrice(products, 'desc').map(item => item.id)).toEqual([1, 2, 4, 5, 6, 3]);
  });

  test("товары [3, 1, 4] c 'desc' сортируются как [1, 4, 3]", () => {
    const currentIDs = products.filter(item => [3, 1, 4].includes(item.id))
    expect(sortProductsByPrice(currentIDs, 'desc').map(item => item.id)).toEqual([1, 4, 3]);
  });

  test("товары [5, 2, 6] c 'desc' сортируются как [2, 5, 6]", () => {
    const currentIDs = products.filter(item => [5, 2, 6].includes(item.id));
    expect(sortProductsByPrice(currentIDs, 'desc').map(item => item.id)).toEqual([2, 5, 6]);
  });

  test("'asc' не меняет исходный массив [1, 3, 4]", () => {
    const request = [1, 3, 4];
    const selectedItems = request.map((id) => products.find((p) => p.id === id));
    sortProductsByPrice(selectedItems, 'asc');
    expect(selectedItems.map(item => item.id)).toEqual(request);
  });

  test("'desc' не меняет исходный массив [1, 3, 4]", () => {
    const request = [1, 3, 4];
    const selectedItems = request.map((id) => products.find((p) => p.id === id));
    sortProductsByPrice(selectedItems, 'desc');
    expect(selectedItems.map(item => item.id)).toEqual(request);
  });

  test('направление по умолчанию не меняет исходный массив всех товаров', () => {
    const request = products.map(item => item.id);
    const selectedItems = [...products];
    sortProductsByPrice(selectedItems);
    expect(selectedItems.map(item => item.id)).toEqual(request);
  });
});
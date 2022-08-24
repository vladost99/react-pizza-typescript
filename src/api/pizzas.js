export const getPizzas = (categoryId, sortObj) => {
  return fetch(
    `https://63029038c6dda4f287bb89a0.mockapi.io/api/items?${
      categoryId > 0 ? `category=${categoryId}` : ""
    }&sortBy=${sortObj.sortProperty}&order=desc`
  );
};

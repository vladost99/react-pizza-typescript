export const getPizzas = (categoryId, sortType, searchValue, currentPage) => {

  const sortBy = sortType.sortProperty.replace('-', '');
  const order = 'desc';
  const category = categoryId > 0 ? `category=${categoryId}` : '';
  const search = searchValue ? `&search=${searchValue}` : '';
  const page = `page=${currentPage}`

  return fetch(`https://63029038c6dda4f287bb89a0.mockapi.io/api/items?${page}&limit=4&${category}&sortBy=${sortBy}&order=${order}${search}`);
};


export const getPizza = id => {
  return fetch(`https://63029038c6dda4f287bb89a0.mockapi.io/api/items/${id}`).then(res => res.json());
}

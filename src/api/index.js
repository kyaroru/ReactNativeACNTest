import api from './helper';
import qs from 'qs';

export default {
  products: data =>
    api.get(`https://fakestoreapi.com/products?${qs.stringify(data)}`),
  productById: id => api.get(`https://fakestoreapi.com/products/${id}`),
  productsByCategory: name =>
    api.get(`https://fakestoreapi.com/products/category/${name}`),
  categories: data =>
    api.get(
      `https://fakestoreapi.com/products/categories?${qs.stringify(data)}`,
    ),
  profile: () => api.get('https://randomuser.me/api/'),
};

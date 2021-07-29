import About from '../components/About';
import Home from '../components/Home';
import Product from '../components/Product';
import NotFound from './NotFound';

export default {
  notfound: NotFound,
  '/': Home,
  '/about': About,
  '/product': Product
};

import Trending from '../views/pages/trending';
import Detail from '../views/pages/detail';
import Favorite from '../views/pages/favorite';
import Search from '../views/pages/search';

const routes = {
  '/': Trending, // default page
  '/list': Trending,
  '/search/:id': Search,
  '/favorite': Favorite,
  '/detail/:id': Detail,
};

export default routes;

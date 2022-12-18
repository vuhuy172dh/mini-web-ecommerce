import { createBrowserRouter } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import HuyIntroductionPage from '../pages/HuyIntroductionPage';
import ProductsPage from '../pages/ProductsPage';
import { HOMEPAGE_PATH, HUY_INTRO_PAGE, PRODUCTS_PAGE } from './paths';

const route = createBrowserRouter([
  {
    path: HOMEPAGE_PATH,
    element: <HomePage />,
  },
  {
    path: HUY_INTRO_PAGE,
    element: <HuyIntroductionPage />,
  },
  {
    path: PRODUCTS_PAGE,
    element: <ProductsPage />,
  },
]);

export default route;

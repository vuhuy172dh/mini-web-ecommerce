import { createBrowserRouter } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import HuyIntroductionPage from '../pages/HuyIntroductionPage';
import ProductPage from '../pages/ProductPage';
import ProductsPage from '../pages/ProductsPage';
import {
  HOMEPAGE_PATH,
  HUY_INTRO_PAGE,
  PRODUCTS_PAGE,
  PRODUCT_PAGE,
} from './paths';

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
  {
    path: PRODUCT_PAGE,
    element: <ProductPage />,
  },
]);

export default route;

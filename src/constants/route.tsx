import { createBrowserRouter } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import { HOMEPAGE_PATH } from './paths';

const route = createBrowserRouter([
  {
    path: HOMEPAGE_PATH,
    element: <HomePage />,
  },
]);

export default route;

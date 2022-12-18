import { createBrowserRouter } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import HuyIntroductionPage from '../pages/HuyIntroductionPage';
import { HOMEPAGE_PATH, HUY_INTRO_PAGE } from './paths';

const route = createBrowserRouter([
  {
    path: HOMEPAGE_PATH,
    element: <HomePage />,
  },
  {
    path: HUY_INTRO_PAGE,
    element: <HuyIntroductionPage />,
  },
]);

export default route;

import AuthLayout from 'layouts/AuthLayout';
import { RouterConfig } from 'router/AppRoute';
import Certificate from './pages/Certificate';

const routes: RouterConfig[] = [
  {
    path: '/certificate',
    page: Certificate,
    exact: true,
    layout: AuthLayout,
  },
];

export default routes;

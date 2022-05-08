import { RouterConfig } from 'router/AppRoute';
import wellComeRouters from 'modules/Wellcome/routes';
import authRouters from 'modules/auth/routers';

export const publicRouter: RouterConfig[] = [...authRouters];
export const privateRoutes: RouterConfig[] = [...wellComeRouters];

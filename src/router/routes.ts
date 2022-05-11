import { RouterConfig } from 'router/AppRoute';
import wellComeRouters from 'modules/Wellcome/routes';
import authRouters from 'modules/auth/routers';
import facilitiesRouters from 'modules/facilities/routers';
import userRouters from 'modules/user/routers';

export const publicRouter: RouterConfig[] = [...authRouters];
export const privateRoutes: RouterConfig[] = [...wellComeRouters, ...facilitiesRouters, ...userRouters];

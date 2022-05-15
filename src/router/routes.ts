import authRouters from 'modules/auth/routers';
import facilitiesRouters from 'modules/facilities/routers';
import userRouters from 'modules/user/routers';
import wellComeRouters from 'modules/Wellcome/routes';
import { RouterConfig } from 'router/AppRoute';

export const publicRouter: RouterConfig[] = [...authRouters];
export const privateRoutes: RouterConfig[] = [...wellComeRouters, ...facilitiesRouters, ...userRouters];

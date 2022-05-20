import authRouters from 'modules/auth/routers';
import certificateRouters from 'modules/certificate/routers';
import facilitiesRouters from 'modules/facilities/routers';
import planRouters from 'modules/plan/routes';
import userRouters from 'modules/user/routers';
import wellComeRouters from 'modules/Wellcome/routes';
import { RouterConfig } from 'router/AppRoute';

export const publicRouter: RouterConfig[] = [...authRouters];
export const privateRoutes: RouterConfig[] = [
  ...wellComeRouters,
  ...facilitiesRouters,
  ...userRouters,
  ...certificateRouters,
  ...planRouters,
];

import { RouterConfig } from 'router/AppRoute';
import wellComeRouters from 'modules/Wellcome/routes';
import authRouters from 'modules/auth/routers';
import dashboardRouters from 'modules/dashboard/routes';
import workflowRouters from 'modules/Workflow/routes';
import roleGroupRouters from 'modules/role-group/router';

export const publicRouter: RouterConfig[] = [...authRouters];
export const privateRoutes: RouterConfig[] = [
  ...wellComeRouters,
  ...dashboardRouters,
  ...roleGroupRouters,
  ...workflowRouters,
];

import { Spin } from 'antd';
import MainLayout from 'layouts/Main';
import NotFoundPage from 'modules/NotFoundPage';
import { Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AppRoute from './AppRoute';
import PrivateRoute from './PrivateRoute';
import { privateRoutes, publicRouter } from './routes';

const AppRouter: React.FC = () => {
    return (
        <Router>
            <Switch>
                {/* Page ko có header, sideBar thì đặt ở đây */}
                {/* <Route path="abc" component={NotFoundPage} /> */}
                {publicRouter.map(route => {
                    return <AppRoute key={route.path} {...route} />;
                })}

                <MainLayout>
                    <Suspense fallback={<Spin />}>
                        <Switch>
                            {privateRoutes.map(route => {
                                return <PrivateRoute key={route.path} {...route} />;
                            })}
                        </Switch>
                    </Suspense>
                </MainLayout>

                <Route path="*" exact={true} component={NotFoundPage} />
            </Switch>
        </Router>
    );
};

export default AppRouter;

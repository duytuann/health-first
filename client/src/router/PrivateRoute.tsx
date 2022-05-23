import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect, Route, RouteProps } from 'react-router-dom';
import { RootState } from 'redux/store';

export interface RouterConfig extends RouteProps {
    path: string;
    page: React.ElementType;
    layout: React.ElementType;
}
// screen if you're not yet authenticated.
const PrivateRoute: React.FC<RouterConfig> = (props: RouterConfig) => {
    const { page: Component, layout: Layout, ...rest } = props;

    const { isAuthenticated } = useSelector((state: RootState) => state.auth.data);

    return (
        <Route
            {...rest}
            render={appProps =>
                isAuthenticated ? (
                    <>{Component ? <Component {...appProps} {...rest} /> : null}</>
                ) : (
                    <Redirect
                        to={{
                            pathname: '/login',
                            state: { from: appProps.location },
                        }}
                    />
                )
            }
        />
    );
};
export default PrivateRoute;

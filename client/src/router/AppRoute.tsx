import React from 'react';
import { Route, RouteProps } from 'react-router-dom';


export interface RouterConfig extends RouteProps {
  path: string;
  page: React.ElementType;
  layout: React.ElementType;
}

const AppRoute: React.FC<RouterConfig> = (props: RouterConfig) => {
  const { page: Component, layout: Layout, ...rest } = props;
  return (
    <Route
      {...rest}
      render={appProps => {
        return Component ? <Component {...appProps} {...rest} /> : null;
      }}
    />
  );
};

export default AppRoute;

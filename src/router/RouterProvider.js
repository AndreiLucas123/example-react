import React, { useState } from 'react';
import { routerContext } from '../providers-context';
import routes from './routes';

/** Função que escolhe o component atual pelo objeto routes */
function determineRoute() {
  return routes[location.pathname]
    ? routes[location.pathname]
    : routes.notfound;
}

export default function RouterProvider({ children }) {
  const [routeComponent, setRouteComponent] = useState(determineRoute);
  const routeInfo = {
    Component: routeComponent,
    pushRoute(path) {
      history.pushState({}, '', path);
      setRouteComponent(determineRoute);
    },
  };

  return (
    <routerContext.Provider value={routeInfo}>
      {children}
    </routerContext.Provider>
  );
}

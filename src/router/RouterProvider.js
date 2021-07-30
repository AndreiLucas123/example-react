import React, { useEffect, useState } from 'react';
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

  // UseEffect para dar refresh com back button do browser
  useEffect(() => {
    const popstate = () => setRouteComponent(determineRoute);

    window.addEventListener('popstate', popstate);
    return () => window.removeEventListener('popstate', popstate);
  }, []);

  return (
    <routerContext.Provider
      value={{
        Component: routeComponent,
        pushRoute(path) {
          history.pushState({}, '', path);
          setRouteComponent(determineRoute);
        },
      }}
    >
      {children}
    </routerContext.Provider>
  );
}

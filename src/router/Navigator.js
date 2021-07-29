import React, { createContext, useState } from 'react';
import routes from './routes';

/** Contexto do navigator
 *
 * Terá o tipo { Component: routeComponent, }
 */
export const routerContext = createContext({});

/**
 * Variavel global que será usado pelo component Navigator para mudar o estado dele
 *  considerando que o component Navigator sempre existirá no App e será único
 * caso haja mais que um, ou esse um não for excluído poderá ocasionar em bugs
 */
let _setRouteComponent;

/** Função que escolhe o component atual pelo objeto routes */
function determineRoute() {
  return routes[location.pathname]
    ? routes[location.pathname]
    : routes.notfound;
}

/** Função que muda a URL atual sem atualizar a página */
export function pushRoute(path) {
  history.pushState({}, '', path);
  _setRouteComponent(determineRoute());
}

export default function Navigator({ children }) {
  const [routeComponent, setRouteComponent] = useState(determineRoute);
  const routeInfo = {
    Component: routeComponent,
  };

  _setRouteComponent = setRouteComponent;

  return (
    <routerContext.Provider value={routeInfo}>
      {children}
    </routerContext.Provider>
  );
}

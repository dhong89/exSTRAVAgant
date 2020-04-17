import * as APIUtil from '../util/route';

export const RECEIVE_ALL_ROUTES = 'RECEIVE_ALL_ROUTES';
export const RECEIVE_ROUTE = 'RECEIVE_ROUTE';
export const REMOVE_ROUTE = 'REMOVE_ROUTE';

export const receiveAllRoutes = (routes) => ({
    type: RECEIVE_ALL_ROUTES,
    routes: routes
})

export const receiveRoute = (route) => ({
    type: RECEIVE_ROUTE,
    route: route
})

export const removeRoute = (routeId) => ({
    type: REMOVE_ROUTE,
    routeId: routeId
})


export const fetchRoutes = () => dispatch => {
    APIUtil.fetchRoutes()
        .then( (routes) => dispatch(receiveAllRoutes(routes)))
}


export const fetchRoute = () => dispatch => {
    APIUtil.fetchRoute()
        .then( (route) => dispatch(receiveRoute(route)))
}

export const createRoute = (route) => dispatch => {
    return APIUtil.createRoute(route)
        .then( (route) => dispatch(receiveRoute(route)))
}

export const deleteRoute = (routeId) => dispatch => {
    APIUtil.deleteRoute(routeId)
        .then( () => dispatch(removeRoute(routeId)))
}

export const fetchUserRoutes = () => dispatch => {
    APIUtil.fetchUserRoutes()
        .then((routes) => dispatch(receiveAllRoutes(routes)))
}



export const fetchRoutes = () => (
    $.ajax({
        url: '/api/routes',
        method: 'GET',
    })
)

export const fetchRoute = (routeId) => (
    $.ajax({
        url: `/api/routes/${routeId}`,
        method: 'GET',
    })
)

export const createRoute = (route) => (
    $.ajax({
        url:'/api/routes',
        method: 'POST',
        data: {route: route}
    })
) 

export const deleteRoute = (routeId) => (
    $.ajax({
        url: `/api/routes/${routeId}`,
        method: 'DELETE'
    })
)

export const fetchUserRoutes = () => (
    $.ajax({
        url: '/api/routes',
        method: 'GET',
        data: {current_user_route: true}
    })
)
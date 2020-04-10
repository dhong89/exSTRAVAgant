export const fetchRoutes = (routes) => (
    $.ajax({
        url: '/api/routes',
        method: 'GET',
        data: {routes: routes}

    })
)
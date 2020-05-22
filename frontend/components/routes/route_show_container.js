import { connect } from 'react-redux';
import RouteShow from './route_show';
import { fetchRoute, deleteRoute } from '../../actions/route_actions';
import { logout } from '../../actions/session_actions';


export const mSTP = (state) => {
    // debugger
    return ({
    user: Object.values(state.entities.users),
    route: Object.values(state.entities.routes)
    })
}

export const mDTP = dispatch => {
    return ({
    logout: () => dispatch(logout()),
    fetchRoute: (routeId) => dispatch(fetchRoute(routeId)),
    deleteRoute: (routeId) => dispatch(deleteRoute(routeId))
    })
}

export default connect(mSTP, mDTP)(RouteShow);
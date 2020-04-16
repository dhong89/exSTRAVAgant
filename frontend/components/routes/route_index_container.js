import { connect } from 'react-redux';
import RouteIndex from './route_index';
import { fetchUserRoutes, fetchRoutes, deleteRoute } from '../../actions/route_actions';


export const mSTP = state => ({
    routes: Object.values(state.entities.routes)
})

export const mDTP = dispatch => ({
    fetchUserRoutes: () => dispatch(fetchUserRoutes()),
    deleteRoute: routeId => dispatch(deleteRoute(routeId))
})

export default connect(mSTP, mDTP)(RouteIndex);
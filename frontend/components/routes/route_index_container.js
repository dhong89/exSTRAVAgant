import { connect } from 'react-redux';
import RouteIndex from './route_index';
import { fetchRoutes, deleteRoute } from '../../actions/route_actions';


export const mSTP = state => ({
    routes: Object.values(state.entities.routes)
})

export const mDTP = dispatch => ({
    fetchRoutes: () => dispatch(fetchRoutes()),
    deleteRoute: routeId => dispatch(deleteRoute(routeId))
})

export default connect(mSTP, mDTP)(RouteIndex);
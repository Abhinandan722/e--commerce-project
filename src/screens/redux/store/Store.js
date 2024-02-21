import {createStore} from 'redux';
import Reducers from '../reducers/Reducers';
import Reducers2 from '../reducers/Reducer2';
import AddressRaducer from '../reducers/AddressRaducer';
import {combineReducers} from 'redux';
const routeReducer = combineReducers({Reducers, Reducers2,AddressRaducer});
const store = createStore(routeReducer);

export default store;

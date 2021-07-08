import {createStore , applyMiddleware, combineReducers} from 'redux';
import thunkMiddleware from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import ItemReducer from '../store/reducer/ItemReducer'

const rootReducers = combineReducers({
    ItemReducer
    
});

const middlewares = [thunkMiddleware]
const Store = createStore(rootReducers,composeWithDevTools(applyMiddleware(...middlewares)));
export default Store;
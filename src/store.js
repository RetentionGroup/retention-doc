import thunk from 'redux-thunk';
import {createStore, applyMiddleware, combineReducers} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { docContentReducer } from './redux/content-page/reducer-content-page';

const reducer = combineReducers({
    docContentReducer
});

const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(thunk))
)

export default store;
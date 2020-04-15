import thunk from 'redux-thunk';
import {createStore, applyMiddleware, combineReducers} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import {docContentReducer} from './redux/content-page/reducer-content-page';
import {docContentReducerFAQ} from './redux/content-page-faq/reducer-content-page-faq';

const reducer = combineReducers({
    docContentReducer,
    docContentReducerFAQ
});

const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(thunk))
)

export default store;
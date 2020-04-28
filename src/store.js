import thunk from 'redux-thunk';
import {createStore, applyMiddleware, combineReducers} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import {docContentReducer} from './redux/content-page/reducer-content-page';
import {docContentReducerFAQ} from './redux/content-page-faq/reducer-content-page-faq';
import {docContentReducerSupMenu} from './redux/content-support-menu/reducer-content-support-menu';

const reducer = combineReducers({
    docContentReducer,
    docContentReducerFAQ,
    docContentReducerSupMenu
});

const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(thunk))
)

export default store;
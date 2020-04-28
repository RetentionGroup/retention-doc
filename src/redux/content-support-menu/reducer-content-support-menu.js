import {GET_TO_DOC_SUPPORT_MENU} from '../action-types';
import docContentSupMenu from '../../data-store/doc-data-support';

export const docContentReducerSupMenu = (state = docContentSupMenu, action) => {
    switch (action.type) {
        case GET_TO_DOC_SUPPORT_MENU:
            return action.payload
    }
    return state;
}
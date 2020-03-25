import { GET_TO_DOC_CONTENT } from '../action-types';
import docContent from '../../data-store/doc-data';

export const docContentReducer = (state = docContent, action) => {
    switch (action.type) {
        case GET_TO_DOC_CONTENT:
            return action.payload
    }
    return state;
}
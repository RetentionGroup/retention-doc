import { GET_TO_DOC_CONTENT_FAQ } from '../action-types';
import docContentFAQ from '../../data-store/doc-data-faq';

export const docContentReducerFAQ = (state = docContentFAQ, action) => {
    switch (action.type) {
        case GET_TO_DOC_CONTENT_FAQ:
            return action.payload
    }
    return state;
}
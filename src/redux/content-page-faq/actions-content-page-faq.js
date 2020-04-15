import {GET_TO_DOC_CONTENT_FAQ} from '../action-types';

const docContentFAQLoad = docContentFAQ => {
    return {
        type: GET_TO_DOC_CONTENT_FAQ,
        payload: docContentFAQ
    }
}
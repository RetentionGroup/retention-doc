import {GET_TO_DOC_CONTENT} from '../action-types';

const docContentLoad = docContent => {
    return {
        type: GET_TO_DOC_CONTENT,
        payload: docContent
    }
}





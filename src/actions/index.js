import { SAVE_COMMENT } from './types';

export function saveComment(comment) {
    console.log('from index.js', comment);
    return {
        type: SAVE_COMMENT,
        payload: comment
    };
}
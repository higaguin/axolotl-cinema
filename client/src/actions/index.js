import { SEARCH_THEATER, CHANGE_IDIOM } from './types';

export const searchTheater = theater_id => {
    return {
        type: SEARCH_THEATER,
        payload: theater_id
    }
}

export const changeIdiom = change_id => {
    return {
        type: CHANGE_IDIOM,
        payload: change_id
    }
}
import { SEARCH_THEATER, CHANGE_IDIOM } from '../actions/types';

const INITIAL_STATE = {
    theater_id: null,
    state_iso: null,
    idiom_id: 20
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SEARCH_THEATER:
            return { ...state, theater_id: action.payload.theater_id, state_iso: action.payload.state_iso }
        case CHANGE_IDIOM:
            return { ...state, idiom_id: action.payload }
        default:
            return state;
    }
}
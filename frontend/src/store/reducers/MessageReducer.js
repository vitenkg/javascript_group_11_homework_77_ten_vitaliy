import {FETCH_MESSAGES_FAILURE, FETCH_MESSAGES_REQUEST, FETCH_MESSAGES_SUCCESS} from "../actions/MessageAction";

const initialState = {
    fetchLoading: false,
    singleLoading: false,
    messages: [],
};

const MessageReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_MESSAGES_REQUEST:
            return {...state, fetchLoading: true};
        case FETCH_MESSAGES_SUCCESS:
            return {...state, fetchLoading: false, messages: action.payload};
        case FETCH_MESSAGES_FAILURE:
            return {...state, fetchLoading: false};
        default:
            return state;
    }
};

export default MessageReducer
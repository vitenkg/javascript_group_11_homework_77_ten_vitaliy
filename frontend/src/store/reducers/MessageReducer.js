import {
    CREATE_MESSAGE_FAILURE,
    CREATE_MESSAGE_REQUEST, CREATE_MESSAGE_SUCCESS,
    FETCH_MESSAGES_FAILURE,
    FETCH_MESSAGES_REQUEST,
    FETCH_MESSAGES_SUCCESS
} from "../actions/MessageAction";

const initialState = {
    fetchLoading: false,
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
        case CREATE_MESSAGE_REQUEST:
            return {...state, fetchLoading: true};
        case CREATE_MESSAGE_SUCCESS:
            return {...state, fetchLoading: false};
        case CREATE_MESSAGE_FAILURE:
            return {...state, fetchLoading: false};
        default:
            return state;
    }
};

export default MessageReducer
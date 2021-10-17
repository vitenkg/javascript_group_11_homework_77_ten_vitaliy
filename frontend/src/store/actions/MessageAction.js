import axios from "axios";

export const FETCH_MESSAGES_REQUEST = 'FETCH_MESSAGES_REQUEST';
export const FETCH_MESSAGES_SUCCESS = 'FETCH_MESSAGES_SUCCESS';
export const FETCH_MESSAGES_FAILURE = 'FETCH_MESSAGES_FAILURE';

export const CREATE_MESSAGE_REQUEST = 'CREATE_MESSAGE_REQUEST';
export const CREATE_MESSAGE_SUCCESS = 'CREATE_MESSAGE_SUCCESS';
export const CREATE_MESSAGE_FAILURE = 'CREATE_MESSAGE_FAILURE';

export const fetchMessagesRequest = () => ({type: FETCH_MESSAGES_REQUEST});
export const fetchMessagesSuccess = products => ({type: FETCH_MESSAGES_SUCCESS, payload: products});
export const fetchMessagesFailure = () => ({type: FETCH_MESSAGES_FAILURE});

export const createMessageRequest = () => ({type: CREATE_MESSAGE_REQUEST});
export const createMessageSuccess = () => ({type: CREATE_MESSAGE_SUCCESS});
export const createMessageFailure = () => ({type: CREATE_MESSAGE_FAILURE});

export const fetchMessages = () => {
    return async dispatch => {
        try {
            dispatch(fetchMessagesRequest());
            const response = await axios.get('http://localhost:8000/messages');
            dispatch(fetchMessagesSuccess(response.data));
        } catch (e) {
            dispatch(fetchMessagesFailure());
        }
    };
};


export const createMessage = messageData => {
    return async dispatch => {
        try {
            dispatch(createMessageRequest());

            await axios.post('http://localhost:8000/messages', messageData);

            dispatch(createMessageSuccess());
        } catch (e) {
            dispatch(createMessageFailure());
            throw e;
        }
    };
};

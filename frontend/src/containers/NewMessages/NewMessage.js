import React from "react";
import Typography from "@material-ui/core/Typography";
import {useDispatch} from "react-redux";
import InputForm from "../../components/InputForm/InputForm";
import {createMessage} from "../../store/actions/MessageAction";

const NewMessage = ({history}) => {
    const dispatch = useDispatch();

    const onSubmit = async messageData => {
        await dispatch(createMessage(messageData));
        history.replace('/');
    };

    return (
        <>
            <Typography variant="h4">New product</Typography>
            <InputForm
                onSubmit={onSubmit}
            />
        </>
    );
};

export default NewMessage;
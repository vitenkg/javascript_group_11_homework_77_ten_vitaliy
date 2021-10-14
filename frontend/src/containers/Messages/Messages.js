import React, {useEffect} from 'react';
import {Button, Grid, Typography} from "@material-ui/core";
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";
import {fetchMessages} from "../../store/actions/MessageAction";
import MessageItem from "../../components/MessageItem/MessageItem";

const Messages = () => {
    const dispatch = useDispatch();
    const messages = useSelector(state => state.messages.messages);

    useEffect(() => {
        dispatch(fetchMessages());
    }, [dispatch]);

    return (
        <Grid container direction="column" spacing={2}>
            <Grid item container justifyContent="space-between" alignItems="center">
                <Grid item>
                    <Typography variant="h4">Messages</Typography>
                </Grid>
                <Grid item>
                    <Button color="primary" component={Link} to="/message/new">Add</Button>
                </Grid>
            </Grid>
            <Grid item container direction="row" spacing={1}>
                {messages.map(message => (
                    <MessageItem
                        key={message.id}
                        id={message.id}
                        author={message.author}
                        test={message.text}
                        image={message.image}
                    />
                ))}
            </Grid>
        </Grid>
    );
};

export default Messages;
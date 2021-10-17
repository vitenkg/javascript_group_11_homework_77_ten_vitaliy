import {Card, CardContent, CardHeader, CardMedia, Grid, makeStyles, Typography} from "@material-ui/core";
import {apiURL} from "../../config";

const useStyles = makeStyles({
    card: {
        height: '100%',
        display: "flex",
        alignItems: "center",
    },
    media: {
        height: 100,
        width: 151,
    }
});

const MessageItem = ({author, text, image}) => {
    const classes = useStyles();
    let cardImage;

    if (image) {
        cardImage = apiURL + '/uploads/' + image;
    }

    return (
        <Grid item xs={12} sm={12} md={12} lg={12}>
            <Card className={classes.card}>
                <CardMedia
                    image={cardImage}
                    title={author}
                    className={classes.media}
                />
                <Grid item>
                    <CardHeader title={author}/>
                    <CardContent>
                        <Typography variant="subtitle1">
                            {text}
                        </Typography>
                    </CardContent>
                </Grid>
            </Card>
        </Grid>
    );
};

export default MessageItem;
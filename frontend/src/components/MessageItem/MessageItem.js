import {Link} from "react-router-dom";
import {
    Card,
    CardActions,
    CardContent,
    CardHeader,
    CardMedia,
    Grid,
    IconButton,
    makeStyles,
    Typography
} from "@material-ui/core";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
// import imageNotAvailable from '../../assets/images/not_available.png';
import {apiURL} from "../../config";

const useStyles = makeStyles({
    card: {
        height: '100%'
    },
    media: {
        height: 0,
        paddingTop: '56.25%'
    }
});

const MessageItem = ({title, price, id, image}) => {
    const classes = useStyles();

    // let cardImage = imageNotAvailable;
    let cardImage;

    if (image) {
        cardImage = apiURL + '/uploads/' + image;
    }

    return (
        <Grid item xs={12} sm={6} md={6} lg={4}>
            <Card className={classes.card}>
                <CardMedia
                    image={cardImage}
                    title={title}
                    className={classes.media}
                />
                <CardHeader title={title}/>
                <CardContent>
                    <Typography variant="subtitle1">
                        {price} KGS
                    </Typography>
                </CardContent>
                <CardActions>
                    <IconButton component={Link} to={'/products/' + id}>
                        <ArrowForwardIcon/>
                    </IconButton>
                </CardActions>
            </Card>
        </Grid>
    );
};

export default MessageItem;
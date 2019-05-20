import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import red from '@material-ui/core/colors/red';

const styles = theme => ({
    main: {
        display: 'flex',
        justifyContent: 'center'
    },
    card: {
        maxWidth: 400,
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    actions: {
        display: 'flex',
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    avatar: {
        backgroundColor: red[500],
    },
});

class RecipeReviewCard extends React.Component {
    state = { expanded: false };

    render() {
        const { classes } = this.props;

        return (
            <div class={classes.main}>
            <Card className={classes.card}>
                <CardHeader
                    avatar={
                        <Avatar aria-label="Recipe" className={classes.avatar}>
                            HS
                        </Avatar>
                    }
                    action={
                        <IconButton>
                            ..
                        </IconButton>
                    }
                    title="@fxnoob"
                    subheader="Hitesh Saini"
                />
                <CardMedia
                    className={classes.media}
                    image="https://avatars3.githubusercontent.com/u/24789277?s=400&v=4"
                    title="Paella dish"
                />
                <CardContent>
                    <Typography component="p">
                        This is the showcase repository of chrome extensions I made.
                    </Typography>
                </CardContent>
            </Card>
            </div>
        );
    }
}

RecipeReviewCard.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(RecipeReviewCard);

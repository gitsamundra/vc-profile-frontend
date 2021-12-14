import { Button, Card, CardActions, CardMedia, Typography } from '@material-ui/core';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import React from 'react';
import { useDispatch } from 'react-redux';
import { likeList } from '../../../actions/list';
import useStyles from './styles';

const SingleList = ({list}) => {
    const dispatch = useDispatch();
    const classes = useStyles();
    return (
        <Card className={classes.card}>
            <CardMedia className={classes.media} image={list.profile_img} title={list.name}/>
            <div className={classes.overlay}>
                <Typography variant='h6'>{list.name}</Typography>
            </div>
            <div className={classes.container}>
                Date of Birth: 
                <div className={classes.details}>
                    <Typography variant='body2' color='textSecondary'>{list.dob}</Typography>
                </div>
                Address: 
                <div className={classes.details}>
                    <Typography variant='body2' color='textSecondary'>{list.address}</Typography>
                </div>
                Place:
                <div className={classes.details}>
                    <Typography variant='body2' color='textSecondary'>{list.unit}</Typography>
                </div>
                Date: 
                <div className={classes.details}>
                    <Typography variant='body2' align='justify' color='textSecondary'>{list.date}</Typography>
                </div>
                Place:
                <div className={classes.details}>
                    <Typography variant='body2' color='textSecondary'>{list.place}</Typography>
                </div>
                Details:
                <div className={classes.details}>
                    <Typography variant='body2' color='textSecondary'>{list.details}</Typography>
                </div>
            </div>
            <CardActions className={classes.cardActions}>
                <Button size='small' color='primary' onClick={() => dispatch(likeList(list._id))}>
                    <ThumbUpAltIcon font='small' />
                    Liked
                    {list.likeCount}
                </Button>
            </CardActions>
        </Card>
    )
}

export default SingleList;

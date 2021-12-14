import {makeStyles} from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    mainContainer: {
        display: 'flex',
        alignItems: 'center',
    },
    smMargin: {
        margin: theme.spacing(1),
    },
    actionDiv: {
        textAlign: 'center',
    },
    container: {
        width: '80%',
        height: '40px',
        listStyle: 'none',
        display: 'flex',
        justifyContent: 'center',
        '& a' : {
            padding: '10px',
            margin: '8px',
            borderRadius: '5px',
            border: 'solid 2px blue',
            color: 'blue',
            cursor: 'pointer',
        },
        '& a:hover': {
            backgroundColor: 'blue',
            color: 'white'
        }
    },
    previousLink: {

    },
    nextLink: {
        
    },
    disabled: {

    },
    active: {
        '& a' : {
            backgroundColor: 'blue',
            color: 'white'
        }
    },
}));
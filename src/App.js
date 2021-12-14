import {AppBar, Grow, Grid, Container, Typography} from '@material-ui/core';
import medal from './images/Victoria_Cross_Medal_without_Bar.png';
import Lists from './components/Lists/Lists';
import useStyles from './styles';
import {useDispatch} from 'react-redux';
import { useEffect } from 'react';
import { fetchLists } from './actions/list';
// import Form from './components/Form/Form';


function App() {
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
      dispatch(fetchLists());
  }, [dispatch]);

  return (
    <Container maxWidth='lg'>
      <AppBar position='static' color='inherit' className={classes.appBar}>
        <Typography className={classes.heading} variant='h2' align='center'>Gurkha VC</Typography>
        <img className={classes.image} src={medal} alt="medal" height="60"/>
      </AppBar>
      <Grow in>
        <Container >
          <Grid container justifyContent='space-between' alignItems='stretch' spacing={3}>
            <Grid item xs={12} sm={12}>
              <Lists />
            </Grid>
            {/* <Grid item xs={12} sm={4}>
              <Form />
            </Grid> */}
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
}

export default App;

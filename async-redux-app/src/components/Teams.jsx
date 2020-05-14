import React from 'react';

import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import CircularProgress from '@material-ui/core/CircularProgress';

import Team from './Team'

import { connect } from 'react-redux'
import { fetchTeamData } from '../store/actions'
import { useEffect } from 'react';


const useStyles = makeStyles((theme) => ({
     icon: {
          marginRight: theme.spacing(2),
     },
     heroContent: {
          backgroundColor: theme.palette.background.paper,
          padding: theme.spacing(8, 0, 6),
     },
     heroButtons: {
          marginTop: theme.spacing(4),
     },
     cardGrid: {
          paddingTop: theme.spacing(8),
          paddingBottom: theme.spacing(8),
     },
     card: {
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
     },
     cardMedia: {
          paddingTop: '56.25%', // 16:9
     },
     cardContent: {
          flexGrow: 1,
     },
     footer: {
          backgroundColor: theme.palette.background.paper,
          padding: theme.spacing(6),
     },
     root: {
          display: 'flex',
          justifyContent: 'center',
          '& > * + *': {
               marginLeft: theme.spacing(2),
          },
     },
}));



const Teams = ({
     isFetching,
     teams,
     fetchTeamData,
     error,
}) => {
     useEffect(() => {
          fetchTeamData()
     }, [fetchTeamData])

     const classes = useStyles();


     return (
          <Container className={classes.cardGrid} maxWidth="md">
               {
                    isFetching && 
                    <div className={classes.root}>
                         <CircularProgress color="secondary" />
                    </div>
               }
               <Grid container spacing={4}>
                    {teams.map((team) => (
                         <Team team={team} key={team.idTeam} />
                    ))}
               </Grid>
          </Container>
     )
}

const mapStateToProps = state => {
     console.log(state)
     return {
          isFetching: state.isFetching,
          teams: state.teams,
          error: state.error,
     }
}

export default connect(
     mapStateToProps,
     { fetchTeamData }
)(Teams)
import React, { useEffect } from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

import { connect } from 'react-redux'
import { toggleBlurb } from '../store/actions'


const useStyles = makeStyles((theme) => ({
     card: {
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
     },
     cardMedia: {
          padding: '56.25%',
          margin: '2%', // 16:9
     },
     cardContent: {
          flexGrow: 1,
     },
     footer: {
          backgroundColor: theme.palette.background.paper,
          padding: theme.spacing(6),
     },
}));

const Team = ({
     team,
     blurb,
     toggleBlurb
}) => {
     const classes = useStyles();
     

     // useEffect(() => {
     //      toggleBlurb()
     // }, [toggleBlurb])


     return (

          <Grid item key={team} xs={12} sm={6} md={4}>
               <Card className={classes.card}>
                    <CardMedia
                         className={classes.cardMedia}
                         image={team.strTeamBadge}
                         title={`${team.strTeam} Badge`}
                    />
                    <CardContent className={classes.cardContent}>
                         <Typography gutterBottom variant="h5" component="h2">
                              {team.strTeam}
                    </Typography>
                    <Typography>
                             Established: {team.intFormedYear}
                    </Typography>
                         <Typography>
                              Home Stadium: {team.strStadium}
                    </Typography>
                    <Typography>
                         Website: <a href={team.strWebsite}>{team.strWebsite}</a>
                    </Typography>
                    <a href={team.strTwitter}>
                    <Typography>
                         {team.strTwitter}
                    </Typography>
                    </a>
                    {
                         blurb &&
                         <Typography>
                              {team.strDescriptionEN}
                         </Typography>
                    }
                    </CardContent>
                    <CardActions>
                         <Button onClick={toggleBlurb} size="small" color="secondary" variant="contained">
                              Team Description
                    </Button>
                    </CardActions>
               </Card>
          </Grid>

     )
}

const mapStateToProps = state => {
     return {
          blurb: state.blurb
     }
}

export default connect(
     mapStateToProps,
     {toggleBlurb}
)(Team)
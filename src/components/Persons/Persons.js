import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    margin: theme.spacing(1),
    height: 500,
    overflow: 'auto',
    textAlign: 'center'
  },
  card: {
    minWidth: 275
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)'
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  }
}))

export default ({ persons, selectedPerson, selectPerson }) => {
  const classes = useStyles()
  const handleListItemClick = (event, id) => {
    selectPerson(id)
  }

  const personsCards = persons.map(({ _id, name, height, mass, gender }) => {
    return (
      <ListItem
        button
        key={_id}
        selected={selectedPerson ? selectedPerson._id === _id : false}
        onClick={(event) => handleListItemClick(event, _id)}
      >
        <ListItemText>
          <Card className={classes.card}>
            <CardContent>
              <Typography variant='h5' component='h2'>
                {name}
              </Typography>
              <Typography className={classes.pos} color='textSecondary'>
                Height:{height}
              </Typography>
              <Typography className={classes.pos} color='textSecondary'>
                Mass:{mass}
              </Typography>
              <Typography className={classes.pos} color='textSecondary'>
                Gender:{mass}
              </Typography>
            </CardContent>
          </Card>
        </ListItemText>
      </ListItem>
    )
  })
  return (
    <Grid container>
      <Grid item xs={6}>
        <Paper className={classes.paper}>
          <List component='nav'>{personsCards}</List>
          {/* <List component='nav'>
            <ListItem button selected={selectedIndex === 3} onClick={(event) => handleListItemClick(event, 3)}>
              <ListItemText>
                <Card className={classes.card}>
                  <CardContent>
                    <Typography className={classes.title} color='textSecondary' gutterBottom>
                      Word of the Day
                    </Typography>
                    <Typography variant='h5' component='h2'>
                      be
                      {bull}
                      nev
                      {bull}o{bull}
                      lent
                    </Typography>
                    <Typography className={classes.pos} color='textSecondary'>
                      adjective
                    </Typography>
                    <Typography variant='body2' component='p'>
                      well meaning and kindly.
                      <br />
                      {'"a benevolent smile"'}
                    </Typography>
                  </CardContent>
                </Card>
              </ListItemText>
            </ListItem>
          </List> */}
        </Paper>
      </Grid>
      <Grid item xs={6}>
        <Paper className={classes.paper}>Right Pane</Paper>
      </Grid>
    </Grid>
  )
}

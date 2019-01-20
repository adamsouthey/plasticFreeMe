import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import InputBase from '@material-ui/core/InputBase'
import SearchIcon from '@material-ui/icons/Search'
import { fade } from '@material-ui/core/styles/colorManipulator'

const styles = theme => ({
  header: {
    height: '50%',
    backgroundColor: '#1976D2',
  },
  inputRoot: {
    color: 'inherit',
    width: '100%',
  },
  inputInput: {
    paddingTop: theme.spacing.unit,
    paddingRight: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
    paddingLeft: theme.spacing.unit * 10,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: 200,
    },
  },
  search: {
    position: 'relative',
    marginTop: 20,
    borderRadius: 20,
    backgroundColor: fade(theme.palette.common.white, 0.25),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.35),
    },
    width: 250,
  },
  searchIcon: {
    width: theme.spacing.unit * 8,
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    height: 120,
    width: 120,
    backgroundColor: '#C5CAE9',
    borderRadius: '50%',
    marginBottom: 20,
  }
})

class ExtendedHeader extends Component {


  render() {
    const { classes } = this.props
    return (
      <Grid container justify='center' alignItems='center' direction='column' className={classes.header}>
        <Grid item className={classes.logo}>
        </Grid>
        <Grid item><Typography variant='h6'>PLASTIC FREE ME</Typography></Grid>
        <Grid item className={classes.search}>
          <div className={classes.searchIcon}>
            <SearchIcon />
          </div>
          <InputBase
            placeholder="Search…"
            classes={{
              root: classes.inputRoot,
              input: classes.inputInput,
            }}
          />
        </Grid>
      </Grid>
    )
  }
}

export default withStyles(styles)(ExtendedHeader)

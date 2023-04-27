import { AppBar, Grid, Toolbar, Typography} from '@mui/material'
import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Header extends Component {
  render() {
    return (
      <div>
        <AppBar>
            <Toolbar>
      <Typography><h1>NEWS</h1></Typography>
      <Grid container >
            <Grid item xs={12}sm={3}md={3}lg={3}xl={3}>
            <Link to="/">Top business headlines</Link>
                </Grid>
             
    
      <Grid item xs={12}sm={3}md={3}lg={3}xl={3}>
      <Link to="/tesla">All articles about Tesla from the last month</Link>

                </Grid>
                <Grid item xs={12}sm={3}md={3}lg={3}xl={3}>
      <Link to="/tech">Top headlines from TechCrunch</Link>

                </Grid>
                <Grid item xs={12}sm={3}md={3}lg={3}xl={3}>
      <Link to="/wall">Articles published by the Wall Street Journal in the last 6 months</Link>

                </Grid>
      </Grid>
            </Toolbar>
        </AppBar>
      </div>
    )
  }
}

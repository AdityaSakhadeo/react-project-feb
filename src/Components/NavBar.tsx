import React from 'react'
import { AppBar,Toolbar,Typography } from '@mui/material'
export default function NavBar() {
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div">
            Bajaj Application 
          </Typography>
        </Toolbar>
      </AppBar>
      {/* Your app content goes here */}
    </div>
  )
}

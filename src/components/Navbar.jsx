import { Box } from '@mui/material'
import React from 'react'

const Navbar = ({ variables }) => {
  const { question, image, data } = variables;
  return (
    <Box sx={{ background: '#1976d2', boxShadow: '0px 0px 20px 0px rgba(0,0,0,0.75)', height: '50px', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100vw', position: 'absolute', top: 0, left: 0 }}>
        <h2 sx={{ fontSize: '3vw' }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Image: {image + 1}/{data.length}</h2>
        <h2 sx={{ fontSize: '3vw' }}>Question: {question}/4&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</h2>
    </Box>
  )
}

export default Navbar
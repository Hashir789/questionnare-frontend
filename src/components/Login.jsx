import React, { useState } from 'react'
import { FaUser, FaEye, FaEyeSlash, FaLock } from "react-icons/fa";
import { Box, Button, Card, CardContent, TextField, InputAdornment, Checkbox, Typography } from '@mui/material'
import TransitionAlert from './TransitionAlert';

const Login = ({ variables }) => {
  const { username1, password1, seeLoginPassword, setSeeLoginPassword, handleUsernameChange1, handlePasswordChange1, handleSubmit1, setLogin, open, setOpen, alertStatement, setAlertStatement } = variables;
  return (
    <Box>
        <Card sx={{ boxShadow: '0px 0px 20px 0px rgba(0,0,0,0.75)', width: { sm: '500px', xs: '90vw' } }}>
            <CardContent>
              <Box my={3}>
                <TextField id="username1" label="Username" variant="standard" fullWidth value={username1} onChange={handleUsernameChange1} InputProps={{startAdornment: (<InputAdornment position="start"><FaUser size={18}/></InputAdornment>)}}/>
              </Box>
              <Box my={3}>
                <TextField id="password1" type={seeLoginPassword?"password":"text"} label="Password" variant="standard" fullWidth value={password1} onChange={handlePasswordChange1} InputProps={{startAdornment: (<InputAdornment position="start"><FaLock size={18}/></InputAdornment>), endAdornment: (<InputAdornment position="end"><Checkbox onChange={(e)=>{ setSeeLoginPassword(!e.target.checked); }} icon={<FaEye size={18}/>} checkedIcon={<FaEyeSlash size={18}/>} color='default'/></InputAdornment>)}}/>
              </Box>
              <TransitionAlert variables={{ open, setOpen, alertStatement, setAlertStatement }}/>
              <Box mt={8} mb={2}>
                <Button id="login" label="Login" variant="contained" fullWidth color='primary' onClick={handleSubmit1}>Login</Button>
              </Box>
              <Box my={2}>
                <hr/>
              </Box>
              <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }} mt={2}>
                <Typography>Don't have an account?&nbsp;</Typography>
                <Button onClick={()=>{ setLogin(false); setAlertStatement(''); setOpen(false); }}>Sign Up</Button>
              </Box>
            </CardContent>
        </Card>
    </Box>
  )
}

export default Login
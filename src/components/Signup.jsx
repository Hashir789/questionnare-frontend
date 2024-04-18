import React from 'react'
import { FaUser, FaEye, FaEyeSlash, FaLock } from "react-icons/fa";
import { Box, Button, Card, CardContent, TextField, InputAdornment, Checkbox, Typography } from '@mui/material'

const Signup = ({ variables }) => {
  const { setLogin, handleName2, handleUsername2, handlePassword2, handleCpassword2, name2, username2, password2, cpassword2, seeSignup, setSeeSignup, seeSignup2, setSeeSignup2, handleSubmit2 } = variables;
  return (
    <Box>
        <Card sx={{ boxShadow: '0px 0px 20px 0px rgba(0,0,0,0.75)', width: { sm: '500px', xs: '90vw' } }}>
            <CardContent>
              <Box my={3}>
                <TextField id="name2" label="Name" variant="standard" fullWidth value={name2} onChange={handleName2} InputProps={{startAdornment: (<InputAdornment position="start"><FaUser size={18}/></InputAdornment>)}}/>
              </Box>
              <Box my={3}>
                <TextField id="username2" label="Username" variant="standard" fullWidth value={username2} onChange={handleUsername2} InputProps={{startAdornment: (<InputAdornment position="start"><FaUser size={18}/></InputAdornment>)}}/>
              </Box>
              <Box my={3}>
                <TextField id="password2" type={seeSignup?"password":"text"} label="Password" variant="standard" fullWidth value={password2} onChange={handlePassword2} InputProps={{startAdornment: (<InputAdornment position="start"><FaLock size={18}/></InputAdornment>), endAdornment: (<InputAdornment position="end"><Checkbox onChange={(e)=>{ setSeeSignup(!e.target.checked);(!e.target.checked); }} icon={<FaEye size={18}/>} checkedIcon={<FaEyeSlash size={18}/>} color='default'/></InputAdornment>)}}/>
              </Box>
              <Box my={3}>
                <TextField id="cpassword2" type={seeSignup2?"password":"text"} label="Confirm Password" variant="standard" fullWidth value={cpassword2} onChange={handleCpassword2} InputProps={{startAdornment: (<InputAdornment position="start"><FaLock size={18}/></InputAdornment>), endAdornment: (<InputAdornment position="end"><Checkbox onChange={(e)=>{ setSeeSignup2(!e.target.checked); }} icon={<FaEye size={18}/>} checkedIcon={<FaEyeSlash size={18}/>} color='default'/></InputAdornment>)}}/>
              </Box>
              <Box mt={8} mb={2}>
                <Button id="signup" label="Sign up" variant="contained" fullWidth color='primary' onClick={() => handleSubmit2()}>Sign Up</Button>
              </Box>
              <Box my={2}>
                <hr/>
              </Box>
              <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }} mt={2}>
                <Typography>Already have an account?&nbsp;</Typography>
                <Button onClick={()=>{ setLogin(true); }}>Login</Button>
              </Box>
            </CardContent>
        </Card>
    </Box>
  )
}

export default Signup
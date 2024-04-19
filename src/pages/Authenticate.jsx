import React, { useEffect } from 'react'
import Login from '../components/Login'
import Signup from '../components/Signup'
import { useNavigate } from 'react-router-dom';
import { Box } from '@mui/material';

const Authenticate = ({ variables }) => {
    const { username1, setUsername1, password1, setPassword1, seeLoginPassword, setSeeLoginPassword, loginSuccess, setLoginSuccess, handleUsernameChange1, handlePasswordChange1, handleSubmit1, loginn, setLogin, handleName2, handleUsername2, handlePassword2, handleCpassword2, name2, username2, password2, cpassword2, seeSignup, setSeeSignup, seeSignup2, setSeeSignup2, handleSubmit2, open, setOpen, alertStatement, setAlertStatement } = variables;
    const navigate = useNavigate();
    useEffect(() => {
      if (loginSuccess === true) {
        navigate('/questionnare')
      }
    }, [loginSuccess]);
  return (
    <Box sx={{ width: '100vw', height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        {loginn===true?<Login variables={{ username1, setUsername1, password1, setPassword1, seeLoginPassword, setSeeLoginPassword, loginSuccess, setLoginSuccess, handleUsernameChange1, handlePasswordChange1, handleSubmit1, setLogin, open, setOpen, alertStatement, setAlertStatement }} />:<Signup variables={{ setLogin, handleName2, handleUsername2, handlePassword2, handleCpassword2, name2, username2, password2, cpassword2, seeSignup, setSeeSignup, seeSignup2, setSeeSignup2, handleSubmit2, open, setOpen, alertStatement, setAlertStatement }} />}
    </Box>
  )
}

export default Authenticate

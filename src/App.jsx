import React, { useState, useEffect } from 'react'
import { Box, Button } from '@mui/material';
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Authenticate from './pages/Authenticate';
import Question from './pages/Question';
import Temp from './pages/Temp';

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

function AppContent() {
  const host = 'https://questionnare-backend.vercel.app'
  // const host = 'http://127.0.0.1:8000'
  const [username1, setUsername1] = useState('');
  const [password1, setPassword1] = useState('');
  const [seeLoginPassword, setSeeLoginPassword] = useState(true)
  const [loginSuccess, setLoginSuccess] = useState(false)
  const [data, setData] = useState([])
  const [question, setQuestion] = useState(1)
  const [image, setImage] = useState(0)
  const [tempData, setTempData] = useState([])
  const [selectedValue1, setSelectedValue1] = useState(1);
  const [user, setUser] = useState({})
  const [loginn, setLogin] = useState(true)
  const [name2, setName2] = useState('')
  const [username2, setUsername2] = useState('')
  const [password2, setPassword2] = useState('')
  const [cpassword2, setCpassword2] = useState('')
  const [seeSignup, setSeeSignup] = useState(true)
  const [seeSignup2, setSeeSignup2] = useState(true)
  const [grade, setGrade] = useState([])
  const [sec, setSec] = useState(60)
  const [response, setResponse] = useState(0)
  const [open, setOpen] = useState(false)
  const [alertStatement, setAlertStatement] = useState('')
  useEffect(()=>{
    if (response === 1)
    {
      createImages2();
    } 
  }, [response])
  const handleName2 = e =>{
    setName2(e.target.value)
  }
  const handleUsername2 = e =>{
    setUsername2(e.target.value)
  }
  const handlePassword2 = e =>{
    setPassword2(e.target.value)
  }
  const handleCpassword2 = e =>{
    setCpassword2(e.target.value)
  }
  const handleRadioChange1 = (event) => {
    setSelectedValue1(event.target.value);
  };
  const [selectedValue2, setSelectedValue2] = useState(1);
  const handleRadioChange2 = (event) => {
    setSelectedValue2(event.target.value);
  };
  const [selectedValue3, setSelectedValue3] = useState(1);
  const handleRadioChange3 = (event) => {
    setSelectedValue3(event.target.value);
  };
  const [selectedValue4, setSelectedValue4] = useState(1);
  const handleRadioChange4 = (event) => {
    setSelectedValue4(event.target.value);
  };
  const [selectedValue5, setSelectedValue5] = useState(1);
  const handleRadioChange5 = (event) => {
    setSelectedValue5(event.target.value);
  };
  const handleUsernameChange1 = (event) => {
    setUsername1(event.target.value);
  };
  const handlePasswordChange1 = (event) => {
    setPassword1(event.target.value);
  };
  const handleSubmit1 = () => {
    if ( username1==='gennotate' || password1==='gennotate123456' ) {
      stats();
    } else {
      if (username1.length < 5 || username1.length > 40) {
        setAlertStatement('Wrong username or password. Please try again!')
        setOpen(true)
      } else if (password1.length < 8) {
        setAlertStatement('Wrong username or password. Please try again!')
        setOpen(true)
      } else {
        setAlertStatement('Loading...')
        setOpen(true)
        login({ username: username1, password: password1 })
      }
    }
  };
  const handleSubmit2 = () => {
    if (name2.length < 5 || name2.length > 40) {
      setAlertStatement('Name must have atleast 5 and atmost 40 characters')
      setOpen(true)
    } else if (username2.length < 5 || username2.length > 40) {
      setAlertStatement('Username must have atleast 5 and atmost 40 characters')
      setOpen(true)
    } else if (password2.length < 8) {
      setAlertStatement('Password must contain atleast 8 characters')
      setOpen(true)
    } else if (password2.length !== cpassword2.length) {
      setAlertStatement("Password didn't match")
      setOpen(true)
    } else {
      setAlertStatement('Loading...')
      setOpen(true)
      setSec(60)
      setResponse(0)
      signup({ username: username2, password: password2, first_name: name2 })
    }
  };
  const stats = () => {
    fetch(`${host}/stats/`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      // body: JSON.stringify(obj),
    })
    .then((response) => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then((responseData) => {
      console.log(responseData)
    })
    .catch((error) => {
      console.log(error)
    });
  };
  const login = (obj) => {
    fetch(`${host}/api/login/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(obj),
    })
    .then((response) => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then((responseData) => {
      if (responseData.token) {
        setLoginSuccess(true);
        userImages({ user_id: responseData.user.id })
        setUser(responseData.user);
        setAlertStatement('')
        setOpen(false)
      }
    })
    .catch((error) => {
      console.log(error)
      setAlertStatement('Wrong username or password. Please try again!')
      setOpen(true)
    });
  };
  const signup = (obj) => {
    fetch(`${host}/api/signup/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(obj),
    })
    .then((response) => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then((responseData) => {
      if (responseData.token) {
        setLogin(true)
        setUser(responseData.user);
        setResponse(1)
        setAlertStatement('')
        setOpen(false)
      }
    })
    .catch((error) => {
      console.log(error)
      setAlertStatement('User with this username already exists. Kindly change the username.')
      setOpen(true)
    });
  };
  const userImages = (obj) => {
    fetch(`${host}/userImages/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(obj),
    })
    .then((response) => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then((responseData) => {
      setData(responseData)
      const grades = responseData.map(item => item.grade);
      setGrade(grades)
    })
    .catch((error) => {
      console.log(error)
    });
  };
  const updateImage = (obj) => {
    fetch(`${host}/updateImage/`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(obj),
    })
    .then((response) => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then((responseData) => {
    })
    .catch((error) => {
      console.log(error)
    });
  };
  const createImages = (obj) => {
    fetch(`${host}/createImage/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(obj),
    })
    .then((response) => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then((responseData) => {
      setSec(60)
      setResponse(0)
      setUser({})
    })
    .catch((error) => {
      console.log(error)
    });
  };
  const printCSV = () => {
    fetch(`${host}/printCSV/`, {
      method: 'GET',
      headers: {
        'Content-Type': 'text/csv',
      },
    })
    .then((response) => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json(); // Get the response as a binary blob
      // return response.blob(); // Get the response as a binary blob
    })
    .then((responseData) => {
      console.log(responseData)
      // // Create a temporary URL for the blob
      // const url = window.URL.createObjectURL(blob);
      // // Create a link element to trigger the download
      // const a = document.createElement('a');
      // a.href = url;
      // a.download = 'image_quality.csv';
      // // Trigger the download by clicking the link
      // document.body.appendChild(a);
      // a.click();
      // // Clean up by revoking the URL
      // window.URL.revokeObjectURL(url);
    })
    .catch((error) => {
      console.log(error);
    });
  };  
  const createImages2 = () =>{
        createImages({ user: user.id })
  }
  return (
    <Box sx={{ width: '100vw', height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <Routes>
        {response===0?<Route path="/" element={<Authenticate variables={{ username1, password1, seeLoginPassword, setSeeLoginPassword, handleUsernameChange1, handlePasswordChange1, handleSubmit1, loginSuccess, loginn, setLogin, handleName2, handleUsername2, handlePassword2, handleCpassword2, name2, username2, password2, cpassword2, seeSignup, setSeeSignup, seeSignup2, setSeeSignup2, handleSubmit2, open, setOpen, alertStatement, setAlertStatement }} />} />:<Route path="/" element={<Temp variables={{ sec, setSec }}/>} />}
        <Route path="/questionnare" element={<Question variables={{ question, setQuestion, image, setImage, data, tempData, setTempData, selectedValue1, handleRadioChange1, selectedValue2, handleRadioChange2, selectedValue3, handleRadioChange3, selectedValue4, handleRadioChange4, updateImage, user, setData, grade, setGrade, selectedValue5, handleRadioChange5 }}/>} />
      </Routes>
      {/* <Button onClick={()=>{ console.log('object'); printCSV();}}>Print CSV</Button> */}
    </Box>
  );
}

export default App;
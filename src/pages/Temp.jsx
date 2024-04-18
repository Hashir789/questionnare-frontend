import { Box } from '@mui/material'
import React, { useEffect } from 'react'

const Temp = ({ variables }) => {
    const { setSec, sec } = variables;
    useEffect(()=>{
        setTimeout(()=>{ setSec(sec - 1); }, 1000);
    }, [sec])
  return (
    <Box sx={{ width: '90vw' }}>Account will be created in {sec} seconds. After that, you will be directed to login page to proceed with the login process.</Box>
  )
}

export default Temp

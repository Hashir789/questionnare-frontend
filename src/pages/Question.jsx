import React, { useEffect, useState } from 'react'
import { Box } from '@mui/material'
import Navbar from '../components/Navbar'
import QuestionSection from '../components/QuestionSection'

const Question = ({ variables }) => {
  const { question, setQuestion, image, setImage, data, tempData, setTempData, selectedValue1, handleRadioChange1, selectedValue2, handleRadioChange2, selectedValue3, handleRadioChange3, selectedValue5, handleRadioChange5, selectedValue4, handleRadioChange4, updateImage, user, setData, grade, setGrade } = variables;
  return (
    <Box sx={{ width: '100vw' }}>
      <Navbar variables={{ question, image, data }}/>
      <QuestionSection sx={{ width: '100vw' }} variables={{ question, setQuestion, image, setImage, data, tempData, setTempData, selectedValue1, handleRadioChange1, selectedValue2, handleRadioChange2, selectedValue3, handleRadioChange3, selectedValue4, handleRadioChange4, updateImage, user, setData, grade, setGrade, selectedValue5, handleRadioChange5 }}/>
    </Box>
  )
}

export default Question
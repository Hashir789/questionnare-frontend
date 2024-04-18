import React, { useEffect, useState } from 'react';
import { Box, Grid } from '@mui/material';
import Question1 from './Question1';
import Question2 from './Question2';
import Question3 from './Question3';
import Question4 from './Question4';

const QuestionSection = ({ variables }) => {
  const { question, setQuestion, image, setImage, data, selectedValue1, handleRadioChange1, selectedValue2, handleRadioChange2, selectedValue3, handleRadioChange3, selectedValue4, handleRadioChange4, updateImage, user, setData, grade, setGrade, end, useEnd } = variables;
  const [imageUrl, setImageUrl] = useState('');
  useEffect(() => {
    if (data[image]) {
      setImageUrl(data[image].urll);
    }
  }, [image, data]);
  let temp = -1
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
      <Box sx={{ display: 'flex', flexDirection: { sm: 'row', xs: 'column' }, height: '100vh' }}>
        <Box sx={{ width: { sm: '40%', xs: '100vw' }, display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'grey' }}>
          <img src={imageUrl} alt='Image' style={{ width: '80%' }}/>
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: '60%', marginTop: '50px' }}>
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', flexDirection: 'column' }}>
            {question===1 && <Question1 variables={{ question, setQuestion, selectedValue1, handleRadioChange1 }}/>}
            {question===2 && <Question2 variables={{ question, setQuestion, selectedValue2, handleRadioChange2 }}/>}
            {question===3 && <Question3 variables={{ question, setQuestion, selectedValue3, handleRadioChange3 }}/>}
            {question===4 && <Question4 variables={{ question, setQuestion, image, setImage, selectedValue1, selectedValue2, selectedValue3, selectedValue4, handleRadioChange4, updateImage, user, data, setData, setGrade, grade, end, useEnd }}/>}
            <Box mt={5}>{end}</Box>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }} mx={3}>
          <Box>
          <Box sx={{ display: 'flex', flexDirection: 'row' }}>
            {/* Box 1 */}
            <Box sx={{ color: image === 0 ? 'black' : 'white', fontWeight: image === 0 ? 700 : 500, background: grade[0] === true ? '#1976d2' : 'rgba(25, 118, 210, 0.6)', margin: '2px', width: '30px', height: '30px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '5px', '&:hover': { cursor: 'pointer' }}} onClick={()=>{ setImage(0); setQuestion(1); }}>
              {1}
            </Box>
            {/* Box 2 */}
            <Box sx={{ color: image === 1 ? 'black' : 'white', fontWeight: image === 1 ? 700 : 500, background: grade[1] === true ? '#1976d2' : 'rgba(25, 118, 210, 0.6)', margin: '2px', width: '30px', height: '30px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '5px', '&:hover': { cursor: 'pointer' } }} onClick={()=>{ setImage(1); setQuestion(1); }}>
              {2}
            </Box>
            {/* Box 3 */}
            <Box sx={{ color: image === 2 ? 'black' : 'white', fontWeight: image === 2 ? 700 : 500, background: grade[2] === true ? '#1976d2' : 'rgba(25, 118, 210, 0.6)', margin: '2px', width: '30px', height: '30px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '5px', '&:hover': { cursor: 'pointer' } }} onClick={()=>{ setImage(2); setQuestion(1); }}>
              {3}
            </Box>
            {/* Box 4 */}
            <Box sx={{ color: image === 3 ? 'black' : 'white', fontWeight: image === 3 ? 700 : 500, background: grade[3] === true ? '#1976d2' : 'rgba(25, 118, 210, 0.6)', margin: '2px', width: '30px', height: '30px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '5px', '&:hover': { cursor: 'pointer' } }} onClick={()=>{ setImage(3); setQuestion(1); }}>
              {4}
            </Box>
            {/* Box 5 */}
            <Box sx={{ color: image === 4 ? 'black' : 'white', fontWeight: image === 4 ? 700 : 500, background: grade[4] === true ? '#1976d2' : 'rgba(25, 118, 210, 0.6)', margin: '2px', width: '30px', height: '30px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '5px', '&:hover': { cursor: 'pointer' } }} onClick={()=>{ setImage(4); setQuestion(1); }}>
              {5}
            </Box>
            {/* Box 6 */}
            <Box sx={{ color: image === 5 ? 'black' : 'white', fontWeight: image === 5 ? 700 : 500, background: grade[5] === true ? '#1976d2' : 'rgba(25, 118, 210, 0.6)', margin: '2px', width: '30px', height: '30px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '5px', '&:hover': { cursor: 'pointer' } }} onClick={()=>{ setImage(5); setQuestion(1); }}>
              {6}
            </Box>
            {/* Box 7 */}
            <Box sx={{ color: image === 6 ? 'black' : 'white', fontWeight: image === 6 ? 700 : 500, background: grade[6] === true ? '#1976d2' : 'rgba(25, 118, 210, 0.6)', margin: '2px', width: '30px', height: '30px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '5px', '&:hover': { cursor: 'pointer' } }} onClick={()=>{ setImage(6); setQuestion(1); }}>
              {7}
            </Box>
            {/* Box 8 */}
            <Box sx={{ color: image === 7 ? 'black' : 'white', fontWeight: image === 7 ? 700 : 500, background: grade[7] === true ? '#1976d2' : 'rgba(25, 118, 210, 0.6)', margin: '2px', width: '30px', height: '30px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '5px', '&:hover': { cursor: 'pointer' } }} onClick={()=>{ setImage(7); setQuestion(1); }}>
              {8}
            </Box>
            {/* Box 9 */}
            <Box sx={{ color: image === 8 ? 'black' : 'white', fontWeight: image === 8 ? 700 : 500, background: grade[8] === true ? '#1976d2' : 'rgba(25, 118, 210, 0.6)', margin: '2px', width: '30px', height: '30px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '5px', '&:hover': { cursor: 'pointer' } }} onClick={()=>{ setImage(8); setQuestion(1); }}>
              {9}
            </Box>
            {/* Box 10 */}
            <Box sx={{ color: image === 9 ? 'black' : 'white', fontWeight: image === 9 ? 700 : 500, background: grade[9] === true ? '#1976d2' : 'rgba(25, 118, 210, 0.6)', margin: '2px', width: '30px', height: '30px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '5px', '&:hover': { cursor: 'pointer' } }} onClick={()=>{ setImage(9); setQuestion(1); }}>
              {10}
            </Box>
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'row' }}>
          <Box sx={{ color: image === 10 ? 'black' : 'white', fontWeight: image === 10 ? 700 : 500, background: grade[10] === true ? '#1976d2' : 'rgba(25, 118, 210, 0.6)', margin: '2px', width: '30px', height: '30px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '5px', '&:hover': { cursor: 'pointer' } }} onClick={()=>{ setImage(10); setQuestion(1); }}>
            {11}
          </Box>
          {/* Box 11 */}
          <Box sx={{ color: image === 11 ? 'black' : 'white', fontWeight: image === 11 ? 700 : 500, background: grade[11] === true ? '#1976d2' : 'rgba(25, 118, 210, 0.6)', margin: '2px', width: '30px', height: '30px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '5px', '&:hover': { cursor: 'pointer' } }} onClick={()=>{ setImage(11); setQuestion(1); }}>
            {12}
          </Box>
          {/* Box 12 */}
          <Box sx={{ color: image === 12 ? 'black' : 'white', fontWeight: image === 12 ? 700 : 500, background: grade[12] === true ? '#1976d2' : 'rgba(25, 118, 210, 0.6)', margin: '2px', width: '30px', height: '30px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '5px', '&:hover': { cursor: 'pointer' } }} onClick={()=>{ setImage(12); setQuestion(1); }}>
            {13}
          </Box>
          {/* Box 13 */}
          <Box sx={{ color: image === 13 ? 'black' : 'white', fontWeight: image === 13 ? 700 : 500, background: grade[13] === true ? '#1976d2' : 'rgba(25, 118, 210, 0.6)', margin: '2px', width: '30px', height: '30px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '5px', '&:hover': { cursor: 'pointer' } }} onClick={()=>{ setImage(13); setQuestion(1); }}>
            {14}
          </Box>
          {/* Box 14 */}
          <Box sx={{ color: image === 14 ? 'black' : 'white', fontWeight: image === 14 ? 700 : 500, background: grade[14] === true ? '#1976d2' : 'rgba(25, 118, 210, 0.6)', margin: '2px', width: '30px', height: '30px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '5px', '&:hover': { cursor: 'pointer' } }} onClick={()=>{ setImage(14); setQuestion(1); }}>
            {15}
          </Box>
          {/* Box 15 */}
          <Box sx={{ color: image === 15 ? 'black' : 'white', fontWeight: image === 15 ? 700 : 500, background: grade[15] === true ? '#1976d2' : 'rgba(25, 118, 210, 0.6)', margin: '2px', width: '30px', height: '30px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '5px', '&:hover': { cursor: 'pointer' } }} onClick={()=>{ setImage(15); setQuestion(1); }}>
            {16}
          </Box>
          {/* Box 16 */}
          <Box sx={{ color: image === 16 ? 'black' : 'white', fontWeight: image === 16 ? 700 : 500, background: grade[16] === true ? '#1976d2' : 'rgba(25, 118, 210, 0.6)', margin: '2px', width: '30px', height: '30px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '5px', '&:hover': { cursor: 'pointer' } }} onClick={()=>{ setImage(16); setQuestion(1); }}>
            {17}
          </Box>
          {/* Box 17 */}
          <Box sx={{ color: image === 17 ? 'black' : 'white', fontWeight: image === 17 ? 700 : 500, background: grade[17] === true ? '#1976d2' : 'rgba(25, 118, 210, 0.6)', margin: '2px', width: '30px', height: '30px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '5px', '&:hover': { cursor: 'pointer' } }} onClick={()=>{ setImage(17); setQuestion(1); }}>
            {18}
          </Box>
          {/* Box 18 */}
          <Box sx={{ color: image === 18 ? 'black' : 'white', fontWeight: image === 18 ? 700 : 500, background: grade[18] === true ? '#1976d2' : 'rgba(25, 118, 210, 0.6)', margin: '2px', width: '30px', height: '30px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '5px', '&:hover': { cursor: 'pointer' } }} onClick={()=>{ setImage(18); setQuestion(1); }}>
            {19}
          </Box>
          {/* Box 19 */}
          <Box sx={{ color: image === 19 ? 'black' : 'white', fontWeight: image === 19 ? 700 : 500, background: grade[19] === true ? '#1976d2' : 'rgba(25, 118, 210, 0.6)', margin: '2px', width: '30px', height: '30px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '5px', '&:hover': { cursor: 'pointer' } }} onClick={()=>{ setImage(19); setQuestion(1); }}>
            {20}
          </Box>
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'row' }}>
          {/* Box 20 */}
          <Box sx={{ color: image === 20 ? 'black' : 'white', fontWeight: image === 20 ? 700 : 500, background: grade[20] === true ? '#1976d2' : 'rgba(25, 118, 210, 0.6)', margin: '2px', width: '30px', height: '30px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '5px', '&:hover': { cursor: 'pointer' } }} onClick={()=>{ setImage(20); setQuestion(1); }}>
            {21}
          </Box>
          {/* Box 21 */}
          <Box sx={{ color: image === 21 ? 'black' : 'white', fontWeight: image === 21 ? 700 : 500, background: grade[21] === true ? '#1976d2' : 'rgba(25, 118, 210, 0.6)', margin: '2px', width: '30px', height: '30px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '5px', '&:hover': { cursor: 'pointer' } }} onClick={()=>{ setImage(21); setQuestion(1); }}>
            {22}
          </Box>
          {/* Box 22 */}
          <Box sx={{ color: image === 22 ? 'black' : 'white', fontWeight: image === 22 ? 700 : 500, background: grade[22] === true ? '#1976d2' : 'rgba(25, 118, 210, 0.6)', margin: '2px', width: '30px', height: '30px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '5px', '&:hover': { cursor: 'pointer' } }} onClick={()=>{ setImage(22); setQuestion(1); }}>
            {23}
          </Box>
          {/* Box 23 */}
          <Box sx={{ color: image === 23 ? 'black' : 'white', fontWeight: image === 23 ? 700 : 500, background: grade[23] === true ? '#1976d2' : 'rgba(25, 118, 210, 0.6)', margin: '2px', width: '30px', height: '30px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '5px', '&:hover': { cursor: 'pointer' } }} onClick={()=>{ setImage(23); setQuestion(1); }}>
            {24}
          </Box>
          {/* Box 24 */}
          <Box sx={{ color: image === 24 ? 'black' : 'white', fontWeight: image === 24 ? 700 : 500, background: grade[24] === true ? '#1976d2' : 'rgba(25, 118, 210, 0.6)', margin: '2px', width: '30px', height: '30px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '5px', '&:hover': { cursor: 'pointer' } }} onClick={()=>{ setImage(24); setQuestion(1); }}>
            {25}
          </Box>
          {/* Box 25 */}
          <Box sx={{ color: image === 25 ? 'black' : 'white', fontWeight: image === 25 ? 700 : 500, background: grade[25] === true ? '#1976d2' : 'rgba(25, 118, 210, 0.6)', margin: '2px', width: '30px', height: '30px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '5px', '&:hover': { cursor: 'pointer' } }} onClick={()=>{ setImage(25); setQuestion(1); }}>
            {26}
          </Box>
          {/* Box 26 */}
          <Box sx={{ color: image === 26 ? 'black' : 'white', fontWeight: image === 26 ? 700 : 500, background: grade[26] === true ? '#1976d2' : 'rgba(25, 118, 210, 0.6)', margin: '2px', width: '30px', height: '30px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '5px', '&:hover': { cursor: 'pointer' } }} onClick={()=>{ setImage(26); setQuestion(1); }}>
            {27}
          </Box>
          {/* Box 27 */}
          <Box sx={{ color: image === 27 ? 'black' : 'white', fontWeight: image === 27 ? 700 : 500, background: grade[27] === true ? '#1976d2' : 'rgba(25, 118, 210, 0.6)', margin: '2px', width: '30px', height: '30px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '5px', '&:hover': { cursor: 'pointer' } }} onClick={()=>{ setImage(27); setQuestion(1); }}>
            {28}
          </Box>
          {/* Box 28 */}
          <Box sx={{ color: image === 28 ? 'black' : 'white', fontWeight: image === 28 ? 700 : 500, background: grade[28] === true ? '#1976d2' : 'rgba(25, 118, 210, 0.6)', margin: '2px', width: '30px', height: '30px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '5px', '&:hover': { cursor: 'pointer' } }} onClick={()=>{ setImage(28); setQuestion(1); }}>
            {29}
          </Box>
          {/* Box 29 */}
          <Box sx={{ color: image === 29 ? 'black' : 'white', fontWeight: image === 29 ? 700 : 500, background: grade[29] === true ? '#1976d2' : 'rgba(25, 118, 210, 0.6)', margin: '2px', width: '30px', height: '30px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '5px', '&:hover': { cursor: 'pointer' } }} onClick={()=>{ setImage(29); setQuestion(1); }}>
            {30}
          </Box>
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'row' }}>
        {/* Box 30 */}
        <Box sx={{ color: image === 30 ? 'black' : 'white', fontWeight: image === 30 ? 700 : 500, background: grade[30] === true ? '#1976d2' : 'rgba(25, 118, 210, 0.6)', margin: '2px', width: '30px', height: '30px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '5px', '&:hover': { cursor: 'pointer' } }} onClick={()=>{ setImage(30); setQuestion(1); }}>
          {31}
        </Box>
        {/* Box 31 */}
        <Box sx={{ color: image === 31 ? 'black' : 'white', fontWeight: image === 31 ? 700 : 500, background: grade[31] === true ? '#1976d2' : 'rgba(25, 118, 210, 0.6)', margin: '2px', width: '30px', height: '30px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '5px', '&:hover': { cursor: 'pointer' } }} onClick={()=>{ setImage(31); setQuestion(1); }}>
          {32}
        </Box>
        {/* Box 32 */}
        <Box sx={{ color: image === 32 ? 'black' : 'white', fontWeight: image === 32 ? 700 : 500, background: grade[32] === true ? '#1976d2' : 'rgba(25, 118, 210, 0.6)', margin: '2px', width: '30px', height: '30px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '5px', '&:hover': { cursor: 'pointer' } }} onClick={()=>{ setImage(32); setQuestion(1); }}>
          {33}
        </Box>
        {/* Box 33 */}
        <Box sx={{ color: image === 33 ? 'black' : 'white', fontWeight: image === 33 ? 700 : 500, background: grade[33] === true ? '#1976d2' : 'rgba(25, 118, 210, 0.6)', margin: '2px', width: '30px', height: '30px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '5px', '&:hover': { cursor: 'pointer' } }} onClick={()=>{ setImage(33); setQuestion(1); }}>
          {34}
        </Box>
        {/* Box 34 */}
        <Box sx={{ color: image === 34 ? 'black' : 'white', fontWeight: image === 34 ? 700 : 500, background: grade[34] === true ? '#1976d2' : 'rgba(25, 118, 210, 0.6)', margin: '2px', width: '30px', height: '30px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '5px', '&:hover': { cursor: 'pointer' } }} onClick={()=>{ setImage(34); setQuestion(1); }}>
          {35}
        </Box>
        {/* Box 35 */}
        <Box sx={{ color: image === 35 ? 'black' : 'white', fontWeight: image === 35 ? 700 : 500, background: grade[35] === true ? '#1976d2' : 'rgba(25, 118, 210, 0.6)', margin: '2px', width: '30px', height: '30px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '5px', '&:hover': { cursor: 'pointer' } }} onClick={()=>{ setImage(35); setQuestion(1); }}>
          {36}
        </Box>
        {/* Box 36 */}
        <Box sx={{ color: image === 36 ? 'black' : 'white', fontWeight: image === 36 ? 700 : 500, background: grade[36] === true ? '#1976d2' : 'rgba(25, 118, 210, 0.6)', margin: '2px', width: '30px', height: '30px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '5px', '&:hover': { cursor: 'pointer' } }} onClick={()=>{ setImage(36); setQuestion(1); }}>
          {37}
        </Box>
        {/* Box 37 */}
        <Box sx={{ color: image === 37 ? 'black' : 'white', fontWeight: image === 37 ? 700 : 500, background: grade[37] === true ? '#1976d2' : 'rgba(25, 118, 210, 0.6)', margin: '2px', width: '30px', height: '30px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '5px', '&:hover': { cursor: 'pointer' } }} onClick={()=>{ setImage(37); setQuestion(1); }}>
          {38}
        </Box>
        {/* Box 38 */}
        <Box sx={{ color: image === 38 ? 'black' : 'white', fontWeight: image === 38 ? 700 : 500, background: grade[38] === true ? '#1976d2' : 'rgba(25, 118, 210, 0.6)', margin: '2px', width: '30px', height: '30px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '5px', '&:hover': { cursor: 'pointer' } }} onClick={()=>{ setImage(38); setQuestion(1); }}>
          {39}
        </Box>
        {/* Box 39 */}
        <Box sx={{ color: image === 39 ? 'black' : 'white', fontWeight: image === 39 ? 700 : 500, background: grade[39] === true ? '#1976d2' : 'rgba(25, 118, 210, 0.6)', margin: '2px', width: '30px', height: '30px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '5px', '&:hover': { cursor: 'pointer' } }} onClick={()=>{ setImage(39); setQuestion(1); }}>
          {40}
        </Box>
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'row' }}>
        {/* Box 40 */}
        <Box sx={{ color: image === 40 ? 'black' : 'white', fontWeight: image === 40 ? 700 : 500, background: grade[40] === true ? '#1976d2' : 'rgba(25, 118, 210, 0.6)', margin: '2px', width: '30px', height: '30px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '5px', '&:hover': { cursor: 'pointer' } }} onClick={()=>{ setImage(40); setQuestion(1); }}>
          {41}
        </Box>
        {/* Box 41 */}
        <Box sx={{ color: image === 41 ? 'black' : 'white', fontWeight: image === 41 ? 700 : 500, background: grade[41] === true ? '#1976d2' : 'rgba(25, 118, 210, 0.6)', margin: '2px', width: '30px', height: '30px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '5px', '&:hover': { cursor: 'pointer' } }} onClick={()=>{ setImage(41); setQuestion(1); }}>
          {42}
        </Box>
        {/* Box 42 */}
        <Box sx={{ color: image === 42 ? 'black' : 'white', fontWeight: image === 42 ? 700 : 500, background: grade[42] === true ? '#1976d2' : 'rgba(25, 118, 210, 0.6)', margin: '2px', width: '30px', height: '30px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '5px', '&:hover': { cursor: 'pointer' } }} onClick={()=>{ setImage(42); setQuestion(1); }}>
          {43}
        </Box>
        {/* Box 43 */}
        <Box sx={{ color: image === 43 ? 'black' : 'white', fontWeight: image === 43 ? 700 : 500, background: grade[43] === true ? '#1976d2' : 'rgba(25, 118, 210, 0.6)', margin: '2px', width: '30px', height: '30px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '5px', '&:hover': { cursor: 'pointer' } }} onClick={()=>{ setImage(43); setQuestion(1); }}>
          {44}
        </Box>
        {/* Box 44 */}
        <Box sx={{ color: image === 44 ? 'black' : 'white', fontWeight: image === 44 ? 700 : 500, background: grade[44] === true ? '#1976d2' : 'rgba(25, 118, 210, 0.6)', margin: '2px', width: '30px', height: '30px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '5px', '&:hover': { cursor: 'pointer' } }} onClick={()=>{ setImage(44); setQuestion(1); }}>
          {45}
        </Box>
        {/* Box 45 */}
        <Box sx={{ color: image === 45 ? 'black' : 'white', fontWeight: image === 45 ? 700 : 500, background: grade[45] === true ? '#1976d2' : 'rgba(25, 118, 210, 0.6)', margin: '2px', width: '30px', height: '30px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '5px', '&:hover': { cursor: 'pointer' } }} onClick={()=>{ setImage(45); setQuestion(1); }}>
          {46}
        </Box>
        {/* Box 46 */}
        <Box sx={{ color: image === 46 ? 'black' : 'white', fontWeight: image === 46 ? 700 : 500, background: grade[46] === true ? '#1976d2' : 'rgba(25, 118, 210, 0.6)', margin: '2px', width: '30px', height: '30px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '5px', '&:hover': { cursor: 'pointer' } }} onClick={()=>{ setImage(46); setQuestion(1); }}>
          {47}
        </Box>
        {/* Box 47 */}
        <Box sx={{ color: image === 47 ? 'black' : 'white', fontWeight: image === 47 ? 700 : 500, background: grade[47] === true ? '#1976d2' : 'rgba(25, 118, 210, 0.6)', margin: '2px', width: '30px', height: '30px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '5px', '&:hover': { cursor: 'pointer' } }} onClick={()=>{ setImage(47); setQuestion(1); }}>
          {48}
        </Box>
        {/* Box 48 */}
        <Box sx={{ color: image === 48 ? 'black' : 'white', fontWeight: image === 48 ? 700 : 500, background: grade[48] === true ? '#1976d2' : 'rgba(25, 118, 210, 0.6)', margin: '2px', width: '30px', height: '30px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '5px', '&:hover': { cursor: 'pointer' } }} onClick={()=>{ setImage(48); setQuestion(1); }}>
          {49}
        </Box>
        {/* Box 49 */}
        <Box sx={{ color: image === 49 ? 'black' : 'white', fontWeight: image === 49 ? 700 : 500, background: grade[49] === true ? '#1976d2' : 'rgba(25, 118, 210, 0.6)', margin: '2px', width: '30px', height: '30px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '5px', '&:hover': { cursor: 'pointer' } }} onClick={()=>{ setImage(49); setQuestion(1); }}>
          {50}
        </Box>
      </Box>
      <Box sx={{ display: 'flex', flexDirection: 'row' }}>
      {/* Box 50 */}
      <Box sx={{ color: image === 50 ? 'black' : 'white', fontWeight: image === 50 ? 700 : 500, background: grade[50] === true ? '#1976d2' : 'rgba(25, 118, 210, 0.6)', margin: '2px', width: '30px', height: '30px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '5px', '&:hover': { cursor: 'pointer' } }} onClick={()=>{ setImage(50); setQuestion(1); }}>
        {51}
      </Box>
      {/* Box 51 */}
      <Box sx={{ color: image === 51 ? 'black' : 'white', fontWeight: image === 51 ? 700 : 500, background: grade[51] === true ? '#1976d2' : 'rgba(25, 118, 210, 0.6)', margin: '2px', width: '30px', height: '30px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '5px', '&:hover': { cursor: 'pointer' } }} onClick={()=>{ setImage(51); setQuestion(1); }}>
        {52}
      </Box>
        {/* Box 52 */}
        <Box sx={{ color: image === 52 ? 'black' : 'white', fontWeight: image === 52 ? 700 : 500, background: grade[52] === true ? '#1976d2' : 'rgba(25, 118, 210, 0.6)', margin: '2px', width: '30px', height: '30px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '5px', '&:hover': { cursor: 'pointer' } }} onClick={()=>{ setImage(52); setQuestion(1); }}>
          {53}
        </Box>
        {/* Box 53 */}
        <Box sx={{ color: image === 53 ? 'black' : 'white', fontWeight: image === 53 ? 700 : 500, background: grade[53] === true ? '#1976d2' : 'rgba(25, 118, 210, 0.6)', margin: '2px', width: '30px', height: '30px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '5px', '&:hover': { cursor: 'pointer' } }} onClick={()=>{ setImage(53); setQuestion(1); }}>
          {54}
        </Box>
        {/* Box 54 */}
        <Box sx={{ color: image === 54 ? 'black' : 'white', fontWeight: image === 54 ? 700 : 500, background: grade[54] === true ? '#1976d2' : 'rgba(25, 118, 210, 0.6)', margin: '2px', width: '30px', height: '30px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '5px', '&:hover': { cursor: 'pointer' } }} onClick={()=>{ setImage(54); setQuestion(1); }}>
          {55}
        </Box>
        {/* Box 55 */}
        <Box sx={{ color: image === 55 ? 'black' : 'white', fontWeight: image === 55 ? 700 : 500, background: grade[55] === true ? '#1976d2' : 'rgba(25, 118, 210, 0.6)', margin: '2px', width: '30px', height: '30px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '5px', '&:hover': { cursor: 'pointer' } }} onClick={()=>{ setImage(55); setQuestion(1); }}>
          {56}
        </Box>
        {/* Box 56 */}
        <Box sx={{ color: image === 56 ? 'black' : 'white', fontWeight: image === 56 ? 700 : 500, background: grade[56] === true ? '#1976d2' : 'rgba(25, 118, 210, 0.6)', margin: '2px', width: '30px', height: '30px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '5px', '&:hover': { cursor: 'pointer' } }} onClick={()=>{ setImage(56); setQuestion(1); }}>
          {57}
        </Box>
        {/* Box 57 */}
        <Box sx={{ color: image === 57 ? 'black' : 'white', fontWeight: image === 57 ? 700 : 500, background: grade[57] === true ? '#1976d2' : 'rgba(25, 118, 210, 0.6)', margin: '2px', width: '30px', height: '30px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '5px', '&:hover': { cursor: 'pointer' } }} onClick={()=>{ setImage(57); setQuestion(1); }}>
          {58}
        </Box>
        {/* Box 58 */}
        <Box sx={{ color: image === 58 ? 'black' : 'white', fontWeight: image === 58 ? 700 : 500, background: grade[58] === true ? '#1976d2' : 'rgba(25, 118, 210, 0.6)', margin: '2px', width: '30px', height: '30px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '5px', '&:hover': { cursor: 'pointer' } }} onClick={()=>{ setImage(58); setQuestion(1); }}>
          {59}
        </Box>
        {/* Box 59 */}
        <Box sx={{ color: image === 59 ? 'black' : 'white', fontWeight: image === 59 ? 700 : 500, background: grade[59] === true ? '#1976d2' : 'rgba(25, 118, 210, 0.6)', margin: '2px', width: '30px', height: '30px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '5px', '&:hover': { cursor: 'pointer' } }} onClick={()=>{ setImage(59); setQuestion(1); }}>
          {60}
        </Box>
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'row' }}>
      {/* Box 60 */}
      <Box sx={{ color: image === 60 ? 'black' : 'white', fontWeight: image === 60 ? 700 : 500, background: grade[60] === true ? '#1976d2' : 'rgba(25, 118, 210, 0.6)', margin: '2px', width: '30px', height: '30px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '5px', '&:hover': { cursor: 'pointer' } }} onClick={()=>{ setImage(60); setQuestion(1); }}>
        {61}
      </Box>
      {/* Box 61 */}
      <Box sx={{ color: image === 61 ? 'black' : 'white', fontWeight: image === 61 ? 700 : 500, background: grade[61] === true ? '#1976d2' : 'rgba(25, 118, 210, 0.6)', margin: '2px', width: '30px', height: '30px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '5px', '&:hover': { cursor: 'pointer' } }} onClick={()=>{ setImage(61); setQuestion(1); }}>
        {62}
      </Box>
      {/* Box 62 */}
      <Box sx={{ color: image === 62 ? 'black' : 'white', fontWeight: image === 62 ? 700 : 500, background: grade[62] === true ? '#1976d2' : 'rgba(25, 118, 210, 0.6)', margin: '2px', width: '30px', height: '30px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '5px', '&:hover': { cursor: 'pointer' } }} onClick={()=>{ setImage(62); setQuestion(1); }}>
        {63}
      </Box>
      {/* Box 63 */}
      <Box sx={{ color: image === 63 ? 'black' : 'white', fontWeight: image === 63 ? 700 : 500, background: grade[63] === true ? '#1976d2' : 'rgba(25, 118, 210, 0.6)', margin: '2px', width: '30px', height: '30px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '5px', '&:hover': { cursor: 'pointer' } }} onClick={()=>{ setImage(63); setQuestion(1); }}>
        {64}
      </Box>
      {/* Box 64 */}
      <Box sx={{ color: image === 64 ? 'black' : 'white', fontWeight: image === 64 ? 700 : 500, background: grade[64] === true ? '#1976d2' : 'rgba(25, 118, 210, 0.6)', margin: '2px', width: '30px', height: '30px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '5px', '&:hover': { cursor: 'pointer' } }} onClick={()=>{ setImage(64); setQuestion(1); }}>
        {65}
      </Box>
      {/* Box 65 */}
      <Box sx={{ color: image === 65 ? 'black' : 'white', fontWeight: image === 65 ? 700 : 500, background: grade[65] === true ? '#1976d2' : 'rgba(25, 118, 210, 0.6)', margin: '2px', width: '30px', height: '30px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '5px', '&:hover': { cursor: 'pointer' } }} onClick={()=>{ setImage(65); setQuestion(1); }}>
        {66}
      </Box>
      {/* Box 66 */}
      <Box sx={{ color: image === 66 ? 'black' : 'white', fontWeight: image === 66 ? 700 : 500, background: grade[66] === true ? '#1976d2' : 'rgba(25, 118, 210, 0.6)', margin: '2px', width: '30px', height: '30px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '5px', '&:hover': { cursor: 'pointer' } }} onClick={()=>{ setImage(66); setQuestion(1); }}>
        {67}
      </Box>
      {/* Box 67 */}
      <Box sx={{ color: image === 67 ? 'black' : 'white', fontWeight: image === 67 ? 700 : 500, background: grade[67] === true ? '#1976d2' : 'rgba(25, 118, 210, 0.6)', margin: '2px', width: '30px', height: '30px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '5px', '&:hover': { cursor: 'pointer' } }} onClick={()=>{ setImage(67); setQuestion(1); }}>
        {68}
      </Box>
      {/* Box 68 */}
      <Box sx={{ color: image === 68 ? 'black' : 'white', fontWeight: image === 68 ? 700 : 500, background: grade[68] === true ? '#1976d2' : 'rgba(25, 118, 210, 0.6)', margin: '2px', width: '30px', height: '30px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '5px', '&:hover': { cursor: 'pointer' } }} onClick={()=>{ setImage(68); setQuestion(1); }}>
        {69}
      </Box>
      {/* Box 69 */}
      <Box sx={{ color: image === 69 ? 'black' : 'white', fontWeight: image === 69 ? 700 : 500, background: grade[69] === true ? '#1976d2' : 'rgba(25, 118, 210, 0.6)', margin: '2px', width: '30px', height: '30px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '5px', '&:hover': { cursor: 'pointer' } }} onClick={()=>{ setImage(69); setQuestion(1); }}>
        {70}
      </Box>
    </Box>
    <Box sx={{ display: 'flex', flexDirection: 'row' }}>
    {/* Box 70 */}
    <Box sx={{ color: image === 70 ? 'black' : 'white', fontWeight: image === 70 ? 700 : 500, background: grade[70] === true ? '#1976d2' : 'rgba(25, 118, 210, 0.6)', margin: '2px', width: '30px', height: '30px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '5px', '&:hover': { cursor: 'pointer' } }} onClick={()=>{ setImage(70); setQuestion(1); }}>
      {71}
    </Box>
    {/* Box 71 */}
    <Box sx={{ color: image === 71 ? 'black' : 'white', fontWeight: image === 71 ? 700 : 500, background: grade[71] === true ? '#1976d2' : 'rgba(25, 118, 210, 0.6)', margin: '2px', width: '30px', height: '30px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '5px', '&:hover': { cursor: 'pointer' } }} onClick={()=>{ setImage(71); setQuestion(1); }}>
      {72}
    </Box>
    {/* Box 72 */}
    <Box sx={{ color: image === 72 ? 'black' : 'white', fontWeight: image === 72 ? 700 : 500, background: grade[72] === true ? '#1976d2' : 'rgba(25, 118, 210, 0.6)', margin: '2px', width: '30px', height: '30px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '5px', '&:hover': { cursor: 'pointer' } }} onClick={()=>{ setImage(72); setQuestion(1); }}>
      {73}
    </Box>
    {/* Box 73 */}
    <Box sx={{ color: image === 73 ? 'black' : 'white', fontWeight: image === 73 ? 700 : 500, background: grade[73] === true ? '#1976d2' : 'rgba(25, 118, 210, 0.6)', margin: '2px', width: '30px', height: '30px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '5px', '&:hover': { cursor: 'pointer' } }} onClick={()=>{ setImage(73); setQuestion(1); }}>
      {74}
    </Box>
    {/* Box 74 */}
    <Box sx={{ color: image === 74 ? 'black' : 'white', fontWeight: image === 74 ? 700 : 500, background: grade[74] === true ? '#1976d2' : 'rgba(25, 118, 210, 0.6)', margin: '2px', width: '30px', height: '30px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '5px', '&:hover': { cursor: 'pointer' } }} onClick={()=>{ setImage(74); setQuestion(1); }}>
      {75}
    </Box>
    {/* Box 75 */}
    <Box sx={{ color: image === 75 ? 'black' : 'white', fontWeight: image === 75 ? 700 : 500, background: grade[75] === true ? '#1976d2' : 'rgba(25, 118, 210, 0.6)', margin: '2px', width: '30px', height: '30px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '5px', '&:hover': { cursor: 'pointer' } }} onClick={()=>{ setImage(75); setQuestion(1); }}>
      {76}
    </Box>
    {/* Box 76 */}
    <Box sx={{ color: image === 76 ? 'black' : 'white', fontWeight: image === 76 ? 700 : 500, background: grade[76] === true ? '#1976d2' : 'rgba(25, 118, 210, 0.6)', margin: '2px', width: '30px', height: '30px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '5px', '&:hover': { cursor: 'pointer' } }} onClick={()=>{ setImage(76); setQuestion(1); }}>
      {77}
    </Box>
    {/* Box 77 */}
    <Box sx={{ color: image === 77 ? 'black' : 'white', fontWeight: image === 77 ? 700 : 500, background: grade[77] === true ? '#1976d2' : 'rgba(25, 118, 210, 0.6)', margin: '2px', width: '30px', height: '30px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '5px', '&:hover': { cursor: 'pointer' } }} onClick={()=>{ setImage(77); setQuestion(1); }}>
      {78}
    </Box>
    {/* Box 78 */}
    <Box sx={{ color: image === 78 ? 'black' : 'white', fontWeight: image === 78 ? 700 : 500, background: grade[78] === true ? '#1976d2' : 'rgba(25, 118, 210, 0.6)', margin: '2px', width: '30px', height: '30px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '5px', '&:hover': { cursor: 'pointer' } }} onClick={()=>{ setImage(78); setQuestion(1); }}>
      {79}
    </Box>
    {/* Box 79 */}
    <Box sx={{ color: image === 79 ? 'black' : 'white', fontWeight: image === 79 ? 700 : 500, background: grade[79] === true ? '#1976d2' : 'rgba(25, 118, 210, 0.6)', margin: '2px', width: '30px', height: '30px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '5px', '&:hover': { cursor: 'pointer' } }} onClick={()=>{ setImage(79); setQuestion(1); }}>
      {80}
    </Box>
  </Box>

          </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
export default QuestionSection;
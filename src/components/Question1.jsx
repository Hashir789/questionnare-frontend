import React, { useState } from 'react';
import { Box, Typography, FormControl, FormControlLabel, RadioGroup, Radio, Button } from '@mui/material';

const Question1 = ({ variables }) => {
  const { question, setQuestion, selectedValue1, handleRadioChange1 } = variables
  return (
    <Box sx={{ width: '100%' }} my={1} mx={2}>
        <Typography textAlign='justify'>Depicted image is a high resolution image.</Typography>
        <Box my={2}>
            <FormControl>
                <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                value={selectedValue1}
                onChange={handleRadioChange1}
                name="radio-buttons-group"
                >
                    <FormControlLabel value={1} control={<Radio />} label="Agree" />
                    <FormControlLabel value={2} control={<Radio />} label="Neither agree nor disagree" />
                    <FormControlLabel value={3} control={<Radio />} label="Disagree" />
                </RadioGroup>
            </FormControl>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>            
            <Box></Box>
            <Button variant='contained' onClick={()=>{ setQuestion(question+1); }}>Next</Button>
        </Box>
    </Box>
  );
}
export default Question1;
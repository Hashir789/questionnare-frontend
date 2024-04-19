import React, { useState } from 'react';
import { Box, Typography, FormControl, FormControlLabel, RadioGroup, Radio, Button } from '@mui/material';

const Question2 = ({ variables }) => {
  const { question, setQuestion, selectedValue2, handleRadioChange2 } = variables
  return (
    <Box sx={{ width: '100%' }} my={1} mx={2}>
        <Typography textAlign='justify'>There are no visual disturbances or abnormalities in the retinal OCT images, such as noise, blurring, or inconsistencies in layers, that may indicate the presence of artifacts.</Typography>
        <Box my={2}>
            <FormControl>
                <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                value={selectedValue2}
                onChange={handleRadioChange2}
                name="radio-buttons-group"
                >
                    <FormControlLabel value={1} control={<Radio />} label="Agree" />
                    <FormControlLabel value={2} control={<Radio />} label="Neither agree nor disagree" />
                    <FormControlLabel value={3} control={<Radio />} label="Disagree" />
                </RadioGroup>
            </FormControl>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <Button variant='contained' onClick={()=>{ setQuestion(question-1); }}>Previous</Button>
            <Button variant='contained' onClick={()=>{ setQuestion(question+1); }}>Next</Button>
        </Box>
    </Box>
  );
}
export default Question2;
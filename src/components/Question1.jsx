import React, { useState } from 'react';
import { Box, Typography, FormControl, FormControlLabel, RadioGroup, Radio, Button } from '@mui/material';

const Question1 = ({ variables }) => {
  const { question, setQuestion, selectedValue1, handleRadioChange1 } = variables
  return (
    <Box sx={{ width: '100%' }} my={1} mx={2}>
        <Typography textAlign='justify'>Level of brightness in image?</Typography>
        <Box my={2}>
            <FormControl>
                <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                value={selectedValue1}
                onChange={handleRadioChange1}
                name="radio-buttons-group"
                >
                    <FormControlLabel value={1} control={<Radio />} label="Low" />
                    <FormControlLabel value={2} control={<Radio />} label="Dim" />
                    <FormControlLabel value={3} control={<Radio />} label="Moderate" />
                    <FormControlLabel value={4} control={<Radio />} label="Bright" />
                    <FormControlLabel value={5} control={<Radio />} label="Very Bright" />
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
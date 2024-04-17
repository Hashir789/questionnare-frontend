import React, { useState } from 'react';
import { Box, Typography, FormControl, FormControlLabel, RadioGroup, Radio, Button } from '@mui/material';

const Question3 = ({ variables }) => {
  const { question, setQuestion, selectedValue3, handleRadioChange3 } = variables
  return (
    <Box sx={{ width: '100%' }} my={1} mx={2}>
        <Typography textAlign='justify'>Visibility and integrity of retinal layers?</Typography>
        <Box my={2}>
            <FormControl>
                <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                value={selectedValue3}
                onChange={handleRadioChange3}
                name="radio-buttons-group"
                >
                    <FormControlLabel value={1} control={<Radio />} label="1" />
                    <FormControlLabel value={2} control={<Radio />} label="2" />
                    <FormControlLabel value={3} control={<Radio />} label="3" />
                    <FormControlLabel value={4} control={<Radio />} label="4" />
                    <FormControlLabel value={5} control={<Radio />} label="5" />
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
export default Question3;
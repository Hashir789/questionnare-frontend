import React from 'react';
import { Box, Typography, FormControl, FormControlLabel, RadioGroup, Radio, Button } from '@mui/material';

const Question5 = ({ variables }) => {
  const { question, setQuestion, selectedValue5, handleRadioChange5 } = variables
  return (
    <Box sx={{ width: '100%' }} my={1} mx={2}>
        <Typography textAlign='justify'>Depicted image is a high resolution image.</Typography>
        <Box my={2}>
            <FormControl>
                <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                value={selectedValue5}
                onChange={handleRadioChange5}
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
export default Question5;
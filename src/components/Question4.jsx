import React, { useState, useEffect } from 'react';
import { Box, Typography, FormControl, FormControlLabel, RadioGroup, Radio, Button } from '@mui/material';

const Question4 = ({ variables }) => {
  const { question, setQuestion, image, setImage, selectedValue1, selectedValue2, selectedValue3, selectedValue4, handleRadioChange4, updateImage, user, data, setData, setGrade, grade, end } = variables;
  const [imageUrl, setImageUrl] = useState(data[image]);
  useEffect(() => {
    if (data[image]) {
      setImageUrl(data[image]);
    }
  }, [image]);
  return (
    <Box sx={{ width: '100%' }} my={1} mx={2}>
        <Typography textAlign='justify'>What's the category of image?</Typography>
        <Box my={2}>
            <FormControl>
                <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                value={selectedValue4}
                onChange={handleRadioChange4}
                name="radio-buttons-group"
                >
                    <FormControlLabel value={1} control={<Radio />} label="Normal" />
                    <FormControlLabel value={2} control={<Radio />} label="CNV" />
                    <FormControlLabel value={3} control={<Radio />} label="DME" />
                    <FormControlLabel value={4} control={<Radio />} label="Drusen" />
                </RadioGroup>
            </FormControl>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>            
            <Button variant='contained' onClick={()=>{ setQuestion(question-1); }}>Previous</Button>
            <Button variant='contained' onClick={()=>{ if (imageUrl && imageUrl.id) {
              console.log(imageUrl.id);
              const id = imageUrl.id;
              const obj = { 
                id: id, 
                user: user.id, 
                urll: imageUrl.urll, 
                type: imageUrl.type, 
                generated: imageUrl.generated, 
                question1: parseInt(selectedValue1), 
                question2: parseInt(selectedValue2), 
                question3: parseInt(selectedValue3), 
                question4: parseInt(selectedValue4),
                grade: 1
              }
              updateImage(obj);
              setData([...data.slice(0, image), obj, ...data.slice(image+1)]);
              console.log([...grade.slice(0, image), true, ...grade.slice(image+1)])
              setGrade([...grade.slice(0, image), true, ...grade.slice(image+1)]) 
            } else {
              console.log("Cannot read 'id' property of undefined imageUrl");
            }
            if (image < data.length - 1) {setQuestion(1); setImage(image + 1); }
            }} disable={end === 'Questionnare is over. Thanks for your valuable time'?true:false}>Submit & Next</Button>
        </Box>
    </Box>
  );
}
export default Question4;
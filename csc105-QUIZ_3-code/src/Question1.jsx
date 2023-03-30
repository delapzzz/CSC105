// import React from 'react'
import { Box } from '@mui/material'
import React, { useState } from 'react'
import Password from './components/Password'
import Verification from './components/Verification'
// THIS IS THE COMPONENT OF THE SECOND QUESTION
import Party from './Question2'

// THIS IS THE FIRST SUBQUESTION IN THIS QUIZ !. 
// PLEASE DO THIS QUESTION FIRST, THE PROBLEM OF SECOND QUESTION WILL NOT SHOW UNTIL YOU PASSED THE FIRST QUESTION.

// HINTS:
// - PLEASE READ AND UNDERSTAND THE Password AND Verification COMPONENTS
// - PLEASE LOOK AT ALL PROPS THAT USED IN Password AND Verification 
const Question = () => {
    const step = 0
    const [positionWidth,setPositionWidth] = useState(0);
    const [positionHeight,setPositionHeight] = useState(0);
  return (
    <Box style={{display : 'flex'}} sx={{flexDirection : 'column' ,width: '100vw' ,height: '100vh' ,justifyContent: 'center' ,alignItems: 'center'}}>
      {step === 0 && <Password  />}
      {step === 1 && <Verification 
      positionWidth={setPositionHeight} 
      setPositionHeight={positionWidth} />}
      {step === 2 && <Party/>}
      
    </Box>
   
  )
}

export default Question
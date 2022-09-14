import React, { useState } from 'react'
import { Button } from 'react-bootstrap';

export const Toggle=()=> {
  const [isHappy,setIsHappy]=useState(true)

  return (
    <div className='text-center mt-3'>
        <button onClick={()=>setIsHappy(!isHappy)}>Elégedett vagy? {isHappy?'😊':'😢'}</button> 
    </div>
  )
}

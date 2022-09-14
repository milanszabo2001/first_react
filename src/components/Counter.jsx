import React, { useState } from 'react'

export const Counter=()=> {
        const [counter,setCounter]=useState(0)
        const handleMinus=() => {
          if(counter>0)
          setCounter(counter-1)
        }
    return (
    <div className='d-flex justify-content-around w-50 border align-items-center'>
        <i className="fa-regular fa-square-minus fa-3x text-danger" onClick={handleMinus}></i>
        <div>A számláló értéke: {counter} </div>
        <i className="fa-regular fa-square-plus fa-3x text-success" onClick={()=>setCounter(counter+1)}></i>
    </div>
  )
}

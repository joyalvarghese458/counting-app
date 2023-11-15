import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, reset } from './redux/counterSlice'

function Counder() {
    const dispatch = useDispatch()
    const count = useSelector((state)=>state.counter.value)
    const [range,setRange] = useState('')
   
  return (
    <div>


          <div className='d-flex align-items-center justify-content-center w-100 mt-5 flex-column'>
            
          <h1 style={{fontSize:'90px'}}>{count}</h1>
            <div className='mt-5'>
              <button onClick={()=>dispatch(decrement(Number(range)))} className='btn btn-warning p-3'>Decrement</button>
              <button onClick={()=>dispatch(reset())} className='btn btn-danger p-3 ms-3'>Reset</button>
              <button onClick={()=>dispatch(increment(Number(range)))} className='btn btn-success p-3 ms-3'>Increment</button>
            </div>
            
            

          </div>

          <div className='mt-3 w-100'>
            <input onChange={(e)=>setRange(e.target.value)} type="text" className='form-control' style={{borderColor:'blue'}}placeholder='enter the range' />
          </div>
        

    </div>
  )
}

export default Counder
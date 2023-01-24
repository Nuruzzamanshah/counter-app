import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment, setCustom } from '../../redux/state/counter/counterSlice';

const Counter = () => {
  const myNumber = useRef();
  const count =  useSelector( (state) => state.counter.value);
  const dispatch =useDispatch()

    return (
        <div className='card'>
            <div className="card-header bg-secondary text-center">
                <h4 className='text-white'>My Counter App</h4>
            </div>
            <div className="card-body text-center">
                <h1>{count}</h1>
                <div className='my-4'>
                    <button onClick={()=>{dispatch(increment())}} className='btn btn-success m-2'>Increase</button>
                    <button onClick={()=>{dispatch(decrement())}} className='btn btn-dark'>Decrease</button>
                </div>
                <div className='my-4'>
                    <input ref={myNumber} className='form-control text-center' type="number" />
                    <button onClick={()=>{dispatch(setCustom(myNumber.current.value))}} className='btn btn-info w-50 m-2'>Set Costom</button>
                </div>
            </div>
        </div>
    );
};

export default Counter;
import React from 'react';

const Counter = () => {
    return (
        <div className='card'>
            <div className="card-header bg-secondary text-center">
                <h4 className='text-white'>My Counter App</h4>
            </div>
            <div className="card-body text-center">
                <h1>00</h1>
                <div className='my-4'>
                    <button className='btn btn-success m-2'>Increase</button>
                    <button className='btn btn-dark'>Decrease</button>
                </div>
            </div>
        </div>
    );
};

export default Counter;
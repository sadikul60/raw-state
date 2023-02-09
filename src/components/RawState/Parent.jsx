import React, { useContext } from 'react';
import { CounterContext } from '../../App';
import Child from './Child';

const Parent = () => {
    const {count} = useContext(CounterContext);
    return (
        <div className="mt-12">
            <h1 className='text-3xl text-center'>Parent</h1>
            <div className='bg-green-300 w-3/12 mx-auto p-4'>
                <h1 className='text-4xl font-bold mb-3'>{count}</h1>
            </div>
            <Child />
        </div>
    );
};

export default Parent;
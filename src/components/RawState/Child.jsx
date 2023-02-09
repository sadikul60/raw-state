import React, { useContext } from 'react';
import { CounterContext } from '../../App';

const Child = () => {
    const {count, setCount} = useContext(CounterContext);

    return (
        <div className="mt-12">
            <h1 className='text-3xl text-center'>Child</h1>
            <div className='bg-green-300 w-3/12 mx-auto p-4'>
                <h1 className='text-4xl font-bold mb-3'>{count}</h1>
                <div>
                    <button className='bg-red-500 p-2 rounded-md mr-2' onClick={() => setCount(count - 1)}>Decriment</button>
                    <button className='bg-red-500 p-2 rounded-md mr-2' onClick={() => setCount(count + 1)}>Incriment</button>
                </div>
            </div>
        </div>
    );
};

export default Child;
import React, { useState } from 'react';
import Child from './Child';

const Parent = () => {
    const [count, setCount] = useState(0);
    return (
        <div className="mt-12">
            <h1 className='text-3xl text-center'>Parent</h1>
            <div className='bg-green-300 w-3/12 mx-auto p-4'>
                <h1 className='text-4xl font-bold mb-3'>{count}</h1>
                <div>
                    <button className='bg-red-500 p-2 rounded-md mr-2' onClick={() => setCount(count - 1)}>Decriment</button>
                    <button className='bg-red-500 p-2 rounded-md mr-2' onClick={() => setCount(count + 1)}>Incriment</button>
                </div>
            </div>
            <Child count={count} setCount={setCount} />
        </div>
    );
};

export default Parent;
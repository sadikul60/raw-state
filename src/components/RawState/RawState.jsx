import React, { useState } from 'react';

const RawState = () => {
    const [count, setCount] = useState(0);
    return (
        <div>
            <div>
                <h1>{count}</h1>
                <div>
                    <button onClick={() => setCount(count - 1)}>Decriment</button>
                    <button onClick={() => setCount(count + 1)}>Incriment</button>
                </div>
            </div>
        </div>
    );
};

export default RawState;
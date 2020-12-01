import React from 'react';

import './InputRow.css';

const InputRow = inputOptions => {
    return (
        <div className="Input-row">
            <label className="Input-row-label"
                htmlFor={inputOptions.name}>{inputOptions.name}
            </label>
            <input className="Input"
                type={inputOptions.type}
                id={inputOptions.name}
                name={inputOptions.name} />
        </div>
    )
}

export default InputRow;
import React from 'react'

const Toggle = ({ handleChange, isChecked }) => {
    return (
        <div className='toggle-container'>
            <input type="checkbox"
                id='check'
                className='toggle'
                onChange={handleChange}
                checked={isChecked}
            />
            <label id='check' htmlFor="check">Dark Mode</label>
        </div>
    )
}

export default Toggle
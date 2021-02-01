import React from 'react'
import './Styling/EnterButton.css'

export default ({ setValue, value }) => {
    return (
        <button onClick={() => setValue(value)} >
            Vote
        </button>
    )
}

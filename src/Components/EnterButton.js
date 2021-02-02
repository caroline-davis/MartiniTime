/* eslint-disable import/no-anonymous-default-export */
import React from 'react'
import './Styling/EnterButton.css'

export default ({ setValue, value }) => {
    return (
        < button onClick={() => setValue(value + 1)
        } >
            Vote
        </button >
    )
}

import React from 'react'
import Button from './EnterButton'
import FlowerImage from './FlowerImage'
import './Styling/FlowerContainer.css'


export default ({ setCount, count, winner }) => {
    return (
        <div className='outer-container'>
            <div className='card-container'>
                <div className='header'>Christmastree</div>
                <FlowerImage url="https://bs.floristic.org/image/o/8e171a19f992a34d5d44693472320f6044a5d561"></FlowerImage>
                <Button setValue={setCount} value={count} />
                <div className='votes'>0</div>
            </div>
        </div>

    )
}
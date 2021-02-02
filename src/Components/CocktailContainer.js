/* eslint-disable import/no-anonymous-default-export */
import React, { useState } from 'react'
import Button from './EnterButton'
import CocktailImage from './CocktailImage'
import './Styling/CocktailContainer.css'

export default ({ cocktail }) => {

    const [count, setCount] = useState(0)
    const [winner, setWinner] = useState(null)

    return (
        <div className='outer-container'>
            <div className='card-container'>
                <div className='header'>{cocktail.name}</div>
                <CocktailImage url={cocktail.image}></CocktailImage>
                <Button setValue={setCount} value={count} />
                <div className='votes'>{count}</div>
            </div>
        </div>

    )
}
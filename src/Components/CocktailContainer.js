/* eslint-disable import/no-anonymous-default-export */
import React from 'react'
import Button from './EnterButton'
import CocktailImage from './CocktailImage'
import './Styling/CocktailContainer.css'

export default ({ setCount, count, cocktailDrinks }) => {

    return (
        <div className='outer-container'>
            <div className='card-container'>
                <div className='header'>{cocktailDrinks[0].name}</div>
                <CocktailImage url={cocktailDrinks[0].image}></CocktailImage>
                <Button setValue={setCount} value={count} />
                <div className='votes'>{count}</div>
            </div>
        </div>

    )
}
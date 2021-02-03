/* eslint-disable import/no-anonymous-default-export */
import React, { useState, useEffect } from 'react'
import Button from './EnterButton'
import CocktailImage from './CocktailImage'
import './Styling/CocktailContainer.css'

export default ({ cocktail, setWinnerCount, setWinnerName, winnerCount }) => {

    const [count, setCount] = useState(0)

    useEffect(() => {
        async function findWinner() {
            if (count > winnerCount) {
                setWinnerCount(count)
                setWinnerName(cocktail.name)
            }
            return
        }
        findWinner();

    }, [count, cocktail, winnerCount, setWinnerCount, setWinnerName])

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
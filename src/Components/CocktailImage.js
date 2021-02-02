/* eslint-disable import/no-anonymous-default-export */
import React from 'react'
import './Styling/CocktailImage.css'

export default ({ url }) => {
    return (
        <img src={url} alt="img"></img>
    )
}
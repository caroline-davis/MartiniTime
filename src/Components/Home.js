import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom";
import { getCocktailsApi } from '../Api';
import CocktailContainer from './CocktailContainer'
import './Styling/Home.css';

function Home({ setWinnerName }) {

  const [cocktails, setCocktails] = useState(null)
  const [loading, setLoading] = useState(false)
  const [loadingError, setLoadingError] = useState(false)
  const [winnerCount, setWinnerCount] = useState(0)


  function wrangleData(cocktails) {
    return cocktails.drinks.map(cocktail => ({
      "name": cocktail.strDrink,
      "image": cocktail.strDrinkThumb
    }))
  }

  useEffect(() => {
    async function callGetCocktails() {
      setLoading(true)
      setLoadingError(false)
      try {
        const result = await getCocktailsApi()
        const data = wrangleData(result)
        setCocktails(data)
        setLoading(false)
        setLoadingError(false)
      } catch {
        setCocktails(null)
        setLoadingError(false)
        setLoadingError(true)
      }
    }
    callGetCocktails();

  }, [])

  return (
    <div className="home">
      <div className="heading">MARTINI COMPETITION</div>
      <div className="main-container">
        {loading && 'loading...'}
        {loadingError && 'error message'}
        {cocktails && !loading && !loadingError && cocktails.map(cocktail =>
          cocktails && <CocktailContainer
            cocktail={cocktail}
            setWinnerCount={setWinnerCount}
            setWinnerName={setWinnerName}
            winnerCount={winnerCount} />
        )}
      </div>
      <Link className='link' to={'/winner'}>Winner</Link>
    </div>
  );
}

export default Home;

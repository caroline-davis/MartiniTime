import React, { useState, useEffect } from 'react'
import { getCocktailsApi } from '../Api';
import CocktailContainer from './CocktailContainer'
import './Styling/Home.css';

function Home() {

  const [cocktails, setCocktails] = useState(null)
  const [loading, setLoading] = useState(false)
  const [loadingError, setLoadingError] = useState(false)

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
          cocktails && <CocktailContainer cocktail={cocktail} />
        )}
      </div>
      <div className="outcome">WINNER: </div>
    </div>
  );
}

export default Home;

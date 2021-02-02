import React, { useState, useEffect } from 'react'
import { getCocktailsApi } from '../Api';
import CocktailContainer from './CocktailContainer'
import './Styling/Home.css';

function Home() {

  const [count, setCount] = useState(0)
  const [winner, setWinner] = useState(null)
  const [cocktails, setCocktails] = useState(null)
  const [loading, setLoading] = useState(false)
  const [loadingError, setLoadingError] = useState(false)

  function wrangleData(cocktails, count) {
    return {
      "drink": cocktails.drinks.map(cocktail => [
        {
          "name": cocktail.strDrink,
          "image": cocktail.strDrinkThumb,
          "count": count
        }
      ])
    }
  }

  useEffect(() => {
    async function callGetCocktails() {
      setLoading(true)
      setLoadingError(false)
      try {
        const result = await getCocktailsApi()
        const data = wrangleData(result, setCount(0))
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
  console.log(count)

  return (
    <div className="home">
      <div className="heading">MARTINI COMPETITION</div>
      <div className="main-container">
        {loading && 'loading...'}
        {loadingError && 'error message'}
        {cocktails && !loading && !loadingError && cocktails.drink.map(cocktailDrinks =>
          cocktails && <CocktailContainer setCount={setCount} count={count} cocktailDrinks={cocktailDrinks} />
        )}
      </div>
      <div className="outcome">WINNER: </div>
    </div>
  );
}

export default Home;

import React, { useState, useEffect } from 'react'
import FlowerContainer from './FlowerContainer'
import './Styling/Home.css';

function Home() {

  const [count, setCount] = useState(0)
  const [winner, setWinner] = useState(null)

  return (
    <div className="home">
      <div className="heading">Flower competition</div>
      <div className="main-container">
        <FlowerContainer setCount={setCount} count={count} winner={winner} />
        <FlowerContainer setCount={setCount} count={count} winner={winner} />
        <FlowerContainer setCount={setCount} count={count} winner={winner} />
        <FlowerContainer setCount={setCount} count={count} winner={winner} />
        <FlowerContainer setCount={setCount} count={count} winner={winner} />
        <FlowerContainer setCount={setCount} count={count} winner={winner} />
      </div>
      <div className="outcome">WINNER: </div>
    </div>
  );
}

export default Home;

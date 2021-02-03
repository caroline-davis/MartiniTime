import React, { useState } from 'react'
import Home from './Components/Home'
import Winner from './Components/Winner'

import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

export default function App() {

    const [winnerName, setWinnerName] = useState(null)

    return (
        <Router>
            <Switch>
                <Route exact path='/'><Home setWinnerName={setWinnerName} /></Route>
                <Route path="/winner"><Winner winnerName={winnerName} /></Route>
            </Switch>
        </Router>
    )
}
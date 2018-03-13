import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Formulario from './Formulario';
import Confirmation from './Confirmation';
import './css/app.css';

const App = () => {
    return (
        <Router>
            <div className="App color-5">
                <header className="App__header bg-color-3" />
                <Route exact path="/raquel/" component={Formulario} />
                <Route path="/raquel/confirmation" component={Confirmation} />
            </div>
        </Router>
    )
}

export default App;
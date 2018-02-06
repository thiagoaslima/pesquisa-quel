import React, { Component } from 'react';
import FormQuestions from './formulario/FormQuestions';
import { questions } from './data/questions';
import './css/app.css';

class App extends Component {
    render() {
        return (
            <div className="App color-5">
                <header className="App__header bg-color-3" />
                <div className="App__body bg-color-4">
                    <FormQuestions title={"Pesquisa de RH"} questions={questions} />
                </div>
            </div>
        )
    }
}

export default App;
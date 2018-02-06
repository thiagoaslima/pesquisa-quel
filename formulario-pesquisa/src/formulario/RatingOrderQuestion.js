import React, { Component } from 'react';

class RatingOrderQuestion extends Component {
    render() {
        return (
            <div className="question question__rating-order">
                
                    <div className="question__title-container">
                        <h2 className="question__title">Classifique os níveis de consciência abaixo de acordo com as características que mais se aproximam
                            do perfil da chefia que ocupa o cargo mais alto do setor de Recurso Humanos/Gestão de Pessoas
                            da sua empresa. </h2>
                    </div>

                    <div className="question__options">
                        
                        <div className="question__option">
                            <h3 className="question__option__text">Apresenta grande preocupação com a responsabilidade social, se preocupa com as gerações futuras,
                                demonstra compaixão e perspectiva de longo prazo.</h3>

                            <div className="question__option__answer">
                                <label className="question__option__label">
                                    <input pattern="[1-7]{1}" type="text" placeholder="?" />
                                    Atualmente
                                </label>
                            </div>

                            <div className="question__option__answer">
                                <label className="question__option__label">
                                    <input pattern="[1-7]{1}" type="text" placeholder="?" />
                                    Como seria o ideal
                                </label>
                            </div>  
                        </div>
                        
                    </div>

                
            </div>


        )
    }
}

export default RatingOrderQuestion;
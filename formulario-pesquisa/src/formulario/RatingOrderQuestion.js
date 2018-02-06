import React from 'react';
import AbstractQuestion from './AbstractQuestion';

class RatingOrderQuestion extends AbstractQuestion {
    static defaultProps = {
        title: '',
        name: 0,
        questions: [],
        scenarios: []
    }
    render() {
        return (
            <div onFocus={this.handleOnFocus} onBlur={this.handleOnBlur} className={`question question__rating-order ${this.state.isFocused ? 'onfocus' : ''}`}>

                <div className="question__title-container">
                    <h2 className="question__title">{this.props.title}</h2>
                </div>

                <div className="question__options">
                    {
                        this.props.questions.map((question, idx) => (

                            <div key={idx} className="question__option">
                                <h3 className="question__option__text">{question.title}</h3>
                                {
                                    this.props.scenarios.map((scenario, idx) => (
                                        <div key={idx} className="question__option__answer">
                                            <label className="question__option__label">
                                                <input pattern={`[1-${this.props.questions.length}]{1}`} type="text" />
                                                {scenario}
                                            </label>
                                        </div>

                                    ))
                                }
                            </div>
                        ))
                    }

                </div>


            </div>


        )
    }
}

export default RatingOrderQuestion;
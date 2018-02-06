import React from 'react';
import AbstractQuestion from './AbstractQuestion';

class RadioQuestion extends AbstractQuestion {
    static defaultProps = {
        title: '',
        name: 0,
        questions: []
    }

    render() {
        return (
            <div className={`question question__radio ${this.state.isFocused ? 'onfocus' : ''}`} onFocus={this.handleOnFocus} onBlur={this.handleOnBlur}>
                <div className="question__title-container">
                    <h1 className="question__title">{this.props.title}</h1>
                </div>

                <div className="question__options">
                    {
                        this.props.questions.map((question, idx) => {
                            return (
                                <div key={idx} className="question__option">
                                    <label className="question__option-label">
                                        <input className="question__option__input" type="radio" name={`Q${this.props.name}`} value={question.value} />
                                        {question.text}
                                    </label>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}

export default RadioQuestion;
import React from 'react';
import BasicQuestion from './BasicQuestion';

class RadioQuestion extends BasicQuestion {

    render() {

        return (
            <div className="question__options">
                {
                    this.props.questions.map((question, idx) => {
                        const { text, value } = question;
                        return (
                            <div key={idx} className="question__option">
                                <label className="question__option-label">
                                    <input className="question__option__input"
                                        {...this.isRequired(this.props.required)}
                                        type="radio"
                                        name={`Q${this.props.name}`}
                                        onChange={this.handleChangeValue}
                                        value={value} />
                                    {text}
                                </label>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}

export default RadioQuestion;
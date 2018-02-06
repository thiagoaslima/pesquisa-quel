import React from 'react';
import AbstractQuestion from './AbstractQuestion';

class InputQuestion extends AbstractQuestion {
    render() {
        return (
            <div className="question question__input">
                <div className="question__title-container">
                    <h1 className="question__title">{this.props.title}</h1>
                </div>

                <div className="question__options">
                    <div className="question__option">
                        <input type="text" onChange={this.handleChangeValue.bind(this)} name={`Q${this.props.name}`} className="question__option__input" />
                    </div>
                </div>
            </div>
        )
    }
}

export default InputQuestion;
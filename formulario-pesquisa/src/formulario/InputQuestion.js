import React from 'react';
import AbstractQuestion from './AbstractQuestion';

class InputQuestion extends AbstractQuestion {

    render() {
        return (
            <div onFocus={this.handleOnFocus} onBlur={this.handleOnBlur} className={`question question__input ${this.state.isFocused ? 'onfocus' : ''}`}>
                <div className="question__title-container">
                    <h1 className="question__title">{this.props.title}</h1>
                </div>

                <div className="question__options">
                    <div className="question__option">
                        <input type="text" onChange={this.handleChangeValue} name={`Q${this.props.name}`} className="question__option__input" />
                    </div>
                </div>
            </div>
        )
    }
}

export default InputQuestion;
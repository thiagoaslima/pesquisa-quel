import React, { Component } from 'react';

class TextQuestion extends Component {
    static defaultProps = {
        title: '',
        name: 0
    }

    render() {
        return (
            <div className="question question__yes-no">
                <div className="question__title-container">
                    <h1 className="question__title">{this.props.title}</h1>
                </div>

                <div className="question__options">
                    <div className="question__option">
                        <label className="question__option-label">
                            <input className="question__option__input" type="radio" name={`Q${this.props.name}`} value="yes" />
                            Sim
                        </label>
                    </div>
                    <div className="question__option">
                        <label className="question__option-label">
                            <input className="question__option__input" type="radio" name={`Q${this.props.name}`} value="no" />
                            Não
                        </label>
                    </div>
                </div>
            </div>
        )
    }
}

export default TextQuestion;
import React, { Component } from 'react';

class TextQuestion extends Component {
    static defaultProps = {
        title: '',
        name: 0
    }

    render() {
        return (
            <div className="question input-question">
                <div className="question__title-container">
                    <h1 className="question__title">{this.props.title}</h1>
                </div>

                <div className="question__options">
                    <div className="question__option">
                        <input type="text" name={`Q${this.props.name}`} className="question__option__input" />
                    </div>
                </div>
            </div>
        )
    }
}

export default TextQuestion;
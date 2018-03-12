import React, { Component } from 'react';

class QuestionTitle extends Component {
    static defaultProps = {
        title: ''
    }

    render() {
        return (
            <div className="question__title-container">
                <h1 className="question__title">{this.props.title}</h1>
            </div>
        )
    }
}

export default QuestionTitle;

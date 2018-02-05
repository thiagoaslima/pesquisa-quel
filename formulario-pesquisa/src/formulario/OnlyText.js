import React, { Component } from 'react';

class OnlyText extends Component {
    render() {
        return (
            <div className="question input-question">
                <div className="question__title-container">
                    <h1 className="question__title">{this.props.title}</h1>
                </div>
            </div>
        )
    }
}

export default OnlyText;
import React from 'react';
import BasicQuestion from './BasicQuestion';

class YesNoQuestion extends BasicQuestion {

    render() {
        const { name, required } = this.props;
        return (
            <div className="question__options">
                <div className="question__option">
                    <label className="question__option-label">
                        <input
                            {...this.isRequired(required)}
                            className="question__option__input"
                            type="radio"
                            onChange={this.handleChangeValue}
                            name={`Q${name}`}
                            value="yes" />
                        Sim
                    </label>
                </div>
                <div className="question__option">
                    <label className="question__option-label">
                        <input
                            {...this.isRequired(required)}
                            className="question__option__input"
                            type="radio"
                            onChange={this.handleChangeValue}
                            name={`Q${name}`}
                            value="no" />
                        Não
                    </label>
                </div>
            </div>
        )
    }
}

export default YesNoQuestion;
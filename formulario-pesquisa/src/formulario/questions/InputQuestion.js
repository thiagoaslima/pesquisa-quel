import React from 'react';
import BasicQuestion from './BasicQuestion';

class InputQuestion extends BasicQuestion {

    render() {
        const { required, name } = this.props;

        return (
            <div className="question__options">
                <div className="question__option">
                    <input type="text" {...this.isRequired(required)}
                        onChange={this.handleChangeValue}
                        name={`Q${name}`}
                        className="question__option__input" />
                </div>
            </div>
        )
    }
}

export default InputQuestion;

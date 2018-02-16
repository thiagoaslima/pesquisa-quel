import React from 'react';
import BasicQuestion from './BasicQuestion';

class RatingOrderQuestion extends BasicQuestion {
    static defaultProps = {
        title: '',
        name: 0,
        questions: [],
        scenarios: []
    }

    state = {
        values: []
    }

    render() {
        const { required, questions, scenarios } = this.props;
        return (
            <div className="question__options">
                {
                    questions.map((question, idx) => {
                        const { title } = question;
                        return (
                            <div key={idx} className="question__option">
                                <h3 className="question__option__text">{title}</h3>
                                {
                                    scenarios.map((scenario, scenarioIdx) => (
                                        <div key={scenarioIdx} className="question__option__answer">
                                            <label className="question__option__label">
                                                <input {...this.isRequired(required)}
                                                    onChange={this.onChange.bind(this, idx, scenarioIdx)}
                                                    pattern={`[1-${questions.length}]{1}`}
                                                    type="text" />
                                                {scenario}
                                            </label>
                                        </div>

                                    ))
                                }
                            </div>
                        )
                    })
                }
            </div>
        )

    }

    onChange(subquestion, scenario, evt) {
        const value = evt.target.value;
        const values = [].concat(this.state.values);
        if (!values[subquestion]) {
            values[subquestion] = []
        }
        values[subquestion][scenario] = value;
        this.setState({ values: values })
        this.props.changeFn(this.props.name, this.state.values);
    }
}

export default RatingOrderQuestion;
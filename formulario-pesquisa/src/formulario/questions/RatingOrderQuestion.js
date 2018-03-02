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
        values: this.props.scenarios.reduce((agg, scenario) => {
            agg[this.slug(scenario)] = []
            return agg;
        }, {})
    }

    slug(str) {
        return str.toLowerCase().replace(/\s/g, '-');
    }

    render() {
        const { required, questions, scenarios } = this.props;
        const slugs = scenarios.map(this.slug);

        return (
            <div className="question__options">
                <table>
                    <thead>
                    <tr>
                        {
                            scenarios.map( (scenario, idx) => (<th key={idx}>{scenario}</th>))
                        }
                        <th>questões</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        questions.map((question, idx) => {
                            const { title } = question;

                            return (
                                <tr key={idx}>
                                    {
                                        scenarios.map((scenario, scenarioIdx) => {
                                            return (
                                                <td key={`${idx}-${scenarioIdx}`}>
                                                    <input {...this.isRequired(required)}
                                                        name={slugs[scenarioIdx] + '-' + idx}
                                                        onChange={this.onChange.bind(this, idx, scenario)}
                                                        pattern={`[1-${questions.length}]{1}`}
                                                        type="text" />
                                                </td>
                                            )
                                        })
                                    }

                                    <td>{title}</td>
                                </tr>
                            )
                        })
                    }
                    </tbody>
                </table>
            </div>
        )

    }

    onChange(subquestion, scenario, evt) {
        const value = evt.target.value;
        const prop = this.slug(scenario);
        let values = this.state.values[prop].slice();

        if (values.indexOf(value) >= 0) {
            values = values.map(val => val < value ? val : val + 1)
        }

        this.setState({ values: values })
        this.props.changeFn(this.props.name, this.state.values);
    }
}

export default RatingOrderQuestion;
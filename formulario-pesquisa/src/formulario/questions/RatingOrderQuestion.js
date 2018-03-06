import React from 'react';
import BasicQuestion from './BasicQuestion';

class RatingOrderQuestion extends BasicQuestion {
    constructor(props) {
        super(props);

        this.state = {
            values: props.scenarios.reduce((agg, scenario) => {
                agg[this.slug(scenario)] = props.questions.reduce((agg, _, idx) => {
                    agg[idx] = {
                        value: '',
                        validity: false,
                        element: null
                    }
                    return agg;
                }, {});
                return agg;
            }, {})
        }
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
                                scenarios.map((scenario, idx) => (<th key={idx}>{scenario}</th>))
                            }
                            <th>questões</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            questions.map((question, idx) => {
                                const { title } = question;
                                const { values } = this.state;

                                return (
                                    <tr key={idx}>
                                        {
                                            scenarios.map((scenario, scenarioIdx) => {
                                                return (
                                                    <td key={`${idx}-${scenarioIdx}`}>
                                                        <input {...this.isRequired(required)}
                                                            className={values[slugs[scenarioIdx]].validity ? "" : "is-invalid"}
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
        this.state.values[prop][subquestion].value = value;
        this.state.values[prop][subquestion].element = evt.target;

        const mapValues = Object.keys(this.state.values[prop]).reduce((agg, key) => {
            const { value } = this.state.values[prop][key];

            if (!value) { return agg; }
            if (!agg[value]) {
                agg[value] = []
            }
            agg[value].push(this.state.values[prop][key]);
            return agg;
        }, {});

        Object.keys(mapValues).forEach(key => {
            if (mapValues[key].length === 1) {
                mapValues[key][0].validity = true;
                mapValues[key][0].element.setCustomValidity("");
            } else {
                mapValues[key].forEach(obj => {
                    obj.validity = false;
                    obj.element.setCustomValidity("Valor repetido! Favor reveja os valores");
                });
            }
        })

        this.setState({ values: this.state.values });
        this.props.changeFn(this.props.name, Object.keys(this.state.values).reduce((agg, key) => {
            agg[key] = Object.keys(this.state.values[key]).map(idx => this.state.values[key][idx].value);
            return agg;
        }, {}));
    }
}

export default RatingOrderQuestion;
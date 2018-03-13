import React, { Component } from 'react';
import InputQuestion from './questions/InputQuestion';
import RatingOrderQuestion from './questions/RatingOrderQuestion';
import RadioQuestion from './questions/RadioQuestion';
import YesNoQuestion from './questions/YesNoQuestion';
import QuestionTitle from './QuestionTitle';

import '../css/question-form.css';
import { Redirect } from 'react-router-dom';

class FormQuestions extends Component {
    static defaultProps = {
        questions: [],
        title: '',
        submitFn: null
    }
    
    state = {
        isOnFocus: [],
        answers: {},
        shouldRedirect: false
    }

    submit(evt) {
        evt.preventDefault();
        const el = evt.target;
        if (el.checkValidity()) {
            this.props.submitFn(this.state.answers).then(_=> {
                this.setState({shouldRedirect: true});
            });
        }
    }

    onChange(componentName, value) {
        let answers = Object.assign({}, this.state.answers, { [componentName]: value });
        this.setState({ answers: answers });
    }

    render() {
        return (
            <form onSubmit={this.submit.bind(this)} className="question__form">
                <h1 className="question__form-title">
                    {this.props.title}
                </h1>

                {
                    this.props.questions.map((question, idx) => (
                        <div key={idx} onFocus={this.handleOnFocus.bind(this, idx)}
                            onBlur={this.handleOnBlur.bind(this, idx)}
                            className={`${this.getQuestionClassName(question.type)} ${this.state.isFocused ? 'onfocus' : ''}`}>
                            <QuestionTitle title={question.title} />
                            {
                                this.createQuestion(question, idx)
                            }
                        </div>
                    ))
                }

                <div className="question__form__footer">
                    <button className="question__form__submit-button bg-color-3" type="submit">Enviar</button> 
                    { this.state.shouldRedirect && <Redirect to="/raquel/confirmation" /> }
                </div>

            </form>
        )
    }

    createQuestion(question, key) {
        switch (question.type) {
            // case 'text':
            //     return <OnlyText key={key} name={key} changeFn={this.onChange.bind(this)} {...question} />

            case 'input':
                return <InputQuestion key={key} name={key} changeFn={this.onChange.bind(this)} {...question} />

            case 'radio':
                return <RadioQuestion key={key} name={key} changeFn={this.onChange.bind(this)} {...question} />

            case 'rating-order':
                return <RatingOrderQuestion key={key} name={key} changeFn={this.onChange.bind(this)} {...question} />

            case 'yes-no':
                return <YesNoQuestion key={key} name={key} changeFn={this.onChange.bind(this)} {...question} />

            default:
                return '';
        }
    }

    getQuestionClassName(type) {
        let className;
        switch (type) {
            case 'text':
                className = 'question__text';
                break;

            case 'input':
                className = 'question__input';
                break;

            case 'radio':
                className = 'question__radio';
                break;

            case 'rating-order':
                className = 'question__rating-order';
                break;

            case 'yes-no':
                className = 'question__yes-no';
                break;

            default:
                className = '';
                break;
        }

        return ['question', className].join(' ');
    }

    handleOnFocus(idx, evt) {
        let arr = Array(this.props.questions.length).fill(false);
        arr[idx] = true;
        this.setState({ isOnFocus: arr });
    }

    handleOnBlur(idx, evt) {
        let arr = Array(this.props.questions.length).fill(false);
        this.setState({ isOnFocus: arr });
    }
}

export default FormQuestions;
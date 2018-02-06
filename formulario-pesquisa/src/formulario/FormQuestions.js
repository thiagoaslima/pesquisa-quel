import React, { Component } from 'react';
import OnlyText from './OnlyText';
import InputQuestion from './InputQuestion';
import RatingOrderQuestion from './RatingOrderQuestion';
import RadioQuestion from './RadioQuestion';
import YesOrNoQuestion from './YesOrNoQuestion';

import '../css/question-form.css';

class FormQuestions extends Component {
    static defaultProps = {
        questions: [],
        title: ''
    }

    render() {
        return (
            <form className="question__form">
                <h1 className="question__form-title">
                    {this.props.title}
                </h1>
                {
                    this.props.questions.map((slide, idx) => {
                        return this.createSlide(slide, idx);
                    })
                }
            </form>
        )
    }

    createSlide(question, key) {
        switch (question.type) {
            case 'text':
                return <OnlyText key={key} name={key} {...question} />

            case 'input':
                return <InputQuestion key={key} name={key} {...question} />

            case 'radio':
                return <RadioQuestion key={key} name={key} {...question} />

            case 'rating-order':
                return <RatingOrderQuestion key={key} name={key} {...question} />

            case 'yes-no':
                return <YesOrNoQuestion key={key} name={key} {...question} />

            default:
                return '';
        }
    }
}

export default FormQuestions;
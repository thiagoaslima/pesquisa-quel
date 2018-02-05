import React, { Component } from 'react';
import OnlyText from './OnlyText';
import InputQuestion from './InputQuestion';
import RatingOrderQuestion from './RatingOrderQuestion';
import '../css/question-form.css';

class FormQuestions extends Component {
    static defaultProps = {
        questions: []
    }

    render() {
        return (
            <form className="question__form">
            {
                this.props.questions.map((slide, idx) => {
                    return this.createSlide(slide, idx);
                })
            }
            </form>
        )
    }

    createSlide(slide, key) {
        switch(slide.type) {
            case 'text':
                return <OnlyText key={key} title={slide.title} name={key}/>

            case 'input':
                return <InputQuestion key={key} title={slide.title} name={key}/>

            case 'rating-order':
                return <RatingOrderQuestion key={key} title={slide.title} name={key}/>

            default:
                return '';
        }
    }
}

export default FormQuestions;
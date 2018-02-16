import { Component } from 'react';

class BasicQuestion extends Component {
    static defaultProps = {
        title: '',
        name: 0,
        changeFn: null,
        required: false
    }

    constructor(props) {
        super(props);
        
        this.state = {
            value: null,
            valid: true,
            pristine: true
        }

        this.handleChangeValue = this.handleChangeValue.bind(this);
    }

    componentDidMount() {
        this.updateValue(this.state.value);
    }

    handleChangeValue(e) {
        const value = e.target.value;
        this.setState({value: value});
        this.updateValue(value);
    }

    isRequired(required) {
        return { "required": required };
    }
    
    updateValue(value) {
        if (this.props.changeFn) {
            this.props.changeFn(this.props.name, value);
        }
    }

}

export default BasicQuestion;

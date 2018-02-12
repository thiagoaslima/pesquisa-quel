import { Component } from 'react';

class AbstractQuestion extends Component {
    static defaultProps = {
        title: '',
        name: 0,
        changeFn: null
    }

    constructor(props) {
        super(props);
        
        this.state = {
            value: null,
            isFocused: false
        }

        this.handleOnFocus = this.handleOnFocus.bind(this);
        this.handleOnBlur = this.handleOnBlur.bind(this);
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
    
    updateValue(value) {
        if (this.props.changeFn) {
            this.props.changeFn(this.props.name, value);
        }
    }
    
    handleOnFocus(evt) {
        this.setState({isFocused: true});
    }

    handleOnBlur(evt) {
        this.setState({isFocused: false});
    }

}

export default AbstractQuestion;

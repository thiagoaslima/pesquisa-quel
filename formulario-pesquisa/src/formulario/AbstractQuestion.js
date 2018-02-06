import { Component } from 'react';

class AbstractQuestion extends Component {
    static defaultProps = {
        title: '',
        name: 0
    }

    constructor(props) {
        super(props);
        
        this.state = {
            value: null,
            isFocused: false
        }

        this.handleOnFocus = this.handleOnFocus.bind(this);
        this.handleOnBlur = this.handleOnBlur.bind(this);
    }

    handleChangeValue(e) {
        this.setState({value: e.target.value});
    }
    
    handleOnFocus(evt) {
        this.setState({isFocused: true});
    }

    handleOnBlur(evt) {
        this.setState({isFocused: false});
    }

}

export default AbstractQuestion;
import { Component } from 'react';

class AbstractQuestion extends Component {
    static defaultProps = {
        title: '',
        name: 0
    }

    static defaultState = {
        value: null
    }

    handleChangeValue(e) {
        this.setState({value: e.target.value});
    }
    
}

export default AbstractQuestion;
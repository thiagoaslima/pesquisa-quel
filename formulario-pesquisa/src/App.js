import React, { Component } from 'react';
import FormQuestions from './formulario/FormQuestions';
import './css/app.css';
import database from './firebase/database'

class App extends Component {
    static defaultProps = {
        firebaseDatabase: database
    }

    state = {
        questions: []
    }

    postData(formData) {
        // Get a key for a new Post.
        var newPostKey = this.props.firebaseDatabase.ref().child('answers').push().key;
        this.props.firebaseDatabase.ref('answers/' + newPostKey).set(formData);
    }

    componentDidMount() {
        this.props.firebaseDatabase.ref('questions').once('value').then(resp => {
            this.setState({questions: resp.val()});
        });
    }

    render() {
        return (
            <div className="App color-5">
                <header className="App__header bg-color-3" />
                <div className="App__body bg-color-4">
                    <FormQuestions title={"Pesquisa de RH"} questions={this.state.questions} submitFn={this.postData.bind(this)} />
                </div>
            </div>
        )
    }
}

export default App;
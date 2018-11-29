import React, { Component } from "react";
import WordsList from './words_list';
const randomWords = require('random-words');


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            words: randomWords(25)
        }

        this.handleKeyPress = this.handleKeyPress.bind(this);
    }
    componentWillMount() {
        this.map = this.state.words.map((words) => <WordsList word={words} />)
    }
    componentWillUpdate() {
        this.map = this.state.words.map((words) => <WordsList word={words} />)

    }

    handleKeyPress(event) {
        console.log(event.key)
        if (this.state.words[0] == '') {
            if (event.key !== ' ') {
                console.log('need to press space bar');
                return
            }
            let hold = this.state.words.slice(1);
            this.setState({
                words: hold
            })
        }
        if (this.state.words[0][0] == event.key) {

            let holdArray = this.state.words
            console.log('holdArray: ', holdArray)
            let hold = holdArray[0].replace(this.state.words[0][0], '');
            holdArray[0] = hold
            console.log(holdArray)
            this.setState({
                words: holdArray
            })
            console.log(this.state.words)
        }
    }

    render() {

        return (
            <div>
                <div>
                    <input type="text" id="one" onKeyPress={this.handleKeyPress} />
                </div>
                <div >{this.map}</div>
            </div>
        )
    }
}

export default App;
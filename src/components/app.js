import React, { Component } from "react";
import WordsList from './wordsList';
const randomWords = require('random-words');

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            words: randomWords(100),
            input: null
        }
        this.handleKeyPress = this.handleKeyPress.bind(this);
    }

    handleKeyPress(event) {
        // console.log('this: ', this)
        if (this.state.words[0] == '') {
            if (event.key !== ' ') {
                console.log('need to press space bar');
                return
            }
            let hold = this.state.words.slice(1);
            this.setState({
                words: hold,
                input: ''
            })
        }
        if (this.state.words[0][0] == event.key) {
            let holdArray = this.state.words
            let hold = holdArray[0].replace(this.state.words[0][0], '');
            holdArray[0] = hold

            this.setState({
                words: holdArray,
                input: null
            });

        }
    }

    render() {

        return (
            <div>
                <div>
                    <input type="text" id="one" onKeyPress={this.handleKeyPress} value={this.state.input} />
                </div>
                {/* <div style={oneLine}>{this.state.words.join(' ')}</div> */}
                <WordsList words={this.state.words.join(' ')} />
            </div>
        )
    }
}

export default App;
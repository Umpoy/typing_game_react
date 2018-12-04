import React, { Component } from "react";
import WordsList from './wordsList';
import '../assets/css/app.css';

const randomWords = require('random-words');

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            words: randomWords(100),
            input: null,
            correct: 0,
            wordsCounted: 0,
            style: {
                color: 'black',
            },
            timer: 5,
            timerStart: false
        }

        this.handleKeyPress = this.handleKeyPress.bind(this);

    }

    handleKeyPress(event) {
        if (!this.state.timerStart) {
            this.setState({ timerStart: true });
            setInterval(() => {
                this.setState({ timer: this.state.timer -= 1 });
            }, 1000)
            setTimeout(() => {
                alert();
            }, this.state.timer * 1001)
        }
        if (this.state.words[0] == '' || event.key == ' ') {
            if (this.state.words[0] == '') {
                this.setState({ correct: this.state.correct += 1 })
            }
            if (event.key !== ' ') {
                this.setState({
                    style: {
                        color: 'red',
                    }
                });
                return
            }

            let hold = this.state.words.slice(1);
            this.setState({
                words: hold,
                input: '',
                wordsCounted: this.state.wordsCounted += 1,
                style: {
                    color: 'black',
                }
            });
        }

        if ((this.state.words[0][0] !== event.key) && (event.key !== ' ')) {

            this.setState({
                style: {
                    color: 'red',
                }
            });
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
            <div className="app">
                <div className="timer">{this.state.timer}</div>
                <div className="counter">{this.state.correct} / {this.state.wordsCounted}</div>
                <div>
                    <input type="text" id="one" onKeyPress={this.handleKeyPress} value={this.state.input} />
                </div>
                <WordsList words={this.state.words.join(' ')} style={this.state.style} />
            </div >
        )
    }
}

export default App;
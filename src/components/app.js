import React, { Component } from "react";


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            words: [
                "cat",
                "dog",
                "tree"
            ]
        }

        this.handleKeyPress = this.handleKeyPress.bind(this);
        this.map = this.state.words.map((word) =>
            <div>{word}</div>
        )

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
                <div >{this.map}</div>
                <div>
                    <input type="text" id="one" onKeyPress={this.handleKeyPress} />
                </div>
            </div>
        )
    }
}

export default App;
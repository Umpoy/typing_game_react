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

    }
    handleKeyPress(event) {
        //console.log(event.key);
        if (this.state.words[0] == '') {
            let hold = this.state.words.slice(1);
            this.setState({
                words: hold
            })
        }
        //console.log(this.state.words[0][0])
        if (this.state.words[0][0] == event.key) {
            let holdArray = this.state.words
            console.log('holdArray: ', holdArray)
            let hold = holdArray[0].replace(this.state.words[0][0], '');
            holdArray[0] = hold
            console.log('holdArray2: ', holdArray)
            console.log('hold: ', hold)
            // this.state.words[0] = hold
            this.setState({
                words: hold
            })
            console.log(this.state)
        }
    }

    render() {
        const map = this.state.words.map((words) =>
            <div>{words}</div>
        )
        return (
            <div>
                <div >{map}</div>
                <div>
                    <input type="text" id="one" onKeyPress={this.handleKeyPress} />
                </div>
            </div>
        )
    }
}

export default App;
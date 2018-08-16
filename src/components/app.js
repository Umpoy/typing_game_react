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
    }
    handleKeyPress = (event) => {
        console.log(event.key);
        if (this.state.words[0] == '') {
            let hold = this.state.words.slice(1);
            this.state.words = hold;
        }
        //console.log(this.state.words[0][0])
        if (this.state.words[0][0] == event.key) {
            let hold = this.state.words[0].replace(this.state.words[0][0], '')
            this.state.words[0] = hold
            console.log(this.state)
        }
    }

    render() {
        console.log(this.state)
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
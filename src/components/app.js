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
        console.log(event.key)
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
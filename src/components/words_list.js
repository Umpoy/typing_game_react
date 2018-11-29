import React from 'react';
const styling = {
    float: 'left',
    margin: '0 5px'
}


const WordsList = (props) => {
    return (
        <div style={styling}>{props.word} </div>
    )
}

export default WordsList;
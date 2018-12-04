import React from 'react';

const wordsList = {
    float: 'left',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis'
}

const WordsList = (props) => {
    return <h1 style={props.style}> {props.words}</h1 >
}

export default WordsList;
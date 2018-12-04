import React from 'react';

const oneLine = {
    float: 'left',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis'
}

const WordsList = (props) => {
    return <h1 style={oneLine}>{props.words}</h1>
}

export default WordsList;
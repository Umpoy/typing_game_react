import React from 'react';
import '../assets/css/wordsList.css'

const WordsList = (props) => {
    return <h1 style={props.style} className='wordsList'> {props.words}</h1 >
}

export default WordsList;
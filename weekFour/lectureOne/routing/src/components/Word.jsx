import React from 'react'
import { useParams } from 'react-router-dom';

const Word = () => {
    const { word, color } = useParams();

  return (
    <div>
        <h2 style={{background:color}}>Your word is... {word} and your color is {color}</h2> 
    </div>
  )
}

export default Word
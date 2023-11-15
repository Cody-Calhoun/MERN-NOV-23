import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';

const Form = () => {
    const navigate = useNavigate();
    const [word, setWord] = useState("");
    const [color, setColor] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate(`/${word}/${color}`)
        
    }


  return (
    <div>
        <h1>Form</h1>
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="">Word</label>
                <input type="text" onChange={e => setWord(e.target.value)}/>    
            </div>
            <div>
                <label htmlFor="">Color</label>
                <input type="text" onChange={e => setColor(e.target.value)}/>    
            </div>
            <button>Submit</button>
        </form>
    </div>
  )
}

export default Form
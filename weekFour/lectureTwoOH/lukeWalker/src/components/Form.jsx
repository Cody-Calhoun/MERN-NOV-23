import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'

const Form = () => {
    const navigate = useNavigate();
    const [content, setContent] = useState(null)
    const [id, setId] = useState(null)
  
    const handleSubmit = e => {
      e.preventDefault();
      navigate(`/${content}/${id}`)
      
    }
  
    return (
      
        <div className="row">
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="" className="form-label">Search:</label>
              <select className="form-select" name="contents" id="" onChange={e => setContent(e.target.value)}>
                <option value="null">Please select option</option>
                <option value="planets">Planet</option>
                <option value="people">People</option>
              </select>
            </div>
            <div className="mb-3">
              <label htmlFor="" className="form-label">ID:</label>
              <input type="number" className="form-control" onChange={e => setId(e.target.value)}/>
            </div>
            <button className="btn btn-primary">Search</button>
  
          </form>
        </div>
      
    )
}

export default Form
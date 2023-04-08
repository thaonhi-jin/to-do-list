import React from 'react'
import { useState } from 'react'

function TodoList() {
    const [job, setJob] = useState('')
    const [jobs, setJobs] = useState([])
    const handleSubmit = () =>{
        setJobs(prev => [...prev, job])
        setJob('') //sau khi Add List thì text mình vừa nhập trong input thành chuỗi rỗng
    }
  return (
    <div className="to-do-list">
        <input value={job} type="text" onChange={e => setJob(e.target.value)} />
        <button onClick={handleSubmit}>Add List</button>

        <ul>
            {jobs.map((job, index)=> (
                <li key={index}>{job}</li>
            ))}
        </ul>
    </div>
  )
}

export default TodoList

import React from 'react'
import {useState} from 'react'
const Search = ({getQuery}) => {
    const [name, setName] = useState('')
    const onChange = (q)=>{
        setName(q)
        getQuery(q)
    }
  return (
    <div>
      <section className='search'>
          <form>
              <input 
              className='form-control'
              value={name}
              onChange={(e)=>onChange(e.target.value)}
               placeholder='Search Characters' 
               type="text" />
          </form>
      </section>
    </div>
  )
}

export default Search

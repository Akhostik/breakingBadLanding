import './App.css';
import {useState, useEffect  } from 'react';
import Header from './components/UI/Header'
import CharactersGrid from './components/UI/characters/CharactersGrid'
import Search from './components/UI/Search'
import axios from 'axios';

function App() {

  const [items, setItems] =useState([ ]) 
  const [isLoading, setIsLoading] =useState(true)
  const [query, setQuery] =useState('')


  
  useEffect(()=>{
    const fetchItems = async()=>{

    const result = await axios(`https://www.breakingbadapi.com/api/characters?name=${query}`)
setItems(result.data) 
  console.log(result.data)
  setIsLoading(false)
}

fetchItems()
  }, [query ])
  // const [isError, setIsError] =useState([
    
  // ])
  return (
    <div className="container">
    <Header    /> 
    <Search getQuery={(q)=>setQuery(q)}/>
     <CharactersGrid items={items} isLoading={isLoading}/>
</div>
  )
}
export default App;

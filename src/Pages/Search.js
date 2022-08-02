



import React, {useState, useEffect} from 'react'
import './Search.css'


const Search = () => {
  const [text, setText] = useState([])

  const searchTab = (value) => {
    const searchText = text.filter((txt) => 
      txt.name.toLowerCase().includes(value.toLowerCase()))
      setText(searchText) 
  }

  useEffect (() => {
    fetch('https://breaking-bad-react-project.herokuapp.com/characters')
    .then((r) => r.json())
      .then((data) =>  setText(data))
  }, [])


  return (
    <div className='control'>
     <h1>Who's your fav character?</h1>
     <form>
     <input
          type='text'
          placeholder='search character name'
          onChange={(e) => searchTab(e.target.value)}

        />
        </form>
    

    </div>
  )
  }

export default Search




//import React, {useState, useEffect} from 'react'
//import axios from 'axios'
//import './Search.css'


//const Search = () => {

  //const [text, setText] = useState('')
  //const[query, setQuery] =useState('')



  /*useEffect(() => {
    const fetchItems= async () => {
      const result = await axios
      ("http://localhost:3000/characters")

    }
    fetchItems()

  }, [query] )



  //const onChange = (q) => {
  //  setText(q)
   // getQuery(q)
  //}
  return (
    <div className='control'>
     

    </div>
  )
}

export default Search

  

  //BACKGROUND KEY GEN
  
  

  //const onChange = (q) => {
  //  setText(q)
   // getQuery(q)
  //}

  

  return (
    <section className='search'>
    <h1>Who's your fav character?</h1>

    <form>
    <input
          type='text'
          className='form-control'
          placeholder='Search characters'
         
          autoFocus
        />
    </form>
    
    </section>
  )
}
*/

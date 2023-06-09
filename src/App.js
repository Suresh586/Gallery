import React,{useState} from 'react'
import axios from 'axios'
import Gallery from './gallery/gallery';

import './App.css';
const apiKey= "636e1481b4f3c446d26b8eb6ebfe7127"
function App() {
  const [searchName,setSearchName]=useState('')
  const[data,setData]=useState([])

  const searchNameHandler=(event)=>{
    setSearchName(event.target.value)
    
  }
 const onSubmitHabndler=event=>{
  event.preventDefault()
  axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${searchName}&per_page=24&format=json&nojsoncallback=1`
  ).then(
  response=>setData(response.data.photos.photo))
  

  console.log(searchName)
 
 }

  return (
    <div className="App">
      <center>
        <h1>Gallery Snapshots</h1>
        <form onSubmit={onSubmitHabndler}>
        <input type='text' value={searchName} onChange={searchNameHandler}/><br/><br/><br/>
        <input type='submit' name='search' />
        </form>
        <br/>
        {data.length >=1?<Gallery data={data} search={searchName}/>:<h1>No Photos Found</h1>}

      </center>
        
    </div>
  );
}

export default App;

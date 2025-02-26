
import './App.css'
import axios from 'axios';

function App() {

  const generateID =async()=>{
    try{
     const response=axios.get('http://localhost:3000/generate-unique-id');
     console.log(response)
    }
  catch(error){
    console.error(error)

  }
}

  return (
    <>
    <button onClick={()=>generateID()}>Generate ID</button>
    </>
  )
}

export default App

import './App.css';
import {useState , useEffect}  from 'react'
import Loading from './components/Loading'
import Tours from './components/Tours'

const url = 'https://course-api.com/react-tours-project'

function App() {
  // ************ states *******
  const [loading , setLoading] = useState(true); 
  const [tours , setTours] = useState([]); 
  //************* function  */
  const fetchTours  = async ()=> {
    setLoading(true)
    try{
      const response = await fetch(url); 
      const tours = await response.json(); 
      setTours(tours)
      setLoading(false)
    }catch(error){
      setLoading(false)
      console.log(error)
    }
  }
  useEffect(() => {
    fetchTours(); 
  }, []);

  if (loading){
   return (
    <main>
    <Loading/>
  </main>
   ); 
  }  
  return (
    <main>
      <Tours tours={tours} setTours ={setTours}/>
    </main>   
  );
  

  
}

export default App;

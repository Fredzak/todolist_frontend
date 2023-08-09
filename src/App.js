import logo from './logo.svg';
import Card from './components/listCard';
import './App.css';
import axios from 'axios';
import TodoList from './pages/todoList';
import { useEffect, useState } from 'react';

function App() {
  const [todolists, setTodolists]= useState([]);
  
  useEffect(()=>{
    axios.get('http://127.0.0.1:4000/user')
      .then(kiday => {
        setTodolists(kiday.data.users); //assiging to data
        // console.log(data)
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);
  
  // console.log(data)
  return (
    <div className="App bg-orange-600">
      <TodoList/>
      { todolists.map((item)=>(
        <Card  key={item.firstName} title={item.midleName} description={item.lastName} expireDate={item.lastName}/>
      ))
      
}
    </div>
  );
}

export default App;

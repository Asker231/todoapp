
import { useState } from 'react';
import { addItem,removeItem } from '../redux/todoSlice';
import { useDispatch, useSelector } from 'react-redux';
import { v4 } from 'uuid';
import './App.css';

function App() {
  const sel = useSelector(state => state.todo.arr)
  const disp = useDispatch();
  const dispath = useDispatch();
   const [value , setValue]= useState();
   const data ={
    id:v4(),
    text:value
   }
  return (
    <div className="App">
       <div className='inp'>
        <input
        value={value}
        onChange={(e)=>{
          setValue(e.target.value) 
          }}
        />
        <button onClick={()=>{disp(addItem(data.text))
          setValue('')}}>Добавить</button>
       </div>
       <div className='bot'>
           {
              sel.map((el)=>{
                return <div className='item'>{el} <button onClick={()=>dispath(removeItem(data.id))}>X</button></div>
              })
           }
       </div>
    </div>
  );
}

export default App;

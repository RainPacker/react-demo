import React,{useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import { Route } from 'react-router';
import Home from './pages/home'
import { Link } from 'react-router-dom';
// import HelloContainer from "./pages/container/index"
import store from './redux/store';


function App(props:any) {
  console.log(props);

  const [bgColor,setBgColor] = useState('')
  const [count, setCount] = useState(0)
  useEffect(()=>{
    console.log('...useEffect');
    console.log(store.getState());
    // console.log();
   // getRandomColor()
  },[])
 const  getRandomColor = ()=>{
    let r = Math.floor(Math.random()*256)
    let g = Math.floor(Math.random()*256)
    let b = Math.floor(Math.random()*256)
    setBgColor(`rgb(${r},${g},${b})`)
    console.log(bgColor);
    setCount(count+1)
    store.dispatch({type:'counter/incremented',data: count})
    console.log(store.getState());
    
  }
  const test = () =>{
    getRandomColor()
    
  }

  return (
    <div className="App">
      <header className="App-header" style={{backgroundColor:bgColor,transition:'all .4s ease'}}>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <button onClick={test}>change color:{bgColor}</button>
        <span>{count}</span>
        <span>store:{store.getState().count }</span>
        <Link to={{pathname:"/home?a=111",state:{name:'zyy',age:19}}}>Home</Link>
        <Route path="/home" component={Home}  ></Route>
        
      </header>
      {/* <HelloContainer ></HelloContainer> */}
    </div>
  );
}


export default App;

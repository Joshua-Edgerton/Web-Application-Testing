import React, {useState} from 'react';
import './App.css';
import Dashboard from './Components/Dashboard';
import Display from './Components/Display'

function App() {

const [balls, setBalls] = useState(0);
const [strikes, setStrikes] = useState(0);

function ballsCounting() {
  console.log('inside ballsCounting');
  if (balls >=4){
      setBalls(0);
      setStrikes(0);
  }
  else{
      setBalls(balls+1);
  }
}

function strikesCounting() {
  console.log('inside strikesCounting');
  if (strikes >=3){
      setStrikes(0);
      setBalls(0);
  }
  else{
      setStrikes(strikes+1);
  }
}

function foulsCounting() {
  console.log('inside foulCounting');
  if (strikes !== 2){
      setStrikes(strikes+1);}
  }

function hitsCounting() {
  console.log('inside hitCounting');
  setBalls(0);
  setStrikes(0);
}

  return (
    <div className="App">
      <header className="App-header">
      </header>
      <Display strikes={strikes} balls={balls}/>
      <Dashboard ballsCounting={ballsCounting} strikesCounting={strikesCounting} foulsCounting={foulsCounting} hitsCounting={hitsCounting} />
    </div>
  );
}

export default App;

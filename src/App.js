import logo from './logo.svg';
import './App.css';
import { useState } from 'react';



function SmallFigma(){

  const [sizeOfFont,setSizeOfFont]=useState(8);
  
  function increaseFontSize(){
    setSizeOfFont(sizeOfFont+8);
  }

  function decreaseFontSize(){
    setSizeOfFont(sizeOfFont-8);
  }

  function updateParaStyle(){
    return{
      fontSize:sizeOfFont,
    }
      
      
  
  }
  
  return(
    <div>
     
      <h1>Sharks can live for five centuries.</h1>
      <p style={updateParaStyle()}>Greenland Sharks are known to be some of the oldest living animals in our world. Researchers did carbon dating on a Greenland Shark that was caught in 2014 and found it to be around 392 years old. Further testing revealed that our fishy friends could be up to 500 years old. Yes, that would mean that our geriatric friends would have been alive when Leonardo Da Vinci painted the "Mona Lisa."</p>
    <p>Style your Text</p>
    <button 
    onClick={increaseFontSize}
    >Increase Size</button>

    <span> px: {sizeOfFont} </span>

    <button
    onClick={decreaseFontSize}
    >Decrease Size</button>
    </div>
  );
}
function App() {

  return (
    <div className="App">
      <h1 class="heading">RJ's Themes</h1>
      <SmallFigma/>
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import { useState } from 'react';



function SmallFigma(){

  const [textSize,setTextSize]=useState(8);
  const [HeadingSize,setHeadingSize]=useState(16);
  
  function increaseFontSize(){
    setTextSize(textSize+8);
    setHeadingSize(HeadingSize+8);
  }

  function decreaseFontSize(){
    setTextSize(textSize-8);
    setHeadingSize(HeadingSize-8);
  }

  function updateParaStyle(){
    return{
      fontSize:textSize,
    }
       }

       function updateHeadingStyle(){
        return{
          fontSize:HeadingSize
        }
  }
  

  


  return(
    <div>
     
      <h1 style={updateHeadingStyle()}>Sharks can live for five centuries.</h1>
      <p style={updateParaStyle()}>Greenland Sharks are known to be some of the oldest living animals in our world. Researchers did carbon dating on a Greenland Shark that was caught in 2014 and found it to be around 392 years old. Further testing revealed that our fishy friends could be up to 500 years old. Yes, that would mean that our geriatric friends would have been alive when Leonardo Da Vinci painted the "Mona Lisa."</p>
    <p>Style your Text</p>
    <button 
    onClick={increaseFontSize}
    >Increase Size</button>

    <span> Text Size px: <strong>{textSize}</strong> Heading Size px: <strong>{HeadingSize}</strong> </span>

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

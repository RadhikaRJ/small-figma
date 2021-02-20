import { useState } from 'react';



function SmallFigma(){

  const [textSize,setTextSize]=useState(16);
  const [HeadingSize,setHeadingSize]=useState(24);

  
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
      fontSize:textSize
      
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
    <hr></hr>
    <div class="style-options">

    <h3>Adjust font size</h3>
    <button 
    onClick={increaseFontSize}
    >Increase Size</button>

    <span> Text Size px: <strong>{textSize}</strong> Heading Size px: <strong>{HeadingSize}</strong> </span>
    
    <button
    onClick={decreaseFontSize}
    >Decrease Size</button>

    <br></br>
    <h3>Select A Theme</h3>
    <div class="btn-list">

    <button class="btn btn1" ><h1>Smile </h1><p>You are Amazing and Confident</p></button>
    <button class="btn btn2"><h1>Laugh </h1><p>Its known to be the best remedy</p></button>
    <button class="btn btn3"><h1>Help</h1><p> And you will be helped!</p></button>
    <button class="btn btn4"><h1>Breathe</h1><p>Nature helps to rejuvenate</p></button>
    <button class="btn btn5"><h1>Share</h1><p>That's how you grow!</p></button>
    
</div>
    </div>
   
    

    </div>
  );
}

export default SmallFigma;
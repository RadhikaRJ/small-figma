import logo from './logo.svg';
import './App.css';
import SmallFigma from './StyleComponents/SmallFigma';
import StylePageText from './StyleComponents/StylePageText';
import StyleHeadingText from './StyleComponents/StyleHeadingText';
import { useState } from 'react';



 





function App() {


  const[PageTextStyle,setPageTextStyle]  = useState({ 
    fontSize:"8",
  color:"red",
  backgroundColor:"yellow",
  fontFamily:"Lora"});
   
  
    const [PageHeadingStyle,setPageHeadingStyle] = useState( {
      fontSize:"8",
      color:"red",
      backgroundColor:"",
      fontFamily:""
    });

  // // const [textSize,setTextSize]=useState(16);
  // // const [HeadingSize,setHeadingSize]=useState(24);

  
  // // function increaseFontSize(){
  // //   setTextSize(textSize+8);
  // //   setHeadingSize(HeadingSize+8);
  // // }

  // // function decreaseFontSize(){
  // //   setTextSize(textSize-8);
  // //   setHeadingSize(HeadingSize-8);
  // // }

  // // function updateParaStyle(){
  // //   return{
  // //     fontSize:textSize
      
  // //   }
  // //      }

  // //      function updateHeadingStyle(){
  // //       return{
  // //         fontSize:HeadingSize
  // //       }
  // // }
  


  
  return (
    <div className="App">
      <h1>RJ's Themes</h1>
      <hr></hr>
      <button 
    onClick={() => {
      setPageTextStyle({ ...PageTextStyle,fontSize: Number(PageTextStyle.fontSize) + 8 });
    }}
    >Increase Size</button>

    <span> Paragraph Text Size px: <strong>{PageTextStyle.fontSize}</strong> </span>
    
    <button
    onClick={() =>{
      setPageTextStyle({...PageTextStyle, fontSize: Number(PageTextStyle.fontSize)-8})
    }}
    >Decrease Size</button>
    <hr></hr>
    <button 
    onClick={() => {
      setPageHeadingStyle({ ...PageHeadingStyle,fontSize: Number(PageHeadingStyle.fontSize) + 8 });
    }}
    >Increase Size</button>

    <span> Heading Text Size px: <strong>{PageHeadingStyle.fontSize}</strong> </span>
    
    <button
    onClick={() =>{
      setPageHeadingStyle({...PageHeadingStyle, fontSize: Number(PageHeadingStyle.fontSize)-8})
    }}
    >Decrease Size</button>
    <hr></hr>
     <StyleHeadingText PageHeadingStyle={PageHeadingStyle}/>
     <StylePageText PageTextStyle={PageTextStyle}/>
     
    </div>
  );
}

export default App;

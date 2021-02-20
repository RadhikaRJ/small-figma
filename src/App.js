import logo from './logo.svg';
import './App.css';
import SmallFigma from './StyleComponents/SmallFigma';
import StylePageText from './StyleComponents/StylePageText';
import StyleHeadingText from './StyleComponents/StyleHeadingText';
import { useState } from 'react';



 





function App() {


  const[PageTextStyle,setPageTextStyle]  = useState({ 
    fontSize:"8",
  color:"",
  backgroundColor:"",
  fontFamily:""});
   
  
    const [PageHeadingStyle,setPageHeadingStyle] = useState( {
      fontSize:"8",
      color:"",
      backgroundColor:"",
      fontFamily:""
    });

  
  


  
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

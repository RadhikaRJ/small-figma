import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Content from './StyleComponents/Content';



 





function App() {


  const[PageTextStyle,setPageTextStyle]  = useState({ 
    fontSize:"16",
  color:"",
  backgroundColor:"",
  marginTop:"0",
  padding:"0.5em",
  fontFamily:""});
   
  
    const [PageHeadingStyle,setPageHeadingStyle] = useState( {
      fontSize:"24",
      color:"",
      backgroundColor:"",
      fontFamily:"",
      marginBottom:"0",
      padding:"0.5em"
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
    <label>Heading Background Color:  </label>
    <input type="color" 
    onChange={(change)=>{
      setPageHeadingStyle({...PageHeadingStyle, backgroundColor:(change.target.value)})
    }}
    ></input><span>  </span><br></br><br></br>
    <label>Heading Text Color:  </label>
    <input type="color" 
    onChange={(change)=>{
      setPageHeadingStyle({...PageHeadingStyle, color:(change.target.value)})
    }}
    ></input>
    <br></br><br></br>
    <label>Paragraph Background Color:  </label>
    <input type="color"
    onChange={(change)=>{
      setPageTextStyle({...PageTextStyle,backgroundColor:(change.target.value)})
    }}
    ></input><span>  </span><br></br><br></br>
    <label>Paragraph Text Color:  </label>
    <input type="color"
    onChange={(change)=>{
      setPageTextStyle({...PageTextStyle,color:(change.target.value)})
    }}
    ></input>
    <hr></hr>
    <br></br>
    <h3>Select A Theme</h3>
    <div class="btn-list">

    <button class="btn btn1" 
    onClick={()=>{
      setPageHeadingStyle({...PageHeadingStyle, backgroundColor:"#F62AA0",color:"white"});
      setPageTextStyle({...PageTextStyle,backgroundColor:"#26DFD0",color:"white"});
    }}
    ><h1>Smile </h1><p>You are Amazing and Confident</p></button>
    <button class="btn btn2"
    onClick={()=>{
      setPageHeadingStyle({...PageHeadingStyle, backgroundColor:"#AA1945",color:"white"});
      setPageTextStyle({...PageTextStyle,backgroundColor:"#F9CCD3",color:"black"});
    }}
    ><h1>Laugh </h1><p>Its known to be the best remedy</p></button>
    <button class="btn btn3"
    onClick={()=>{
      setPageHeadingStyle({...PageHeadingStyle, backgroundColor:"#0A7029",color:"white"});
      setPageTextStyle({...PageTextStyle,backgroundColor:"#F79489",color:"white"});
    }}
    ><h1>Help</h1><p> And you will be helped!</p></button>
    <button class="btn btn4"
    onClick={()=>{
      setPageHeadingStyle({...PageHeadingStyle, backgroundColor:"#DF362D",color:"white"});
      setPageTextStyle({...PageTextStyle,backgroundColor:"#FFCD58",color:"black"});
    }}
    ><h1>Breathe</h1><p>Nature helps to rejuvenate</p></button>
    <button class="btn btn5"
    onClick={()=>{
      setPageHeadingStyle({...PageHeadingStyle, backgroundColor:"#741AAC",color:"white"});
      setPageTextStyle({...PageTextStyle,backgroundColor:"#DEBAD6",color:"black"});
    }}
    ><h1>Share</h1><p>That's how you grow!</p></button>
    </div>
    <hr></hr>
    <Content PageHeadingStyle={PageHeadingStyle} PageTextStyle={PageTextStyle}/>
     
    </div>
  );
}

export default App;

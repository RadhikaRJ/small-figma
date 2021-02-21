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

  
  function setStyle(){

    return({
      backgroundColor:"#FDB750",
      color:"#FC2E20",
      fontWeight:700,
      fontFamily:"Lobster"
    });
  }


  
  return (
    <div className="App">
      <h1>Your Figma</h1>
      
      <h3>Make a choice:</h3>
      
      <button style={setStyle()}
    onClick={() => {
      setPageTextStyle({ ...PageTextStyle,fontSize: Number(PageTextStyle.fontSize) + 8 });
    }}
    >+8px</button>

    <span> Text Size px: <strong>{PageTextStyle.fontSize}</strong> </span>
    
    <button style={setStyle()}
    onClick={() =>{
      setPageTextStyle({...PageTextStyle, fontSize: Number(PageTextStyle.fontSize)-8})
    }}
    >-8px</button>
   <br></br>
   <br></br>
    <button  style={setStyle()}
    onClick={() => {
      setPageHeadingStyle({ ...PageHeadingStyle,fontSize: Number(PageHeadingStyle.fontSize) + 8 });
    }}
    >+8px</button>

    <span> Heading Size px: <strong>{PageHeadingStyle.fontSize}</strong> </span>
    
    <button style={setStyle()}
    onClick={() =>{
      setPageHeadingStyle({...PageHeadingStyle, fontSize: Number(PageHeadingStyle.fontSize)-8})
    }}
    >-8px</button>
    
<br></br>
<br></br>
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
    
    
    <br></br>
    <br></br>
    <h3>Or click below suggested themes</h3>
    <div class="btn-list">


    
    <button class="btn btn1" 
    onClick={()=>{
      setPageHeadingStyle({...PageHeadingStyle, backgroundColor:"#F62AA0",color:"white" , fontFamily:"Crimson Text Regular"});
      setPageTextStyle({...PageTextStyle,backgroundColor:"#26DFD0",color:"white", fontFamily:"Source Sans Pro Regular"});
    }}
    ><h1>Smile </h1><p>You are Amazing and Confident</p></button>
    <button class="btn btn2"
    onClick={()=>{
      setPageHeadingStyle({...PageHeadingStyle, backgroundColor:"#AA1945",color:"white",fontFamily:"Montserrat"});
      setPageTextStyle({...PageTextStyle,backgroundColor:"#F9CCD3",color:"black",fontFamily:"Lora"});
    }}
    ><h1>Laugh </h1><p>Its known to be the best remedy</p></button>
    <button class="btn btn3"
    onClick={()=>{
      setPageHeadingStyle({...PageHeadingStyle, backgroundColor:"#0A7029",color:"white", fontFamily:"Lato Light"});
      setPageTextStyle({...PageTextStyle,backgroundColor:"#F79489",color:"white",fontFamily:"Lato Regular"});
    }}
    ><h1>Help</h1><p> And you will be helped!</p></button>
    <button class="btn btn4"
    onClick={()=>{
      setPageHeadingStyle({...PageHeadingStyle, backgroundColor:"#DF362D",color:"white", fontFamily:"Luckiest Guy"});
      setPageTextStyle({...PageTextStyle,backgroundColor:"#FFCD58",color:"black", fontFamily:"Bitter Regular"});
    }}
    ><h1>Breathe</h1><p>Nature helps to rejuvenate</p></button>
    <button class="btn btn5"
    onClick={()=>{
      setPageHeadingStyle({...PageHeadingStyle, backgroundColor:"#741AAC",color:"white",fontFamily:" Montserrat Bold"});
      setPageTextStyle({...PageTextStyle,backgroundColor:"#DEBAD6",color:"black",fontFamily: "Roboto Regular"});
    }}
    ><h1>Share</h1><p>That's how you grow!</p></button>
    </div>
    <h3>This is what your selected combinations result in👇</h3>
    <Content PageHeadingStyle={PageHeadingStyle} PageTextStyle={PageTextStyle}/>
     
    </div>
  );
}

export default App;

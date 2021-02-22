
import './App.css';
import { useState } from 'react';
import Content from './StyleComponents/Content';
import ButtonThemes from './StyleComponents/ButtonThemes';
import ButtonTextSize from './StyleComponents/ButtonTextSize';
import ButtonHeadingFontSize from './StyleComponents/ButtonHeadingFontSize';

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
      <h1>Your Figma</h1>
      
      <h3>Make a choice:</h3>
      
      <ButtonTextSize       
      setPageTextStyle={setPageTextStyle} 
      PageTextStyle={PageTextStyle}
      fontSize={Number(PageTextStyle.fontSize) + 8} 
      btnText="+8px"
      />

     <span> Text Size px: <strong>{PageTextStyle.fontSize}</strong> </span>

      <ButtonTextSize      
      setPageTextStyle={setPageTextStyle} 
      PageTextStyle={PageTextStyle}
      fontSize={Number(PageTextStyle.fontSize) - 8} 
      btnText="-8px"
      />
   
   <br></br>
   <br></br>

   <ButtonHeadingFontSize 
      setPageHeadingStyle={setPageHeadingStyle} 
      PageHeadingStyle={PageHeadingStyle}
      fontSize={Number(PageHeadingStyle.fontSize) + 8} 
      btnText="+8px"
      />

      <span> Heading Size px: <strong>{PageHeadingStyle.fontSize}</strong> </span>

      <ButtonHeadingFontSize      
      setPageHeadingStyle={setPageHeadingStyle} 
      PageHeadingStyle={PageHeadingStyle}
      fontSize={Number(PageHeadingStyle.fontSize) - 8} 
      btnText="-8px"
      />
   
    
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

    <ButtonThemes 
    setPageHeadingStyle={setPageHeadingStyle} 
    headingbackgroundColor="#F62AA0" 
    headingcolor="white"  
    headingfontFamily="Crimson Text Regular" 
    PageTextStyle={PageTextStyle}
    setPageTextStyle={setPageTextStyle} 
    pagebackgroundColor="#26DFD0"
    pagecolor="white" 
    pagefontFamily="Source Sans Pro Regular" 
    PageHeadingStyle={PageHeadingStyle}
    classVal="btn btn1"
    />

    <ButtonThemes 
    setPageHeadingStyle={setPageHeadingStyle} 
    headingbackgroundColor="#AA1945" 
    headingcolor="white"  
    headingfontFamily="Lato Light" 
    PageTextStyle={PageTextStyle}
    setPageTextStyle={setPageTextStyle} 
    pagebackgroundColor="#F9CCD3"
    pagecolor="black" 
    pagefontFamily="Lora" 
    PageHeadingStyle={PageHeadingStyle}
    classVal="btn btn2"
    />

    <ButtonThemes 
    setPageHeadingStyle={setPageHeadingStyle} 
    headingbackgroundColor="#0A7029" 
    headingcolor="white"  
    headingfontFamily="Permanent Marker" 
    PageTextStyle={PageTextStyle}
    setPageTextStyle={setPageTextStyle} 
    pagebackgroundColor="#F79489"
    pagecolor="white" 
    pagefontFamily="Lato Regular" 
    PageHeadingStyle={PageHeadingStyle}
    classVal="btn btn3"
    />
    
    <ButtonThemes 
    setPageHeadingStyle={setPageHeadingStyle} 
    headingbackgroundColor="#DF362D" 
    headingcolor="white"  
    headingfontFamily="Satisfy"
    PageTextStyle={PageTextStyle}
    setPageTextStyle={setPageTextStyle} 
    pagebackgroundColor="#FFCD58"
    pagecolor="black" 
    pagefontFamily="Bitter Regular" 
    PageHeadingStyle={PageHeadingStyle}
    classVal="btn btn4"
    />
    
    <ButtonThemes 
    setPageHeadingStyle={setPageHeadingStyle} 
    headingbackgroundColor="#741AAC" 
    headingcolor="white"  
    headingfontFamily="Montserrat Bold" 
    PageTextStyle={PageTextStyle}
    setPageTextStyle={setPageTextStyle} 
    pagebackgroundColor="#DEBAD6"
    pagecolor="black" 
    pagefontFamily="Roboto Regular" 
    PageHeadingStyle={PageHeadingStyle}
    classVal="btn btn5"
    />
   
    
    </div>
    <h3>This is what your selected combinations result in👇</h3>
    <Content PageHeadingStyle={PageHeadingStyle} PageTextStyle={PageTextStyle}/>
    
    </div>
  );
}

export default App;

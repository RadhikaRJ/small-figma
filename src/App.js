import logo from './logo.svg';
import './App.css';
import SmallFigma from './StyleComponents/SmallFigma';
import StylePageText from './StyleComponents/StylePageText';
import StyleHeadingText from './StyleComponents/StyleHeadingText';

var PageTextStyle = 
  {
    fontSize:"8px",
    color:"red",
    backgroundColor:"yellow",
    fontFamily:"Lora"

  };

  var PageHeadingStyle=
  {
    fontSize:"8px",
    color:"red",
    backgroundColor:"",
    fontFamily:""
  };





function App() {
  
  return (
    <div className="App">
      <h1>RJ's Themes</h1>
      <hr></hr>
     
     <StyleHeadingText PageHeadingStyle={PageHeadingStyle}/>
     <StylePageText PageTextStyle={PageTextStyle}/>
     
    </div>
  );
}

export default App;

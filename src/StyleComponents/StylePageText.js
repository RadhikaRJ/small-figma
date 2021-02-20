

function StylePageText(props){

    function updatePageTextStyle(props){
  
    //    console.log(props);
    //    console.log(props.PageTextStyle.color);
      // console.log(props.PageTextStyle.fontFamily);
      // console.log(props.PageTextStyle.backgroundColor);
      // console.log(props.PageTextStyle.fontSize);
      return({
        fontSize:props.PageTextStyle.fontSize+"px",
      color:props.PageTextStyle.color,
      backgroundColor:props.PageTextStyle.backgroundColor,
      fontFamily:props.PageTextStyle.fontFamily
      });
    }
  
  
    return(
      <div>
        <p style={updatePageTextStyle(props)}>Greenland Sharks are known to be some of the oldest living animals in our world. Researchers did carbon dating on a Greenland Shark that was caught in 2014 and found it to be around 392 years old. Further testing revealed that our fishy friends could be up to 500 years old. Yes, that would mean that our geriatric friends would have been alive when Leonardo Da Vinci painted the "Mona Lisa."</p>
      </div>
    )
  }

  export default StylePageText;
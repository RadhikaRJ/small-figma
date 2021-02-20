
function Content(props){

    function updatePageTextStyle(props){
  
       return({
            fontSize:props.PageTextStyle.fontSize+"px",
          color:props.PageTextStyle.color,
          backgroundColor:props.PageTextStyle.backgroundColor,
          fontFamily:props.PageTextStyle.fontFamily,
           marginTop:props.PageTextStyle.marginTop,
        padding:props.PageTextStyle.padding
          });
        }
        
        
        function updateHeadingStyle(props){

            return(
                {
                    fontSize:props.PageHeadingStyle.fontSize+"px",
          color:props.PageHeadingStyle.color,
          backgroundColor:props.PageHeadingStyle.backgroundColor,
          fontFamily:props.PageHeadingStyle.fontFamily,
          marginBottom:props.PageHeadingStyle.marginBottom,
          padding:props.PageHeadingStyle.padding
                }
            );
    
        }


    return(
        <div>
        <h1 style={updateHeadingStyle(props)}>Sharks can live for five centuries.
        </h1>
        <p style={updatePageTextStyle(props)}>Greenland Sharks are known to be some of the oldest living animals in our world. Researchers did carbon dating on a Greenland Shark that was caught in 2014 and found it to be around 392 years old. Further testing revealed that our fishy friends could be up to 500 years old. Yes, that would mean that our geriatric friends would have been alive when Leonardo Da Vinci painted the "Mona Lisa."</p>
       
      
        
        </div>
    )
}

export default Content;
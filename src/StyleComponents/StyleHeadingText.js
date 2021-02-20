
function StyleHeadingText(props){

    function updateHeadingStyle(props){

        return(
            {
                fontSize:props.PageHeadingStyle.fontSize+"px",
      color:props.PageHeadingStyle.color,
      backgroundColor:props.PageHeadingStyle.backgroundColor,
      fontFamily:props.PageHeadingStyle.fontFamily
            }
        );

    }

   return(
            <div>
                <h1 style={updateHeadingStyle(props)}>Sharks can live for five centuries.</h1>
            </div>
   );
}

export default StyleHeadingText;
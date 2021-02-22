
function ButtonTextSize(props){

    function styleButton(){

    return({
        backgroundColor:"#FDB750",
      color:"#3B0918",
      fontWeight:700,
      fontFamily:"Lobster"
    })
    }

    return(
        <button style={styleButton()}
        onClick={() => {
            props.setFontSize({...props.setForElement, 
            fontSize: props.fontSize
            })
        }}
        
        >{props.btnText}</button>
    )
}

export default ButtonTextSize;
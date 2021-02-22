
function ButtonHeadingFontSize(props){

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
        onClick={()=>{
            props.setPageHeadingStyle({...props.PageHeadingStyle,
            fontSize: props.fontSize
            })
        }}
        >{props.btnText}</button>
    )
}

export default ButtonHeadingFontSize;
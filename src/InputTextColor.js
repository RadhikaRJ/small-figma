
function InputTextColor(props){


    return(
        <input type="color" 
    onChange={(change)=>{
      props.setForFunction({...props.setFor, color:(change.target.value)})
    }}
    ></input>
    )
}
export default InputTextColor;
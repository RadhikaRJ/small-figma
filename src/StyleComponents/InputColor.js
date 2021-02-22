

function InputBackgroundColor(props){

return(
    <input type="color" 
    onChange={(change)=>{
      props.setForFunction({...props.setFor, backgroundColor:(change.target.value)})
    }}
    ></input>
)
}

export default InputBackgroundColor;
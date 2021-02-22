

function InputColor(props){

return(
    <input type="color" 
    onChange={(change)=>{
      props.setBackgroundColor({...props.PageHeadingStyle, backgroundColor:(change.target.value)})
    }}
    ></input>
)
}

export default InputColor;
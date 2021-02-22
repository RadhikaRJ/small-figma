

function ButtonThemes(props){


console.log(props);
    return(
        <div>

            <button class={props.classVal} onClick={() => {
            props.setPageTextStyle({ ...props.PageTextStyle,
           
            color:props.pagecolor,
            backgroundColor:props.pagebackgroundColor,
            fontFamily:props.pagefontFamily});

            props.setPageHeadingStyle({...props.PageHeadingStyle,
               
                color:props.headingcolor,
                backgroundColor:props.headingbackgroundColor,
                fontFamily:props.headingfontFamily
            })

          }} >
            <h1 >Smile </h1>
            <p >You are Amazing and Confident</p>
        </button>
        
        </div>
       
    )
}

export default ButtonThemes;
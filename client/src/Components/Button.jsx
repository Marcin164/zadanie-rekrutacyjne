const Button = (props) => {
    return ( <button className={`btn btn-outline-primary ${props.className}`} >{props.children}</button> );
}
 
export default Button;
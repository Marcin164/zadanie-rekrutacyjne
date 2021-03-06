const Button = (props) => {
    return ( <button className={`btn btn-outline-primary ${props.className}`} onClick={props.onClick} >{props.children}</button> );
}
 
export default Button;
const Checkbox = (props) => {
    return ( 
    <div>
        <input className="my-4" type="checkbox" name={props.name} onChange={props.onChange} value={undefined} defaultChecked={props.defaultChecked}/><label className="">{props.title}</label>
    </div> 
    );
}
 
export default Checkbox;
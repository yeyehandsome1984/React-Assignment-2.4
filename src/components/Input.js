function Input({ value, label, onChangeProp }) {
  
    /** It is optional to define a handler, therefore not required 
     * if you inline the function in JSX */
    
    const handleChange = (event) => {
        
      onChangeProp(event.target.value);
      console.log(event);
    }
  
    return (
      <>
        <label>{label}</label>
        <br />
        
        <input value={value} onChange={handleChange}/>
        <br />
        
        {/* Inline version of passing a onChange handler to  */}
        <input value={value} onChange={(e) => onChangeProp(e.target.value)} />
      </>
    )
  }
  export default Input;
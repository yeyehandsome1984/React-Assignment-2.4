import { useState } from "react";
import Button from "./Button";
import Input from "./Input";
import PriceInput from "./PriceInput"

function Counter() {
  const [count, setCount] = useState(0);
  const [discount, setDiscount] = useState(0);

  const [name, setName] = useState('Banana');
  const [price, setPrice] = useState(0);
  const [error, setError] = useState('');

  const handlePriceChange = (event) => {
    const value = event.target.value;
    const numValue = Number(value);

    if (numValue < 0) {
      setError('Price cannot be negative');
    } else {
      setError('');
      setPrice(numValue);
    }
  };
  
  /** Part 4 - Capture input field and display it on the heading */ 
  // const name = "Banana";


  const handlePlus = () => {
    
    /** Long form of writing Higher Order Function (HOF)   */
    
    // const myFunc = (prevCount) => {
    //   let count = prevCount + 1;
    //   if (count >= 5) {
    //     setDiscount(20)
    //   }
    //   return count;
    // }   
    // setCount(myFunc);
    
    setCount((prevCount) => {
      let c = prevCount + 1;
      if (c >= 5) {
        setDiscount(20)
      }
      return c;
    })
    
  };
  const handleMinus = () => {
    setCount((prevCount) => {
      let c = prevCount - 1;
      if (c < 5) {
        setDiscount(0);
      }
      return c;
    });
  };

  const handleCounterChange = (value) => {
    setName(value);
  }



  /** In normal usage, React events are passed on to children components as props 
   * with the same name as the primitive React event (e.g. onClick, onChange, etc)
   * For the sake clarity, the event props are appended with the suffix Props 
   * (e.g. onClickProps) to differentiate between props and events.  
  */
  
  return (
    <>
      <h2>{name}</h2>
      <Button label='-' onClickProp={handleMinus} />
      <span>{count}</span>
      <Button label='+' onClickProp={handlePlus} />
      <PriceInput label='Price' onPriceChangeProp={handlePriceChange} />
      <p>price: {price}</p>
      {error && <div style={{ color: 'red' }}>{error}</div>}
      <h3>{`Discount: ${discount}%`}</h3>
      <Input label='Product' onChangeProp={handleCounterChange}/>

      <p>Total amount paid: ${price*count*(1-discount/100).toFixed(2)}</p>

    </>
  );
}
export default Counter;

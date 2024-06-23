

function PriceInput({ value, label, onPriceChangeProp }) {

  return (
    <div>
      <label htmlFor="price">{label} </label>
      <input
        type="number"
        id="price"
        value={value}
        onChange={onPriceChangeProp}
      />

     
    </div>
  );
};

export default PriceInput;

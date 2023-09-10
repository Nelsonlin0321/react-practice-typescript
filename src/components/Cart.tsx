interface Props {
  CarItems: string[];
  OnClear: () => void;
}

const Cart = ({ CarItems, OnClear }: Props) => {
  return (
    <>
      <div>Cart</div>
      <ul>
        {CarItems.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <button onClick={OnClear}>Clear</button>
    </>
  );
};

export default Cart;

interface Props {
  CarItemCount: number;
}

const Navbar = ({ CarItemCount }: Props) => {
  return <div>Navbar:{CarItemCount}</div>;
};

export default Navbar;

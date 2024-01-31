import { useSelector } from "react-redux";

function Customer() {
  const customer = useSelector((store) => store.customer.fullName); // this function will take the entire store, and from the store we can get the data we want.

  return <h2>👋 Welcome, {customer}</h2>;
}

export default Customer;

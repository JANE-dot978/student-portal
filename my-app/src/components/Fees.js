import { useEffect, useState } from 'react';
import axios from 'axios';

const Fees = () => {
  const [fees, setFees] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:4000/fees')
      .then(res => setFees(res.data))
      .catch(err => console.error(err));
  }, []);

  if (!fees) return <p>Loading fee data...</p>;

  return (
    <div>
      <h3>Fee Statement</h3>
      <p>Total: KES {fees.total}</p>
      <p>Paid: KES {fees.paid}</p>
      <p>Balance: KES {fees.balance}</p>
    </div>
  );
};

export default Fees;

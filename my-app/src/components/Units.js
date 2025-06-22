import { useEffect, useState } from 'react';
import axios from 'axios';

const Units = () => {
  const [units, setUnits] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:4000/units')
      .then(res => setUnits(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h3>Units</h3>
      <ul>
        {units.map(unit => (
          <li key={unit.id}>{unit.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Units;
import { useEffect, useState } from 'react';
import axios from 'axios';

const Student = () => {
  const [student, setStudent] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:4000/student')
      .then(res => setStudent(res.data))
      .catch(err => console.error(err));
  }, []);

  if (!student) return <p>Loading student info...</p>;

  return (
    <div>
      <h3>Student Info</h3>
      <p>Name: {student.name}</p>
      <p>Email: {student.email}</p>
      <p>Student ID: {student.studentId}</p>
    </div>
  );
};

export default Student;
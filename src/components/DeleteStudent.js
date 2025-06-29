// import { useState } from 'react';
// import axios from 'axios';

// function DeleteStudent() {
//   const [id, setId] = useState('');

//   const handleDelete = async (e) => {
//     e.preventDefault();
//     try {
//       await axios.delete(`http://localhost:4000/delete/students/${id}`);
//       alert('Student deleted');
//     } catch (error) {
//       alert('Delete failed');
//     }
//   };

//   return (
//     <form onSubmit={handleDelete} className="p-4">
//       <input type="text" placeholder="Student ID" onChange={e => setId(e.target.value)} />
//       <button type="submit">Delete Student</button>
//     </form>
//   );
// }

// export default DeleteStudent;

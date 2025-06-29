

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import { useState } from 'react';
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddStudent = () => {

    const [data, setData]=useState({
        firstname: "",
        lastname: "",
        gender: ""
    })


    const handleChange =(e)=>{
        setData({...data, [e.target.name]: e.target.value})
    }
    
    const saveStudent=(e)=>{
        e.preventDefault()

        const token = sessionStorage.getItem("access_token")
        
        axios.post('http://localhost:4000/addStudent', data, {
            headers: {
              Authorization:` Bearer ${token}`,
              'Content-Type': 'application/json',
            },
          }
          )
        .then(res => {
            toast.success('New student added successfully', {
                position: "top-right",
                autoClose: 3000,
            });
            
        })
        .catch(err => {
            toast.error('An error occurred while adding the record.', {
                position: "top-right",
                autoClose: 3000,
            });
        });
                
    }

    return (
        <div className='col-md-6 offset-md-3 addStudent'>
            <h3 className='mytext'> Add New student</h3>
            <Form onSubmit={saveStudent}>
                <Form.Group className="mb-3" controlId="formFirstname">
                    <Form.Label>firstname:</Form.Label>
                    <Form.Control type="input" required onChange={handleChange} 
                    name="firstname"placeholder="Enter firstname" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formLastname">
                    <Form.Label>lastname:</Form.Label>
                    <Form.Control type="input" required onChange={handleChange}
                    name="lastname" placeholder="Enter lastname" />
                </Form.Group>
        
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Select onChange={handleChange} name="gender">
                         <option>--Gender--</option>
                         <option>Male</option>
                         <option>Female</option>
                    </Form.Select>
                </Form.Group>
                    <Button variant="primary" type="submit">
                    Add Student
                    </Button>
                                       
                    <ToastContainer/>
            </Form>

        </div>
        
     );
}
 
export default AddStudent;

// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';
// import axios from 'axios';
// import { useState } from 'react';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// const AddStudent = () => {
//   const [data, setData] = useState({
//     firstname: '',
//     lastname: '',
//     gender: ''
//   });

//   const handleChange = (e) => {
//     setData({ ...data, [e.target.name]: e.target.value });
//   };

//   const saveStudent = (e) => {
//     e.preventDefault();

//     axios
//       .post('http://localhost:4000/addStudent', data, {
//         headers: {
//           'Content-Type': 'application/json'
//         }
//       })
//       .then((res) => {
//         toast.success('New student added successfully', {
//           position: 'top-right',
//           autoClose: 3000
//         });
//       })
//       .catch((err) => {
//         console.log(err); // 👈 Log for debugging
//         toast.error('An error occurred while adding the record.', {
//           position: 'top-right',
//           autoClose: 3000
//         });
//       });
//   };

//   return (
//     <div className="col-md-6 offset-md-3 addStudent">
//       <h3 className="mytext">Add New Student</h3>
//       <Form onSubmit={saveStudent}>
//         <Form.Group className="mb-3" controlId="formFirstname">
//           <Form.Label>Firstname:</Form.Label>
//           <Form.Control
//             type="text"
//             name="firstname"
//             required
//             placeholder="Enter firstname"
//             onChange={handleChange}
//           />
//         </Form.Group>

//         <Form.Group className="mb-3" controlId="formLastname">
//           <Form.Label>Lastname:</Form.Label>
//           <Form.Control
//             type="text"
//             name="lastname"
//             required
//             placeholder="Enter lastname"
//             onChange={handleChange}
//           />
//         </Form.Group>

//         <Form.Group className="mb-3" controlId="formGender">
//           <Form.Label>Gender:</Form.Label>
//           <Form.Select name="gender" required onChange={handleChange}>
//             <option value="">--Gender--</option>
//             <option value="Male">Male</option>
//             <option value="Female">Female</option>
//           </Form.Select>
//         </Form.Group>

//         <Button variant="primary" type="submit">
//           Add Student
//         </Button>

//         <ToastContainer />
//       </Form>
//     </div>
//   );
// };

// export default AddStudent;



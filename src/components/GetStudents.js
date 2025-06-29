import { useEffect, useState } from "react";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";
import { Dropdown } from "react-bootstrap";
import { useNavigate, Link } from "react-router-dom"; // ✅ Correct import

const AllStudents = () => {
  const [records, setRecords] = useState([]);
  const navigate = useNavigate(); // ✅ useNavigate replaces useHistory

  const loadEdit = (student_id) => {
    navigate(`/UpdateStudent/${student_id}`);
  };

  const LoadStudent = (student_id) => {
    navigate(`/StudentDetails/${student_id}`);
  };

  useEffect(() => {
    const token = sessionStorage.getItem("accessToken");
    axios
  .get("http://localhost:4000/getAllStudents", {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  })
      .then((res) => {
        setRecords(res.data);
      })
      .catch((err) => {
        console.error(err);
        if (err.response?.status === 403) {
          // Optionally show a message if unauthorized
        }
      });
  }, []);

  return (
    <div className="d-flex justify-content-center align-items-center mx-auto col-md-12">
      <div className="mt-3">
        <h5>All Students Details</h5>
        <div className="table-responsive">
          <table className="table table-bordered table-md">
            <thead>
              <tr>
                <th>Firstname</th>
                <th>Lastname</th>
                <th>Gender</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {records.map((r, i) => (
                <tr key={i}>
                  <td>{r.firstname}</td>
                  <td>{r.lastname}</td>
                  <td>{r.gender}</td>
                  <td>
                    <Dropdown>
                      <Dropdown.Toggle variant="default" id="dropdown-basic" size="md">
                        Perform Actions
                      </Dropdown.Toggle>
                      <Dropdown.Menu>
                        <Link
                          to="#"
                          className="dropdown-item"
                          onClick={(e) => {
                            e.preventDefault();
                            LoadStudent(r._id);
                          }}
                        >
                          Details
                        </Link>
                        <Link
                          to="#"
                          className="dropdown-item"
                          onClick={(e) => {
                            e.preventDefault();
                            loadEdit(r._id);
                          }}
                        >
                          Edit Student
                        </Link>
                      </Dropdown.Menu>
                    </Dropdown>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AllStudents;



// import { useEffect, useState } from "react";
// import axios from "axios";
// import { Dropdown } from "react-bootstrap";
// import { useNavigate, Link } from "react-router-dom";
// import "react-toastify/dist/ReactToastify.css";

// const AllStudents = () => {
//   const [records, setRecords] = useState([]);
//   const navigate = useNavigate();

//   const loadEdit = (student_id) => {
//     navigate(`/UpdateStudent/${student_id}`);
//   };

//   const LoadStudent = (student_id) => {
//     navigate(`/StudentDetails/${student_id}`);
//   };

//   useEffect(() => {
//     const token = sessionStorage.getItem("accessToken");

//     axios
//       .get("http://localhost:4000/api/getStudents", {
//         headers: {
//           Authorization:` Bearer ${token}`,
//           "Content-Type": "application/json",
//         },
//       })
//       .then((res) => {
//         setRecords(res.data);
//       })
//       .catch((err) => {
//         console.error("Error fetching students:", err);
//       });
//   }, []);

//   return (
//     <div className="d-flex justify-content-center align-items-center mx-auto col-md-12">
//       <div className="mt-3">
//         <h5 className="text-center">All Students Details</h5>

//         {records.length === 0 ? (
//           <p>No students found.</p>
//         ) : (
//           <div className="table-responsive">
//             <table className="table table-bordered table-striped">
//               <thead className="thead-dark">
//                 <tr>
//                   <th>Firstname</th>
//                   <th>Lastname</th>
//                   <th>Gender</th>
//                   <th>Action</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {records.map((r, i) => (
//                   <tr key={r._id}>
//                     <td>{r.firstname}</td>
//                     <td>{r.lastname}</td>
//                     <td>{r.gender}</td>
//                     <td>
//                       <Dropdown>
//                         <Dropdown.Toggle variant="secondary" id={`dropdown-${i}`} size="sm">
//                           Actions
//                         </Dropdown.Toggle>
//                         <Dropdown.Menu>
//                           <Link
//                             to="#"
//                             className="dropdown-item"
//                             onClick={(e) => {
//                               e.preventDefault();
//                               LoadStudent(r._id);
//                             }}
//                           >
//                             View Details
//                           </Link>
//                           <Link
//                             to="#"
//                             className="dropdown-item"
//                             onClick={(e) => {
//                               e.preventDefault();
//                               loadEdit(r._id);
//                             }}
//                           >
//                             Edit Student
//                           </Link>
//                         </Dropdown.Menu>
//                       </Dropdown>
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default AllStudents;

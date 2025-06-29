// // import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// // import Dashboard from './components/Dashboard';
// // import LoginForm from './components/LoginForm';
// // import RegisterForm from './components/RegisterForm';
// // import AddStudent from './components/AddStudent';
// // import UpdateStudent from './components/UpdateStudent';
// // import GetAllStudents from './components/GetAllStudents';
// // import DeleteStudent from './components/DeleteStudent';

// // function App() {
// //   return (
// //     <Router>
// //       <Routes>
// //         <Route path="/" element={<Dashboard />} />
// //         <Route path="/login" element={<LoginForm />} />
// //         <Route path="/register" element={<RegisterForm />} />
// //         <Route path="/add" element={<AddStudent />} />
// //         <Route path="/update" element={<UpdateStudent />} />
// //         <Route path="/getall" element={<GetAllStudents />} />
// //         <Route path="/delete" element={<DeleteStudent />} />
// //       </Routes>
// //     </Router>
// //   );
// // }

// // export default App;
// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Dashboard from "./components/Dashboard";
// import Login from "./components/Login";
// import Register from "./components/Register";
// import GetStudents from "./components/GetStudents";
// import UpdateStudent from "./components/UpdateStudent";
// import AddStudent from "./components/AddStudent";
// import DeleteStudent from "./components/DeleteStudent"; // You’ll create this

// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Dashboard />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/register" element={<Register />} />
//         <Route path="/getstudents" element={<GetStudents />} />
//         <Route path="/add" element={<AddStudent />} />
//         <Route path="/getall" element={<GetStudents />} />



//         <Route path="/UpdateStudent/:student_id" element={<UpdateStudent />} />
//         <Route path="/deletestudent" element={<DeleteStudent />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Dashboard from "./components/Dashboard";
import Login from "./components/Login"; // ✅ Make sure this is default exported
import Register from "./components/Register";
import GetStudents from "./components/GetStudents";
import UpdateStudent from "./components/UpdateStudent";
import AddStudent from "./components/AddStudent";
import DeleteStudent from "./components/DeleteStudent";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/getstudents" element={<GetStudents />} />
        <Route path="/add" element={<AddStudent />} />
        <Route path="/UpdateStudent/:student_id" element={<UpdateStudent />} />
        <Route path="/deletestudent" element={<DeleteStudent />} />
      </Routes>
    </Router>
  );
}

export default App;

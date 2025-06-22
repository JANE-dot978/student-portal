// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

// import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
// import LoginForm from './components/LoginForm';
// import RegisterForm from './components/RegisterForm';
// import ProtectedRoute from './components/ProtectedRoute';
// import Layout from './components/Layout';
// import Student from './components/Student';
// import Courses from './components/Courses';

// import Units from './components/Units';
// import Fees from './components/Fees'; 
// import { ToastContainer } from 'react-toastify';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';
import ProtectedRoute from './components/ProtectedRoute';
import Layout from './components/Layout';
import Student from './components/Student';
import Courses from './components/Courses';
import Units from './components/Units';
import Fees from './components/Fees';
import { ToastContainer } from 'react-toastify';


function App() {
  const isLoggedIn = !!localStorage.getItem('token');

  return (
    <Router>
      <ToastContainer />
      <Routes>
        <Route path="/" element={isLoggedIn ? <Navigate to="/dashboard/student" /> : <LoginForm />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/dashboard" element={<ProtectedRoute><Layout /></ProtectedRoute>}>
          <Route path="student" element={<Student />} />
          <Route path="courses" element={<Courses />} />
          <Route path="units" element={<Units />} />
          <Route path="fees" element={<Fees />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;


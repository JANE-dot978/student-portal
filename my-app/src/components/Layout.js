import { Outlet, NavLink, useNavigate } from 'react-router-dom';

const Layout = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/');
  };

  return (
    <div className="d-flex" style={{ minHeight: '100vh' }}>
      <div className="bg-dark text-white p-3" style={{ width: '250px' }}>
        <h4 className="mb-4">Student Portal</h4>
        <ul className="nav flex-column">
          <li className="nav-item">
            <NavLink to="student" className="nav-link text-white">Student</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="courses" className="nav-link text-white">Courses</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="units" className="nav-link text-white">Units</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="fees" className="nav-link text-white">Fees</NavLink>
          </li>
        </ul>
        <button className="btn btn-outline-light mt-4" onClick={handleLogout}>Logout</button>
      </div>

      <div className="p-4 flex-grow-1 bg-light">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;

import React from "react";
import { useNavigate } from "react-router-dom";
import {
  FaUserGraduate,
  FaUserPlus,
  FaTrash,
  FaUsers,
  FaSignInAlt,
  FaUserEdit,
} from "react-icons/fa";

const Dashboard = () => {
  const navigate = useNavigate();

  const actions = [
    { label: "Login", icon: <FaSignInAlt />, path: "/login", btn: "btn-primary" },
    { label: "Register", icon: <FaUserPlus />, path: "/register", btn: "btn-secondary" },
    { label: "Get All Students", icon: <FaUsers />, path: "/getall", btn: "btn-success" },
    { label: "Add Student", icon: <FaUserEdit />, path: "/add", btn: "btn-info" },
    { label: "Delete Student", icon: <FaTrash />, path: "/delete", btn: "btn-danger" },
  ];

  return (
    <div className="container mt-5">
      <div className="card shadow-lg p-4 rounded-4">
        <div className="text-center mb-4">
          <FaUserGraduate size={40} className="text-primary mb-2" />
          <h2 className="fw-bold">Student Management Dashboard</h2>
          <p className="text-muted">Manage student records with ease</p>
        </div>

        <hr className="mb-4" />

        <div className="row g-3">
          {actions.map((action, i) => (
            <div key={i} className="col-12 col-md-6">
              <button
                className={`btn ${action.btn} w-100 py-3 fw-semibold d-flex align-items-center justify-content-center gap-2`}
                onClick={() => navigate(action.path)}
              >
                {action.icon}
                {action.label}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

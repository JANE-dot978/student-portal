import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const UpdateStudent = () => {
  const { student_id } = useParams();
  const navigate = useNavigate(); // ✅ Use navigate here
  // const [loading, setLoading] = useState(false);

  const [data, setData] = useState({
    firstname: "",
    lastname: "",
    gender: "",
  });

  useEffect(() => {
    const token = sessionStorage.getItem("accessToken");
    // setLoading(true);

    axios
      .get(`http://localhost:4000/getStudent/${student_id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        setData({
          _id: res.data._id,
          firstname: res.data.firstname,
          lastname: res.data.lastname,
          gender: res.data.gender,
        });
      })
      .catch((err) => console.log(err))
      .finally(() => {
        // setLoading(false);
      });
  }, [student_id]);

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const saveStudent = (e) => {
    e.preventDefault();
    const token = sessionStorage.getItem("accessToken");
    // setLoading(true);

    axios
      .patch(
        `http://localhost:4000/api/students/updateStudent/${student_id}`,
        data,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      )
      .then(() => {
        toast.success("Student updated successfully", {
          position: "top-right",
          autoClose: 3000,
        });
        navigate("/getall"); // ✅ navigate directly
      })
      .catch((err) => {
        toast.error("An error occurred while updating the record.", {
          position: "top-right",
          autoClose: 3000,
        });
      })
      .finally(() => {
        // setLoading(false);
      });
  };

  return (
    <div className="d-flex justify-content-center mx-auto col-md-12 p-5 rounded shadow addStudent">
      <Form onSubmit={saveStudent}>
        <h4 className="pb-1 display-12">Edit Student</h4>

        <Form.Group className="mb-3" controlId="unit_Id">
          <Form.Control
            type="hidden"
            value={data._id}
            name="_id"
            disabled
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicFirstname">
          <Form.Label>Firstname:</Form.Label>
          <Form.Control
            type="text"
            required
            onChange={handleChange}
            name="firstname"
            value={data.firstname}
            placeholder="Enter Firstname"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicLastname">
          <Form.Label>Lastname:</Form.Label>
          <Form.Control
            type="text"
            required
            onChange={handleChange}
            name="lastname"
            value={data.lastname}
            placeholder="Enter Lastname"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicGender">
          <Form.Label>Gender:</Form.Label>
          <Form.Control
            type="text"
            required
            onChange={handleChange}
            name="gender"
            value={data.gender}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Update
        </Button>
        <ToastContainer />
      </Form>
    </div>
  );
};

export default UpdateStudent;

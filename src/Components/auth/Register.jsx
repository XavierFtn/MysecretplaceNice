import { useState } from "react";
import swal from "sweetalert";
import register from "../components/img/register.gif";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
import "../components/style/register.css";

function Register() {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    username: "",
    date_of_birth: "",
    name: "",
    picture: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      };

      const response = await fetch(
        "http://127.0.0.1:8000/api/register",
        options
      );
      const data = await response.json();
      console.log("data", data);
      if (data.status === "success") {
        // Récupérer le nom du système planétaire choisi

        sessionStorage.setItem(
          "token",
          JSON.stringify(data.authorisation.token)
        );
        sessionStorage.setItem("id", JSON.stringify(data.user.id));
        sessionStorage.setItem(
          "firstname",
          JSON.stringify(data.user.firstname)
        );
        sessionStorage.setItem("lastname", JSON.stringify(data.user.lastname));
        sessionStorage.setItem("email", JSON.stringify(data.user.email));
        sessionStorage.setItem(
          "date_of_birth",
          JSON.stringify(data.user.date_of_birth)
        );
        sessionStorage.setItem("user", JSON.stringify(data.user.username));
        sessionStorage.setItem(
          "planet",
          JSON.stringify(data.user.planetary_system_name)
        );

        swal("Registration successful!");
        navigate("/");
      } else {
        swal("Registration failed!", data.message, "error");
      }
    } catch (error) {
      console.error("Error during registration:", error);
      swal("Error", "An error occurred during registration", "error");
    }
  };

  return (
    <div className="container-sm">
      <div className="card">
        <h5 className="card-title text-center">Create your account</h5>
        <div>
          <img src={register} className="card-img-top" alt="Register" />
        </div>
        <div className="form-group">
          <input
            name="firstname"
            value={userData.firstname}
            onChange={handleChange}
            className="form-control"
            placeholder="First Name"
          />
        </div>
        <div className="form-group">
          <input
            name="lastname"
            value={userData.lastname}
            onChange={handleChange}
            className="form-control"
            placeholder="Last Name"
          />
        </div>
        <div className="form-group">
          <input
            name="email"
            value={userData.email}
            onChange={handleChange}
            className="form-control"
            placeholder="Email"
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            name="password"
            value={userData.password}
            onChange={handleChange}
            className="form-control"
            placeholder="Password"
          />
        </div>
        <div className="form-group">
          <input
            name="username"
            value={userData.username}
            onChange={handleChange}
            className="form-control"
            placeholder="Username"
          />
        </div>
        <div className="form-group">
          <input
            type="date"
            name="date_of_birth"
            value={userData.date_of_birth}
            onChange={handleChange}
            className="form-control"
            placeholder="Date of Birth (yyyy/mm/dd)"
          />
        </div>
        <div className="form-group">
          <input
            name="name"
            value={userData.name}
            onChange={handleChange}
            className="form-control"
            placeholder="Name of Planetary System"
          />
        </div>
        <div className="card">
          <label className="text-center fw-bold">Choose your Avatar:</label>
          <div className="form-group">
            <div className="row">
              <div className="col">
                <input
                  type="radio"
                  name="picture"
                  value="image1"
                  onChange={handleAvatarChange}
                />
                <img src={Avatar1} alt="Avatar 1" />
              </div>
              <div className="col">
                <input
                  type="radio"
                  name="picture"
                  value="image2"
                  onChange={handleAvatarChange}
                />
                <img src={Avatar2} alt="Avatar 2" />
              </div>
              <div className="col">
                <input
                  type="radio"
                  name="picture"
                  value="image3"
                  onChange={handleAvatarChange}
                />
                <img src={Avatar3} alt="Avatar 3" />
              </div>
              <div className="col">
                <input
                  type="radio"
                  name="picture"
                  value="image4"
                  onChange={handleAvatarChange}
                />
                <img src={Avatar4} alt="Avatar 4" />
              </div>
              <div className="col">
                <input
                  type="radio"
                  name="picture"
                  value="image5"
                  onChange={handleAvatarChange}
                />
                <img src={Avatar5} alt="Avatar 5" />
              </div>
              <div className="col">
                <input
                  type="radio"
                  name="picture"
                  value="image6"
                  onChange={handleAvatarChange}
                />
                <img src={Avatar6} alt="Avatar 6" />
              </div>
            </div>
          </div>
        </div>
        <button
          className="btn btn-dark border border-warning"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </div>
    </div>
  );
}

export default Register;

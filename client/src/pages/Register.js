import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools"; // Import DevTool
import Wrapper from "../assets/wrappers/RegisterAndLoginPage";
import Logo from "../components/Logo";
import { FormRow } from "../components";
import axios from "axios";

const Register = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await axios.post(
        "http://localhost:5000/api/v1/user/signup",
        data
      );
      console.log(response.data);
      navigate("/dashboard/profile");
    } catch (error) {
      console.log("error when sending the register data to the server", error);
    }
  };

  return (
    <Wrapper>
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <Logo />
        <h4> Register</h4>
        <FormRow
          type="text"
          name="name"
          labeltext="Name"
          register={register("name", {
            required: "User name is required",
          })}
          error={errors.name}
        />
        <FormRow
          type="text"
          name="lastname"
          labeltext="Last Name"
          register={register("lastname")}
        />
        <FormRow
          type="text"
          name="location"
          labeltext="Location"
          register={register("location")}
        />
        <FormRow
          type="email"
          name="email"
          labeltext="Email"
          register={register("email", {
            required: "Email is required",
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "Enter a valid email address",
            },
          })}
          error={errors.email}
        />
        <FormRow
          type="password"
          name="password"
          labeltext="Password"
          register={register("password", {
            required: "Password is required",
            minLength: {
              value: 6,
              message: "Password must be at least 6 characters",
            },
          })}
          error={errors.password}
        />
        <button type="submit" className="btn btn-block">
          Submit
        </button>
        <p>
          Already a member?{" "}
          <Link to="/login" className="member-btn">
            Login
          </Link>
        </p>
      </form>
      <DevTool control={control} /> {/* Include the DevTool component */}
    </Wrapper>
  );
};

export default Register;

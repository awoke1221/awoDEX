import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import Wrapper from "../assets/wrappers/RegisterAndLoginPage";
import { FormRow, Logo } from "../components";

const Login = () => {
  const navigate = useNavigate();
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await axios.post(
        "http://localhost:5000/api/v1/user/login",
        data
      );
      console.log(response.data);
      navigate("/dashboard/profile");
    } catch (error) {
      console.error(error.response ? error.response.data : error.message);
    }
  };

  return (
    <Wrapper>
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <Logo />
        <h4>Login</h4>
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
          Login
        </button>
        <p>
          Not a member yet?{" "}
          <Link to="/register" className="member-btn">
            Register
          </Link>
        </p>
      </form>
      <DevTool control={control} />
    </Wrapper>
  );
};

export default Login;

import { useDispatch } from "react-redux";
import { login as userLogin } from "../../store/authSlice";
import authService from "../../firebase/authService";

import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Input } from "postcss";
import { Button } from "../../utils";
import { useState } from "react";
function Login() {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const login = async (data) => {
    console.log(data);
    setError("");
    try {
      const userData = await authService.login({ data });
      //    if (session) {
      // console.log("session :: ", session.userId);
      // const userData = await authService.getCurrentUser();
      // if (userData) dispatch(authLogin(userData));
      // navigate("/");
      if (userData) {
        const userData = await dispatch(userLogin(userData));
        console.log(userData);
        if (userData) navigate("/");
      } else {
        console.log("User Not Found");
      }
    } catch (error) {
      console.log("Login Component :: Error ::", error.message);
      throw error;
    }
  };

  return (
    <div>
      <h1>login now</h1>
      {error && <p className="text-red-600 mt-8 text-center">{error}</p>}
      <form onSubmit={handleSubmit(login)}>
        <div className="space-y-5">
          <Input
            label="Email"
            type="email"
            placeholder="Enter Your Email"
            {...register("email", {
              required: true,
            })}
          />
          <Input
            label="Password"
            type="password"
            placeholder="Enter Your Password"
            {...register("password", {
              required: true,
            })}
          />

          <Button type="submit">Login Now</Button>
        </div>
      </form>
    </div>
  );
}

export default Login;

import { useDispatch, useSelector } from "react-redux";
import { login as userLogin } from "../../store/authSlice";
import authService from "../../firebase/firebase.js";

import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { ButtonSec, Input } from "../../utils";
import { Button } from "../../utils";
import { useState } from "react";
function Login() {
  const { register, reset, handleSubmit } = useForm();
  const dispatch = useDispatch();
  const authStatus = useSelector((state) => state.status);
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const login = async (data) => {
    console.log(data);
    const { email, password } = data;
    setError("");
    try {
      const userData = await authService.login(email, password);
      //    if (session) {
      // console.log("session :: ", session.userId);
      // const userData = await authService.getCurrentUser();
      // if (userData) dispatch(authLogin(userData));
      // navigate("/");
      console.log(userData);
      if (userData && userData?.email === email) {
        dispatch(userLogin(userData));

        if (authStatus === true) navigate("/user");
      } else {
        console.log("User Not Found");
      }
      reset();
    } catch (error) {
      console.log("Login Component :: Error ::", error);
      reset();
      throw error;
    }
  };

  return (
    <section>
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            Before they sold out
            <br className="hidden lg:inline-block" />
            readymade gluten
          </h1>
          <p className="mb-8 leading-relaxed">
            Copper mug try-hard pitchfork pour-over freegan heirloom neutra air
            plant cold-pressed tacos poke beard tote bag. Heirloom echo park
            mlkshk tote bag selvage hot chicken authentic tumeric truffaut
            hexagon try-hard chambray.
          </p>
          <div className="flex justify-center gap-4">
            <Link to={"/report"}>
              <Button>Download Reports</Button>
            </Link>

            <Link to={"/login"}>
              <ButtonSec>Login</ButtonSec>
            </Link>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <div className="  text-xl p-5  shadow-xl rounded ">
            <h1 className="text-4xl capitalize font-bold text-center my-4">
              Sign In
            </h1>
            {error && <p className="text-red-600 mt-8 text-center">{error}</p>}
            <form onSubmit={handleSubmit(login)} className="px-10 py-4">
              <div className="space-y-5 ">
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
        </div>
      </div>
    </section>
  );
}

export default Login;

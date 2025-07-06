import React, { useContext, useState } from "react";
import { Link, Navigate, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../../Provider/AuthProvider";
import { AiFillEyeInvisible } from "react-icons/ai";
import { AiFillEye } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import Swal from "sweetalert2";

const Login = () => {
   const location = useLocation();
   const navigate = useNavigate();
   const { signIn, googleSignIn, setUser } = useContext(AuthContext);

   const [showPassword, setShowPassword] = useState(false);

   const handelSignin = (e) => {
      e.preventDefault();

      const email = e.target.email.value;
      const password = e.target.password.value;

      signIn(email, password)
         .then((result) => {
            const user = result.user;
            setUser(user);
            Swal.fire({
               title: "signin successfully",
               html: "<p class='swal-text'>Thank you stay with us!</p>",
               icon: "success",
               draggable: true,
            });
            navigate(`${location.state ? location.state : "/"}`);
         })
         .catch((error) => {
            const errorMessage = error.message;
            if (errorMessage) {
               Swal.fire({
                  title: "Wrong Credentials",
                  html: `<p class='swal-text'>${errorMessage}</p>`,
                  icon: "error",
                  draggable: true,
               });
               navigate(`${location.state ? location.state : "/"}`);
            }
         });
   };

   const handelGoogleSignIn = () => {
      googleSignIn()
         .then((result) => {
            const user = result.user;
            setUser(user);
            const { displayName, email, photoURL } = user;
            const userData = {
               name: displayName,
               email,
               photo: photoURL,
            };
            fetch(
               `https://b11a10-server-side-dev-istiake.vercel.app/users/${email}`
            )
               .then((res) => res.json())
               .then((data) => {
                  if (data) {
                     Swal.fire({
                        title: "login successfully",
                        icon: "success",
                        draggable: true,
                     });
                     navigate(`${location.state ? location.state : "/"}`);
                  }
               })
               .catch((error) => {
                  const errorMessage = error.message;
                  if (errorMessage) {
                     fetch(
                        "https://b11a10-server-side-dev-istiake.vercel.app/users",
                        {
                           method: "POST",
                           headers: {
                              "content-type": "application/json",
                           },
                           body: JSON.stringify(userData),
                        }
                     )
                        .then((res) => res.json())
                        .then((data) => {
                           if (data.insertedId) {
                              Swal.fire({
                                 title: "login successfully",
                                 icon: "success",
                                 draggable: true,
                              });
                              navigate(
                                 `${location.state ? location.state : "/"}`
                              );
                           }
                        });
                  }
               });
         })
         .catch((error) => {
            const errorMessage = error.message;
            if (errorMessage) {
               Swal.fire({
                  title: "Your account created successfully",
                  html: `<p class='swal-text'>${errorMessage}</p>`,
                  icon: "error",
                  draggable: true,
               });
            }
         });
   };
   return (
      <div className="min-h-[calc(100vh-200px)] container mx-auto flex items-center justify-center">
         <div className="card bg-base-100 w-full max-w-lg shrink-0 shadow-2xl">
            <div className="card-body px-14 pb-10 gap-0">
               <div className="flex items-center justify-center border-b border-green-400 mb-5 py-5">
                  <h1 className="text-center text-[26px] font-semibold !font-jost">
                     <span className="text-green-600 !font-jost">Login</span>{" "}
                     your account
                  </h1>
               </div>
               <form onSubmit={handelSignin}>
                  <fieldset className="fieldset ">
                     <label className="label text-base text-gray-700 !font-jost font-medium">
                        Email
                     </label>
                     <input
                        name="email"
                        type="email"
                        className="input mb-3 w-full focus:outline-0 focus:border-green-600"
                        placeholder="Email"
                        required
                     />
                     <label className="label text-base text-gray-700 !font-jost font-medium">
                        Password
                     </label>
                     <div className="relative flex items-center">
                        <input
                           name="password"
                           type={showPassword ? "text" : "password"}
                           className="input mb-1 w-full focus:outline-0 focus:border-green-600"
                           placeholder="Password"
                           required
                        />
                        <button
                           onClick={() => {
                              setShowPassword((prev) => !prev);
                           }}
                           type="button"
                           className="absolute right-3 z-50"
                        >
                           {showPassword ? (
                              <AiFillEyeInvisible className="text-xl" />
                           ) : (
                              <AiFillEye className="text-xl" />
                           )}
                        </button>
                     </div>
                     <div className="mb-2">
                        <Link to={"../../forgot-password"}>
                           <p>Forget password</p>
                        </Link>
                     </div>
                     <button
                        type="submit"
                        className="btn bg-green-600 hover:bg-green-900 text-white mt-4"
                     >
                        Login
                     </button>
                     <p className="text-center mt-4">
                        Dont’t Have An Account ?{" "}
                        <Link to={"../register"} className="text-red-600">
                           Register
                        </Link>
                     </p>
                  </fieldset>
               </form>
               <button
                  onClick={() => {
                     handelGoogleSignIn();
                  }}
                  className="btn bg-transparent text-green-700 hover:bg-green-600 hover:text-white mt-4 border border-green-600"
               >
                  <FcGoogle className="text-1xl" />
                  Login with Google
               </button>
            </div>
         </div>
      </div>
   );
};

export default Login;

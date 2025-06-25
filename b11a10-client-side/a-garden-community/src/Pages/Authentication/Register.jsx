import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../../Provider/AuthProvider";
import { AiFillEyeInvisible } from "react-icons/ai";
import { AiFillEye } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import Swal from "sweetalert2";

const Register = () => {
   const location = useLocation();
   const navigate = useNavigate();
   const { createUser, setUser, googleSignIn } = useContext(AuthContext);

   const [password, setPassword] = useState("");
   const [isValid, setIsValid] = useState(true);
   const [showPassword, setShowPassword] = useState(false);

   const validatePassword = (value) => {
      const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9]).{8,}$/;
      return regex.test(value);
   };

   const handleChange = (e) => {
      const value = e.target.value;
      setPassword(value);
      setIsValid(validatePassword(value));
   };

   const handelRegister = (e) => {
      e.preventDefault();

      if (!isValid) {
         return;
      }

      const from = e.target;
      const fromData = new FormData(from);
      const { email, password, ...user } = Object.fromEntries(
         fromData.entries()
      );
      const userData = {
         email,
         ...user,
      };

      createUser(email, password)
         .then((result) => {
            const user = result.user;
            setUser(user);
            fetch("https://b11a10-server-side-dev-istiake.vercel.app/users", {
               method: "POST",
               headers: {
                  "content-type": "application/json",
               },
               body: JSON.stringify(userData),
            })
               .then((res) => res.json())
               .then((data) => {
                  if (data.insertedId) {
                     Swal.fire({
                        title: "Your account created successfully",
                        html: "<p class='swal-text'>Thank you for creating an account with us!</p>",
                        icon: "success",
                        draggable: true,
                     });
                     navigate(`${location.state ? location.state : "/"}`);
                  }
               });
         })
         .catch((error) => {
            const errorMessage = error.message;
            if (errorMessage) {
               Swal.fire({
                  title: "Your account already registered",
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
      <div className="min-h-screen container mx-auto flex items-center justify-center">
         <div className="card bg-base-100 w-full max-w-lg shrink-0 shadow-2xl">
            <div className="card-body px-14 pb-10 gap-0">
               <div className="flex items-center justify-center border-b border-green-400 mb-5 py-5">
                  <h1 className="text-center text-[26px] font-semibold !font-jost">
                     <span className="text-green-600 !font-jost">Register</span>{" "}
                     your account
                  </h1>
               </div>
               <form onSubmit={handelRegister}>
                  <fieldset className="fieldset w-full">
                     <label className="label text-base text-gray-700 !font-jost font-medium">
                        Name
                     </label>
                     <input
                        name="name"
                        type="text"
                        className="input mb-3 w-full focus:outline-0 focus:border-green-600"
                        placeholder="Name"
                        required
                     />
                     <label className="label text-base text-gray-700 !font-jost font-medium">
                        Photo URL
                     </label>
                     <input
                        name="photo"
                        type="text"
                        className="input mb-3 w-full focus:outline-0 focus:border-green-600"
                        placeholder="Photo Url"
                        required
                     />
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
                           value={password}
                           onChange={handleChange}
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

                     {!isValid && (
                        <p style={{ color: "red" }}>
                           Password must have at least 6 characters, including
                           one uppercase and one lowercase letter.
                        </p>
                     )}
                     <button
                        type="submit"
                        className="btn bg-green-600 hover:bg-green-900 text-white mt-4"
                     >
                        Register
                     </button>
                     <p className="text-center mt-4">
                        Already have an account ?{" "}
                        <Link to={"../login"} className="text-red-600">
                           Login Now
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
                  <FcGoogle className="text-1xl" /> Login with Google
               </button>
            </div>
         </div>
      </div>
   );
};

export default Register;

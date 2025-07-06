import React, { useContext } from "react";
import Swal from "sweetalert2";
import dayjs from "dayjs";
import { AuthContext } from "../Provider/AuthProvider";
import { ThemeContext } from "../Components/ToggleThemeProvider";

const ShareAGardenTip = () => {
   const { user } = useContext(AuthContext);
   const { theme } = useContext(ThemeContext);
   theme === "light" ? "bg-stone-300" : "bg-stone-900";

   const handleSubmit = (e) => {
      e.preventDefault();
      const currentDate = dayjs().format("YYYY-MM-DD");

      const form = e.target;
      const formData = new FormData(form);
      const {
         name,
         email,
         title,
         plant_type,
         difficulty_level,
         description,
         images_url,
         category,
         status,
      } = Object.fromEntries(formData.entries());
      const tipsData = {
         name,
         email,
         title,
         plant_type,
         difficulty_level,
         description,
         images_url,
         category,
         likes: "0",
         created_at: currentDate,
         status,
      };

      fetch("https://b11a10-server-side-dev-istiake.vercel.app/tips", {
         method: "POST",
         headers: {
            "content-type": "application/json",
         },
         body: JSON.stringify(tipsData),
      })
         .then((res) => res.json())
         .then((data) => {
            if (data.insertedId) {
               Swal.fire({
                  title: "Your tips shared successfully",
                  text: "Thank you for sharing your tips with us!",
                  icon: "success",
                  draggable: true,
               });
               form.reset();
            }
         });
   };

   return (
      <div className="w-full bg-base-200 py-10">
         <div className=" lg:max-w-4xl mx-auto min-h-[calc(100vh-170px)]  rounded-2xl px-2 lg:px-0 ">
            <fieldset className="fieldset bg-base-100 border-base-300 rounded-box lg:w-4xl border p-4 py-10">
               <legend className="fieldset-legend text-[28px] text-center !text-primary-content">
                  Share{" "}
                  <span className="text[28px] text-primary">
                     your tips here
                  </span>
               </legend>

               <form
                  onSubmit={handleSubmit}
                  className="grid grid-cols-1 lg:grid-cols-2  gap-6 px-3"
               >
                  <div className="flex flex-col gap-2 lg:col-span-2">
                     <label className="label text-sm">User Name</label>

                     <input
                        name="name"
                        type="text"
                        className="input w-full bg-transparent focus:outline-0"
                        placeholder={user.displayName}
                        value={user.displayName}
                        readOnly
                     />
                  </div>
                  <div className="flex flex-col gap-2">
                     <label className="label text-sm">User Email</label>
                     <input
                        name="email"
                        type="email"
                        className="input w-full focus:outline-0 bg-base-300"
                        placeholder={user.email}
                        value={user.email}
                        readOnly
                     />
                  </div>
                  <div className="flex flex-col gap-2">
                     <label className="label text-sm">Title</label>
                     <input
                        name="title"
                        type="text"
                        className="input w-full focus:outline-0 bg-base-300"
                        placeholder="Enter the tips Title"
                        required
                     />
                  </div>
                  <div className="flex flex-col gap-2">
                     <label className="label text-sm">Plant</label>
                     <input
                        name="plant_type"
                        type="text"
                        className="input w-full focus:outline-0"
                        placeholder="Enter plant type"
                        required
                     />
                  </div>
                  <div className="flex flex-col gap-2">
                     <label className="label text-sm">Difficulty Level</label>

                     <select
                        name="difficulty_level"
                        defaultValue="Select difficulty level"
                        className="select text-gray-400 w-full focus:outline-0 "
                        required
                     >
                        <option>Easy</option>
                        <option>Medium</option>
                        <option>Hard</option>
                     </select>
                  </div>
                  <div className="flex flex-col gap-2">
                     <label className="label text-sm">Description</label>
                     <input
                        name="description"
                        type="text"
                        className="input w-full focus:outline-0 bg-base-300"
                        placeholder="Description"
                        required
                     />
                  </div>
                  <div className="flex flex-col gap-2">
                     <label className="label text-sm">Images url</label>
                     <input
                        name="images_url"
                        type="text"
                        className="input w-full focus:outline-0 bg-base-300"
                        placeholder="Enter the image url"
                        required
                     />
                  </div>
                  <div className="flex flex-col gap-2">
                     <label className="label text-sm">Category</label>
                     <select
                        name="category"
                        defaultValue="Select category"
                        className="select text-gray-400 w-full focus:outline-0 "
                        required
                     >
                        <option>Composting</option>
                        <option>Plant Care</option>
                        <option>Vertical Gardening</option>
                        <option>Soil Care</option>
                        <option>Irrigation</option>
                        <option>Plant Maintenance</option>
                        <option>Plant Arrangement</option>
                        <option>Garden Protection</option>
                        <option>Propagation</option>
                        <option>Harvesting</option>
                     </select>
                  </div>
                  <div className="flex flex-col gap-2">
                     <label className="label text-sm">Availability</label>
                     <select
                        name="status"
                        defaultValue="Select availability status"
                        className="select text-gray-400 w-full focus:outline-0 "
                        required
                     >
                        <option>public</option>
                        <option>private</option>
                     </select>
                  </div>

                  <button
                     className="btn mt-4 lg:col-span-2 bg-transparent border-green-600 text-green-600 hover:bg-green-600 hover:text-white rounded-xl "
                     type="submit"
                  >
                     Share Now
                  </button>
               </form>
            </fieldset>
         </div>
      </div>
   );
};

export default ShareAGardenTip;

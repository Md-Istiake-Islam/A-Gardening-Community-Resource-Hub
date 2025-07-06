import React from "react";
import { GiPlantWatering, GiTreeBranch } from "react-icons/gi";
import { FaUsers, FaSeedling } from "react-icons/fa";
import { MdEvent } from "react-icons/md";

const AboutUs = () => {
   return (
      <div className="bg-[#f5fdf2] text-[#2e690c] min-h-screen py-16 px-4 lg:px-0">
         <div className="container mx-auto max-w-5xl text-center">
            {/* Banner Section */}
            <h1 className="text-4xl lg:text-3xl font-bold mb-6 font-source-serif">
               About <span className="text-primary">Garden Community</span>
            </h1>
            <p className="text-base text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
               Welcome to <strong>Garden Community</strong> — a digital space
               where nature lovers, plant parents, and gardening experts come
               together to grow, share, and inspire.
            </p>

            {/* Highlight Features Section */}
            <div className="grid md:grid-cols-2 gap-8 mb-16 text-left">
               <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition">
                  <div className="flex items-center gap-3 mb-2 text-green-800">
                     <GiPlantWatering className="text-2xl" />
                     <h2 className="text-xl font-semibold">
                        Share & Explore Gardening Tips
                     </h2>
                  </div>
                  <p className="text-gray-600 text-sm 2xl:text-base !font-source-serif">
                     Learn and grow together! Discover practical gardening tips
                     from fellow members, or share your own expertise to help
                     others thrive — whether it's about soil prep, composting,
                     pest control, or pruning.
                  </p>
               </div>

               <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition">
                  <div className="flex items-center gap-3 mb-2 text-green-800">
                     <FaUsers className="text-2xl" />
                     <h2 className="text-xl font-semibold">
                        Discover Gardeners Around You
                     </h2>
                  </div>
                  <p className="text-gray-600 text-sm 2xl:text-base !font-source-serif">
                     Connect with passionate gardeners from around the world.
                     Explore profiles, exchange ideas, and celebrate each
                     other's green spaces and floral creations.
                  </p>
               </div>

               <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition">
                  <div className="flex items-center gap-3 mb-2 text-green-800">
                     <MdEvent className="text-2xl" />
                     <h2 className="text-xl font-semibold">
                        Gardening Events & Updates
                     </h2>
                  </div>
                  <p className="text-gray-600 text-sm 2xl:text-base !font-source-serif">
                     Stay in the loop with upcoming gardening events, workshops,
                     webinars, and seasonal campaigns. Never miss a chance to
                     grow your knowledge and your network.
                  </p>
               </div>

               <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition">
                  <div className="flex items-center gap-3 mb-2 text-green-800">
                     <GiTreeBranch className="text-2xl" />
                     <h2 className="text-xl font-semibold">
                        Friendly Community Environment
                     </h2>
                  </div>
                  <p className="text-gray-600 text-sm 2xl:text-base !font-source-serif">
                     Whether you're a beginner with a single pot or an expert
                     with a full yard, Garden Community is a welcoming space for
                     you. Ask questions, offer advice, and make lasting
                     friendships.
                  </p>
               </div>
            </div>

            {/* Mission & Vision */}
            <div className="bg-green-50 p-8 rounded-2xl shadow-inner">
               <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
               <p className="text-gray-700 mb-6">
                  To build a digital garden where knowledge blooms and
                  connections grow — one shared tip, one planted seed, and one
                  inspired gardener at a time.
               </p>
               <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
               <p className="text-gray-700">
                  We envision a global gardening community that promotes
                  sustainability, well-being, and education through shared
                  passion for nature and nurturing.
               </p>
            </div>

            {/* Call to Action */}
            <div className="mt-16">
               <h2 className="text-xl font-semibold mb-3">
                  Ready to grow with us?
               </h2>
               <p className="mb-6 text-gray-600">
                  Join Garden Community today and be a part of something
                  beautiful — your garden and your voice matter.
               </p>
               <a
                  href="/register"
                  className="inline-block bg-primary text-white px-6 py-2 rounded-full font-semibold shadow hover:shadow-lg transition"
               >
                  Get Started
               </a>
            </div>
         </div>
      </div>
   );
};

export default AboutUs;

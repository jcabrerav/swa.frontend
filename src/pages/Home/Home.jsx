// Home.js
import React, { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar/Sidebar";

const Home = () => {
  const [open, setOpen] = useState(false);
  const toggleSidebar = () => setOpen(!open);

  return (
    <section className="flex flex-col">
      <Navbar toggleSidebar={toggleSidebar} />
      <div className="flex gap-6">
        <Sidebar open={open} toggleSidebar={toggleSidebar} />
        <div className="m-3 text-xl text-gray-900 font-semibold">
          REACT TAILWIND
        </div>
      </div>
    </section>
  );
};

export default Home;

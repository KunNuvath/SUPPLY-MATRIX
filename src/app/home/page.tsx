import React from "react";
import Navbar from "./components/Navbar";
import { Header } from "./components/Header";
import Sidebar from "./components/Sidebar";

const page = () => {
  return (
    <div>
        <Navbar />
        <Header />
        <Sidebar />
    </div>
  );
};

export default page;

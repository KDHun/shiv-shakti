import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
const HeaderPage = () => {
  return (
    <>
      <Header></Header>
      <Outlet />
    </>
  );
};

export default HeaderPage;
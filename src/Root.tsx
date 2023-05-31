import React from "react";
import { Route, Routes } from "react-router-dom";
import AuthenticatedLayout from "./layouts/AuthenticatedLayout";
import HomePage from "./pages/HomePage/HomePage";
import useUserData from "./queries/index";
import getRoot from "./helper/index";

const Root: React.FC = () => {
  // TODO add user verification
  const isLogged = true;
  const { isLoading } = useUserData();

  if (isLoading) return <>Loading...</>;

  if (isLogged) {
    return (
      <AuthenticatedLayout>
        <Routes>
          <Route path={getRoot("/")} element={<HomePage />} />
        </Routes>
      </AuthenticatedLayout>
    );
  }

  // TODO add GuestLayout
  return <></>;
};

export default Root;

import React from "react";
import { Route, Routes } from "react-router-dom";
import AuthenticatedLayout from "./layouts/AuthenticatedLayout";
import HomePage from "./pages/HomePage/HomePage";

const Root: React.FC = () => {
  // TODO add user verification
  const isLogged = true;

  if (isLogged) {
    return (
      <AuthenticatedLayout>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </AuthenticatedLayout>
    );
  }

  // TODO add GuestLayout
  return <></>;
};

export default Root;

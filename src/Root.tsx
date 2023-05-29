import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import AuthenticatedLayout from "./layouts/AuthenticatedLayout";

const Root: React.FC = () => {
  // TODO add user verification
  const isLogged = true;

  if (isLogged) {
    return (
      <AuthenticatedLayout>
        <BrowserRouter>
          <Route path="/" element={<></>} />
        </BrowserRouter>
      </AuthenticatedLayout>
    );
  }

  // TODO add GuestLayout
  return (
    <></>
  );
};

export default Root;

import React from "react";
import LoginClient from "../components/auth/LoginClient";
import { getCurrentUser } from "../actions/getCurremtUser";

const login = async () => {
  const currentUser = await getCurrentUser();
  return (
    <div>
      <LoginClient currentUser={currentUser} />
    </div>
  );
};

export default login;

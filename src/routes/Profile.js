import React from "react";
import { useHistory } from "react-router-dom";
import { auth } from "../firebase";

const Profile = () => {
  const history = useHistory();
  const logOutClick = () => {
    auth.signOut();
    history.push("/");
  };
  return (
    <>
      <button onClick={logOutClick}>Logout</button>
    </>
  );
};

export default Profile;

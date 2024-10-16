import React from "react";
import { auth } from "../firebase";

const style = {
  button: `px-4 py-2 text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br`,
};

const LogOut = () => {
  const signOut = () => {
    signOut(auth);
  };

  return (
    <button onClick={() => auth.signOut()} className={style.button}>
      Logout
    </button>
  );
};

export default LogOut;

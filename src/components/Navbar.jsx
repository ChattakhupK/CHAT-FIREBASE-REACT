import React from "react";
import SignIn from "./SignIn";
import { auth } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import LogOut from "./LogOut";

const style = {
  Nav: `bg-gray-800 h-20 flex justify-between items-center p-4`,
  heading: `text-white text-2xl`,
};

const Navbar = () => {
  const [user] = useAuthState(auth);
console.log(user)
  return (
    <div className={style.Nav}>
      <h1 className={style.heading}>REALTIME CHAT</h1>
      {user ?<LogOut /> : <SignIn />}
    </div>
  );
};

export default Navbar;

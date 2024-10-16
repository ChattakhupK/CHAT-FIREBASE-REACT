import "./App.css";
import Navbar from "./components/Navbar";
import Chat from "./components/Chat";

import { auth } from "./firebase";
import { useAuthState } from "react-firebase-hooks/auth";

const style = {
  appContainer: `max-w-[728px] mx-auto text-center`,
  sectionContainer: `flex flex-col h-[90vh] bg-gray-100 mt-10 shadow-xl border relative`,
  footer:`py-2 mt-8 bg-black text-white text-center`
};

function App() {
  const [user] = useAuthState(auth)

  return (
    <>
    <div className={style.appContainer}>
      <section className={style.sectionContainer}>
        <Navbar />
        {user ? <Chat /> : null}
      </section>
    </div>
    <footer className={style.footer}>
      Copyright © VAT7%
      </footer>
    </>
  );
}

export default App;

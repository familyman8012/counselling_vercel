import { useState } from "react";
import NewWindow from "react-new-window";
import { signOut, useSession } from "next-auth/client";

const LoginBtn = () => {
  const [popup, setPopUp] = useState(false);
  const [session, loading] = useSession();

  return (
    <span>
      {loading ? (
        <p>loading session...</p>
      ) : session ? (
        <span onClick={() => signOut()}>Logout</span>
      ) : (
        <span onClick={() => setPopUp(true)}>Login</span>
      )}

      {popup && !session ? (
        <NewWindow url="/sign-in" onUnload={() => setPopUp(false)} />
      ) : null}
    </span>
  );
};

export default LoginBtn;

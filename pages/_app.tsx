import "../styles/globals.css";
import "../configs/firebase.config";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "../configs/firebase.config";
import SignIn from "../components/SignIn";
import Loading from "../components/Loading";
import { useEffect } from "react";
import { doc, setDoc } from "firebase/firestore";
import { ThemeProvider } from "next-themes";

function MyApp({ Component, pageProps }) {
  const [user, loading] = useAuthState(auth);

  useEffect(() => {
    if (user) {
      setDoc(doc(db, "User", user.uid), {
        name: user.displayName,
        email: user.email,
        photo: user.photoURL,
      });
    }
  });

  if (loading) {
    return <Loading />;
  }
  if (!user) {
    return <SignIn />;
  } else {
    return (
      <ThemeProvider attribute="class">
        <Component {...pageProps} />{" "}
      </ThemeProvider>
    );
  }
}

export default MyApp;

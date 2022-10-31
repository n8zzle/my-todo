import "../styles/globals.css";
import "../configs/firebase.config";

function MyApp({ Component, pageProps, app, provider, auth }) {
  return <Component {...pageProps} />;
}

export default MyApp;

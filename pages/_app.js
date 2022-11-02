import "../styles/globals.css";
import Footer from "./components/footer";
import Header from "./components/header";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header></Header>
      <main className="main">
        <Component {...pageProps} />
      </main>
      <Footer />
    </>
  );
}

export default MyApp;

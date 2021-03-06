import "../styles/globals.css";
import "antd/dist/antd.css";
import LayoutComponent from "../layouts/LayoutComponent";

function MyApp({ Component, pageProps }) {
  return (
    <LayoutComponent>
      <Component {...pageProps} />
    </LayoutComponent>
  );
}

export default MyApp;

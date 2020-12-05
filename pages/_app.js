import Page from "../libs/page";
import GlobalStyles from "../globalStyles";
import NavigationHeader from "../components/NavigationHeader/NavigationHeader";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <NavigationHeader />
      <Page>
        <Component {...pageProps} />
      </Page>
      <GlobalStyles />
    </>
  );
}

export default MyApp;

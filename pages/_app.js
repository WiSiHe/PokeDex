import Page from "../libs/page";
import GlobalStyles from "../globalStyles";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Page>
        <Component {...pageProps} />
      </Page>
      <GlobalStyles />
    </>
  );
}

export default MyApp;

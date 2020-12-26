import Page from "../libs/page";
import GlobalStyles from "../globalStyles";
import NavigationHeader from "../components/NavigationHeader/NavigationHeader";
import { RecoilRoot } from "recoil";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <RecoilRoot>
        <NavigationHeader />
        <Page>
          <Component {...pageProps} />
        </Page>
        <GlobalStyles />
      </RecoilRoot>
    </>
  );
}

export default MyApp;

import Router from "next/router";

Router.events.on("routeChangeComplete", (url) => {
  if (typeof window === "undefined") {
    return false;
  }
});

const Page = ({ children }) => children;

export default Page;

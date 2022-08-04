import Script from "next/script";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/globals.css';
import '../styles/header.css';
import '../styles/blogs.css';
import '../styles/client.css';
import '../styles/footer.css';
import '../styles/banner.css';
import '../styles/contacto.css';
import '../styles/service.css';
import '../styles/cultura.css';
import "@fortawesome/fontawesome-svg-core/styles.css"; // import Font Awesome CSS
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

import type { AppProps } from 'next/app'
import { AnimatePresence } from "framer-motion";
import Header from "../components/Header";
import { useEffect } from "react";

function MyApp({ Component, pageProps, router }: AppProps) {


 
  return (
    <div>

      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
        crossOrigin="anonymous"
      />

      <Script id="bootstrap-cdn"
      src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" />

      <Header />
      <AnimatePresence
        exitBeforeEnter
        initial={true}
        onExitComplete={() => window.scrollTo(0, 0)}>
        <Component {...pageProps} canonical={""} key={router.asPath} />
      </AnimatePresence>
    </div>);
}

export default MyApp

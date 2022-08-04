import Layout from "../components/Layout";
import Cultura from '../components/Cultura';
import Service from '../components/Service';
import About from '../components/About';
import Footer from '../components/Footer';
import Blogs from "../components/Blogs";
import Contacto from "../components/Contacto";
import Client from "../components/Client";
import Banner from "../components/Banner";
import Services from "../components/Services";
import { useEffect } from "react";

const Index = () => {

  useEffect(() => {

    document.body.style.backgroundImage='url(/images/fondo10.jpg)'
   /* document.body.style.background='#2c5364'  W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  });

  return (
    <Layout pageTitle="Sms Sudamerica">
      <Banner />
      <Services />
      <Client />
      <Cultura />
      <Blogs />
      <Contacto />
      <Footer />
    </Layout>
  )
}

export default Index;

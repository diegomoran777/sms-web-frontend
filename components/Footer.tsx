import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from "reactstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import Image from 'next/image';
import images from '../assets/logo';
import ReactTextTransition, { presets } from "react-text-transition";

const texts = [" JAVA", " JavaScript", " React", " Angular", ".NET", "COBOL", "BI"];

const Footer = () => {
  const links = [
    {
      id: 1, title: "Feature",
      child: [
        { title: "LOREM IPSUM", link: "/" },
        { title: "LOREM IPSUM", link: "/" },
        { title: "LOREM IPSUM", link: "/" },
        { title: "LOREM IPSUM", link: "/" }
      ]
    },
    {
      id: 2, title: "About Us",
      child: [
        { title: "Contact Us", link: "/" },
        { title: "FAQs", link: "/" },
        { title: "Privacy Policy", link: "/" },
      ]
    },
  ];

  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setCounter(counter + 1);
    }, 250);

    return () => {
      clearTimeout(timeout);
    };
  }, [counter]);

  return (

    <section className="footer section footer-section">

      <Container className='footer-down'>
        <Row >
          <Col lg={4}>
            <div className="mb-4">
              <h4 className="text-white mb-3">Transforma tu negocia</h4>
              <p className="text-muted mt-4 mb-2">Av. Cordoba 1345 8 piso - CABA</p>
              <h6 className="text-muted font-weight-normal">(011) 3988-6868</h6>
              <p className="text-muted mt-4 mb-2">La Concepcion 191, Piso 6, Santiago, Chile</p>
              <h6 className="text-muted font-weight-normal">(+56 9) 7955-5582</h6>
            </div>
          </Col>

          <Col style={{ alignContent: 'flex-end' }} sm={8} md={8} lg={6}>
            <Row>

              <Row className='ml-5' sm={4} md={4} lg={4}>
                <Col className='mr-2' lg={2}>
                  <Image src={images[0]} alt='' />
                </Col>
                <Col className='ml-5' lg={3}>
                  <Image src={images[1]} alt='' />
                </Col>
              </Row>

              <Row className='ml-5'>
                <ul className="mt-4">
                  <li className="list-inline-item">
                    <FontAwesomeIcon
                      className='icon-footer icon-footer-face'
                      style={{ fontSize: 30 }}
                      icon={faFacebook} />
                    <p className='list-inline-item text-icon-footer text-white'>sms.sudamerica</p>
                  </li>
                  <li className="list-inline-item">
                    <FontAwesomeIcon
                      className='icon-footer icon-footer-inst'
                      style={{ fontSize: 30 }}
                      icon={faInstagram} />
                    <p className='list-inline-item text-icon-footer text-white'>sms.sudamerica</p>
                  </li>
                  <li className="list-inline-item">
                    <FontAwesomeIcon
                      className='icon-footer icon-footer-linkedin'
                      style={{ fontSize: 30 }}
                      icon={faLinkedinIn} />
                    <p className='list-inline-item text-icon-footer text-white'>SMS Sudamerica</p>
                  </li>
                </ul>
              </Row>
            </Row>
          </Col>
          
        </Row>

      </Container>
    </section>







    /*   <section className="footer footer-section">
      <Container className='rowsFooter'>
  
       <Container className='footer-down'>
        <Row >
  
            <Col lg={4}>
                  <div className="mb-4">
                    <h4 className="text-white mb-3">Transforma tu negocio</h4>
                    <p className="text-muted mt-4 mb-2">Av. Cordoba 1345 8 piso - CABA</p>
                    <h6 className="text-muted font-weight-normal">(011) 3988-6868</h6>
                    <p className="text-muted mt-4 mb-2">La Concepcion 191, Piso 6, Santiago, Chile</p>
                    <h6 className="text-muted font-weight-normal">(+56 9) 7955-5582</h6>
                  </div>
            </Col>
                
            <Col lg={3}>
                  <Row>
                      <ul className="social-network mt-4">
                        <li className="list-inline-item">
                          <FontAwesomeIcon
                            className='icon-footer icon-footer-face'
                            style={{ fontSize: 30 }}
                            icon={faFacebook} />
                          <p className='list-inline-item text-icon-footer text-white'>sms.sudamerica</p>
                        </li>
                        <li className="list-inline-item">
                          <FontAwesomeIcon
                            className='icon-footer icon-footer-inst'
                            style={{ fontSize: 30 }}
                            icon={faInstagram} />
                          <p className='list-inline-item text-icon-footer text-white'>sms.sudamerica</p>
                        </li>
                        <li className="list-inline-item">
                          <FontAwesomeIcon
                            className='icon-footer icon-footer-linkedin'
                            style={{ fontSize: 30 }}
                            icon={faLinkedinIn} />
                          <p className='list-inline-item text-icon-footer text-white'>SMS Sudamerica</p>
                        </li>
                      </ul>
                    </Row>
            </Col>
            <Col lg={5}>      
              <Row className='imagesRow'>
                  <Col lg={5}>
                      <Image src={images[0]} alt='' />
                  </Col>
                  <Col className='ml-1' lg={6}>
                      <Image src={images[1]} alt='' />
                  </Col>
              </Row>
            </Col>
  
              </Row>
            </Container>
  
      </Container>
      
      </section> */

  );
}

export default Footer;
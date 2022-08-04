import React from 'react';
import { Container, Row, Col } from "reactstrap";
import images from '../assets/culturaImg';
import { useInView } from 'react-intersection-observer';
import { components_variants } from '../variants/variants';
import { motion } from 'framer-motion';

const FeatureBox = (props) => {
  return (
    <>
      {
        props.features.map((feature, key) =>

          <Row key={key} className={feature.id === 1 ? "align-items-center" : "align-items-center mt-5"}>
            <Col md={6} >
              <div>
                <img src={images[0].src} alt="" className="img-fluid d-block mx-auto border border-dark cultura-img" />
              </div>
            </Col>
            <Col md={{ size: 5, offset: 1 }}>
              <div className="mt-5 mt-sm-0 mb-4">
                <h1 className="text-danger font-weight-bold mb-3 pt-3">{feature.title}</h1>
                <p className="text-muted mb-3 f-15">{feature.desc}</p>
              </div>
            </Col>
          </Row>
        )
      }
    </>
  );
}

const Cultura = () => {

  const [ref, inView] = useInView({
    /* Optional options */
    threshold: 0.5,
    triggerOnce: false
  });

  const features = [
    { id: 1, img: "../assets/Blog portada.jpg", title: "Cultura", desc: "En SMS Sudamerica estamos en constante avance sobre las ultimas tecnologias disponibles a nivel mundial. Tomamos en cuanta todos los avances y es por eso que capacitamos constantemente a nuestro equipo para ayudarlos a crecer junto a nosotros.", link: "/" }
  ];

  return (
    <section className="section-cultura-gris" id="feature">
      <Container >
        <motion.div
          animate={inView ? 'visible' : 'hidden'}
          variants={components_variants}
          transition={{ duration: 2, ease: 'easeOut' }}
          ref={ref}>
          <FeatureBox features={features} />
        </motion.div>
      </Container>
    </section>
  );
}

export default Cultura;

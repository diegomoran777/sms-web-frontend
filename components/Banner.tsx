import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import images from '../assets/img-banner';
import { motion } from 'framer-motion';
import { banner_animation_variants, banner_variants, fadeInUp } from '../variants/variants';

const Banner = () => {
    return (
        <section className="section position-relative banner-section">
            <Container>
                <Row className="align-items-center">
                    <Col lg={6}>
                        <motion.div 
                            className="pr-lg-5"
                            variants={fadeInUp()}
                            initial="initial"
                            animate="animate">
                            <h1 className="text-white font-weight-bold font-italic">SMS Sudamérica</h1>
                                <p className="text-muted mb-4 pb-2">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                              {/*   <a href="#" className="btn btn-warning">
                                    Encontra mas sobre nosotros en <span className="ml-2 right-icon">&#8594;</span>
                                </a> */}
                        </motion.div>
                    </Col>
                    <Col lg={6}>
                        <motion.div
                            className="mt-5 mt-lg-0"
                            variants={banner_variants}
                            initial="initial"
                            animate="animate">
                            <motion.img
                                className="img-fluid mx-auto d-block"
                                variants={banner_animation_variants}
                                initial="initial"
                                animate="animate"
                                src={images[0].src} />
                        </motion.div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default Banner;
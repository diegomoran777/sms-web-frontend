import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import Image from 'next/image';
import { motion } from 'framer-motion';
import images from '../assets/img2';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleDown } from '@fortawesome/free-regular-svg-icons';
import { useInView } from 'react-intersection-observer';
import { components_variants } from '../variants/variants';

const Client = () => {
    const [ref, inView] = useInView({
        /* Optional options */
        threshold: 0.5,
        triggerOnce: false
    });


    return (

        <section className='section-client-gris'>
            <Container>
            <motion.div
                        animate={inView ? 'visible' : 'hidden'}
                        variants={components_variants}
                        transition={{ duration: 2, ease: 'easeOut' }}
                        ref={ref}>
                <Row className="justify-content-start">
                    <Col lg={6} md={8}>
                        <div className="text-sart mb-5">
                            <h1 className="font-weight-bold text-dark mt-3">
                                <span className='text-danger'>Clientes y Socios</span>
                            </h1>
                        </div>
                    </Col>
                        <div className="row row-cols-6 row-cols-md-6 g-6 client-row">
                      
                            {images.map((image, index) => {
                                return (
                                
                                    <motion.div
                                        key={index}
                                        whileHover={{
                                            scale: [1, 1.4, 1.2],
                                            rotate: [0, 10, -10, 0],
                                            transition: {
                                                duration: .3,
                                                type: 'spring'
                                            }
                                        }}>
                                           
                                        <div className="card border-0 card-client">
                                         
                                            <Image className="card-img-top img-client" src={image} alt='' />
                                            <div className="card-img-overlay card-client-overlay">
                                                <div className="position-absolute bottom-0 start-0">
                                                    <motion.div className="icon-client">
                                                        <FontAwesomeIcon
                                                            className='icon-client'
                                                            style={{ fontSize: 30 }}
                                                            icon={faArrowAltCircleDown} />
                                                    </motion.div>
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>

                                );
                            })}

                        </div>
                </Row>
                </motion.div>
            </Container>

        </section>

    );
}

export default Client;
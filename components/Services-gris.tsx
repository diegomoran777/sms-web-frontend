import React from 'react';
import { Container } from 'reactstrap';
import Image from 'next/image';
import { motion } from 'framer-motion';
import images from '../assets/img_servicios';
import { useInView } from 'react-intersection-observer';
import { components_variants } from '../variants/variants';

const Services = () => {
    const [ref, inView] = useInView({
        /* Optional options */
        threshold: 0.5,
        triggerOnce: false
    });


    return (

        <section className='section-service'>
            <Container>
           
                <motion.div
                    animate={inView ? 'visible' : 'hidden'}
                    variants={components_variants}
                    transition={{ duration: 2, ease: 'easeOut' }}
                    ref={ref}>
                    <div className="row row-cols-5 row-cols-md-5 g-5 service-row">

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
                                        
                                    <div className="card-service-wrapper">
                                        <div className="card border-0 card-service">
                                            <Image className="img-service" src={image} alt='' />
                                            <div className="card-img-overlay d-flex justify-content-center">
                                                <h5 className="card-text text-white">DATA TEAM</h5>
                                            </div>
                                        </div>
                                    </div>
                                    
                                </motion.div>

                            );
                        })}


                    </div>
                </motion.div>
            </Container>

        </section>

    );
}

export default Services;
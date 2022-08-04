import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import images from '../assets/img';
import { useInView } from 'react-intersection-observer';
import { drag_variants, service_variants } from '../variants/variants';
import useMouse from "@react-hook/mouse-position";

const Blogs = () => {

    const [cursorText, setCursorText] = useState("");
    const [cursorVariant, setCursorVariant] = useState("default");

    const refm = React.useRef(null);
    const mouse = useMouse(refm, {
        enterDelay: 100,
        leaveDelay: 100
    });

    let mouseXPosition = 0;
    let mouseYPosition = 0;

    if (mouse.x !== null) {
        mouseXPosition = mouse.clientX;
    }

    if (mouse.y !== null) {
        mouseYPosition = mouse.clientY;
    }

    const spring = {
        type: "spring",
        stiffness: 500,
        damping: 28
    };

    const serviceEnter = event => {
        setCursorText("Drag");
        setCursorVariant("service");
    }

    const serviceLeave = event => {
        setCursorText("");
        setCursorVariant("default");
    }
    

    const [width, setWidth] = useState(0);
    const carousel = useRef<HTMLInputElement>(null);

    useEffect(() => {
        setWidth(carousel.current!.scrollWidth - carousel.current!.offsetWidth);
    }, []);

    const [ref, inView] = useInView({
        /* Optional options */
        threshold: 0.5,
        triggerOnce: false
    });


    return (
        <section className="position-relative section-container" ref={refm}>
            <motion.div
                animate={inView ? 'visible' : 'hidden'}
                variants={service_variants}
                transition={{ duration: 0.7, ease: 'easeOut' }}
                ref={ref}>
                <Container>
                    <Row className="justify-content-start">
                        <Col lg={6} md={8}>
                            <div className="title-blog">
                                <h1 className="font-weight-normal font-weight-bold text-dark">
                                    <span className='text-danger'>Blog</span>
                                </h1>
                            </div>
                        </Col>
                        <motion.div ref={carousel} className='carousel' whileTap={{ cursor: "grabbing" }}>
                            <motion.div
                                variants={drag_variants(mouseXPosition, mouseYPosition)}
                                className="circle"
                                animate={cursorVariant}
                                transition={spring}>
                                <span className="cursorText">{cursorText}</span>
                            </motion.div>
                            <motion.div drag="x" dragConstraints={{ right: 0, left: -width }} className='inner-carousel'>

                                {images.map((image, index) => {
                                    return (
                                        <motion.div className='item' whileHover={{ scale: 1.05 }} key={index}
                                            onMouseEnter={serviceEnter}
                                            onMouseLeave={serviceLeave}>
                                            <div className="card border-0 card-section">
                                                <Image className="card-img-top" src={image.image} alt='' />
                                                <div className="card-body">
                                                    <h5 className="card-title">{image.title}</h5>
                                                    <p className="card-text">{image.description}</p>
                                                </div>
                                            </div>
                                        </motion.div>
                                    );
                                })}

                            </motion.div>
                        </motion.div>
                    </Row>
                </Container>
            </motion.div>
        </section>
    );
}

export default Blogs;
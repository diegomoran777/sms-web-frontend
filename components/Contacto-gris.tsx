import React, { useState } from 'react';
import { Container, Row } from 'reactstrap';
import { motion } from 'framer-motion';
import { drag_variants } from '../variants/variants';
import useMouse from "@react-hook/mouse-position";

const Contacto = () => {

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

    const contactEnter = event => {
        setCursorText("✍");
        setCursorVariant("contact");
    }

    const contactLeave = event => {
        setCursorText("");
        setCursorVariant("default");
    }

    return (
        <section className="section position-relative section-contacto-gris" ref={refm}>
            <Container>
                <Row className="justify-content-center">

                    <div className="container mt-3">
                        <motion.div
                            variants={drag_variants(mouseXPosition, mouseYPosition)}
                            className="circle"
                            animate={cursorVariant}
                            transition={spring}>
                            <span className="cursorText">{cursorText}</span>
                        </motion.div>
                        <h1 className='text-danger font-weight-bold'>Contacto</h1>
                        <p className='text-secondary'>Para mas informacion, contacte a nuestro equipo llamando al 3988-6868 o escribiendo a info@sms-sudamerica.com</p>
                        <form className="row mt-5" onMouseEnter={contactEnter}
                            onMouseLeave={contactLeave}>
                            <div className="col-md-12">
                                <input type="text" className="form-control form-control-lg border border-danger rounded" placeholder='Nombre y apellido*' />
                            </div>
                            <div className="col-md-12">
                                <input type="text" className="form-control mt-3 form-control-lg border border-danger" placeholder='Correo electronico*' />
                            </div>
                            <div className="col-md-12">
                            </div>
                            <div className="col-md-6 mt-3">
                                <input type="text" className="form-control form-control-lg border border-danger" placeholder='Nombre de la empresa' />
                            </div>
                            <div className="col-md-6 mt-3">
                                <input type="text" className="form-control form-control-lg border border-danger" placeholder='Cargo' />
                            </div>
                            <div className="col-md-6 mt-3">
                                <input type="text" className="form-control form-control-lg border border-danger" placeholder='Telefono' />
                            </div>
                            <div className="col-md-6 mt-3">
                                <select className="form-select form-control-lg border border-danger">
                                    <option>Consultas</option>
                                </select>
                            </div>
                            <div className="col-md-12 mt-3">
                                <textarea className="form-control border border-danger" placeholder="Escriba su mensaje..."></textarea>
                            </div>
                            <div className="col-md-2">
                                <br />
                                <motion.button
                                    className="form-control btn btn-danger rounded-pill"
                                    whileHover={{
                                        scale: 1.1,
                                        textShadow: "0px 0px 8px rgb(255, 255, 255",
                                        boxShadow: "0px 0px 8px rgb(255, 255, 255"
                                    }}>
                                    Enviar
                                </motion.button>
                            </div>
                        </form>
                    </div>

                </Row>
            </Container>
        </section>
    );
}

export default Contacto;
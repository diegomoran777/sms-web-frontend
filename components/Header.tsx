import React, { useState, useEffect } from 'react';
import { AnimateSharedLayout, motion } from "framer-motion";
import {
  Container,
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  Button
} from 'reactstrap';
import Image from 'next/image';
import images from '../assets/logo';
import { screens } from "./data";
import Link from 'next/link';
import { fadeInUp } from '../variants/variants';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [sticky, setSticky] = useState("");
  const [logo, setLogo] = useState("");
  const [colorNav, setColorNav] = useState("#333");
  const toggle = () => setIsOpen(!isOpen);
  const [selected, setSelected] = useState(0);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
  });

  const handleScroll = () => {
    if (window.scrollY > 580) {
      setSticky(" sticky-banner-down");
      setLogo(" sticky-logo-banner-down");
      setColorNav("white");
    } else if (window.scrollY < 70) {
      setSticky(" unsticky");
      setLogo(" unsticky-logo");
      setColorNav("#333");
    } else if (window.scrollY > 40) {
      setSticky(" sticky");
      setLogo(" sticky-logo");
      setColorNav("#333");
    }
  }



  return (

    <div className={`header${sticky}`}>
      <motion.div
        variants={fadeInUp("down")}
        initial="initial"
        animate="animate">
        <Navbar light expand="md">
          <Container>
            <NavbarBrand className='text-white' href="">
              <div className={`${logo} logo-nav`}>
                <Image src={images[0]} alt='' />
              </div>
            </NavbarBrand>
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
              <AnimateSharedLayout >
                <Nav className="m-auto" navbar>

                  {screens.map(({ title, color, link }, i) => (
                    <NavItem key={i}>
                      <Link href={link}>
                        <motion.div
                          className={`title ${i === selected && "selected"}`}
                          style={{ color: i === selected ? color : colorNav }}
                          onClick={() => setSelected(i)}
                          animate>
                          {i === selected && (
                            <motion.div
                              className="underline"
                              layoutId="underline"
                              style={{ backgroundColor: color }} />
                          )}
                          {title}
                        </motion.div>
                      </Link>
                    </NavItem>
                  ))}
                  
                </Nav>
              </AnimateSharedLayout>
              
            </Collapse>
            <Button>ES/EN</Button>
          </Container>
     
        </Navbar>
      </motion.div>
    </div>
  );
}

export default Header;
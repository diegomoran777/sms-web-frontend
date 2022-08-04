import React,{useEffect,useState} from 'react';
import { Container, Row, Col } from "reactstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import Image from 'next/image';
import images from '../assets/logo';
import ReactTextTransition, { presets } from "react-text-transition";

const texts = [" JAVA", " JavaScript", " React", " Angular", ".NET", "COBOL","BI" ];

const AnimationDivider = () => {


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

    <section className="section ">
   

      <Container className=''>
      
      <Row>
       <Col lg={2}></Col>
          <Col lg={8}>
              <section className='titulo-empresa'>                   
                <section className="inline">
                  <span>SMS-SUDAMERICA</span>
                    <ReactTextTransition style={{margin:"3px 20px" ,color:'white'}} inline>
                          {texts[counter% texts.length]}
                    </ReactTextTransition>
                </section>

              </section>
          </Col>
      </Row>

      </Container>

    

    
    </section>
    
  );
}

export default AnimationDivider;
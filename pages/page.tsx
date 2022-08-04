import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import styles from '../styles/parallax.module.css'
import { IParallax, Parallax, ParallaxLayer } from '@react-spring/parallax'
import styler from '../styles/styles.module.css'
import About from '../components/About';
import Footer from '../components/Footer';
import Blogs from "../components/Blogs-gris";
import Contacto from "../components/Contacto-gris";
import Client from "../components/Client-gris";
import Banner from "../components/Banner-gris";
import Services from "../components/Services-gris";
import Cultura from '../components/Cultura-gris';
import AnimationDivider from '../components/AnimationDivider';

export enum Adaptive {
  xs = 'xs',
  s = 's',
  m = 'm',
  l = 'l',
  xl = 'xl'
}

interface UseAdaptiveTriggersProps {
  onExtraSmallEnter?: () => void
  onSmallEnter?: () => void
  onMediumEnter?: () => void
  onLargeEnter?: () => void
  onExtraLargeEnter?: () => void
}

export const useAdaptiveTriggers = ({
  onExtraSmallEnter,
  onSmallEnter,
  onMediumEnter,
  onLargeEnter,
  onExtraLargeEnter
}: UseAdaptiveTriggersProps): Adaptive => {
  const [width, setWidth] = useState<Adaptive>(Adaptive.xl)

  useEffect(() => {
  
  document.body.style.background='#202020'
    const handleResize = () => {
      console.log(window?.innerWidth);      
      if (window?.innerWidth < 768) {
        onExtraSmallEnter?.()
        return setWidth(Adaptive.xs)
      }
      if (window?.innerWidth < 1024) {
        onSmallEnter?.()
        return setWidth(Adaptive.s)
      }
      if (window?.innerWidth < 1280) {
        onMediumEnter?.()
        return setWidth(Adaptive.m)
      }
      if (window?.innerWidth < 1440) {
        onLargeEnter?.()
        return setWidth(Adaptive.l)
      }
      onExtraLargeEnter?.()
      return setWidth(Adaptive.xl)
    }

    window.addEventListener('resize', handleResize)
    handleResize()
    return () => window.removeEventListener('resize', handleResize)
  }, [
    onSmallEnter,
    onMediumEnter,
    onLargeEnter,
    onExtraLargeEnter,
    onExtraSmallEnter
  ])
  return width
}

export enum Pages {
  firstPage = 'firstPage',
  secondPage = 'secondPage',
  thirdPage = 'thirdPage',
  forthPage = 'forthPage',
  fifthPage = 'fifthPage',
  sixPage = 'sixPage',
  seventhPage = 'seventhPage',
  eighthPage = 'eighthPage'
}

export interface PageConfig {
  offset: number
  speed: number
  start: number
  end: number
}

export interface LayoutConfig {
  pages: number
}


export const ParallaxConfig: Record<Adaptive, Record<Pages, PageConfig> & LayoutConfig> = {

  [Adaptive.xs]: {
    pages: 4,
    [Pages.firstPage]: {
      offset: 0,
      speed: 0.6,
      start: 0,
      end: 0
    },

    [Pages.secondPage]: {
      offset: 1,
      speed: 1,
      start: 0.8,
      end: 3
    },

    [Pages.thirdPage]: {
      offset: 1.5,
      speed: 0.5,
      start: 1,
      end: 3
    },

    [Pages.forthPage]: {
      offset: 1.7,
      speed: 0.5,
      start: 1.5,
      end: 3
    },

    [Pages.fifthPage]: {
      offset: 2.1,
      speed: 0.5,
      start: 2.2,
      end: 3
    },

    [Pages.sixPage]:{
      offset: 2.1,
      speed: 0.5,
      start: 2.5,
      end: 3
    },

    [Pages.seventhPage]:{
      offset: 2.1,
      speed: 0.5,
      start: 2.8,
      end: 3
    },

    [Pages.eighthPage]:{
      offset: 0.8,
      speed: 0.5,
      start: 3,
      end: 5
    }
  },

  [Adaptive.s]: {
    pages: 4,
    [Pages.firstPage]: {
      offset: 0,
      speed: 0.8,
      start: 0,
      end: 0
    },

    [Pages.secondPage]: {
      offset: 0.8,
      speed: 0.2,
      start: 0,
      end: 0
    },

    [Pages.thirdPage]: {
      offset: 1.5,
      speed: 0.5,
      start: 0,
      end: 0
    },

    [Pages.forthPage]: {
      offset: 1.9,
      speed: 0.5,
      start: 0,
      end: 0
    },

    [Pages.fifthPage]: {
      offset: 2.4,
      speed: 0.5,
      start: 0,
      end: 0
    },

    [Pages.sixPage]:{
      offset: 2.1,
      speed: 0.5,
      start: 0,
      end: 0
    },

    [Pages.seventhPage]:{
      offset: 2.1,
      speed: 0.5,
      start: 0,
      end: 0
    },

    [Pages.eighthPage]:{
      offset: 2.1,
      speed: 0.5,
      start: 0,
      end: 0
    }
  },

  [Adaptive.m]: {
    pages: 4,
    [Pages.firstPage]: {
      offset: 0,
      speed: 0.8,
      start: 0,
      end: 0
    },

    [Pages.secondPage]: {
      offset: 0.8,
      speed: 0.2,
      start: 0,
      end: 0
    },

    [Pages.thirdPage]: {
      offset: 1.5,
      speed: 0.5,
      start: 0,
      end: 0
    },

    [Pages.forthPage]: {
      offset: 1.9,
      speed: 0.5,
      start: 0,
      end: 0
    },

    [Pages.fifthPage]: {
      offset: 2.4,
      speed: 0.5,
      start: 0,
      end: 0
    },

    [Pages.sixPage]:{
      offset: 2.1,
      speed: 0.5,
      start: 0,
      end: 0
    },

    [Pages.seventhPage]:{
      offset: 2.1,
      speed: 0.5,
      start: 0,
      end: 0
    },

    [Pages.eighthPage]:{
      offset: 2.1,
      speed: 0.5,
      start: 0,
      end: 0
    }
  },

  [Adaptive.l]: {
    pages: 6.2,
    [Pages.firstPage]: {
      offset: 0,
      speed: 0.5,
      start: 0,
      end: 0
    },

    [Pages.secondPage]: {
      offset: 1,
      speed: 0.2,
      start: 0.9,
      end: 2.2
    },

    [Pages.thirdPage]: {
      offset: 1,
      speed: 0.5,
      start: 1.5,
      end: 2
    },

    [Pages.forthPage]: {
      offset: 1,
      speed: 0.5,
      start: 2.5,
      end: 3
    },

    [Pages.fifthPage]: {
      offset: 2.3,
      speed: 0.5,
      start: 3,
      end: 3.5
    },

    [Pages.sixPage]:{
      offset: 1,
      speed: 0.5,
      start: 3.8,
      end: 6
    },

    [Pages.seventhPage]:{
      offset: 2.1,
      speed: 0.5,
      start: 4.8,
      end: 3
    },

    [Pages.eighthPage]:{
      offset: 5.2,
      speed: 0.5,
      start: 0,
      end: 0
    }
  },

  [Adaptive.xl]: {
    pages: 5.8,
    [Pages.firstPage]: {
      offset: 0,
      speed: 0.5,
      start: 0,
      end: 0
    },

    [Pages.secondPage]: {
      offset: 0.8,
      speed: 0.2,
      start: 0.5,
      end: 3
    },

    [Pages.thirdPage]: {
      offset: 1.4,
      speed: 0.5,
      start: 1.5,
      end: 3
    },

    [Pages.forthPage]: {
      offset: 0,
      speed: 0.5,
      start: 2.2,
      end: 3.4
    },

    [Pages.fifthPage]: {
      offset: 2.3,
      speed: 0.5,
      start: 3,
      end: 3.4
    },

    [Pages.sixPage]:{
      offset: 2.1,
      speed: 0.5,
      start: 3.9,
      end: 2
    },

    [Pages.seventhPage]:{
      offset: 2.1,
      speed: 0.5,
      start: 4.8,
      end: 3
    },

    [Pages.eighthPage]:{
      offset: 5.2,
      speed: 0.5,
      start: 0,
      end: 0
    }
  }
}

const Page = () => {

  const width = useAdaptiveTriggers({})
  const parallax = useRef<IParallax>(null!)
  const alignCenter = { display: 'flex', alignItems: 'center' }
  console.log(ParallaxConfig[width].pages);


  return (
    <div>
      <div className={styles.background} />

      <Parallax ref={parallax} key={width} pages={ParallaxConfig[width].pages} >

        <ParallaxLayer offset={ParallaxConfig[width].firstPage.offset} speed={ParallaxConfig[width].firstPage.speed}
        style={{ justifyContent: 'center',}}>
          <Banner />
        </ParallaxLayer>

        <ParallaxLayer sticky={ { start: ParallaxConfig[width].secondPage.start, end: ParallaxConfig[width].secondPage.end } } style={{ ...alignCenter, justifyContent: 'center' }}>
           <Services />
        </ParallaxLayer>

       <ParallaxLayer sticky={ { start: ParallaxConfig[width].thirdPage.start, end: ParallaxConfig[width].thirdPage.end } } style={{ ...alignCenter, justifyContent: 'center' }}>
          <Client />
        </ParallaxLayer>

        <ParallaxLayer sticky={{ start: ParallaxConfig[width].forthPage.start, end: ParallaxConfig[width].forthPage.end }} style={{ ...alignCenter, justifyContent: 'center' }}>
          <Cultura />
        </ParallaxLayer>
        
        <ParallaxLayer sticky={{ start: ParallaxConfig[width].fifthPage.start, end: ParallaxConfig[width].fifthPage.end }} style={{ ...alignCenter, justifyContent: 'center' }}>
          <Blogs />
        </ParallaxLayer>

        <ParallaxLayer sticky={{ start: ParallaxConfig[width].sixPage.start, end: ParallaxConfig[width].sixPage.end }} style={{ ...alignCenter, justifyContent: 'center' }}>
        <Contacto />
        </ParallaxLayer>

        <ParallaxLayer sticky={{ start: ParallaxConfig[width].seventhPage.start, end: ParallaxConfig[width].seventhPage.end }} style={{ ...alignCenter, justifyContent: 'center' }}>
        <AnimationDivider/>
        </ParallaxLayer>
        
        <ParallaxLayer offset={ParallaxConfig[width].eighthPage.offset} style={{ ...alignCenter, justifyContent: 'center' }}>
          <Footer />
        </ParallaxLayer>

      </Parallax>
    </div>
  );
}

export default Page;
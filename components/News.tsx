import React from 'react';
import { useRef } from 'react';
import { Parallax, ParallaxLayer, IParallax } from '@react-spring/parallax'
import news from '../styles/news.module.css';

interface PageProps {
    offset: number
    gradient: string
    caption: string
    first: string
    second: string
    onClick: () => void
}

const Page = ({ offset, caption, first, second, gradient, onClick }: PageProps) => (
    <>
        <ParallaxLayer offset={offset} speed={0.2} onClick={onClick}>
            <div className={news.slopeBegin} />
        </ParallaxLayer>

        <ParallaxLayer offset={offset} speed={0.6} onClick={onClick}>
            <div className={`${news.slopeEnd} ${news[gradient]}`} />
        </ParallaxLayer>

        <ParallaxLayer className={`${news.text} ${news.number}`} offset={offset} speed={0.3}>
            <span>0{offset + 1}</span>
        </ParallaxLayer>

        <ParallaxLayer className={`${news.text} ${news.number}`} offset={offset} speed={0.3}>
            <span>0{offset + 1}</span>
        </ParallaxLayer>
    </>
)

const News = () => {
    
    const parallax = useRef<IParallax>(null)

    const scroll = (to: number) => {
        if (parallax.current) {
            parallax.current.scrollTo(to)
        }
    }

    return (
        <section className={news.section}>

            <Parallax className={news.container} ref={parallax} pages={3} style={{ overflowY: "hidden", overflow: "hidden" }}>
                <Page offset={0} gradient="pink" onClick={() => scroll(1)} caption={''} first={''} second={''} />
                <Page offset={1} gradient="teal" onClick={() => scroll(2)} caption={''} first={''} second={''} />
                <Page offset={2} gradient="tomato" onClick={() => scroll(0)} caption={''} first={''} second={''} />
            </Parallax>

        </section>
    );
}

export default News;
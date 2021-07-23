import { Section, Container, MySvg, Button } from './ThreeStyling'
import { useEffect } from 'react';
import { gsap } from 'gsap';

const Three = () => {
    useEffect(() => {
        let bt = document.querySelectorAll('.button')[0];
        let turbVal = { val: 0.000001 }
        let turb = document.querySelectorAll('#noise feTurbulence')[0];

        let btTl = gsap.timeline({
            paused: true, onUpdate: function () {
                turb.setAttribute('baseFrequency', '0 ' + turbVal.val);
            }
        });

        btTl.to(turbVal, 0.2, { val: 0.2 })
            .to(turbVal, 0.2, { val: 0.000001 });

        bt.addEventListener('click', function () {
            btTl.restart();
        });
    }, [])


    // "numOctaves": The higher the number of octaves, the more natural the noise looks. Though more octaves also require more calculations, resulting in a negative impact on performance.
    return (
        <>
            <Section>
                <Container>
                    <Button className="button">
                        <MySvg viewBox="0 0 180 100">
                            <filter id='noise' x='0%' y='0%' width='100%' height='100%'>
                                <feTurbulence type="fractalNoise" baseFrequency="0 0.000001" result="NOISE" numOctaves="2" />
                                <feDisplacementMap in="SourceGraphic" in2="NOISE" scale="30" xChannelSelector="R" yChannelSelector="R"></feDisplacementMap>
                            </filter>
                        </MySvg>
                        click me
                    </Button>
                </Container>
            </Section>
        </>
    )
}

export default Three

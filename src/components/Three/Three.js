import { Section, Container, MySvg, Button } from './ThreeStyling'
import { useEffect } from 'react';
import { gsap } from 'gsap';

const Three = () => {
    useEffect(() => {
        var bt = document.querySelectorAll('.button')[0],
            turbVal = { val: 0.000001 },
            turb = document.querySelectorAll('#noise feTurbulence')[0],

            btTl = gsap.timeline({
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

    const handleClick = () => {
        var bt = document.querySelectorAll('.button')[0], // no real need for queryselectorAll or [0] since there is only one button
            turbVal = { val: 0.000001 },
            turb = document.querySelectorAll('#noise feTurbulence')[0],

            btTl = gsap.timeline({
                paused: true, onUpdate: function () {
                    turb.setAttribute('baseFrequency', '0 ' + turbVal.val);
                }
            });

        btTl.to(turbVal, 0.2, { val: 0.2 })
            .to(turbVal, 0.2, { val: 0.000001 });
    }

    // "numOctaves": The higher the number of octaves, the more natural the noise looks. Though more octaves also require more calculations, resulting in a negative impact on performance.
    return (
        <>
            <Section>
                <Container>
                    <Button onClick={handleClick} className="button">
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

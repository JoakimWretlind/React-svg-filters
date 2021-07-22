import { Section, Container } from './TwoStyling'

// Change baseFrequency="0.01 0.4" to see big difference
// Also play with the "numOctaves"
const Two = () => {
    return (
        <>
            <Section>
                <Container>
                    <svg viewBox="0 0 180 100">
                        <filter id="noise" x="0%" y="0%" width="100%" height="100%">
                            <feTurbulence baseFrequency="0.01 0.4" result="NOISE" numOctaves="2" />
                            <feDisplacementMap in="SourceGraphic" in2="NOISE" scale="20" xChannelSelector="R" yChannelSelector="R"></feDisplacementMap>
                        </filter>
                        <image href='https://source.unsplash.com/eqJjCjSkjNw/1600x900' x="0" y="0" width="100%" height="100%" filter="url(#noise)"></image>
                    </svg>
                </Container>
            </Section>
        </>
    )
}

export default Two

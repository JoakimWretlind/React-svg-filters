import ImageFilter from 'react-image-filter';
import { Section, Container } from './OneStyling';

const One = () => {
    return (
        <>
            <Section>
                <Container>
                    <ImageFilter
                        image='https://source.unsplash.com/random/1200x800'
                        filter={'duotone'}
                        // change values to change the filter-colors
                        colorOne={[110, 250, 250]}
                        colorTwo={[250, 130, 130]}
                    />
                </Container>
            </Section>
        </>
    )
}

export default One

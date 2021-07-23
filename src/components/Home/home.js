import {
    Section,
    HomeUl,
    HomeLi,
    HomeLi2
} from './HomeStyling'

const home = () => {
    return (
        <>
            <Section>
                <HomeUl>
                    <HomeLi>One</HomeLi>
                    <HomeLi2>Using the 'ImageFilter' library.</HomeLi2>
                    <HomeLi2>An image where you can change colors and effects.</HomeLi2>
                    <HomeLi>Two</HomeLi>
                    <HomeLi2>Using SVG-filter, feTurbulence and feDisplacementMap.</HomeLi2>
                    <HomeLi2>An image where the filters are applied</HomeLi2>
                    <HomeLi>Three</HomeLi>
                    <HomeLi2>Using SVG-filter, feTurbulence, feDisplacementMap and GSAP.</HomeLi2>
                    <HomeLi2>A button with a click-effect.</HomeLi2>
                    <HomeLi>Four</HomeLi>
                    <HomeLi2>Using SVG-filter, feTurbulence and feDisplacementMap.</HomeLi2>
                    <HomeLi2>Dynamically change different parameters on an image.</HomeLi2>
                </HomeUl>
            </Section>
        </>
    )
}

export default home

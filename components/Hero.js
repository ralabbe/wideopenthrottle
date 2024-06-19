import React from 'react';
import propTypes from 'prop-types';
import styles from "./Hero.module.css";
import Button from "@/components/Button";
export const metadata = {
    title: 'Page Title'
}
const Hero = ({
    location = '',
    heading = '',
    subheading = '',
    content = '',
    link = '',
}) => {
    let classes = styles.hero;

    if (location === 'home') {
        subheading = subheading === '' ? 'Transform your ride with' : subheading;
        heading = heading === '' ? 'Premier Auto Services' : heading;
        content = content === '' ? 'Welcome to Wide Open Throttle, your premier destination for high-quality window tinting service, vehicle protection films, and more. Elevate your vehicle with our cutting-edge products and expert installation services by scheduling an appointment today for a sleek and protected ride.' : content;
        link = link === '' ? '/contact' : link;
        classes += ` ${styles.heroHome}`;
    }

    classes += heading != '' && subheading == '' && content == '' && link == '' ? ` ${styles.headingOnly}` : '';

    return (
        <section id="hero" className={classes}>
            <div className="container">
                <div>
                    {subheading != '' ? <span className={`${styles.heroSubheading} lineAfter subheading`}>{subheading}</span> : ''}
                    {heading != '' ? <h1>{heading}</h1> : ''}
                    {content != '' ? <p>{content}</p> : ''}
                    {link != '' ? <Button text="Get a Quote" aria-label="Contact us to get a quote" href={link} color="inverted" /> : ''}
                </div>
            </div>
        </section>
    );
};

Hero.propTypes = {
    location: propTypes.oneOf(['home']),
    heading: propTypes.string,
    subheading: propTypes.string,
    content: propTypes.string,
    link: propTypes.string
}

export default Hero;
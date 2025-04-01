import React from 'react';
import Link from 'next/link';
import Image from 'next/image'
import styles from "./Footer.module.css";

const Navbar = () => {
    let iconSize = 35;
    return (
        <footer className={styles.footer}>
            <Image src={`${process.env.BASE_PATH}/img/car_headlights_background.jpg`} role="presentation" alt="Car with headlights" aria-label="Car with headlights" fill className={styles.footerBackground} />

            <div className={styles.footerLogo}><Image src={`${process.env.BASE_PATH}/img/wot-logo-2.png`} width={250} height={176} alt="Wide Open Throttle" aria-label="Go to home page" /></div>
            <Link href={`tel:${process.env.LOCATION_PHONE}`} rel="nofollow">{process.env.LOCATION_PHONE}</Link><br />
            <Link href={`mailto:${process.env.LOCATION_EMAIL}`} rel="nofollow" className={styles.footerEmail}>{process.env.LOCATION_EMAIL}</Link>
            
            <div className={styles.addressWrapper}>
                <Link href={`https://www.google.com/maps/place/${process.env.LOCATION_ADDRESS_1},${process.env.LOCATION_ADDRESS_2}`}  target="_blank" rel="nofollow">
                {process.env.LOCATION_ADDRESS_1}<br />
                {process.env.LOCATION_ADDRESS_2}
                </Link >
            </div>
            
            <div className={styles.socialWrapper}>
                <Link href="https://www.instagram.com/wotautogarage/" target="_blank" aria-label="Go to instagram" rel="nofollow"><Image src={`${process.env.BASE_PATH}/img/icons/instagram.svg`} alt='Instagram' role="presentation" width={iconSize} height={iconSize} /></Link>
                <Link href="https://www.facebook.com/wotautogarage/" target="_blank" aria-label="Go to facebook" rel="nofollow"><Image src={`${process.env.BASE_PATH}/img/icons/facebook.svg`} alt='Facebook' role="presentation" width={iconSize} height={iconSize} /></Link>
                <Link href="https://twitter.com/wotautogarage" target="_blank" aria-label="Go to x twitter" rel="nofollow"><Image src={`${process.env.BASE_PATH}/img/icons/x-twitter.svg`} alt='X Twitter' role="presentation" width={iconSize} height={iconSize} /></Link>
                <Link href="https://g.co/kgs/gD23uLs" target="_blank" rel="nofollow"><Image src={`${process.env.BASE_PATH}/img/icons/google.svg`} alt='Google' role="presentation" width={iconSize} height={iconSize} /></Link>
            </div>
            
            <div className={styles.authorizedDealersWrapper}>
                <Link href="http://www.theretrofitsource.com/authorized-dealers/" target="_blank" aria-label="Go to Authorized Dealer site" rel="nofollow"><Image src={`${process.env.BASE_PATH}/img/authorized_xenondepot.png`} alt="Xenon Depot Authorized Dealer" aria-label="Xenon Depot Authorized Dealer" title="Xenon Depot Authorized Dealer" width={220} height={48} className={styles.authorizedDealerLogo} /></Link>
                <Link href="http://www.theretrofitsource.com/authorized-dealers/" target="_blank" aria-label="Go to Authorized Dealer site" rel="nofollow"><Image src={`${process.env.BASE_PATH}/img/authorized_profile.png`} alt="PROFILE Authorized Dealer" aria-label="PROFILE Authorized Dealer" title="PROFILE Authorized Dealer" width={180} height={60} className={styles.authorizedDealerLogo} /></Link><br/>
                <Link href="http://www.theretrofitsource.com/authorized-dealers/" target="_blank" aria-label="Go to Authorized Dealer site" rel="nofollow"><Image src={`${process.env.BASE_PATH}/img/authorized_gtrlighting.png`} alt="GTR Lighting Authorized Dealer" aria-label="GTR Lighting Authorized Dealer" title="GTR Lighting Authorized Dealer" width={220} height={48} className={styles.authorizedDealerLogo} /></Link>
                <Link href="http://www.theretrofitsource.com/authorized-dealers/" target="_blank" aria-label="Go to Authorized Dealer site" rel="nofollow"><Image src={`${process.env.BASE_PATH}/img/authorized_morimoto.png`} alt="Morimoto HID Authorized Dealer" aria-label="Morimoto HID Authorized Dealer" title="Morimoto HID Authorized Dealer" width={220} height={48} className={styles.authorizedDealerLogo} /></Link>
            </div>
            <div className={styles.footerCopyright}>&copy; {new Date().getFullYear()} Wide Open Throttle</div>
        </footer>
    );
};

export default Navbar;
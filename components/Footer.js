import React from 'react';
import Link from 'next/link';
import Image from 'next/image'
import styles from "./Footer.module.css";

const Navbar = () => {
  let iconSize = 35;
  return (
    <footer className={styles.footer}>
      <Image src={`${process.env.BASE_PATH}/img/car_headlights_background.jpg`} role="presentation" alt="Car with headlights" aria-label="Car with headlights" fill className={styles.footerBackground} />

      <div className={styles.footerLogo}><Image src={`${process.env.BASE_PATH}/img/wot-logo.svg`} width={300} height={100} alt="Wide Open Throttle" aria-label="Go to home page" /></div>
      <Link href={`tel:${process.env.LOCATION_PHONE}`} rel="nofollow">{process.env.LOCATION_PHONE}</Link><br />
      <Link href={`mailto:${process.env.LOCATION_EMAIL}`} rel="nofollow" className={styles.footerEmail}>{process.env.LOCATION_EMAIL}</Link>
      <div className={styles.addressWrapper}>
        {process.env.LOCATION_ADDRESS_1}<br />
        {process.env.LOCATION_ADDRESS_2}
      </div>
      <div className={styles.socialWrapper}>
        <Link href="https://www.instagram.com/wotautogarage/" target="_blank" aria-label="Go to instagram" rel="nofollow"><Image src={`${process.env.BASE_PATH}/img/icons/instagram.svg`} alt='Instagram' role="presentation" width={iconSize} height={iconSize} /></Link>
        <Link href="https://www.facebook.com/wotautogarage/" target="_blank" aria-label="Go to facebook" rel="nofollow"><Image src={`${process.env.BASE_PATH}/img/icons/facebook.svg`} alt='Facebook' role="presentation" width={iconSize} height={iconSize} /></Link>
        <Link href="https://twitter.com/wotautogarage" target="_blank" aria-label="Go to x twitter" rel="nofollow"><Image src={`${process.env.BASE_PATH}/img/icons/x-twitter.svg`} alt='X Twitter' role="presentation" width={iconSize} height={iconSize} /></Link>
        <Link href="https://www.google.com/search?q=Wide+Open+Throttle&stick=H4sIAAAAAAAA_-NgU1I1qDBJNUq1NEwyM0lLTUtOM0uxMqhINjMyTLM0TUkzSzJKBRKLWIXCM1NSFfwLUvMUQjKK8ktKclIB9N-1DD4AAAA&hl=en&mat=CQl9kyOWjp7LElUB7PxHsSy-JkTfdI0qaVewwhR_TYLTiW6eCQgq51AOP_wF5ECzO5UEQ5-0Z9q02m6ZIOFykUWwZhZi27AC_0BOP4LZ4Zu7OdG1mx_s5cssLj2uClrU&authuser=1#lrd=0x4e2e91b64fefcf6d:0xc621f95df6b2ef6b,3" target="_blank" rel="nofollow"><Image src={`${process.env.BASE_PATH}/img/icons/google.svg`} alt='Google' role="presentation" width={iconSize} height={iconSize} /></Link>
      </div>
      <div className={styles.footerCopyright}>&copy; {new Date().getFullYear()} Wide Open Throttle</div>
    </footer>
  );
};

export default Navbar;
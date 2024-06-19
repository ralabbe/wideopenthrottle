import React from 'react';
import Image from "next/image";
import Link from 'next/link';
import styles from "./page.module.css";
import Hero from "@/components/Hero";
import ContactForm from "@/components/ContactForm";

export async function generateMetadata({ params }) {
  return {
    title: 'Wide Open Throttle - Contact',
    description: "Contact us for vehicle window tinting services, paint protection services, and more",
    alternates: {
      canonical: "https://www.wotautogarage.com/contact"
    }
  }
}

export default function Contact() {
  return (
    <main className={styles.main}>
      <Hero heading="Contact" />
      <section>
        <div className={`${styles.contactWrapper} container`}>
          <div>
            <span className={`lineAfter subheading`}>Get in touch</span>
            <h2>Contact Us</h2>
            <p className={styles.contactCopy}>Ready to get started or have any general questions? Fill out our contact form and speak to our experts.</p>
            <ul className={styles.locationInfo}>
              <li><Image src={`${process.env.BASE_PATH}/img/icons/phone.svg`} height={20} width={20} alt='Phone' role="presentation" /><Link href={`tel:${process.env.LOCATION_PHONE}`} rel="nofollow">{process.env.LOCATION_PHONE}</Link></li>
              <li><Image src={`${process.env.BASE_PATH}/img/icons/location.svg`} height={20} width={20} alt='location pin' role="presentation" />{process.env.LOCATION_ADDRESS_1}<br />{process.env.LOCATION_ADDRESS_2}</li>
              <li><Image src={`${process.env.BASE_PATH}/img/icons/mail.svg`} height={20} width={20} alt='Mail' role="presentation" /><Link href={`mailto:${process.env.LOCATION_EMAIL}`} rel="nofollow" className={styles.footerEmail}>{process.env.LOCATION_EMAIL}</Link></li>
            </ul>
          </div>
          <div>
            <ContactForm />
          </div>
        </div>
      </section>
    </main>
  );
}

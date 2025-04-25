"use client";
import React, { useState } from 'react';
import Image from "next/image";
import { useReCaptcha } from "next-recaptcha-v3";
import styles from "./ContactForm.module.css";
import { sendContactForm } from "@/lib/api.js";

const ContactForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [vehicleInfo, setVehicleInfo] = useState('');
    const [message, setMessage] = useState('');

    const [sending, setSending] = useState(false);
    const [formSent, setFormSent] = useState(false);
    const [formSendError, setFormSendError] = useState(false);

    const { executeRecaptcha } = useReCaptcha();

    async function formSubmit(e) {
        e.preventDefault();

        const token = await executeRecaptcha("form_submit");

        setSending(true);
        setFormSendError(false);
        
        const response = await sendContactForm({
            name: name,
            email: email,
            phone: phone,
            vehicle: vehicleInfo,
            message: message,
            token: token,
        });

        console.log(response);

        if (typeof response === 'object' && response.success === true){
            gtag('event', 'conversion', {'send_to': 'AW-16948877149/egOhCOKe67UaEN2u7ZE_'});
            setFormSent(true)
        } else {
            setFormSendError(true);
        }
        setSending(false);
    }

    function resetForm() {
        setName('');
        setEmail('');
        setPhone('');
        setVehicleInfo('');
        setMessage('');
        setSending(false);
        setFormSent(false);
        setFormSendError(false);
    }

    function updatePhone(e){
        let val = e.target.value.replace(/\D+/g, '').replace(/(\d{3})(\d{3})(\d{4})/, '($1) $2-$3');
        setPhone(val);
    }

    return (
        <form className={styles.formWrapper} onSubmit={(e) => { formSubmit(e); }}>
            <div className={styles.formSentMessageWrapper + (formSent === true ? ' ' + styles.formSentMessageWrapperActive : '')}>
                <div className={styles.formSentMessage}>
                    <Image src={`${process.env.BASE_PATH}/img/icons/email-sent.svg`} width={70} height={70} role="presentation" alt="Star" /><br />
                    <p className="subheading" style={{ marginBottom: 10 }}>Your message has been sent!</p>
                    <p>Keep an eye on your email inbox for our prompt response. <br />We appreciate your patience</p>
                    <button type="button" className="buttonInverted" onClick={() => { resetForm(); }}>Send another email</button>
                </div>
            </div>
            <div className={`${styles.inputWrapper} ${styles.inputWrapperHalf}`}>
                <label htmlFor="contactName" className={styles.requiredLabel}>Name</label>
                <input type="text" id="contactName" name="contactName" value={name} onChange={(e) => { setName(e.target.value) }} placeholder="Your first Name and Last Name" required />
            </div>
            <div className={`${styles.inputWrapper} ${styles.inputWrapperHalf}`}>
                <label htmlFor="contactEmail" className={styles.requiredLabel}>Email</label>
                <input type="email" id="contactEmail" name="contactEmail" value={email} onChange={(e) => { setEmail(e.target.value) }} placeholder="Your email" required />
            </div>
            <div className={`${styles.inputWrapper} ${styles.inputWrapperHalf}`}>
                <label htmlFor="contactPhone">Phone</label>
                <input type="tel" id="contactPhone" name="contactPhone" maxLength={13} value={phone} onChange={(e) => { updatePhone(e); }} placeholder="Your phone number" />
            </div>
            <div className={`${styles.inputWrapper} ${styles.inputWrapperHalf}`}>
                <label htmlFor="contactVehicleInfo">Vehicle Information</label>
                <input type="text" id="contactVehicleInfo" name="contactVehicleInfo" value={vehicleInfo} onChange={(e) => { setVehicleInfo(e.target.value) }} placeholder="Year/Make/Model/Trim" />
            </div>
            <div className={styles.inputWrapper}>
                <label htmlFor="contactQuestion" className={styles.requiredLabel}>How can we help?</label>
                <textarea id="contactQuestion" name="contactQuestion" value={message} onChange={(e) => { setMessage(e.target.value) }} placeholder="Enter your question or if you would like a quote for service." rows="5" required />
            </div>
            <div style={{ padding: 5 }}>
                <button type="submit" className={'buttonInverted' + (sending === true ? ' ' + styles.buttonLoading : '')} aria-label={sending === true ? 'Sending form' : 'Send form'} disabled={sending === true ? true : false} style={{ marginTop: '0' }} >{sending === true ? <div className={styles.loadingIcon}>&nbsp;</div> : 'Submit'}</button>
                {formSendError === true ? <span className={styles.formErr}>An error occurred. Please try again.</span> : ''}
            </div>
        </form>
    );
};

export default ContactForm;
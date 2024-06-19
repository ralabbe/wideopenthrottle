"use client";
import React, { useState } from 'react';
import Image from "next/image";
import styles from "./ImageGallery.module.css";
import { images } from "./ImageList";

const ImageGallery = () => {
    const [lightboxActive, setLightboxActive] = useState(false);
    const [currentImageId, setCurrentImageId] = useState(0);
    
    function renderLightbox(){
        document.querySelector('html').style.overflow = 'hidden';
        return (
            <div className={styles.lightboxWrapper}>
                <button tabIndex={1} onClick={() => { closeLightbox(false); }} className={styles.lightboxClose}><Image src={`${process.env.BASE_PATH}/img/icons/close-x.svg`} width={30} height={30} alt="Close" aria-label="Close image popup" /></button>
                <div className={styles.lightboxOverlay} onClick={() => { closeLightbox(); }}></div>
                <Image className={styles.lightboxImage} src={images[currentImageId].src} alt={images[currentImageId].label} fill />
                <div className={styles.pageControlsWrapper}>
                    <button className={`${styles.pageControls} ${styles.previousButton}`} tabIndex={1} onClick={() => { changeLightboxPage('decrement'); }} ><Image src={`${process.env.BASE_PATH}/img/icons/chevron.svg`} width={30} height={50} alt="Previous" aria-label="Previous image" /></button>
                    <button className={`${styles.pageControls} ${styles.nextButton}`} tabIndex={1} onClick={() => { changeLightboxPage('increment'); }} ><Image src={`${process.env.BASE_PATH}/img/icons/chevron.svg`} width={30} height={50} alt="Next" aria-label="Next image" /></button>
                </div>
            </div>
        );
    }

    function changeLightboxPage(increment){
        let newID = currentImageId;

        if (increment == 'decrement'){
            newID = currentImageId == 0 ? images.length - 1 : currentImageId - 1;
        } else {
            newID = (currentImageId + 1) > (images.length - 1) ? 0 : currentImageId + 1;
        }

        if (newID != currentImageId){
            setCurrentImageId(newID);
        }
    }

    function keyboardOnButtonPress(e, updateLightbox){
        if (e.key === 'Enter'){
            updateLightbox();
        } else if (lightboxActive == true && (e.key == 'ArrowRight' || e.key == 'ArrowLeft')){
            var incrementDecrement = e.key == 'ArrowRight' ? 'increment' : 'decrement';
            changeLightboxPage(incrementDecrement);
        } else {
            closeLightbox();
        }
    }

    function closeLightbox(){
        document.querySelector('html').style.overflow = 'auto';
        setLightboxActive(false);
    }
    
    return (
        <React.Fragment>
            <div className={styles.galleryImagesWrapper}>
                {images.map((image, key) => {
                    const updateLightbox = () => {
                        setCurrentImageId(key);
                        setLightboxActive(true);
                    }
                    return <Image key={key} src={image.thumbnail} alt={image.label} role="button" aria-label={image.label} loading='lazy' fill onKeyDown={(e) => { keyboardOnButtonPress(e, updateLightbox); }} onClick={() => { updateLightbox(); }} tabIndex={0} />
                })}
            </div>
            {lightboxActive == true ? renderLightbox() : ''}
        </React.Fragment>
    );
};

export default ImageGallery;
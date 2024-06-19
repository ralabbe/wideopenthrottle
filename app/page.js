'use client'
import Image from "next/image";
import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider';
import styles from "./page.module.css";
import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from "keen-slider/react";
import ContactForm from "@/components/ContactForm";
import Hero from "@/components/Hero";
import ImageGallery from "@/components/ImageGallery";
import Button from "@/components/Button";

export default function Home() {
  const [sliderRef, instanceRef] = useKeenSlider({ loop: true });

  const allReviews = [
      {
        content: 'Had a great experience with wide open throttle auto garage, great timing, service and quality. Not to mentioned I have had them do 3 vehicles for me then sent my in laws cars and my dads cars to them. All happy with the quality! Check them out for all your tint needs!',
        reviewer: 'Nate Russell'
      },
      {
        content: 'Ben is a great guy and does awesome work! Got my truck in no time and did an amazing job. Very pleased with the work, highly recommended if your looking for quality tint for your vehicle.',
        reviewer: 'Ethan Honkanen'
      },
      {
        content: 'Did an outstanding job tinting my truck. Definitely having Ben and his installers tint my other 2 vehicles soon.',
        reviewer: 'Caleb Smedes',
      },
  ];

  return (
    <main>
      <Hero location='home' />
      
      <section id="film-services" className={`centerText ${styles.xpelPaintSection}`}>
        <div className={`container centerText ${styles.smallContainer}`}>
          <span className={`subheading linesAround`}>Defend your vehicle exterior with</span>
          <h2>XPEL Paint Protection</h2>
          <p>Shield your vehicle's exterior with XPEL's advanced paint protection film, engineered to defend against road debris, scratches, and environmental damage. Enjoy long-lasting clarity and peace of mind with industry-leading protection, preserving your car's finish for years.</p>
          <br/>
          <p>Preserve your vehicle's pristine appearance and shield it from the elements by scheduling an appointment today to keep your ride looking flawless and protected for years to come.</p>
          <br/>
          <div class={styles.buttonsWrapper}>
            <Button text="Get a Quote" aria-label="Contact us to get a quote" href="/contact" color="inverted" />
            <Button text="More info on XPEL Film" color="inverted" href="https://www.xpel.com/products/paint-protection-film" target='_blank' rel='nofollow' />
          </div>
        </div>
      </section>

      <section id="auto-services" className={styles.autoServices}>
        <div className={`container centerText ${styles.smallContainer}`}>
          <h2 aria-label="Benefit from professional tinting">Benefit from professional tinting</h2>
          <p>Improve your driving experience with the power of window tinting and all its benefits. Protect yourself from harmful UV rays, reduce glare, and enhance your privacy.<br/>Mobile installs available. Contact for more detail.</p>
          <Button text="View Tint Options" color="inverted" href="#xpel-info" />
        </div>
      </section>

      <section id="tint-solutions" className={styles.tintSolutions}>
        <div className="container">
          <div className={styles.tintSolutionsImageWrapper}>
            <Image
              src={`${process.env.BASE_PATH}/img/tint_options.png`}
              alt="Tint options"
              aria-label="Tint options"
              fill
              priority
            />
          </div>
          <div>
            <span className="subheading">Protect your investment with</span>
            <h3>Precision Tinting Solutions</h3>
            <p>You get to decide how much light shines through for superior heat rejection and privacy. We provide service for all percentages between 5% and 88% tint for all your tinting needs. The lower the percentage, the darker the tint.</p>
          </div>
        </div>
      </section>

      <section id="xpel-info" className={styles.xpelSection}>
        <div className={styles.fogBackground}><Image src={`${process.env.BASE_PATH}/img/fog.jpg`} alt="Fog background" role="presentation" fill /></div>
        <div className={`container ${styles.smallContainer}`} style={{width: '800px'}}>
          <div>
            <Image
              src={`${process.env.BASE_PATH}/img/xpel_logo.svg`}
              alt="xpel"
              aria-label="xpel"
              width={310}
              height={150}
              priority
            />
            <br/>
            <span className={`subheading linesAround ${styles.xpelSectionSubheading}`}>Optimal privacy and excellent transparency</span>
            <h2 aria-label="xpel window tinting film">XPEL Window Tinting Film</h2>
            <p>We offer various tint options from XPEL branded film including nano-ceramic, metallic, and dyed window tint. XPEL window tinting are built to offer up to <strong>99% UV ray protection</strong>, are <strong>GPS and radio friendly</strong>, and comes with a <strong>lifetime warranty</strong>.</p>
          </div>
        </div>
        <div className={`container ${styles.xpelTintInfo}`}>
          <div>
            <div>
              <span className="subheading">Drive in Comfort</span>
              <Image src={`${process.env.BASE_PATH}/img/xpel_primecs.svg`} width={300} height={80} alt="PrimeCS" />
              <p>Reduce eye strain for enhanced visibility with a dyed window tint for a good look that never fades.</p>
              <p>Along with up to <strong>99% UV ray protection</strong>, PrimeCS offers <strong>glare reduction</strong> and <strong>improved privacy</strong> with a tint that <strong>will not turn purple</strong>.</p>
            </div>
            <div>
              <span className="subheading">A New Level of Cool</span>
              <Image src={`${process.env.BASE_PATH}/img/xpel_primexr.svg`} width={300} height={80} alt="PrimeCS" />
              <p>Designed to block out the most heat possible and reflect harmful UV rays with greater clarity!</p>
              <p>Prime XR uses Nano-Ceramic Paricle Technology to offer up to <strong>88% heat rejection</strong> and <strong>99% UV ray protection</strong>.</p>
            </div>
            <div>
              <span className="subheading">Performance Redefined</span>
              <Image src={`${process.env.BASE_PATH}/img/xpel_primexrplus.svg`} width={300} height={80} alt="PrimeCS" />
              <p>For stronger protection and a true neutral, "blacked out" appearance and a more reflective finish.</p>
              <p>Utilizing Multi-Layer Nano-Ceramic Particle Technology, Prime XR Plus offers not only <strong>88% heat rejection</strong> but also <strong>99% UVA and UVB ray protection</strong></p>
            </div>
          </div>
          <Button text="Learn more about XPEL" color="inverted" href="https://www.xpel.com/products/window-film/automotive-window-tint" target='_blank' rel='nofollow' />
        </div>
      </section>

      <section id="gallery" className={styles.gallerySection}>
        <div className="container">
          <h2 className={`linesAround`} aria-label="Gallery">Gallery</h2>
          <div className={styles.galleryTintSlider}>
            <ReactCompareSlider
              itemOne={<ReactCompareSliderImage src={`${process.env.BASE_PATH}/img/red-car-comparison-1.jpg`} alt="Image one" />}
              itemTwo={<ReactCompareSliderImage src={`${process.env.BASE_PATH}/img/red-car-comparison-2.jpg`} alt="Image two" />}
            />
          </div>
          <ImageGallery />
          <div className={styles.galleryMessage}>
            <p>Ready to upgrade your ride? Get a free quote and schedule your appointment with Wide Open Throttle.</p>
            <Button text="Get a Quote" aria-label="Contact us to get a quote" href="/contact" color="inverted" />
          </div>
        </div>
      </section>

      <section id="reviews" className={styles.reviewsSection}>
        <div className="container">
          <span className={styles.reviewsSubheading}>Hear what our clients have to say about us!</span>
          <h2 aria-label="Our exceptional reviews">Our exceptional reviews</h2>
          <div className={styles.starsWrapper}>
            <Image src={`${process.env.BASE_PATH}/img/icons/star-solid.svg`} width={20} height={20} role="presentation" alt="Star" />
            <Image src={`${process.env.BASE_PATH}/img/icons/star-solid.svg`} width={20} height={20} role="presentation" alt="Star" />
            <Image src={`${process.env.BASE_PATH}/img/icons/star-solid.svg`} width={20} height={20} role="presentation" alt="Star" />
            <Image src={`${process.env.BASE_PATH}/img/icons/star-solid.svg`} width={20} height={20} role="presentation" alt="Star" />
            <Image src={`${process.env.BASE_PATH}/img/icons/star-solid.svg`} width={20} height={20} role="presentation" alt="Star" />
          </div>
          <div className={`${styles.reviewsWrapper} ${styles.smallContainer}`}>
            <div ref={sliderRef} className="keen-slider">
              {allReviews.map((review, i) => {
                return <p key={i} className={`${styles.singleSlide} keen-slider__slide`}>"{review.content}" <br/>{review.reviewer && review.reviewer != '' ? `- ${review.reviewer}` : ''}</p>
              })}
            </div>
            <div className={styles.carouselControlsWrapper}>
              <Image src={`${process.env.BASE_PATH}/img/icons/circle-left-solid.svg`} alt="Previous review" aria-label="Previous review" height={30} width={30} onKeyDown={(e) => { e.key == 'Enter' ? instanceRef.current?.prev() : null; }} onClick={(e) => e.stopPropagation() || instanceRef.current?.prev()} tabIndex={0} />
              <Image src={`${process.env.BASE_PATH}/img/icons/circle-left-solid.svg`} alt="Next review" aria-label="Next review" height={30} width={30} onKeyDown={(e) => { e.key == 'Enter' ? instanceRef.current?.next() : null; }} onClick={(e) => e.stopPropagation() || instanceRef.current?.next()} tabIndex={0} className={styles.carouselRightControl} />
            </div>
          </div>
          <div className={`linesARound`}><Image src={`${process.env.BASE_PATH}/img/icons/thumbs-up-solid.svg`} alt="Thumbs up" aria-label="Thumbs up" height={40} width={40} role="presentation" /></div>
          <p className={styles.reviewsHelpedHeader}>Have we helped you out recently?</p>
          <Button text="Leave a review" href="https://www.google.com/search?q=Wide+Open+Throttle&stick=H4sIAAAAAAAA_-NgU1I1qDBJNUq1NEwyM0lLTUtOM0uxMqhINjMyTLM0TUkzSzJKBRKLWIXCM1NSFfwLUvMUQjKK8ktKclIB9N-1DD4AAAA&hl=en&mat=CQl9kyOWjp7LElUB7PxHsSy-JkTfdI0qaVewwhR_TYLTiW6eCQgq51AOP_wF5ECzO5UEQ5-0Z9q02m6ZIOFykUWwZhZi27AC_0BOP4LZ4Zu7OdG1mx_s5cssLj2uClrU&authuser=1#lrd=0x4e2e91b64fefcf6d:0xc621f95df6b2ef6b,3" target="_blank" color="inverted" />
        </div>
      </section>

      <section id="contact-us" className={styles.contactSection}>
        <div className={`${styles.contactWrapper} container`}>
          <div>
            <span className={`lineAfter subheading`}>Want a quote?</span>
            <h2 aria-label="Contact us">Contact Us</h2>
            <p className={styles.contactCopy}>Ready to get started or have any general questions? Contact us for your free quote and protect your investment!</p>
          </div>
          <div>
            <ContactForm />
          </div>
        </div>
      </section>
    </main>
  );
}

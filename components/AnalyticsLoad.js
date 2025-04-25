"use client"
import Script from 'next/script'; 

const AnalyticsLoad = () => {
    return (
        <Script
        async
        onReady={() => {
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', process.env.NEXT_PUBLIC_GOOGLE_ADSENSE);
        }}
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ADSENSE}`}
        />
    );
  };
  
  export default AnalyticsLoad;
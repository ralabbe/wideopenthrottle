import { Quicksand } from "next/font/google";
import { GoogleAnalytics } from '@next/third-parties/google';
import { ReCaptchaProvider } from "next-recaptcha-v3";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnalyticsLoad from '@/components/AnalyticsLoad';


const quicksand = Quicksand({
    weight: ['400', '500'],
    subsets: ['latin'],
});

export const metadata = {
    title: "Wide Open Throttle",
    description: "Your auto service specialists based in the Lake Orion Michigan.",
    alternates: {
        canonical: "https://www.wotautogarage.com"
    }
};

export default function RootLayout({ children }) {
    return (
        <html lang="en" style={{ scrollBehavior: 'smooth' }}>
            <AnalyticsLoad />
            <body className={quicksand.className}>
                <Navbar />
                <ReCaptchaProvider>
                {children}
                </ReCaptchaProvider>
                <Footer />
                <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS} />
            </body>
        </html>
    );
}

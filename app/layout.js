import { Roboto_Slab, Roboto } from 'next/font/google';
import 'bootstrap/dist/css/bootstrap.min.css';
import './globals.css';

const robotoSlab = Roboto_Slab({
  subsets: ['latin'],
  variable: '--font-heading',
  display: 'swap',
});

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
});

export const metadata = {
  title: 'Bring It Ohm Electrical Solutions | Professional Electricians in Surrey',
  description: 'Expert electrical services in Walton on Thames, Surrey. From installations and rewiring to EV charging and smart home automation. 24/7 emergency electrician services. Call 07885694524',
  keywords: 'electrical services surrey, electrician surrey, electrical installations surrey, electrical repairs surrey, smart home automation surrey, EV charging installation, EICR testing, emergency electrician',
  authors: [{ name: 'Bring It Ohm Electrical Solutions' }],
  openGraph: {
    title: 'Bring It Ohm Electrical Solutions | Professional Electricians in Surrey',
    description: 'Expert electrical services in Walton on Thames, Surrey. From installations and rewiring to EV charging and smart home automation.',
    url: 'https://bringitohm.co.uk',
    siteName: 'Bring It Ohm Electrical Solutions',
    locale: 'en_GB',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${robotoSlab.variable} ${roboto.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#53585F" />
      </head>
      <body>
        {children}
        {/* Google Analytics - Replace with your GA4 ID */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-XXXXXXXXXX');
            `,
          }}
        />
      </body>
    </html>
  );
}
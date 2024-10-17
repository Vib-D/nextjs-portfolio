import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import PageTransition from '../components/PageTransition';
import logo from '../favicon.ico';

import { IconBase } from "react-icons";
import {Metadata} from 'next';

const jetbrains_Mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800'],
  variable: '--font-jetbrainsMono',
});

export const metadata: Metadata = {
  title: {
    default: 'Vibhor | Portfolio',
    template: '',
  },
};

export default function RootLayout({ children }) {
  return (       
    <html lang="en">
      <head>
        <link rel="icon" href='app/favicon.ico' type="image/x-icon" sizes="32x32"/>
      </head>
      <body className={jetbrains_Mono.variable}>
        <Header />
        
        <PageTransition>
        {children}

        </PageTransition>


      </body>
    </html>
  );
}

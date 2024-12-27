import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";
import {Outfit} from 'next/font/google'
import Provider from "./provider";
import { Toaster } from 'react-hot-toast';
import { SpeedInsights } from "@vercel/speed-insights/next";
import Footer from "./components/Footer";

export const metadata = {
  title: "IA Design de Interiores",
  description: "Design de Interiores com Inteligência Artificial",
  icons: {
    icon: '/favicon.ico',
  },
};

const outfit=Outfit({subsets:['latin']})

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${outfit.className} flex flex-col min-h-screen`}>
          <Provider>
            <main className="flex-grow">
              {children}
            </main>
            <Footer />
          </Provider>
          <Toaster position="top-center" />
          <SpeedInsights />
        </body>
      </html>
    </ClerkProvider>
  );
}

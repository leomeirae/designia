import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";
import {Outfit} from 'next/font/google'
import Provider from "./provider";
import { Toaster } from 'react-hot-toast';
import { SpeedInsights } from "@vercel/speed-insights/next";

export const metadata = {
  title: "IA Design de Interiores",
  description: "Redesenhe seu ambiente com IA",
};

const outfit=Outfit({subsets:['latin']})

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={outfit.className}>
          <Provider>
            {children}
          </Provider>
          <Toaster position="top-center" />
          <SpeedInsights />
        </body>
      </html>
    </ClerkProvider>
  );
}

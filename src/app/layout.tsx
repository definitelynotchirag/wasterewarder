import type { Metadata } from "next";
import { ClerkProvider } from "@clerk/nextjs";
import { dark, neobrutalism } from "@clerk/themes";
import { Inter } from "next/font/google";
import '@mantine/core/styles.css';
import "./globals.css";
import LogoImage from '../../public/logo1.png'
import Header from './components/Header'
import { MantineProvider } from "@mantine/core";
// import { ClerkProvider } from '@clerk/nextjs';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MERADustbin",
  description: "Waste Management App",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider
      appearance={{
        baseTheme: [dark],
        variables: {
          colorPrimary: "green",
          colorBackground: "rgba(20, 69, 47, 1)",
          fontFamily: "roboto",
          borderRadius: "0.7rem",
          colorInputBackground: "rgba(29, 46, 40, 1)",
          spacingUnit: "0.9rem",
        },
        elements: {},
        layout: {
          animations: true,
          logoLinkUrl: "https://telegra.ph/file/7790682e4986dbb174428.png",
          logoPlacement: "outside",
        },
      }}
    >
      <html lang="en">
      <body className={inter.className} >
          <main className='mx-auto bg-castleton-green'>
            <div className='flex items-start justify-center min-h-screen '>
              <div className='mt-20'><MantineProvider>{children}</MantineProvider></div>
            </div>
          </main>
        </body>
      </html>
    </ClerkProvider>
  );
}
// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <ClerkProvider>
//     <html lang="en">
//       <body className={inter.className}>{children}</body>
//     </html>
//     </ClerkProvider>
//   );
// }

import type { Metadata } from "next";
import { Noto_Sans, Noto_Sans_Mono } from "next/font/google";
import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next";

import { ThemeProvider } from "@/components/theme-provider"

const notoSans = Noto_Sans({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const notoMono = Noto_Sans_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
	metadataBase: new URL("https://darkspirestudio.vercel.app/"),

	title: "Darkspire Studio",
	authors: {
		name: "Pablo Diogo",
	},

	description:
		"Aqui você encontra projetos que refletem minha paixão por criar soluções visuais impactantes e funcionais. Com experiência em design gráfico, identidade visual, UI/UX e ilustração, busco transformar ideias em experiências únicas, aliando criatividade e técnica.",
	openGraph: {
		title: "Studios",
		description:
			"Aqui você encontra projetos que refletem minha paixão por criar soluções visuais impactantes e funcionais. Com experiência em design gráfico, identidade visual, UI/UX e ilustração, busco transformar ideias em experiências únicas, aliando criatividade e técnica.",
		url: "https://darkspirestudio.vercel.app/",
		siteName: "Darkspire Studio",
		images: "/og.png",
		type: "website",
	},
	keywords: ["design", "graphic design", "designer"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body
        className={`${notoSans.variable} ${notoMono.variable} antialiased`}
      >
         <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            {children}
            <SpeedInsights />
          </ThemeProvider>
      </body>
    </html>
  );
}

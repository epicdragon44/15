import { Cover } from "@/components/cover";
import { Navbar } from "@/components/navbar";
import { FC, PropsWithChildren } from "react";
import "./globals.css";
import Script from "next/script";
import localFont from "next/font/local";

const berkeleyMono = localFont({
  src: "./mono.otf",
  display: "swap",
  variable: "--font-mono",
});

const Layout: FC<PropsWithChildren> = (props) => {
  return (
    <html lang="en" className={`${berkeleyMono.variable}`}>
      <head>
        <title>Daniel W3i</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Daniel Wei | w3i.space" />
        <meta name="author" content="Daniel Wei" />
        <meta name="keywords" content="Daniel Wei, w3i, personal website" />
        <meta name="robots" content="index, follow" />
        <Script src="https://cdn.tailwindcss.com" />
        <Script src="https://unpkg.com/htmx.org@2.0.3" />
        <Script
          defer
          src="https://umami.wednesdays.me/script.js"
          data-website-id="d54a19a0-8d7c-4f7f-9a95-d29fa93a014b"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin={true as any}
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&family=Instrument+Serif:ital@0;1&display=swap"
          rel="stylesheet"
        />
        <style>{TOP_LEVEL_STYLING}</style>
      </head>
      <body className="w-screen h-fit min-h-screen text-black bg-white dark:text-white dark:bg-[#0B0A0F] select-none md:overflow-hidden">
        {props.children}
      </body>
    </html>
  );
};

const TOP_LEVEL_STYLING = `
  body {
      font-family: "HelveticaNeue-Light", "Helvetica Neue Light", "Helvetica Neue", Helvetica, Arial, "Lucida Grande", sans-serif;
      font-weight: 300;
  }

  .helvetica {
      font-family: "HelveticaNeue-Light", "Helvetica Neue Light", "Helvetica Neue", Helvetica, Arial, "Lucida Grande", sans-serif;
      font-weight: 400;
      font-style: normal;
      letter-spacing: -0.02em;
      line-height: 1.0;
      font-size: 2rem;
  }

  .ibm-plex-mono {
    font-family: "IBM Plex Mono", monospace;
    font-weight: 400;
    font-style: normal;
    letter-spacing: -0.04em;
    line-height: 1.32;
  }
`;

export default Layout;

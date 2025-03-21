import "./globals.css";

export const metadata = {
  title: "Wesley Pagnol portfolio",
  description: "Get to know Wesley Pagnol",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

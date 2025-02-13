
import "./globals.css";
import Header from "./_components/Header";
import Footer from "./_components/Footer";
import BackToTopButton from "./_components/BackToTopButton";



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <head>
      <link rel="icon" href="/N.png" />
        <title>ポートフォリオ</title>
      </head>
      <body>
        <Header />
        {children}
        <BackToTopButton />
        <Footer />
      </body>
    </html>
  );
}

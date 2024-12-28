import "./globals.css";

export const metadata = {
  title: "Fourth Industrial Revolution Inc.",
  description: "Fourth Industrial Revolution Inc.",
};

export default function RootLayout({ children }) {
  
  return (
    <html lang="en">
      <body>
        {children}
Footer
      </body>
    </html>
  );
}

import 'bootstrap/dist/css/bootstrap.min.css';
import "./globals.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Header from './Componenets/webcomponents/Header/Header';
import Footer from './Componenets/webcomponents/Footer/Footer';
export const metadata = {
  title: "Fourth Industrial Revolution Inc.",
  description: "Fourth Industrial Revolution Inc.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}

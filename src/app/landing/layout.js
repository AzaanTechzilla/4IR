
import "../../../public/assets/css/Global.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from "../Componenets/landing/Navbar/Footer";
export const metadata = {
  title: "Fourth Industrial Revolution Inc.",
  description: "Fourth Industrial Revolution Inc.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        <Footer />
      </body>
    </html>
  );
}

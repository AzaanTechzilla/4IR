import { useEffect } from "react";
import Header from "./Navbar/Header";
import Footer from "./Navbar/Footer";

export default function Layout({ children }) {
    // useEffect(() => {
    //     require('../../node_modules/bootstrap/dist/js/bootstrap.min.js')
    // })
    return (
        <>
            {/* <Header /> */}
            {children}
            <Footer />
        </>
    );
} 
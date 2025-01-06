'use client'
import React, { useState, useEffect } from "react";
import Link from "next/link";
import SiteLogo from "../../landing/SiteLogo";
import { IoIosArrowDown, IoIosMenu } from "react-icons/io";
import { Offcanvas, OffcanvasHeader, OffcanvasBody } from "reactstrap";
import styles from "@/css/Header.module.css";

export default function Header() {
    const [isOffcanvasOpen, setIsOffcanvasOpen] = useState(false);
    const [isSticky, setIsSticky] = useState(false);

    const toggleOffcanvas = () => {
        setIsOffcanvasOpen(!isOffcanvasOpen);
    };

    const handleScroll = () => {
        if (window.scrollY > 200) {
            setIsSticky(true);
        } else {
            setIsSticky(false);
        }
    };
    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <header className={` ${isSticky ? styles.sticky : ''}`}>
            <nav className={styles.navbarWrapper}>
                <div className="container">
                    <div className={styles.navbarContent}>
                        <div className={styles.navbarLogo}>
                            <Link href="/">
                                <SiteLogo width="117px" height="50px" />
                            </Link>
                        </div>
                        <div className={`${styles.navbarMenu} d-none d-md-block`}>
                            <ul>
                                <li>
                                    <Link href="/">Home <IoIosArrowDown /></Link>
                                </li>
                                <li className={styles.dropdown}>
                                    <Link href="/aboutus">About 4IR <IoIosArrowDown /></Link>
                                </li>
                                <li>
                                    <Link href="/oursolutions">Our Solution <IoIosArrowDown /></Link>
                                </li>
                                <li>
                                    <Link href="/industries">Industries <IoIosArrowDown /></Link>
                                </li>
                                <li>
                                    <Link href="/blog">Blog</Link>
                                </li>
                                <li>
                                    <Link href="/contactus">Contact us</Link>
                                </li>
                            </ul>
                        </div>
                        <button className={`btn ${styles.bookDemo}`}>Book a Demo</button>
                        <button
                            className={`${styles.hamburger} d-block d-md-none`}
                            onClick={toggleOffcanvas}
                        >
                            <IoIosMenu size={30} />
                        </button>
                    </div>
                </div>
            </nav>
            <Offcanvas isOpen={isOffcanvasOpen} toggle={toggleOffcanvas}>
                <OffcanvasHeader toggle={toggleOffcanvas}>
                    <SiteLogo width="117px" height="50px" />
                    <button type="button" className="btn-close" aria-label="Close"></button>
                </OffcanvasHeader>
                <OffcanvasBody>
                    <ul className={styles.offcanvasMenu}>
                        <li><Link href="/">Home</Link></li>
                        <li><Link href="/aboutus">About 4IR</Link></li>
                        <li><Link href="/oursolutions">Our Solution</Link></li>
                        <li><Link href="/industries">Industries</Link></li>
                        <li><Link href="/blog">Blog</Link></li>
                        <li><Link href="/contactus">Contact us</Link></li>
                    </ul>
                </OffcanvasBody>
            </Offcanvas>
        </header>
    );
}

'use client'
import React, { useState } from "react";
import Link from "next/link";
import SiteLogo from "../../landing/SiteLogo";
import { IoIosArrowDown, IoIosMenu } from "react-icons/io";
import { Offcanvas, OffcanvasHeader, OffcanvasBody } from "reactstrap";
import styles from "@/css/Header.module.css";

export default function Header() {
    const [isOffcanvasOpen, setIsOffcanvasOpen] = useState(false);

    const toggleOffcanvas = () => {
        setIsOffcanvasOpen(!isOffcanvasOpen);
    };

    return (
        <>
            <header className={styles.navbar}>
                <nav className={styles.navbarWrapper}>
                    <div className="container">
                        <div className={styles.navbarContent}>
                            <div className={styles.navbarLogo}>
                                <Link href="#">
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
                                        <a href="services.html">Our Solution <IoIosArrowDown /></a>
                                    </li>
                                    <li>
                                        <a href="portfolio.html">Industries <IoIosArrowDown /></a>
                                    </li>
                                    <li>
                                        <a href="contact.html">Blog</a>
                                    </li>
                                    <li>
                                        <a href="contact.html">Contact us</a>
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
                        <button type="button" class="btn-close" aria-label="Close"></button>
                    </OffcanvasHeader>
                    <OffcanvasBody>
                        <ul className={styles.offcanvasMenu}>
                            <li><Link href="/">Home</Link></li>
                            <li><Link href="/aboutus">About 4IR</Link></li>
                            <li><a href="services.html">Our Solution</a></li>
                            <li><a href="portfolio.html">Industries</a></li>
                            <li><a href="contact.html">Blog</a></li>
                            <li><a href="contact.html">Contact us</a></li>
                        </ul>
                    </OffcanvasBody>
                </Offcanvas>
            </header>
        </>
    );
}

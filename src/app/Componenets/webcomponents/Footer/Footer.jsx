'use client'
import H6 from "../../landing/Typography/H6";
import Para from "../../landing/Typography/Para";
import "@/css/footer.css"
import Link from "next/link";
export default function Footer() {
    return (
        <>
            <footer class="footer-section">
                <div class="footer-top">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-3 col-md-6 col-sm-6">
                                <div class="widget company-intro-widget">
                                    <a href="index.html" class="site-logo"><img src="/assets/images/4IRLogomain.png" alt="logo" /></a>
                                    <p>AI Talk Assist is more than just a tool; it’s the future of customer engagement</p>
                                </div>
                            </div>
                            <div class="col-6 col-lg-3 col-md-6 col-sm-6">
                                <div class="widget course-links-widget">
                                    <h5 class="widget-title">Company</h5>
                                    <ul class="courses-link-list">
                                        <li><a href="#"><i class="fas fa-long-arrow-alt-right"></i>Home</a></li>
                                        <li><a href="#"><i class="fas fa-long-arrow-alt-right"></i>About Us</a></li>
                                        <li><a href="#"><i class="fas fa-long-arrow-alt-right"></i>Our Solutions</a></li>
                                        <li><a href="#"><i class="fas fa-long-arrow-alt-right"></i>Industries</a></li>
                                        <li><a href="#"><i class="fas fa-long-arrow-alt-right"></i>Blog</a></li>                                    </ul>
                                </div>
                            </div>
                            <div class="col-6 col-lg-3 col-md-6 col-sm-6">
                                <div class="widget course-links-widget">
                                    <h5 class="widget-title">Social Links</h5>
                                    <ul class="courses-link-list">
                                        <li><a href="#"><i class="fas fa-long-arrow-alt-right"></i>Privacy Policy</a></li>
                                        <li><a href="#"><i class="fas fa-long-arrow-alt-right"></i>Rate us</a></li>
                                        <li><a href="#"><i class="fas fa-long-arrow-alt-right"></i>Terms & Conditions</a></li>                                        <li><a href="#"><i class="fas fa-long-arrow-alt-right"></i>Blog</a></li>                                    </ul>
                                </div>
                            </div>
                            <div class="col-6 col-lg-3 col-md-6 col-sm-6">
                                <div class="widget course-links-widget">
                                    <h5 class="widget-title">Contact Info</h5>
                                    <ul class="courses-link-list">
                                        <li><a href="#"><i class="fas fa-long-arrow-alt-right"></i>Silk St, Barbican, London EC2Y 8DS, UK</a></li>
                                        <li><a href="#"><i class="fas fa-long-arrow-alt-right"></i>info@fitnessguru.com</a></li>
                                        <li><a href="#"><i class="fas fa-long-arrow-alt-right"></i>800-123-45-678</a></li>                                                     
                                        </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="footer-bottom">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-6 col-sm-6 text-sm-left">
                                <span class="copy-right-text">© 2019 <a href="">Anup</a> All Rights Reserved.</span>
                            </div>
                            <div class="col-md-6 col-sm-6">
                                <ul class="terms-privacy d-flex justify-content-sm-end justify-content-center">
                                    <li><a href="#">Terms & Conditions</a></li>
                                    <li><a href="#">Privacy Policy</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}
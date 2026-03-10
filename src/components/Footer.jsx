import './Footer.css'

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-top">

                    <div className="footer-brand">
                        <a href="#" className="nav-logo">
                            <span className="logo-afriwork">afriwork</span>
                            <span className="logo-bpo">BPO</span>
                        </a>
                        <p className="footer-desc">
                            Connecting African talent with global opportunities. Building the future of remote work seamlessly.
                        </p>
                        <div className="social-links">
                            <a href="#" aria-label="LinkedIn">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" /></svg>
                            </a>
                            <a href="#" aria-label="Twitter">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" /></svg>
                            </a>
                        </div>
                    </div>

                    <div className="footer-links-group">
                        <h4>Services</h4>
                        <ul>
                            <li><a href="#services">Customer Support</a></li>
                            <li><a href="#services">Virtual Assistants</a></li>
                            <li><a href="#services">Data Entry</a></li>
                            <li><a href="#services">Sales & Lead Gen</a></li>
                        </ul>
                    </div>

                    <div className="footer-links-group">
                        <h4>Company</h4>
                        <ul>
                            <li><a href="#about">About Us</a></li>
                            <li><a href="#how-it-works">How it Works</a></li>
                            <li><a href="#">Careers</a></li>
                            <li><a href="#contact">Contact</a></li>
                        </ul>
                    </div>

                    <div className="footer-links-group">
                        <h4>Legal</h4>
                        <ul>
                            <li><a href="#">Privacy Policy</a></li>
                            <li><a href="#">Terms of Service</a></li>
                            <li><a href="#">Security</a></li>
                        </ul>
                    </div>

                </div>

                <div className="footer-bottom">
                    <p>© {new Date().getFullYear()} Afriwork BPO. All rights reserved.</p>
                    <div className="footer-locations">
                        Nairobi · Lagos · Accra · Cairo · Addis Ababa
                    </div>
                </div>
            </div>
        </footer>
    )
}

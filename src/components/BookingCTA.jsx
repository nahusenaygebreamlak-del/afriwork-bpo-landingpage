import { useState } from 'react'
import './BookingCTA.css'

export default function BookingCTA() {
    return (
        <section className="cta-section" id="contact">
            <div className="section-container">
                <div className="cta-simple-content">
                    <h2>
                        Hire Engineers<br />
                        in Days, <em>Not Months</em>
                    </h2>
                    <p>
                        Share the role you're looking for. We'll deliver 2–3<br />
                        pre-vetted engineers within 72 hours.
                    </p>
                    <a href="https://calendly.com/nahusenaygebreamlak/30min" className="btn-book-call">Book a Call</a>
                </div>
            </div>
        </section>
    )
}

import './Testimonials.css'

const testimonials = [
    {
        quote: "The agents Afriwork provided felt like full members of our team from day one. The onboarding was smooth, and the quality of work is outstanding.",
        name: "James Lee",
        role: "CEO, ScaleUp HQ",
        initials: "JL",
        gradient: "linear-gradient(135deg, #EF8D2F, #DE0D76)",
    },
    {
        quote: "We cut our support costs by 65% while improving our CSAT score from 3.8 to 4.7. Afriwork BPO has been transformative for our business.",
        name: "Priya Rao",
        role: "Head of CX, DataBridge",
        initials: "PR",
        gradient: "linear-gradient(135deg, #3b82f6, #8b5cf6)",
        featured: true,
    },
    {
        quote: "What impressed me most was how quickly they understood our brand voice. Our customers can't tell the difference — and that's exactly what we wanted.",
        name: "Mike K.",
        role: "Founder, FlowDesk",
        initials: "MK",
        gradient: "linear-gradient(135deg, #22c55e, #3b82f6)",
    },
]

export default function Testimonials() {
    return (
        <section className="testimonials-section" id="testimonials">
            <div className="section-container">
                <div className="section-header">
                    <div className="section-badge">What Clients Say</div>
                    <h2>Real Results, <span className="gradient-text">Real Stories</span></h2>
                    <p>Join 500+ companies that trust Afriwork BPO for their remote talent needs.</p>
                </div>

                <div className="t-grid">
                    {testimonials.map(t => (
                        <div key={t.name} className={`t-card ${t.featured ? 'featured' : ''}`}>
                            <div className="t-quote">"</div>
                            <p className="t-text">{t.quote}</p>
                            <div className="t-stars">⭐⭐⭐⭐⭐</div>
                            <div className="t-author">
                                <div className="t-avatar" style={{ background: t.gradient }}>{t.initials}</div>
                                <div>
                                    <strong>{t.name}</strong>
                                    <span>{t.role}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

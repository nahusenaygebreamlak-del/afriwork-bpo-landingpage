import './WhyAfrica.css'
const candidateImg = '/assets/candidate_profile_section_image.png'

const points = [
    { title: 'Zero Recruitment Hassle', desc: 'We handle sourcing, screening, and hiring — you just approve the talent.' },
    { title: 'Save Up to 70% on Costs', desc: 'Get world-class talent at a fraction of the cost without compromising quality.' },
    { title: 'Dedicated Account Manager', desc: 'Your personal contact for seamless communication and performance reviews.' },
    { title: 'Flexible Contracts', desc: 'Month-to-month or long-term agreements. Scale at your own pace.' },
]

const numbers = [
    { val: '70%', label: 'Cost Savings' },
    { val: '48h', label: 'Time to Match' },
    { val: '50+', label: 'Skill Areas' },
    { val: '24/7', label: 'Coverage' },
]

export default function WhyAfrica() {
    return (
        <section className="why-section" id="why-africa">
            <div className="section-container why-container">
                {/* Left content */}
                <div className="why-content">
                    <div className="section-badge">Why Afriwork BPO</div>
                    <h2>Hire Prep, <span className="gradient-text">Done Right</span></h2>
                    <p className="why-desc">
                        We've built Africa's most reliable BPO talent pipeline. Every agent goes through
                        rigorous vetting — language proficiency, technical skills, background checks,
                        and a 2-week pre-deployment training.
                    </p>

                    <div className="why-points">
                        {points.map(p => (
                            <div className="why-point" key={p.title}>
                                <div className="why-check">
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3"><polyline points="20 6 9 17 4 12" /></svg>
                                </div>
                                <div>
                                    <strong>{p.title}</strong>
                                    <p>{p.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <a href="#contact" className="btn-primary">Start Hiring Today</a>
                </div>

                {/* Right visual */}
                <div className="why-visual">
                    <div className="why-img-wrap">
                        <img src={candidateImg} alt="African BPO candidate" className="candidate-img" />
                        {/* Numbers overlay */}
                        <div className="why-nums-grid">
                            {numbers.map(n => (
                                <div className="why-num-card" key={n.label}>
                                    <span className="wnum">{n.val}</span>
                                    <span className="wnum-label">{n.label}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

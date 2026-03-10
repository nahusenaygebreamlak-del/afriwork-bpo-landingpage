import './HowItWorks.css'

const steps = [
    { num: '01', icon: '📞', title: 'Book a Discovery Call', desc: 'Tell us your needs — team size, roles, skills, and timeline. We listen, understand, and plan.' },
    { num: '02', icon: '🎯', title: 'We Match Your Talent', desc: 'Within 48 hours we present pre-vetted candidates that perfectly match your requirements.' },
    { num: '03', icon: '🚀', title: 'Go Live & Scale', desc: 'Your team is onboarded, trained, and ready to contribute from day one. Scale up or down as needed.' },
]

export default function HowItWorks() {
    return (
        <section className="hiw-section" id="how-it-works">
            <div className="section-container">
                <div className="section-header">
                    <div className="section-badge">Simple Process</div>
                    <h2>Up and Running in <span className="gradient-text">3 Easy Steps</span></h2>
                    <p>No lengthy onboarding. No paperwork headaches. Just great talent, fast.</p>
                </div>

                <div className="hiw-steps">
                    {steps.map((step, i) => (
                        <>
                            <div key={step.num} className="hiw-card">
                                <div className="hiw-num">{step.num}</div>
                                <div className="hiw-icon">{step.icon}</div>
                                <h3>{step.title}</h3>
                                <p>{step.desc}</p>
                            </div>
                            {i < steps.length - 1 && (
                                <div key={`arrow-${i}`} className="hiw-arrow">→</div>
                            )}
                        </>
                    ))}
                </div>
            </div>
        </section>
    )
}

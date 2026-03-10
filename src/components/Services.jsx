import './Services.css'

const services = [
    {
        icon: '📞',
        title: 'Customer Support',
        desc: '24/7 inbound & outbound phone, email, and live chat support agents trained to represent your brand.',
        color: '#EF8D2F',
        bg: 'rgba(239,141,47,0.1)',
        features: ['Multi-channel support', 'Multilingual agents', 'Custom scripts & SLAs'],
    },
    {
        icon: '🖥️',
        title: 'Virtual Assistants',
        desc: 'Skilled VAs to manage your calendar, inbox, research, data entry, and day-to-day operations.',
        color: '#DE0D76',
        bg: 'rgba(222,13,118,0.1)',
        features: ['Executive-level support', 'Project coordination', 'Admin & scheduling'],
        featured: true,
    },
    {
        icon: '📄',
        title: 'Data Entry & Processing',
        desc: 'Fast, accurate data entry, database management, and document processing with QA built in.',
        color: '#3b82f6',
        bg: 'rgba(59,130,246,0.1)',
        features: ['High-volume processing', '99.5% accuracy rate', 'Secure data handling'],
    },
    {
        icon: '🏢',
        title: 'Back-Office Operations',
        desc: 'Billing, AP/AR, HR support, and compliance tasks handled by our expert teams.',
        color: '#22c55e',
        bg: 'rgba(34,197,94,0.1)',
        features: ['Finance & accounting', 'HR & payroll support', 'Compliance management'],
    },
    {
        icon: '📈',
        title: 'Sales & Lead Gen',
        desc: 'Outbound sales calls, lead qualification, appointment setting, and CRM management.',
        color: '#f59e0b',
        bg: 'rgba(245,158,11,0.1)',
        features: ['Outbound calling', 'CRM management', 'Appointment setting'],
    },
    {
        icon: '🛡️',
        title: 'Content Moderation',
        desc: 'Keep your platform safe with expert content reviewers working around the clock.',
        color: '#8b5cf6',
        bg: 'rgba(139,92,246,0.1)',
        features: ['24/7 moderation', 'Policy enforcement', 'Quality & safety audits'],
    },
]

export default function Services() {
    return (
        <section className="services-section" id="services">
            <div className="section-container">
                <div className="section-header">
                    <div className="section-badge">Our Services</div>
                    <h2>
                        Everything You Need to{' '}
                        <span className="gradient-text">Scale Faster</span>
                    </h2>
                    <p>From customer support to back-office operations — we handle the staffing so you can focus on growth.</p>
                </div>

                <div className="services-grid">
                    {services.map((s) => (
                        <div key={s.title} className={`service-card ${s.featured ? 'featured' : ''}`}>
                            {s.featured && <div className="most-popular">Most Popular</div>}
                            <div className="svc-icon" style={{ background: s.bg, color: s.color }}>
                                {s.icon}
                            </div>
                            <h3 style={{ color: s.featured ? s.color : 'inherit' }}>{s.title}</h3>
                            <p>{s.desc}</p>
                            <ul className="svc-features">
                                {s.features.map(f => (
                                    <li key={f}>
                                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12" /></svg>
                                        {f}
                                    </li>
                                ))}
                            </ul>
                            <a href="#contact" className="svc-link" style={{ color: s.color }}>
                                Get Started →
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

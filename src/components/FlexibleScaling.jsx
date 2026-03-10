import './FlexibleScaling.css'

export default function FlexibleScaling() {
    return (
        <section id="services" className="flexible-scaling-section">
            <div className="section-container">
                <div className="scaling-header">
                    <h2>
                        Flexible Way<br />
                        <span>to Scale Your Team</span>
                    </h2>
                </div>

                <div className="scaling-cards-container">
                    {/* Card 1: Talent Placement */}
                    <div className="scaling-card talent-placement-card">
                        <div className="scaling-card-content">
                            <h3>Talent Placement</h3>
                            <p className="subtitle">Add a vetted engineer directly to your team.</p>
                            <p className="description">
                                This option is designed for startups that want to expand their internal engineering team but need help finding qualified developers quickly.
                            </p>
                            <button className="scaling-btn btn-purple">Request Candidates</button>
                        </div>
                        <div className="scaling-card-features">
                            <ul>
                                <li>
                                    <svg viewBox="0 0 24 24" fill="none" stroke="#EF8D2F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                                    Pre-vetted engineers matched to your tech stack
                                </li>
                                <li>
                                    <svg viewBox="0 0 24 24" fill="none" stroke="#EF8D2F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                                    Candidates delivered within 72 hours
                                </li>
                                <li>
                                    <svg viewBox="0 0 24 24" fill="none" stroke="#EF8D2F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                                    Direct interviews with your team
                                </li>
                                <li>
                                    <svg viewBox="0 0 24 24" fill="none" stroke="#EF8D2F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                                    Engineers integrated into your existing workflow
                                </li>
                                <li>
                                    <svg viewBox="0 0 24 24" fill="none" stroke="#EF8D2F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                                    60-day replacement guarantee
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Card 2: Managed Engineering Team */}
                    <div className="scaling-card managed-team-card">
                        <div className="scaling-card-content">
                            <h3>Managed<br />Engineering Team</h3>
                            <p className="subtitle">Get a fully managed engineering team for a defined project or development sprint.</p>
                            <p className="description">
                                Instead of hiring individuals, you receive a complete team managed locally by Afriwork, allowing you to accelerate development without managing additional engineers directly.
                            </p>
                            <button className="scaling-btn btn-orange">Request Candidates</button>
                        </div>
                        <div className="scaling-card-features">
                            <ul>
                                <li>
                                    <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                                    Dedicated engineers aligned to your tech stack
                                </li>
                                <li>
                                    <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                                    Technical lead overseeing development
                                </li>
                                <li>
                                    <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                                    Dedicated HR oversight to monitor working hours and team operations
                                </li>
                                <li>
                                    <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                                    Workspace and infrastructure provided by Afriwork
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

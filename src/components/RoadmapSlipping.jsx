import './RoadmapSlipping.css'

export default function RoadmapSlipping() {
    return (
        <section id="why-africa" className="roadmap-section">
            <div className="section-container">
                <div className="roadmap-header">
                    <h2 className="roadmap-title">
                        Your Roadmap Isn't Slipping Because of Ideas
                    </h2>
                    <p className="roadmap-subtitle">
                        If you're running a Seed–Series A SaaS startup,<br />
                        you're probably seeing this already.
                    </p>
                </div>

                <div className="roadmap-flow-wrapper">
                    {/* Background Connectors SVG */}
                    <div className="roadmap-svg-layer">
                        <svg width="861" height="294" viewBox="0 0 861 294" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M268.333 89.5352C268.723 89.1447 268.723 88.5115 268.333 88.121L261.969 81.7571C261.578 81.3665 260.945 81.3665 260.554 81.7571C260.164 82.1476 260.164 82.7807 260.554 83.1713L266.211 88.8281L260.554 94.485C260.164 94.8755 260.164 95.5087 260.554 95.8992C260.945 96.2897 261.578 96.2897 261.969 95.8992L268.333 89.5352ZM185.043 43.0312V44.0312H219.92V43.0312V42.0312H185.043V43.0312ZM230.92 54.0312H229.92V77.8281H230.92H231.92V54.0312H230.92ZM241.92 88.8281V89.8281H267.625V88.8281V87.8281H241.92V88.8281ZM230.92 77.8281H229.92C229.92 84.4555 235.293 89.8281 241.92 89.8281V88.8281V87.8281C236.397 87.8281 231.92 83.351 231.92 77.8281H230.92ZM219.92 43.0312V44.0312C225.443 44.0312 229.92 48.5084 229.92 54.0312H230.92H231.92C231.92 47.4038 226.547 42.0312 219.92 42.0312V43.0312Z" fill="#828282" />
                            <path d="M594.178 169.047C594.568 169.437 594.568 170.07 594.178 170.461L587.814 176.825C587.423 177.215 586.79 177.215 586.4 176.825C586.009 176.434 586.009 175.801 586.4 175.411L592.056 169.754L586.4 164.097C586.009 163.707 586.009 163.073 586.4 162.683C586.79 162.292 587.423 162.292 587.814 162.683L594.178 169.047ZM534.625 81.8447V80.8447H552.234V81.8447V82.8447H534.625V81.8447ZM563.234 92.8447H564.234V158.754H563.234H562.234V92.8447H563.234ZM574.234 169.754V168.754H593.471V169.754V170.754H574.234V169.754ZM563.234 158.754H564.234C564.234 164.277 568.711 168.754 574.234 168.754V169.754V170.754C567.607 170.754 562.234 165.381 562.234 158.754H563.234ZM552.234 81.8447V80.8447C558.861 80.8447 564.234 86.2172 564.234 92.8447H563.234H562.234C562.234 87.3218 557.757 82.8447 552.234 82.8447V81.8447Z" fill="#828282" />
                        </svg>
                    </div>

                    <div className="roadmap-content-layer">
                        {/* Problem 1 Card */}
                        <div className="roadmap-hybrid-card card-problem-1">
                            <p>Your <span className="highlight-purple">backlog</span> keeps <span className="highlight-purple">growing.</span></p>
                            <div className="card-bullet-icon">
                                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                                    <circle cx="7" cy="7" r="6.5" stroke="#75216A" strokeOpacity="0.2" />
                                    <circle cx="7" cy="7" r="3" fill="#75216A" />
                                </svg>
                            </div>
                        </div>

                        {/* Problem 2 Card */}
                        <div className="roadmap-hybrid-card card-problem-2">
                            <p>Your <strong>team is shipping</strong>, but not <span className="highlight-purple">fast enough</span> to keep up with product demand.</p>
                            <div className="card-bullet-icon">
                                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                                    <circle cx="7" cy="7" r="6.5" stroke="#75216A" strokeOpacity="0.2" />
                                    <circle cx="7" cy="7" r="3" fill="#75216A" />
                                </svg>
                            </div>
                        </div>

                        {/* Solution / Warning Card */}
                        <div className="roadmap-hybrid-card card-solution-main">
                            <h3 className="solution-card-title">Hiring another engineer in the US means:</h3>
                            <ul className="solution-hiring-list">
                                <li>6-10 week hiring cycles</li>
                                <li>$120k-$150k salary expectations</li>
                                <li>Increased burn during a critical growth stage</li>
                            </ul>
                            <div className="card-bullet-icon bottom-icon">
                                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                                    <circle cx="7" cy="7" r="6.5" stroke="#75216A" strokeOpacity="0.2" />
                                    <circle cx="7" cy="7" r="3" fill="#75216A" />
                                </svg>
                            </div>
                        </div>

                        {/* Footer Text correctly placed in content layer */}
                        <div className="roadmap-hybrid-footer-text">
                            <em>What you actually need is <strong>more engineering capacity</strong> now, not another 2-month hiring process.</em>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

import './ProcessFlow.css'

export default function ProcessFlow() {
    return (
        <section id="how-it-works" className="process-section">
            <div className="section-container">
                <div className="process-flow-container">
                    {/* User-Provided SVG Connector Line */}
                    <div className="process-svg-wrap">
                        <svg width="821" height="399" viewBox="0 0 821 399" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.78955 8.5H196.359C228.764 8.5 255.033 34.7694 255.033 67.1743C255.033 99.5792 281.303 125.849 313.708 125.849H427.01C467.503 125.849 500.328 158.675 500.328 199.167C500.328 239.66 533.154 272.486 573.647 272.486H729.514C774.801 272.486 811.514 309.199 811.514 354.486V390.306" stroke="#F4ECEC" strokeWidth="17" />
                            <path d="M7.78955 8.5H196.359C228.764 8.5 255.033 34.7694 255.033 67.1743C255.033 99.5792 281.303 125.849 313.708 125.849H427.01C467.503 125.849 500.328 158.675 500.328 199.167C500.328 239.66 533.154 272.486 573.647 272.486H729.514C774.801 272.486 811.514 309.199 811.514 354.486V390.306" stroke="#828282" strokeWidth="2" />
                            <circle cx="8.26904" cy="8.50146" r="8.26904" fill="#75216A" />
                            <circle cx="274.029" cy="110.214" r="8.26904" fill="#75216A" />
                            <circle cx="535.223" cy="260.802" r="8.26904" fill="#75216A" />
                            <circle cx="811.359" cy="390.06" r="8.26904" fill="#75216A" />
                        </svg>
                    </div>

                    {/* Step 1 */}
                    <div className="process-step step-1">
                        <h4 className="step-title">Step 1 - Book a Call</h4>
                        <p className="step-desc">We understand your stack, roadmap pressure, and team structure.</p>
                    </div>

                    {/* Step 2 */}
                    <div className="process-step step-2">
                        <h4 className="step-title">Step 2 - Receive 2–3<br />Vetted Engineers</h4>
                        <p className="step-desc">Within 72 hours we send engineers already screened for your stack.</p>
                    </div>

                    {/* Step 3 */}
                    <div className="process-step step-3">
                        <h4 className="step-title">Step 3 — Interview & Select</h4>
                        <p className="step-desc">You interview candidates directly.</p>
                    </div>

                    {/* Step 4 */}
                    <div className="process-step step-4">
                        <div className="step-4-card">
                            <h4 className="step-title">Step 4 — Start Building</h4>
                            <p className="step-desc">Engineer joins your team and begins shipping.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

import './Hero.css'
const heroCards = '/assets/hero_cards.png'
const profilesSmall = '/assets/profiles_small_images_hero.png'

export default function Hero() {
    return (
        <section className="hero" id="home">
            {/* Background pattern */}


            <div className="hero-container">
                {/* Social proof avatars - Moved to top center */}
                <div className="hero-social-proof">
                    <div className="proof-avatars">
                        <img src={profilesSmall} alt="Client profiles" className="profiles-img" />
                    </div>
                    <p className="proof-text">
                        130+ engineering roles filled in the last 12 months
                    </p>
                </div>

                <div className="hero-grid">
                    {/* Left Content */}
                    <div className="hero-left">
                        <span className="hero-subline">Without Adding<br />$130k Salaries to Your Burn</span>
                        <h1 className="hero-title">
                            Hire Pre-Vetted<br />
                            Engineers in Under<br />
                            <span className="gradient-text serif-italic">a week</span>
                        </h1>

                        <div className="hero-actions">
                            <a href="https://calendly.com/nahusenaygebreamlak/30min" className="btn-primary">Book a Call</a>
                            <a href="#contact" className="btn-outline">Request Candidates</a>
                        </div>
                    </div>

                    {/* Right Visual */}
                    <div className="hero-right">
                        <div className="hero-visual-wrap">
                            <img src={heroCards} alt="Live BPO dashboard" className="hero-cards-img" />
                        </div>
                    </div>
                </div>

                {/* Video Section */}
                <div className="hero-video-section">
                    <div className="video-placeholder">
                        <div className="video-play-btn">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="#333"><path d="M8 5v14l11-7z" /></svg>
                        </div>
                        <div className="video-mute-btn">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#333" strokeWidth="2"><path d="M11 5L6 9H2v6h4l5 4V5zM19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07" /></svg>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

import { useState, useEffect } from 'react'
import './Navbar.css'

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false)
    const [menuOpen, setMenuOpen] = useState(false)

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 20)
        window.addEventListener('scroll', onScroll)
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    const navLinks = [
        { href: '#services', label: 'Services' },
        { href: '#how-it-works', label: 'How It Works' },
    ]

    const handleScroll = (e, href) => {
        e.preventDefault()
        setMenuOpen(false)

        // Use Lenis for smooth scroll if available
        if (window.lenis) {
            window.lenis.scrollTo(href, { offset: -80 })
        } else {
            // Fallback native scroll
            const target = document.querySelector(href)
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' })
            }
        }
    }

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="nav-inner">
                {/* Logo */}
                <a href="#" className="nav-logo" onClick={(e) => handleScroll(e, 'top')}>
                    <svg width="100" height="19" viewBox="0 0 85 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.84285 4.81823H11.3185V15.6669H8.88506L8.75845 14.082C8.16648 15.3581 6.53718 15.9745 5.37324 15.9968C2.28457 16.019 0 14.0387 0 10.2315C0 6.42421 2.39008 4.53169 5.43766 4.5539C6.83372 4.5539 8.16759 5.23583 8.75956 6.31426L8.84397 4.81823H8.84285ZM2.58 10.2315C2.58 12.2995 3.95607 13.5323 5.66867 13.5323C9.73136 13.5323 9.73136 6.95287 5.66867 6.95287C3.95496 6.95287 2.58 8.16346 2.58 10.2315Z" fill="url(#paint0_linear_2351_159)" />
                        <path d="M14.1833 15.6677V7.32795H12.2363V4.97341H14.1833V4.24706C14.1833 1.34276 16.0669 0 18.1616 0C19.0712 0 20.023 0.308756 20.8693 0.880732L19.9175 2.8832C19.3677 2.50892 18.859 2.31123 18.3304 2.31123C17.4408 2.31123 16.7644 2.92763 16.7644 4.24706V4.97341H19.8319V7.32795H16.7644V15.6677H14.1833Z" fill="url(#paint1_linear_2351_159)" />
                        <path d="M35.5924 1.75948C35.5924 3.84969 32.5459 3.84969 32.5459 1.75948C32.5459 -0.33073 35.5924 -0.33184 35.5924 1.75948ZM32.778 4.77374V15.6657H35.3591V4.77485H32.778V4.77374Z" fill="url(#paint2_linear_2351_159)" />
                        <path d="M46.4238 4.79688L48.7084 12.9611L51.0996 4.79688H53.9562L50.3166 15.7122H47.3124L46.2339 12.4991L45.3021 8.86845L44.3714 12.4991L43.2919 15.7122H40.2876L36.627 4.79688H39.5046L41.8947 12.9611L44.1582 4.79688H46.4216H46.4238Z" fill="url(#paint3_linear_2351_159)" />
                        <path d="M65.656 10.254C65.656 13.3782 63.6035 15.9093 60.2183 15.9093C56.8331 15.9093 54.8018 13.3782 54.8018 10.254C54.8018 7.12976 56.8753 4.59863 60.1972 4.59863C63.5191 4.59863 65.656 7.15087 65.656 10.254ZM57.3829 10.254C57.3829 11.9044 58.3347 13.4448 60.2183 13.4448C62.1019 13.4448 63.0526 11.9044 63.0526 10.254C63.0526 8.60357 61.952 7.04091 60.2183 7.04091C58.3569 7.04091 57.3829 8.62579 57.3829 10.254Z" fill="url(#paint4_linear_2351_159)" />
                        <path d="M68.9788 4.81877L69.1698 6.07267C69.9739 4.72992 71.0524 4.53223 72.1108 4.53223C73.1692 4.53223 74.2265 4.97204 74.7974 5.56623L73.6346 7.89855C73.1048 7.43653 72.6184 7.19441 71.7732 7.19441C70.4193 7.19441 69.171 7.94298 69.171 9.94545V15.6663H66.5898V4.81877H68.9799H68.9788Z" fill="url(#paint5_linear_2351_159)" />
                        <path d="M77.4405 0.286133V9.17675L80.9523 4.81973H84.041V4.97411L79.7884 9.92531L84.6329 15.4707V15.6684H81.5232L77.4405 10.7616V15.6684H74.8594V0.286133H77.4405Z" fill="url(#paint6_linear_2351_159)" />
                        <path d="M32.1337 2.11532C31.9682 1.85432 31.7261 1.68439 31.4496 1.63553C29.2772 1.25014 27.0104 1.85099 25.1967 3.28815C24.6214 2.48405 23.945 1.68106 23.1853 0.895844C22.6678 0.36163 21.9781 0.489352 21.5638 0.891401C21.1373 1.30456 20.983 2.00981 21.5138 2.55735C22.3324 3.40254 23.0032 4.21664 23.5574 5.04184C22.5434 6.49899 21.9459 8.30043 21.8281 10.2629C21.7315 11.89 21.9092 13.2228 22.3579 14.2245C22.69 14.9676 23.3253 15.5529 24.0561 15.7916C24.2949 15.8694 24.5336 15.9083 24.7691 15.9083C25.1445 15.9083 25.511 15.8094 25.8542 15.6139C26.7527 15.1019 27.328 14.0868 27.6123 12.5097C27.85 11.1936 27.8278 9.82089 27.5457 8.43149C27.3358 7.39527 26.9637 6.34905 26.4384 5.31727C27.7378 4.17554 29.3793 3.65354 30.8665 3.91565C31.5306 4.03671 32.1293 3.68464 32.2936 3.08712C32.3792 2.77726 32.317 2.40408 32.1326 2.1131L32.1337 2.11532ZM25.0245 13.085C24.8713 13.4427 24.7713 13.5404 24.7436 13.5559C24.6902 13.5415 24.557 13.3971 24.4814 13.2272C24.1605 12.5008 24.1427 11.5313 24.1705 10.5928C24.2027 9.50547 24.4348 8.45814 24.8446 7.52965C25.2544 8.66694 25.8975 11.0526 25.0245 13.085Z" fill="url(#paint7_linear_2351_159)" />
                        <defs>
                            <linearGradient id="paint0_linear_2351_159" x1="-0.00111063" y1="7.99798" x2="84.6346" y2="7.99798" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#EF8D2F" />
                                <stop offset="0.66" stopColor="#E3355F" />
                                <stop offset="1" stopColor="#DE0D76" />
                            </linearGradient>
                            <linearGradient id="paint1_linear_2351_159" x1="-0.000621197" y1="7.99878" x2="84.6351" y2="7.99878" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#EF8D2F" />
                                <stop offset="0.66" stopColor="#E3355F" />
                                <stop offset="1" stopColor="#DE0D76" />
                            </linearGradient>
                            <linearGradient id="paint2_linear_2351_159" x1="-6.73597e-05" y1="7.9979" x2="84.6357" y2="7.9979" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#EF8D2F" />
                                <stop offset="0.66" stopColor="#E3355F" />
                                <stop offset="1" stopColor="#DE0D76" />
                            </linearGradient>
                            <linearGradient id="paint3_linear_2351_159" x1="-0.00171037" y1="7.99883" x2="84.634" y2="7.99883" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#EF8D2F" />
                                <stop offset="0.66" stopColor="#E3355F" />
                                <stop offset="1" stopColor="#DE0D76" />
                            </linearGradient>
                            <linearGradient id="paint4_linear_2351_159" x1="-0.00128025" y1="7.99828" x2="84.6345" y2="7.99828" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#EF8D2F" />
                                <stop offset="0.66" stopColor="#E3355F" />
                                <stop offset="1" stopColor="#DE0D76" />
                            </linearGradient>
                            <linearGradient id="paint5_linear_2351_159" x1="-0.000323121" y1="7.99851" x2="84.6354" y2="7.99851" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#EF8D2F" />
                                <stop offset="0.66" stopColor="#E3355F" />
                                <stop offset="1" stopColor="#DE0D76" />
                            </linearGradient>
                            <linearGradient id="paint6_linear_2351_159" x1="-0.00170162" y1="7.99836" x2="84.6341" y2="7.99836" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#EF8D2F" />
                                <stop offset="0.66" stopColor="#E3355F" />
                                <stop offset="1" stopColor="#DE0D76" />
                            </linearGradient>
                            <linearGradient id="paint7_linear_2351_159" x1="-0.000227812" y1="7.99834" x2="84.6355" y2="7.99834" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#EF8D2F" />
                                <stop offset="0.66" stopColor="#E3355F" />
                                <stop offset="1" stopColor="#DE0D76" />
                            </linearGradient>
                        </defs>
                    </svg>
                </a>

                {/* Desktop Links */}
                <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
                    {navLinks.map(l => (
                        <li key={l.href}>
                            <a href={l.href} onClick={(e) => handleScroll(e, l.href)}>{l.label}</a>
                        </li>
                    ))}
                </ul>

                {/* CTA */}
                <a href="#contact" className="btn-book" onClick={(e) => handleScroll(e, '#contact')}>
                    Book a Call
                </a>

                {/* Hamburger */}
                <button
                    className={`hamburger ${menuOpen ? 'active' : ''}`}
                    onClick={() => setMenuOpen(o => !o)}
                    aria-label="Toggle menu"
                >
                    <span /><span /><span />
                </button>
            </div>
        </nav>
    )
}

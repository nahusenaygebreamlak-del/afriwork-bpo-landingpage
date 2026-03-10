import { useEffect } from 'react'
import Lenis from 'lenis'

import Navbar from './components/Navbar'
import Hero from './components/Hero'
import RoadmapSlipping from './components/RoadmapSlipping'
import EngineersTeam from './components/EngineersTeam'
import ProcessFlow from './components/ProcessFlow'
import FlexibleScaling from './components/FlexibleScaling'
import BookingCTA from './components/BookingCTA'
import Footer from './components/Footer'
import './App.css'

function App() {
    useEffect(() => {
        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            direction: 'vertical',
            gestureDirection: 'vertical',
            smooth: true,
            mouseMultiplier: 1,
            smoothTouch: false,
            touchMultiplier: 2,
            infinite: false,
        })

        window.lenis = lenis

        function raf(time) {
            lenis.raf(time)
            requestAnimationFrame(raf)
        }

        requestAnimationFrame(raf)

        return () => {
            delete window.lenis
            lenis.destroy()
        }
    }, [])

    return (
        <div className="app">
            <Navbar />
            <Hero />
            <RoadmapSlipping />
            <EngineersTeam />
            <ProcessFlow />
            <FlexibleScaling />
            <BookingCTA />
            <Footer />
        </div>
    )
}

export default App

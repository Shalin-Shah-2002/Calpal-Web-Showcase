import { useEffect, useRef, useState } from 'react'
import './App.css'
import footerSocials from './assets/footer-socials.svg'
import heroWaveCombined from './assets/hero-wave-combined.svg'
import iconDashboard from './assets/icon-dashboard.svg'
import iconFree from './assets/icon-free.svg'
import iconGemini from './assets/icon-gemini.svg'
import iconGlass from './assets/icon-glass.svg'
import iconGoals from './assets/icon-goals.svg'
import iconNoBloat from './assets/icon-nobloat.svg'
import iconOffline from './assets/icon-offline.svg'
import iconPrivacy from './assets/icon-privacy.svg'
import iconSearch from './assets/icon-search.svg'
import logo from './assets/logo.png'
import midOverlay from './assets/mid-overlay.svg'
import midPhones from './assets/mid-phones.svg'
import phoneShot from './assets/phone-shot.png'
import sectionBackground from './assets/section-bg.png'

function App() {
  const heroRef = useRef(null)
  const [heroScrollProgress, setHeroScrollProgress] = useState(0)

  useEffect(() => {
    let rafId = null

    const updateHeroProgress = () => {
      const hero = heroRef.current
      if (!hero) {
        rafId = null
        return
      }

      const rect = hero.getBoundingClientRect()
      const distance = Math.max(1, rect.height * 0.6)
      const rawProgress = (-rect.top) / distance
      const clampedProgress = Math.max(0, Math.min(1, rawProgress))

      setHeroScrollProgress((prev) => (Math.abs(prev - clampedProgress) < 0.005 ? prev : clampedProgress))
      rafId = null
    }

    const onScrollOrResize = () => {
      if (rafId !== null) return
      rafId = window.requestAnimationFrame(updateHeroProgress)
    }

    onScrollOrResize()
    window.addEventListener('scroll', onScrollOrResize, { passive: true })
    window.addEventListener('resize', onScrollOrResize)

    return () => {
      window.removeEventListener('scroll', onScrollOrResize)
      window.removeEventListener('resize', onScrollOrResize)
      if (rafId !== null) window.cancelAnimationFrame(rafId)
    }
  }, [])

  const whyCards = [
    { icon: iconSearch, title: 'Free Core Tracking', body: 'Compared to many calorie apps that lock basics behind paywalls, CalPal keeps core logging accessible.' },
    { icon: iconGemini, title: 'Smarter AI Guidance', body: 'Unlike static calculators, CalPal uses Gemini-powered insights to help personalize your nutrition decisions.' },
    { icon: iconDashboard, title: 'Fast, Minimal Workflow', body: 'Many apps feel cluttered with too many tabs. CalPal stays focused so logging stays quick and clean.' },
    { icon: iconOffline, title: 'Works Beyond Perfect Internet', body: 'Where some tools rely heavily on constant connectivity, CalPal supports practical use when network quality drops.' },
    { icon: iconGoals, title: 'Flexible Goal System', body: 'Instead of one rigid plan, CalPal supports calorie and macro targets that adapt to different fitness styles.' },
    { icon: iconPrivacy, title: 'Low-Noise Experience', body: 'Compared with ad-heavy alternatives, CalPal is built to reduce distractions and keep focus on progress.' },
  ]

  return (
    <main className="page-wrap">
      <div className="site-shell">
        <section
          ref={heroRef}
          className={`hero ${heroScrollProgress > 0.42 ? 'hero-pill-behind' : ''}`}
          style={{ '--hero-scroll-progress': heroScrollProgress }}
        >
          <div className="hero-gradient" />

          <header className="top-nav">
            <a href="#" className="brand-wrap">
              <img src={logo} alt="CalPal logo" />
              <span>CalPal</span>
            </a>
            <nav>
              <a className="nav-features" href="#features">Features</a>
              <a className="nav-about" href="#about">About</a>
            </nav>
            <button className="nav-cta" type="button">Join Waitlist</button>
          </header>

          <h1>
            Fuel Your Ambition, One <span className="hero-green">Meal at a Time.</span>
          </h1>

          <div className="hero-stage">
            <div className="radial-glow" />
            <div className="floating-pills">
              <div className="glass-pill pill nutrition">Nutrition Companion</div>
              <div className="glass-pill pill logged">Logged: Avocado Toast</div>
              <div className="glass-pill pill scanning">AI Scanning Meal...</div>
              <div className="glass-pill pill gemini">GeminiAI Powered</div>
              <div className="glass-pill pill glow">GlowUp With CalPal</div>
              <div className="glass-pill pill fitness">Fitness Tech</div>
            </div>

            <img className="hero-wave" src={heroWaveCombined} alt="" />
            <img className="hero-phone" src={phoneShot} alt="CalPal app preview" />
          </div>
        </section>

        <section className="mid-showcase" id="about">
          <img className="mid-bg" src={sectionBackground} alt="" />
          <img className="mid-overlay" src={midOverlay} alt="" />
          <img className="mid-phones" src={midPhones} alt="App screenshot collage" />

          <div className="mid-title">
            <div className="mid-what">What is</div>
            <div className="mid-calpal">CalPal ?</div>
            <p>The Simplest Way to Stay on Track.</p>
          </div>

          <div className="mid-copy">
            <div className="logos">
              <img src={logo} alt="" />
              <img src={logo} alt="" />
              <img src={logo} alt="" />
            </div>
            <p>
              CalPal is an AI-powered fitness and nutrition companion.
              <br />
              <br />
              It is built to make healthy living effortless.
              <br />
              <br />
              You can type what you ate in plain language.
            </p>
          </div>
        </section>

        <section className="features" id="features">
          <h2>Features</h2>
          <p>Stop guessing. Start knowing exactly what goes into your body.</p>
          <div className="feature-grid">
            <article className="feature-card glass peek-card peek-left">
              <img src={iconSearch} alt="" />
              <h3>Track Your Calories for Free</h3>
              <p>Log meals quickly and track your calories without paying anything. Simple, fast, and built for daily use.</p>
              <img className="peep-guy peep-left" src="/Guy_Peeping.png" alt="" aria-hidden="true" />
            </article>
            <article className="feature-card glass">
              <img src={iconDashboard} alt="" />
              <h3>AI Health Profile + Weekly Plans</h3>
              <p>Add your height, weight, and other health details to get AI-generated calorie plans updated every week.</p>
            </article>
            <article className="feature-card glass peek-card peek-right">
              <img src={iconPrivacy} alt="" />
              <h3>No API Key Needed (Coming Soon)</h3>
              <p>We’re removing the need for users to add their own API key and moving to a cleaner, more reliable Gemini 2.5 Flash-Lite experience for non-tech users.</p>
              <img className="peep-guy peep-right" src="/Guy_Peeping.png" alt="" aria-hidden="true" />
            </article>
          </div>
        </section>

        <section className="why-calpal">
          <h2>Why CalPal?</h2>
          <p>Built to solve common calorie-tracker pain points: paywalls, clutter, and low-quality personalization.</p>
          <div className="why-grid">
            {whyCards.map((card) => (
              <article className="why-card glass" key={card.title}>
                <img src={card.icon} alt="" />
                <h4>{card.title}</h4>
                <p>{card.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="beta-section">
          <div className="beta-main glass-card">
            <div className="beta-left">
              <div className="beta-chip">Currently in Closed Testing</div>
              <h2>Join CalPal Closed Testing</h2>
              <p>
                Get early access to CalPal and help us improve the app.
                <br />
                Experience the future of fitness tracking before anyone else.
              </p>
              <button className="beta-cta" type="button">Click Here to Join Closed Testing</button>
              <div className="beta-note">Highlight: Please keep the app installed for at least 14 days (Google Play testing policy).</div>
            </div>
            <div className="beta-right">
              <img src={phoneShot} alt="Modern fitness tracking app interface" />
            </div>
          </div>
        </section>

        <section className="req-grid">
          <article className="req-card glass"><h4>Secure</h4><p>Safe and encrypted testing environment.</p></article>
          <article className="req-card glass"><h4>Verified</h4><p>Official Google Play Store validation.</p></article>
          <article className="req-card glass"><h4>14 Days</h4><p>Required active testing duration.</p></article>
        </section>

        <footer className="footer">
          <div className="footer-main">
            <div className="brand-wrap footer-brand">
              <img src={logo} alt="CalPal" />
              <span>CalPal</span>
            </div>

            <p className="footer-motto">We count calories, not your happiness. 🍕</p>

            <div className="footer-links">
              <a href="#features">Features</a>
              <a href="#about">About</a>
              <a href="#">Privacy</a>
              <a href="#">GitHub</a>
            </div>

            <img className="footer-socials" src={footerSocials} alt="Social links" />
          </div>

          <div className="footer-bottom">
            <span>© 2026 CalPal AI. All rights reserved.</span>
            <a href="#">Built with love and late-night snacks.</a>
          </div>
        </footer>
      </div>
    </main>
  )
}

export default App

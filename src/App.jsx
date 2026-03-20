import { useEffect, useRef, useState } from 'react'
import './App.css'
import footerSocials from './assets/footer-socials.svg'
import heroWaveCombined from './assets/hero-wave-combined.svg'
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
    { icon: 'wallet', title: 'Free Core Tracking', body: 'Compared to many calorie apps that lock basics behind paywalls, CalPal keeps core logging accessible.' },
    { icon: 'spark', title: 'Smarter AI Guidance', body: 'Unlike static calculators, CalPal uses Gemini-powered insights to help personalize your nutrition decisions.' },
    { icon: 'bolt', title: 'Fast, Minimal Workflow', body: 'Many apps feel cluttered with too many tabs. CalPal stays focused so logging stays quick and clean.' },
    { icon: 'signal', title: 'Works Beyond Perfect Internet', body: 'Where some tools rely heavily on constant connectivity, CalPal supports practical use when network quality drops.' },
    { icon: 'target', title: 'Flexible Goal System', body: 'Instead of one rigid plan, CalPal supports calorie and macro targets that adapt to different fitness styles.' },
    { icon: 'bellOff', title: 'Low-Noise Experience', body: 'Compared with ad-heavy alternatives, CalPal is built to reduce distractions and keep focus on progress.' },
  ]

  const featureCards = [
    {
      icon: 'search',
      title: 'Track Your Calories for Free',
      body: 'Log meals quickly and track your calories without paying anything. Simple, fast, and built for daily use.',
      peekSide: 'left',
    },
    {
      icon: 'dashboard',
      title: 'AI Health Profile + Weekly Plans',
      body: 'Add your height, weight, and other health details to get AI-generated calorie plans updated every week.',
    },
    {
      icon: 'privacy',
      title: 'No API Key Needed (Coming Soon)',
      body: 'We’re removing the need for users to add their own API key and moving to a cleaner, more reliable Gemini 2.5 Flash-Lite experience for non-tech users.',
      peekSide: 'right',
    },
  ]

  const renderFeatureIcon = (icon) => {
    const common = {
      viewBox: '0 0 24 24',
      fill: 'none',
      stroke: 'currentColor',
      strokeWidth: '1.9',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      'aria-hidden': 'true',
      className: 'feature-icon-svg',
    }

    switch (icon) {
      case 'search':
        return (
          <svg {...common}>
            <circle cx="11" cy="11" r="5.5" />
            <path d="M15.2 15.2L19 19" />
          </svg>
        )
      case 'dashboard':
        return (
          <svg {...common}>
            <rect x="4" y="4" width="6.5" height="6.5" rx="1.3" />
            <rect x="13.5" y="4" width="6.5" height="6.5" rx="1.3" />
            <rect x="4" y="13.5" width="6.5" height="6.5" rx="1.3" />
            <path d="M17 13.5v6.5" />
            <path d="M13.75 16.75h6.5" />
          </svg>
        )
      case 'privacy':
        return (
          <svg {...common}>
            <path d="M12 3l6 2.4v5.3c0 4.2-2.5 7.8-6 9.3-3.5-1.5-6-5.1-6-9.3V5.4z" />
            <rect x="9.2" y="10.5" width="5.6" height="4.8" rx="1.2" />
            <path d="M10.2 10.5V9.3a1.8 1.8 0 1 1 3.6 0v1.2" />
          </svg>
        )
      default:
        return null
    }
  }

  const renderWhyIcon = (icon) => {
    const common = {
      viewBox: '0 0 24 24',
      fill: 'none',
      stroke: 'currentColor',
      strokeWidth: '1.9',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      'aria-hidden': 'true',
      className: 'why-icon-svg',
    }

    switch (icon) {
      case 'wallet':
        return (
          <svg {...common}>
            <path d="M3 7.5A2.5 2.5 0 0 1 5.5 5h11A2.5 2.5 0 0 1 19 7.5v9A2.5 2.5 0 0 1 16.5 19h-11A2.5 2.5 0 0 1 3 16.5z" />
            <path d="M16 12h5v3h-5a1.5 1.5 0 0 1 0-3z" />
          </svg>
        )
      case 'spark':
        return (
          <svg {...common}>
            <path d="M12 3l1.6 3.9L17.5 8.5l-3.9 1.6L12 14l-1.6-3.9L6.5 8.5l3.9-1.6z" />
            <path d="M18.5 14.5l.8 2 .2.8.8.2 2 .8-2 .8-.8.2-.2.8-.8 2-.8-2-.2-.8-.8-.2-2-.8 2-.8.8-.2.2-.8z" />
          </svg>
        )
      case 'bolt':
        return (
          <svg {...common}>
            <path d="M13 2L5 13h5l-1 9 8-11h-5z" />
          </svg>
        )
      case 'signal':
        return (
          <svg {...common}>
            <path d="M4 18a8 8 0 0 1 8-8" />
            <path d="M4 13a13 13 0 0 1 13-13" />
            <path d="M9 18a3 3 0 0 1 3-3" />
            <circle cx="17.5" cy="18" r="1.5" />
          </svg>
        )
      case 'target':
        return (
          <svg {...common}>
            <circle cx="12" cy="12" r="8" />
            <circle cx="12" cy="12" r="4" />
            <circle cx="12" cy="12" r="1.3" fill="currentColor" stroke="none" />
          </svg>
        )
      case 'bellOff':
        return (
          <svg {...common}>
            <path d="M14.5 18a2.5 2.5 0 0 1-5 0" />
            <path d="M18 13.5V11a6 6 0 0 0-8.9-5.3" />
            <path d="M6 6.2A6 6 0 0 0 6 11v2.5L4 16h16" />
            <path d="M3 3l18 18" />
          </svg>
        )
      default:
        return null
    }
  }

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
              <a className="nav-why" href="#why-calpal">Why CalPal?</a>
            </nav>
            <a
              className="nav-cta"
              href="https://groups.google.com/g/calpal-testers"
              target="_blank"
              rel="noreferrer"
            >
              Join Waitlist
            </a>
          </header>

          <h1>
            Fuel Your Ambition, One <span className="hero-green">Meal at a Time.</span>
          </h1>

          <div className="hero-creator-card">
            <span className="creator-caption">Built by</span>
            <span className="creator-name">Shalin Shah</span>
            <div className="hero-creator-tags">
              <a
                className="creator-tag creator-link"
                href="https://github.com/Shalin-Shah-2002"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
              <a
                className="creator-tag creator-link"
                href="https://www.linkedin.com/in/shalin-shah0705/"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
            </div>
          </div>

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
            {featureCards.map((card) => (
              <article
                key={card.title}
                className={`feature-card glass ${card.peekSide ? `peek-card peek-${card.peekSide}` : ''}`.trim()}
              >
                <span className="feature-icon" aria-hidden="true">{renderFeatureIcon(card.icon)}</span>
                <h3>{card.title}</h3>
                <p>{card.body}</p>
                {card.peekSide ? (
                  <img className={`peep-guy peep-${card.peekSide}`} src="/Guy_Peeping.png" alt="" aria-hidden="true" />
                ) : null}
              </article>
            ))}
          </div>
        </section>

        <section className="why-calpal" id="why-calpal">
          <h2>Why CalPal?</h2>
          <p>Built to solve common calorie-tracker pain points: paywalls, clutter, and low-quality personalization.</p>
          <div className="why-grid">
            {whyCards.map((card) => (
              <article className="why-card glass" key={card.title}>
                <span className="why-icon" aria-hidden="true">{renderWhyIcon(card.icon)}</span>
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
              <a className="beta-cta" href="https://groups.google.com/g/calpal-testers" target="_blank" rel="noreferrer">Click Here to Join Closed Testing</a>
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

            <p className="footer-motto">Healthy goals, zero drama, and fewer “what did I eat?” moments.</p>
            <p className="footer-copy">CalPal helps you track smarter with AI support while keeping your daily workflow clean and practical.</p>

            <div className="footer-links">
              <a href="#features">Features</a>
              <a href="#about">About</a>
              <a href="#">Privacy</a>
            </div>

            <div className="footer-creator">
              <span>Built by Shalin Shah</span>
              <div className="footer-creator-links">
                <a href="https://github.com/Shalin-Shah-2002" target="_blank" rel="noreferrer">GitHub</a>
                <a href="https://www.linkedin.com/in/shalin-shah0705/" target="_blank" rel="noreferrer">LinkedIn</a>
              </div>
            </div>

            <img className="footer-socials" src={footerSocials} alt="Social links" />
          </div>

          <div className="footer-bottom">
            <span>© 2026 CalPal AI. All rights reserved.</span>
            <span>Built with focus, consistency, and a little caffeine.</span>
          </div>
        </footer>
      </div>
    </main>
  )
}

export default App

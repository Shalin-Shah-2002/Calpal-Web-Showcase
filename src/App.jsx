import { useEffect, useRef, useState } from 'react'
import './App.css'
import footerSocials from './assets/footer-socials.svg'
import heroVideo from './assets/Cinematic_Running_Man_Phone_App.mp4'
import heroWaveCombined from './assets/hero-wave-combined.svg'
import logo from './assets/logo.png'
import phoneShot from './assets/phone-shot.png'
import screenshotHistory from '../Assets/Screenshot_1775132328.png'
import screenshotHome from '../Assets/Screenshot_1775132330.png'
import screenshotMealSearch from '../Assets/Screenshot_1775132333.png'
import screenshotProfile from '../Assets/Screenshot_1775132336.png'
import screenshotQuickPicks from '../Assets/Screenshot_1775132345.png'

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

  const playStoreUrl = 'https://play.google.com/store/apps/details?id=com.shalinshah.calpal&hl=en_IN'

  const darkModeScreens = [
    {
      src: screenshotHome,
      title: 'Daily Home Dashboard',
      detail: 'A focused overview for calories, macros, and meal progress in one glance.',
      alt: 'CalPal home dashboard showing calorie goal ring and macro summary in dark mode',
    },
    {
      src: screenshotMealSearch,
      title: 'AI Meal Search',
      detail: 'Instant meal lookup with Gemini-assisted input and quick search actions.',
      alt: 'CalPal add meal panel with AI search field and portion input in dark mode',
    },
    {
      src: screenshotHistory,
      title: 'History And Streaks',
      detail: 'Calendar streak tracking that makes consistency visible and motivating.',
      alt: 'CalPal history screen with streak heatmap and weekly log strip in dark mode',
    },
    {
      src: screenshotProfile,
      title: 'Profile And Goals',
      detail: 'Health goals, account setup, and quick settings organized in clean cards.',
      alt: 'CalPal profile page with health goals and quick actions in dark mode',
    },
    {
      src: screenshotQuickPicks,
      title: 'Quick Picks Flow',
      detail: 'Reusable quick picks accelerate meal logging when you are in a rush.',
      alt: 'CalPal add meal modal with quick picks chips and search action in dark mode',
    },
  ]

  const trustStats = [
    {
      value: '8 sec',
      label: 'Average meal log time',
    },
    {
      value: '5 / day',
      label: 'Free logs available daily',
    },
    {
      value: '24/7',
      label: 'AI-assisted recommendations',
    },
    {
      value: '100%',
      label: 'Dark mode native experience',
    },
  ]

  const journeySteps = [
    {
      title: 'Describe Your Meal',
      body: 'Type a simple phrase like apple and peanut butter. CalPal parses context and quantity prompts instantly.',
    },
    {
      title: 'Confirm Portion Details',
      body: 'Pick serving size, adjust quickly, and save. The flow stays focused on one decision at a time.',
    },
    {
      title: 'Track Progress Daily',
      body: 'Watch calories, macros, streaks, and goal pacing update in real time across home and history.',
    },
  ]

  const featureCards = [
    {
      title: 'AI Meal Understanding',
      body: 'Gemini-assisted parsing helps interpret natural meal text without forcing rigid form fields.',
      tag: 'Intelligence',
    },
    {
      title: 'Macro And Calorie Ring',
      body: 'One central visual ring keeps daily intake status obvious without navigating through multiple tabs.',
      tag: 'Clarity',
    },
    {
      title: 'Streak Heatmap',
      body: 'Consistency is visible through a timeline heatmap that rewards repeated behavior, not perfection.',
      tag: 'Retention',
    },
    {
      title: 'Quick Picks',
      body: 'Common foods become one-tap chips so repeat logging stays fast even on busy days.',
      tag: 'Speed',
    },
    {
      title: 'Profile Driven Guidance',
      body: 'Goals and health profile inputs shape suggestions so recommendations stay relevant to each user.',
      tag: 'Personalization',
    },
    {
      title: 'Privacy-First Foundation',
      body: 'Core workflows are built with secure handling and clear policy links from key touchpoints.',
      tag: 'Trust',
    },
  ]

  const stickReasons = [
    {
      title: 'Built For Daily Use',
      body: 'The interface favors low-friction actions so users can keep logging even on chaotic days.',
    },
    {
      title: 'High Contrast By Design',
      body: 'The dark palette is not an afterthought. Typography and surfaces stay readable in low light.',
    },
    {
      title: 'Actionable, Not Overloaded',
      body: 'CalPal shows what matters now, goals, progress, and next action, instead of data clutter.',
    },
    {
      title: 'Optimized For Mobile Rhythm',
      body: 'Touch sizes, spacing, and section density are tuned for one-handed mobile use.',
    },
  ]

  const faqItems = [
    {
      question: 'Is CalPal free?',
      answer: 'Yes. Core calorie and meal logging are free to use every day.',
    },
    {
      question: 'Is it beginner friendly?',
      answer: 'Yes. You can log with plain language and receive guided prompts for portions.',
    },
    {
      question: 'How does AI help me?',
      answer: 'AI assists meal parsing, profile recommendations, and weekly guidance adjustments.',
    },
    {
      question: 'Where can I review privacy details?',
      answer: 'You can open the Privacy Policy page linked in the navigation and footer.',
    },
    {
      question: 'Is CalPal available on Android now?',
      answer: 'Yes. The app is live on Google Play through the official listing.',
    },
  ]

  return (
    <main className="page-wrap">
      <div className="site-shell">
        <section
          ref={heroRef}
          className={`hero ${heroScrollProgress > 0.42 ? 'hero-pill-behind' : ''}`}
          style={{ '--hero-scroll-progress': heroScrollProgress }}
        >
          <div className="hero-video-wrap" aria-hidden="true">
            <video
              className="hero-video"
              src={heroVideo}
              autoPlay
              loop
              muted
              playsInline
              preload="metadata"
            />
            <div className="hero-video-overlay" />
          </div>

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
              <a className="nav-privacy" href="/privacy-policy.html">Privacy Policy</a>
            </nav>
            <a
              className="nav-cta"
              href={playStoreUrl}
              target="_blank"
              rel="noreferrer"
            >
              Download
            </a>
          </header>

          <h1>
            Fuel Your Ambition, One <span className="hero-green">Meal at a Time.</span>
          </h1>

          <a href="#" className="hero-mobile-corner-brand">
            <img src={logo} alt="CalPal" />
            <span>CalPal</span>
          </a>

          <div className="hero-mobile-highlights">
            <span>AI-Powered</span>
            <span>Free Core Tracking</span>
            <span>Simple Daily Flow</span>
          </div>

          <p className="hero-mobile-copy">
            CalPal helps you track meals faster, stay consistent, and make better nutrition decisions—because chaos is fun, just not in your calorie log.
          </p>
          <a
            className="hero-mobile-cta"
            href={playStoreUrl}
            target="_blank"
            rel="noreferrer"
          >
            Download
          </a>

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

        <section className="app-signal-band" aria-label="CalPal launch highlight">
          <div className="app-signal-copy">
            <p className="app-kicker">Now live on Google Play</p>
            <h2>Built for people who want faster nutrition tracking with less friction.</h2>
            <p>
              CalPal combines AI meal understanding, clear daily goals, and a strong dark-mode UI so tracking feels lightweight and sustainable.
            </p>
            <div className="app-cta-row">
              <a className="app-primary-btn" href={playStoreUrl} target="_blank" rel="noreferrer">Download</a>
            </div>
          </div>

          <div className="app-stat-grid" role="list" aria-label="CalPal product highlights">
            {trustStats.map((item) => (
              <article key={item.label} className="app-stat-card" role="listitem">
                <p className="app-stat-value">{item.value}</p>
                <p className="app-stat-label">{item.label}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="app-about-shell" id="about">
          <div className="app-about-copy">
            <p className="app-kicker">About CalPal</p>
            <h2>Nutrition tracking that feels like a guided flow, not a spreadsheet.</h2>
            <p>
              Designed for daily consistency, CalPal helps users log quickly, see progress clearly, and adjust behavior with practical AI suggestions.
            </p>
            <ul className="app-benefit-list" aria-label="CalPal key strengths">
              <li><span aria-hidden="true" />Natural language meal capture</li>
              <li><span aria-hidden="true" />Fast repeat logging with quick picks</li>
              <li><span aria-hidden="true" />Goal-focused dashboard and streak timeline</li>
            </ul>
          </div>

          <article className="app-device-card app-device-card-feature">
            <div className="app-device-frame">
              <span className="app-device-camera" aria-hidden="true" />
              <span className="app-device-side app-device-side-top" aria-hidden="true" />
              <span className="app-device-side app-device-side-bottom" aria-hidden="true" />
              <div className="app-device-screen-wrap">
                <img
                  src={screenshotHome}
                  alt="CalPal home screen with calorie ring and macro summary"
                  loading="lazy"
                  width="1080"
                  height="2424"
                />
              </div>
              <span className="app-device-gesture" aria-hidden="true" />
            </div>
            <div className="app-device-meta">
              <h3>Daily dashboard focus</h3>
              <p>One screen for daily calories, macros, and logging status so decisions are immediate.</p>
            </div>
          </article>
        </section>

        <section className="app-flow-shell" id="how-it-works">
          <header className="app-section-head app-section-head-center">
            <p className="app-kicker">How it works</p>
            <h2>From meal thought to logged result in three lightweight steps.</h2>
          </header>

          <div className="app-flow-grid">
            {journeySteps.map((step, index) => (
              <article key={step.title} className="app-flow-card">
                <span className="app-flow-index" aria-hidden="true">0{index + 1}</span>
                <h3>{step.title}</h3>
                <p>{step.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="app-feature-shell" id="features">
          <header className="app-section-head">
            <p className="app-kicker">Feature system</p>
            <h2>Purpose-built modules that support speed, clarity, and long-term consistency.</h2>
          </header>

          <div className="app-feature-grid">
            {featureCards.map((feature) => (
              <article key={feature.title} className="app-feature-card">
                <span className="app-feature-tag">{feature.tag}</span>
                <h3>{feature.title}</h3>
                <p>{feature.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="app-screens-shell" id="screens">
          <header className="app-section-head app-section-head-center">
            <p className="app-kicker">Dark mode screenshots</p>
            <h2>Real app screens, framed to show the full mobile product experience.</h2>
          </header>

          <div className="app-screens-track" role="list" aria-label="CalPal screenshot gallery">
            {darkModeScreens.map((screen, index) => (
              <article key={`${screen.title}-${index}`} className="app-screen-card" role="listitem">
                <div className="app-device-frame">
                  <span className="app-device-camera" aria-hidden="true" />
                  <span className="app-device-side app-device-side-top" aria-hidden="true" />
                  <span className="app-device-side app-device-side-bottom" aria-hidden="true" />
                  <div className="app-device-screen-wrap">
                    <img src={screen.src} alt={screen.alt} loading="lazy" width="1080" height="2424" />
                  </div>
                  <span className="app-device-gesture" aria-hidden="true" />
                </div>

                <div className="app-screen-meta">
                  <h3>{screen.title}</h3>
                  <p>{screen.detail}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="app-why-shell" id="why-calpal">
          <header className="app-section-head">
            <p className="app-kicker">Why CalPal</p>
            <h2>People stick with CalPal because the product reduces friction at every step.</h2>
          </header>

          <div className="app-why-grid">
            {stickReasons.map((reason) => (
              <article key={reason.title} className="app-why-card">
                <h3>{reason.title}</h3>
                <p>{reason.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="app-faq-shell" id="faq">
          <header className="app-section-head app-section-head-center">
            <p className="app-kicker">FAQ</p>
            <h2>Answers to common questions before you download.</h2>
          </header>

          <div className="app-faq-grid">
            {faqItems.map((item) => (
              <article key={item.question} className="app-faq-card">
                <h3>{item.question}</h3>
                <p>{item.answer}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="app-final-cta">
          <div className="app-final-cta-card">
            <h2>Ready to track smarter without burning out?</h2>
            <p>Download CalPal and turn nutrition consistency into a daily habit you can actually maintain.</p>
            <div className="app-cta-row app-cta-row-center">
              <a className="app-primary-btn" href={playStoreUrl} target="_blank" rel="noreferrer">Download</a>
              <a className="app-ghost-btn" href="/privacy-policy.html">Read Privacy Policy</a>
            </div>
          </div>
        </section>

        <footer className="app-footer">
          <div className="app-footer-main">
            <div className="brand-wrap app-footer-brand">
              <img src={logo} alt="CalPal" />
              <span>CalPal</span>
            </div>

            <p className="app-footer-copy">
              CalPal is built for real-world nutrition tracking, AI-assisted guidance, and a cleaner daily routine.
            </p>

            <div className="app-footer-links">
              <a href="#about">About</a>
              <a href="#features">Features</a>
              <a href="#screens">Screens</a>
              <a href="#faq">FAQ</a>
              <a href={playStoreUrl} target="_blank" rel="noreferrer">Google Play</a>
              <a href="/privacy-policy.html">Privacy Policy</a>
            </div>

            <div className="app-footer-meta">
              <span>Built by Shalin Shah</span>
              <div className="app-footer-meta-links">
                <a href="https://github.com/Shalin-Shah-2002" target="_blank" rel="noreferrer">GitHub</a>
                <a href="https://www.linkedin.com/in/shalin-shah0705/" target="_blank" rel="noreferrer">LinkedIn</a>
              </div>
            </div>

            <img className="app-footer-socials" src={footerSocials} alt="" aria-hidden="true" />
          </div>

          <div className="app-footer-bottom">
            <span>© 2026 CalPal AI. All rights reserved.</span>
            <span>Crafted for consistency, speed, and clarity.</span>
          </div>
        </footer>
      </div>
    </main>
  )
}

export default App

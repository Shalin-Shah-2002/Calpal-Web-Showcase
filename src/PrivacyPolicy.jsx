import './PrivacyPolicy.css'
import logo from './assets/logo.png'

const sections = [
  {
    id: 'information-we-collect',
    number: '1',
    title: 'Information We Collect',
    points: [
      'Account and profile information you provide, such as your display name, age range, height, weight, and fitness preferences.',
      'Meal logs, nutrition goals, progress inputs, and activity data that you enter in the app.',
      'Device and technical details (for example, app version, operating system, and crash diagnostics) used to keep the app reliable.',
      'Support and feedback information when you contact us or participate in testing programs.',
    ],
  },
  {
    id: 'how-we-use-your-data',
    number: '2',
    title: 'How We Use Your Data',
    points: [
      'To provide core calorie tracking and personalized health insights.',
      'To generate AI-assisted nutrition recommendations and weekly planning guidance.',
      'To improve app quality, detect abuse, prevent fraud, and troubleshoot technical issues.',
      'To communicate important updates related to your account, testing, or policy changes.',
    ],
  },
  {
    id: 'google-play-and-google-policy-alignment',
    number: '3',
    title: 'Google Play And Google Policy Alignment',
    points: [
      'CalPal is designed to follow Google Play Developer Program Policies and applicable Google Play User Data requirements.',
      'Data collection, use, and sharing disclosures in this page are intended to support accurate Data safety declarations in Google Play Console.',
      'If Google services or APIs are used in the app, data handling follows the terms, limits, and user data requirements tied to those services.',
      'We only request permissions that are reasonably necessary for app functionality and user experience.',
    ],
  },
  {
    id: 'data-sharing-and-third-parties',
    number: '4',
    title: 'Data Sharing And Third Parties',
    points: [
      'We do not sell your personal data.',
      'Limited data may be shared with service providers that support hosting, analytics, crash monitoring, or AI processing under contractual safeguards.',
      'We may disclose information when required by law, regulation, legal process, or to protect users and platform integrity.',
    ],
  },
  {
    id: 'data-security-and-retention',
    number: '5',
    title: 'Data Security And Retention',
    points: [
      'We use reasonable administrative, technical, and organizational security controls to protect stored and transmitted data.',
      'Data is retained only as long as needed for product operation, compliance, dispute resolution, and legitimate business purposes.',
      'When data is no longer needed, we take reasonable steps to delete or de-identify it.',
    ],
  },
  {
    id: 'your-choices-and-rights',
    number: '6',
    title: 'Your Choices And Rights',
    points: [
      'You can review and edit key profile information directly inside the app experience.',
      'You can request account-related privacy support, including access or deletion requests, by contacting us.',
      'Depending on your location, local privacy laws may provide additional rights regarding your personal data.',
    ],
  },
  {
    id: 'childrens-privacy',
    number: '7',
    title: 'Children\'s Privacy',
    points: [
      'CalPal is not intended for children under the minimum age required by applicable law without parental or guardian involvement.',
      'If we learn that data was provided by a child in a way that does not meet legal requirements, we will take reasonable steps to remove it.',
    ],
  },
  {
    id: 'changes-to-this-policy',
    number: '8',
    title: 'Changes To This Policy',
    points: [
      'We may update this Privacy Policy from time to time to reflect product, legal, or operational changes.',
      'When required, we will provide additional notice in-app or through official communication channels.',
    ],
  },
]

function PrivacyPolicy() {
  const lastUpdated = '27 March 2026'
  const trustSignals = ['Google Play ready disclosure', 'User data transparency', 'Account control and support']

  return (
    <main className="privacy-page-wrap">
      <div className="privacy-atmosphere" aria-hidden="true" />
      <div className="privacy-shell">
        <header className="top-nav privacy-top-nav">
          <a href="/" className="brand-wrap">
            <img src={logo} alt="CalPal" />
            <span>CalPal</span>
          </a>

          <nav>
            <a className="nav-features" href="/#features">Features</a>
            <a className="nav-about" href="/#about">About</a>
            <a className="nav-why" href="/#why-calpal">Why CalPal?</a>
            <a className="nav-privacy" href="/privacy-policy" aria-current="page">Privacy Policy</a>
          </nav>
        </header>

        <section className="privacy-hero">
          <p className="privacy-kicker">Privacy Policy</p>
          <h1>CalPal Privacy Policy</h1>
          <p className="privacy-lead">
            This policy explains how CalPal collects, uses, protects, and discloses data when you use our app and website.
            It is written to support transparency expectations for users and app distribution platforms including Google Play.
          </p>
          <p className="privacy-updated">Last updated: {lastUpdated}</p>

          <div className="privacy-trust-grid" aria-label="Privacy policy highlights">
            {trustSignals.map((item) => (
              <p key={item}>{item}</p>
            ))}
          </div>
        </section>

        <div className="privacy-layout">
          <aside className="privacy-toc" aria-label="Policy quick navigation">
            <p>On this page</p>
            <nav>
              {sections.map((section) => (
                <a key={section.id} href={`#${section.id}`}>
                  <span>{section.number}</span>
                  {section.title}
                </a>
              ))}
            </nav>
          </aside>

          <section className="privacy-content" aria-label="Privacy policy sections">
            {sections.map((section) => (
              <article className="privacy-card" id={section.id} key={section.id}>
                <h2>
                  <span className="privacy-card-index">{section.number}</span>
                  {section.title}
                </h2>
                <ul>
                  {section.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </article>
            ))}
          </section>
        </div>

        <section className="privacy-contact-card">
          <h2>
            <span className="privacy-card-index">9</span>
            Contact Us
          </h2>
          <p>
            For privacy requests, policy questions, or account-related concerns, contact the CalPal team at
            {' '}
            <a href="mailto:privacy@calpal.app">privacy@calpal.app</a>
            .
          </p>
          <p>
            If your published support email differs from this address, replace it with your official developer contact before release.
          </p>
        </section>
      </div>
    </main>
  )
}

export default PrivacyPolicy

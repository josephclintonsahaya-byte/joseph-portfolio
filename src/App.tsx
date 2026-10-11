import { useEffect, useState, type FormEvent } from 'react'
import { portfolio } from './data/portfolio'

const navigation = [
  { label: 'About', id: 'about' },
  { label: 'Skills', id: 'skills' },
  { label: 'Experience', id: 'experience' },
  { label: 'Contact', id: 'contact' },
]

function App() {
  const [activeSection, setActiveSection] = useState('about')
  const [menuOpen, setMenuOpen] = useState(false)
  const [formMessage, setFormMessage] = useState('')

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
            entry.target.classList.add('is-visible')
          }
        })
      },
      {
        rootMargin: '-28% 0px -58% 0px',
        threshold: 0,
      },
    )

    document
      .querySelectorAll<HTMLElement>('.observed-section')
      .forEach((section) => observer.observe(section))

    return () => observer.disconnect()
  }, [])

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    setFormMessage(
      'Your details are valid. This form is not connected to email yet, so your message has not been sent.',
    )

    event.currentTarget.reset()
  }

  return (
    <div className="site-shell">
      <Navbar
        activeSection={activeSection}
        menuOpen={menuOpen}
        onMenuToggle={() => setMenuOpen((open) => !open)}
        onNavigate={() => setMenuOpen(false)}
      />

      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Services />
        <Contact
          onSubmit={handleSubmit}
          formMessage={formMessage}
        />
      </main>

      <Footer />
    </div>
  )
}

function Navbar({
  activeSection,
  menuOpen,
  onMenuToggle,
  onNavigate,
}: {
  activeSection: string
  menuOpen: boolean
  onMenuToggle: () => void
  onNavigate: () => void
}) {
  return (
    <header className="navbar">
      <nav className="nav-inner" aria-label="Main navigation">
        <a
          className="wordmark"
          href="#home"
          onClick={onNavigate}
          aria-label={`${portfolio.name}, back to top`}
        >
          {portfolio.name}
          <span>.</span>
        </a>

        <div
          className={`nav-links${menuOpen ? ' is-open' : ''}`}
          id="primary-navigation"
        >
          {navigation.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={activeSection === item.id ? 'active' : ''}
              aria-current={
                activeSection === item.id ? 'location' : undefined
              }
              onClick={onNavigate}
            >
              {item.label}
            </a>
          ))}

          <a
            className="nav-resume nav-mobile-resume"
            href={portfolio.resumeUrl}
            target="_blank"
            rel="noreferrer"
            onClick={onNavigate}
          >
            Resume
            <span aria-hidden="true">↗</span>
          </a>

          <a
            className="nav-mobile-cta"
            href="#contact"
            onClick={onNavigate}
          >
            Let's Talk
            <span aria-hidden="true">↗</span>
          </a>
        </div>

        <div className="nav-actions">
          <a
            className="nav-resume"
            href={portfolio.resumeUrl}
            target="_blank"
            rel="noreferrer"
          >
            Resume
            <span aria-hidden="true">↗</span>
          </a>

          <a className="nav-cta" href="#contact">
            Let's Talk
            <span aria-hidden="true">↗</span>
          </a>
        </div>

        <button
          className={`menu-toggle${menuOpen ? ' is-open' : ''}`}
          type="button"
          aria-label={
            menuOpen
              ? 'Close navigation menu'
              : 'Open navigation menu'
          }
          aria-controls="primary-navigation"
          aria-expanded={menuOpen}
          onClick={onMenuToggle}
        >
          <span />
          <span />
        </button>
      </nav>
    </header>
  )
}

function Hero() {
  return (
    <section
      className="hero section-wrap"
      id="home"
      aria-labelledby="hero-title"
    >
      <div className="hero-glow" aria-hidden="true" />

      <div className="hero-grid">
        <div className="hero-copy">
          <div className="availability">
            <span className="availability-dot" />
            Available for opportunities
          </div>

          <p className="eyebrow">
            {portfolio.professionalTitle}
          </p>

          <h1 id="hero-title">
            Building
            <br />
            <span>digital experiences</span>
            <br />
            that matter.
          </h1>

          <p className="hero-description">
            {portfolio.heroSummary}
          </p>

          <div className="hero-actions">
            <a
              className="button button-primary"
              href={portfolio.resumeUrl}
              target="_blank"
              rel="noreferrer"
            >
              View Resume
              <span aria-hidden="true">↗</span>
            </a>

            <a
              className="button button-secondary"
              href="#contact"
            >
              Contact Me
            </a>
          </div>

          <div className="social-links" aria-label="Social links">
            <a
              href={portfolio.socialLinks.github}
              target="_blank"
              rel="noreferrer"
            >
              GitHub
              <span aria-hidden="true">↗</span>
            </a>

            <a
              href={portfolio.socialLinks.linkedin}
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
              <span aria-hidden="true">↗</span>
            </a>

            <a href={`mailto:${portfolio.contact.email}`}>
              Email
              <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>

        <div
          className="hero-art"
          aria-label="Abstract developer monogram illustration"
        >
          <div className="hero-orbit orbit-outer" />
          <div className="hero-orbit orbit-middle" />
          <div className="hero-orbit orbit-inner" />

          <div className="hero-monogram">
            <div>
              <span className="monogram-letter">
                J<span>.</span>
              </span>

              <span className="monogram-caption">
                Developer
              </span>
            </div>
          </div>

          <div className="float-label stack-label">
            <span>Stack</span>
            <strong>{portfolio.primaryStack}</strong>
          </div>

          <div className="float-label focus-label">
            <span>Focus</span>
            <strong>Thoughtful details</strong>
          </div>

          <span className="art-index">01 / 05</span>
        </div>
      </div>

      <a className="scroll-cue" href="#about">
        <span className="scroll-line" />
        Scroll to explore
      </a>
    </section>
  )
}

function SectionHeading({
  index,
  title,
  muted,
}: {
  index: string
  title: string
  muted?: string
}) {
  return (
    <div className="section-heading">
      <span className="section-index">{index}</span>

      <h2>
        {title}
        {muted && <span> {muted}</span>}
      </h2>
    </div>
  )
}

function About() {
  return (
    <section
      className="content-section section-wrap observed-section"
      id="about"
    >
      <SectionHeading
        index="01"
        title="A little"
        muted="about me."
      />

      <div className="about-grid">
        <p className="about-lead">
          {portfolio.aboutSummary}
        </p>

        <div className="about-body">
          <a className="text-link" href="#contact">
            More about working together
            <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>
    </section>
  )
}

function Skills() {
  return (
    <section
      className="content-section section-wrap observed-section"
      id="skills"
    >
      <SectionHeading
        index="02"
        title="Tools for"
        muted="the work."
      />

      <div className="skills-intro">
        <p>
          A working set of technologies and tools I use to
          build modern full-stack applications.
        </p>

        <span>TECHNOLOGY INVENTORY</span>
      </div>

      <div className="skill-groups">
        {portfolio.skills.map((group) => (
          <div className="skill-group" key={group.title}>
            <h3>{group.title}</h3>

            <ul>
              {group.items.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}

function Experience() {
  return (
    <section
      className="content-section section-wrap observed-section"
      id="experience"
    >
      <SectionHeading
        index="03"
        title="Experience"
      />

      <p className="experience-intro">
        Full stack development internships and practical
        application development experience.
      </p>

      <div className="timeline">
        {portfolio.experience.map((entry) => (
          <article
            className="timeline-entry"
            key={`${entry.organization}-${entry.title}`}
          >
            <span className="timeline-marker" />

            <div className="timeline-meta">
              <span>EXPERIENCE</span>

              <span>
                {[
                  entry.duration,
                  entry.type,
                  entry.stipend,
                ]
                  .filter(Boolean)
                  .join(' · ')}
              </span>
            </div>

            <div className="timeline-main">
              <h3>{entry.title}</h3>

              <p>
                {entry.organization} · {entry.description}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

function Services() {
  const services = [
    'Web Application Development',
    'Frontend Development',
    'Backend / API Development',
    'Full Stack Development',
  ]

  return (
    <section
      className="services-band observed-section"
      id="services"
    >
      <div className="section-wrap services-inner">
        <div className="services-heading">
          <span className="section-index">04</span>

          <h2>
            What I <span>can build.</span>
          </h2>
        </div>

        <div className="service-list">
          {services.map((service, index) => (
            <div
              className="service-row"
              key={service}
            >
              <span>0{index + 1}</span>

              <h3>{service}</h3>

              <span aria-hidden="true">↗</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Contact({
  onSubmit,
  formMessage,
}: {
  onSubmit: (
    event: FormEvent<HTMLFormElement>,
  ) => void
  formMessage: string
}) {
  return (
    <section
      className="content-section section-wrap observed-section contact-section"
      id="contact"
    >
      <SectionHeading
        index="05"
        title="Let's build"
        muted="something meaningful."
      />

      <div className="contact-grid">
        <div className="contact-copy">
          <p>
            Have an opportunity or want to talk through an
            idea? Send a note and let’s start a conversation.
          </p>

          <a
            className="contact-email"
            href={`mailto:${portfolio.contact.email}`}
          >
            {portfolio.contact.email}
            <span aria-hidden="true">↗</span>
          </a>

          <a
            className="contact-email"
            href={`tel:${portfolio.contact.phone}`}
          >
            {portfolio.contact.phone}
            <span aria-hidden="true">↗</span>
          </a>

          <div className="contact-socials">
            <a
              href={portfolio.socialLinks.linkedin}
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn ↗
            </a>

            <a
              href={portfolio.socialLinks.github}
              target="_blank"
              rel="noreferrer"
            >
              GitHub ↗
            </a>
          </div>
        </div>

        <form
          className="contact-form"
          onSubmit={onSubmit}
        >
          <label htmlFor="name">Name</label>

          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            placeholder="Your name"
            required
          />

          <label htmlFor="email">Email</label>

          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder="you@example.com"
            required
          />

          <label htmlFor="message">Message</label>

          <textarea
            id="message"
            name="message"
            rows={4}
            placeholder="Tell me a little about what you're thinking..."
            required
          />

          <button
            className="button button-primary form-submit"
            type="submit"
          >
            Send Message
            <span aria-hidden="true">↗</span>
          </button>

          <p
            className="form-status"
            aria-live="polite"
          >
            {formMessage ||
              'Frontend form only; messages are not sent yet.'}
          </p>
        </form>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner section-wrap">
        <a className="wordmark" href="#home">
          {portfolio.name}
          <span>.</span>
        </a>

        <nav aria-label="Footer navigation">
          {navigation.map((item) => (
            <a
              href={`#${item.id}`}
              key={item.id}
            >
              {item.label}
            </a>
          ))}

          <a
            href={portfolio.resumeUrl}
            target="_blank"
            rel="noreferrer"
          >
            Resume ↗
          </a>
        </nav>

        <div className="footer-socials">
          <a
            href={portfolio.socialLinks.github}
            target="_blank"
            rel="noreferrer"
          >
            GitHub ↗
          </a>

          <a
            href={portfolio.socialLinks.linkedin}
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn ↗
          </a>

          <a
            href={`mailto:${portfolio.contact.email}`}
          >
            Email ↗
          </a>
        </div>

        <p>
          © {new Date().getFullYear()} {portfolio.name}.
          All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default App
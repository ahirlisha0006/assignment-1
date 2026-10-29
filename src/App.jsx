
import { useState } from "react";
import "./App.css";

const skills = ["HTML", "CSS", "JavaScript", "React", "Bootstrap", "Git"];

const projects = [
  {
    title: "Hostel Management System",
    description: "A web application to manage hostel students, rooms and fees.",
    tech: "PHP • MySQL • CSS",
  },
  {
    title: "Developer Portfolio",
    description: "A responsive portfolio website showcasing my skills and projects.",
    tech: "React • JavaScript • CSS",
  },
];

function Header({ darkMode, setDarkMode }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const links = ["Home", "About", "Skills", "Projects", "Contact"];

  return (
    <header className="header">
      <a className="logo" href="#home">Port<span>folio.</span></a>

      <button className="menu-btn" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? "✕" : "☰"}
      </button>

      <nav className={menuOpen ? "nav open" : "nav"}>
        {links.map((link) => (
          <a key={link} href={`#${link.toLowerCase()}`}
            onClick={() => setMenuOpen(false)}>
            {link}
          </a>
        ))}
        <button className="theme-btn" onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? "☀️" : "🌙"}
        </button>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-text">
        <p className="eyebrow">HELLO, WELCOME TO MY PORTFOLIO</p>
        <h1>Hi, I'm <span>Lisha</span></h1>
        <h2>ReactJS Developer</h2>
        <p>I love creating beautiful, responsive and user-friendly websites.</p>
        <div className="hero-buttons">
          <a className="btn" href="#projects">View My Work</a>
          <a className="btn outline" href="#contact">Contact Me</a>
        </div>
      </div>
      <div className="hero-art" aria-label="Developer illustration">👩🏻‍💻</div>
    </section>
  );
}

function SectionTitle({ title, subtitle }) {
  return (
    <div className="section-title">
      <p>{subtitle}</p>
      <h2>{title}</h2>
    </div>
  );
}

function About() {
  return (
    <section id="about" className="section">
      <SectionTitle title="About Me" subtitle="GET TO KNOW ME" />
      <div className="about-card">
        <div className="about-icon">✨</div>
        <div>
          <h3>Aspiring Web Developer</h3>
          <p>
            I am a passionate learner interested in web development.
            I enjoy learning new technologies and turning ideas into
            attractive, responsive websites. I am continuously improving
            my programming and problem-solving skills.
          </p>
        </div>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section id="skills" className="section">
      <SectionTitle title="My Skills" subtitle="WHAT I AM LEARNING" />
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div className="skill-card" key={skill}>
            <span>0{index + 1}</span>
            <h3>{skill}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}

function ProjectCard({ project }) {
  return (
    <article className="project-card">
      <div className="project-icon">{"</>"}</div>
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <p className="tech">{project.tech}</p>
      <a href="#contact">Let's discuss →</a>
    </article>
  );
}

function Projects() {
  return (
    <section id="projects" className="section">
      <SectionTitle title="Featured Projects" subtitle="SOME OF MY RECENT WORK" />
      <div className="projects-grid">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
}

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [feedback, setFeedback] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((previous) => ({ ...previous, [name]: value }));
    setFeedback("");
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setFeedback("Please fill in your name, email and message.");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      setFeedback("Please enter a valid email address.");
      return;
    }

    setFeedback("Your form is valid! Thank you for contacting me.");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="section">
      <SectionTitle title="Let's Connect" subtitle="GET IN TOUCH" />
      <form className="contact-form" onSubmit={handleSubmit} noValidate>
        <label htmlFor="name">Your Name</label>
        <input id="name" name="name" value={form.name}
          onChange={handleChange} placeholder="Enter your name" />

        <label htmlFor="email">Email Address</label>
        <input id="email" name="email" type="email" value={form.email}
          onChange={handleChange} placeholder="Enter your email" />

        <label htmlFor="message">Your Message</label>
        <textarea id="message" name="message" rows="5"
          value={form.message} onChange={handleChange}
          placeholder="Write your message here..." />

        {feedback && <p className="feedback" role="status">{feedback}</p>}
        <button className="btn submit-btn" type="submit">Send Message ↗</button>
      </form>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <a className="logo" href="#home">Port<span>folio.</span></a>
      <p>Designed and built with React ❤️</p>
      <a href="#home">Back to top ↑</a>
    </footer>
  );
}

export default function App() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div className={darkMode ? "app dark" : "app light"}>
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}


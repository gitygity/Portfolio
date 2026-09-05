import {
  ArrowDownRight,
  ArrowUpRight,
  CheckCircle2,
  Github,
  GraduationCap,
  Linkedin,
  Mail,
  MapPin,
  Sparkles,
} from "lucide-react";
import {
  education,
  experience,
  profile,
  projects,
  publication,
  strengths,
} from "@/data/portfolio";

const avatarUrl = "https://avatars.githubusercontent.com/u/20185805?v=4";

export default function Home() {
  return (
    <main>
      <header className="siteHeader">
        <a className="brand" href="#top" aria-label="Back to top">
          <img src={avatarUrl} alt="" className="brandAvatar" />
        </a>

        <nav className="nav" aria-label="Primary navigation">
          <a href="#about">About</a>
          <a href="#experience">Experience</a>
          <a href="#work">Work</a>
          <a href="#education">Education</a>
          <a href="#contact">Contact</a>
        </nav>

        <a
          className="miniCta"
          href={profile.linkedin}
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn <ArrowUpRight size={15} aria-hidden="true" />
        </a>
      </header>

      <section className="hero sectionShell" id="top">
        <div className="heroCopy">
          <p className="eyebrow">
            <span className="statusDot" />
            Frontend Engineer · Europe remote & relocation
          </p>

          <h1>
            Building frontend systems that stay
            <span className="accentText"> reliable as products grow.</span>
          </h1>

          <p className="heroLead">
            I&apos;m {profile.name}, a Frontend Engineer with 7+ years of
            production experience across fintech and B2B products. I specialize
            in React, TypeScript and modern frontend development, with a strong
            focus on maintainability, product quality and user experience.
          </p>

          <div className="heroActions">
            <a className="primaryButton" href="#work">
              See selected work <ArrowDownRight size={18} aria-hidden="true" />
            </a>
            <a
              className="secondaryButton"
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
            >
              <Linkedin size={17} aria-hidden="true" />
              LinkedIn
            </a>
            <a
              className="secondaryButton"
              href={profile.github}
              target="_blank"
              rel="noreferrer"
            >
              <Github size={17} aria-hidden="true" />
              GitHub
            </a>
          </div>

          <div className="heroMeta">
            <span>
              <MapPin size={16} aria-hidden="true" /> {profile.location}
            </span>
            <span>
              <Sparkles size={16} aria-hidden="true" /> React · TypeScript ·
              Next.js · Vue.js
            </span>
          </div>

          <div className="proofStrip" aria-label="Professional highlights">
            <div>
              <strong>7+ years</strong>
              <span>Production frontend experience</span>
            </div>
            <div>
              <strong>~2 months</strong>
              <span>Vue → React production rewrite</span>
            </div>
            <div>
              <strong>1–3 days</strong>
              <span>States shortened via mock preview tooling</span>
            </div>
          </div>
        </div>

        <div className="portraitColumn" aria-label="Portrait of Gity Ghasemi">
          <div className="portraitFrame">
            <img src={avatarUrl} alt="Gity Ghasemi" className="portrait" />
          </div>
          <div className="portraitNote">
            <span>Core focus</span>
            <strong>
              React, TypeScript, frontend architecture, testing and complex
              product flows
            </strong>
          </div>
        </div>
      </section>

      <section className="statement sectionShell" id="about">
        <div className="sectionLabel">01 · About</div>

        <div className="statementGrid">
          <h2>Frontend engineering grounded in product behavior, not just UI.</h2>

          <div>
            <p>{profile.intro}</p>
            <p>
              I work best where frontend engineering is part of product
              thinking. I like understanding the real business rules behind a
              flow, collaborating closely with Design, Product and QA, and
              improving the implementation when I see a better way to make it
              safer, clearer or easier to maintain.
            </p>
          </div>
        </div>

        <div className="strengthGrid">
          {strengths.map((item) => (
            <div className="strengthItem" key={item}>
              <CheckCircle2 size={17} aria-hidden="true" />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="sectionShell" id="experience">
        <div className="sectionHeading">
          <div className="sectionLabel">02 · Experience</div>
          <h2>7+ years building and modernizing production products.</h2>
          <p>
            Experience across framework migrations, complex financial flows,
            reusable UI foundations, automated testing and cross-functional
            delivery.
          </p>
        </div>

        <div className="timeline">
          {experience.map((item, index) => (
            <article className="experienceCard" key={item.company}>
              <div className="experienceIndex">
                {String(index + 1).padStart(2, "0")}
              </div>

              <div className="experienceMain">
                <div className="experienceTopline">
                  <div>
                    <h3>{item.company}</h3>
                    <p className="role">{item.role}</p>
                  </div>
                  <span className="period">{item.period}</span>
                </div>

                <p className="experienceSummary">{item.summary}</p>

                <ul>
                  {item.highlights.map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </ul>

                <div className="chipRow">
                  {item.stack.map((tech) => (
                    <span className="chip" key={tech}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="sectionShell" id="work">
        <div className="sectionHeading workHeading">
          <div>
            <div className="sectionLabel">03 · Selected engineering work</div>
            <h2>Case studies that show how I solve real frontend problems.</h2>
          </div>
          <p>
            Selected work focused on architecture, complex product logic,
            testing, migration and maintainability rather than feature lists
            alone.
          </p>
        </div>

        <div className="projectGrid">
          {projects.map((project, index) => (
            <article className="projectCard" key={project.title}>
              <div className="projectNumber">
                {String(index + 1).padStart(2, "0")}
              </div>
              <p className="projectEyebrow">{project.eyebrow}</p>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <p className="projectOutcome">
                <strong>Outcome:</strong> {project.outcome}
              </p>

              <div className="chipRow">
                {project.details.map((detail) => (
                  <span className="chip subtle" key={detail}>
                    {detail}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="principles sectionShell">
        <div className="sectionLabel">04 · How I work</div>

        <div className="principlesGrid">
          <article>
            <span>01</span>
            <h3>Own the result</h3>
            <p>
              I follow work beyond implementation: validating behavior, raising
              risks, documenting decisions and helping the feature reach a good
              state for users and the team.
            </p>
          </article>

          <article>
            <span>02</span>
            <h3>Understand the product logic</h3>
            <p>
              I do not treat designs as the whole specification. I look for
              business rules, edge cases and state transitions that affect the
              real user journey.
            </p>
          </article>

          <article>
            <span>03</span>
            <h3>Protect quality early</h3>
            <p>
              I prefer catching regressions through better structure, automated
              tests and realistic state validation before they reach final QA or
              production.
            </p>
          </article>

          <article>
            <span>04</span>
            <h3>Use tools with judgment</h3>
            <p>
              I use AI-assisted development to accelerate implementation and
              iteration, while still validating architecture, behavior,
              maintainability and product correctness.
            </p>
          </article>
        </div>
      </section>

      <section className="education sectionShell" id="education">
        <div className="sectionHeading educationHeading">
          <div className="sectionLabel">05 · Education & research</div>
          <h2>Technical depth beyond day-to-day product work.</h2>
          <p>
            My academic work includes recommender systems, clustering and
            software architecture, alongside a published conference paper.
          </p>
        </div>

        <div className="educationGrid">
          {education.map((item) => (
            <article className="educationCard" key={item.degree}>
              <div className="educationIcon">
                <GraduationCap size={20} aria-hidden="true" />
              </div>
              <div>
                <h3>{item.degree}</h3>
                <p className="educationSchool">
                  {item.school} · {item.period}
                </p>
                <p>{item.detail}</p>
              </div>
            </article>
          ))}

          <article className="publicationCard">
            <div className="sectionLabel compact">Publication</div>
            <h3>{publication.title}</h3>
            <p>{publication.venue}</p>
            <a
              href={publication.url}
              target="_blank"
              rel="noreferrer"
              className="publicationLink"
            >
              View publication <ArrowUpRight size={15} aria-hidden="true" />
            </a>
          </article>
        </div>
      </section>

      <section className="contact sectionShell" id="contact">
        <div>
          <div className="sectionLabel">06 · Contact</div>
          <h2>Open to Frontend Engineering opportunities across Europe.</h2>
          <p>
            I&apos;m open to remote roles, as well as positions offering visa
            sponsorship and relocation support.
          </p>
        </div>

        <div className="contactActions">
          <a className="primaryButton" href={"mailto:" + profile.email}>
            <Mail size={18} aria-hidden="true" />
            Email me
          </a>
          <a
            className="secondaryButton"
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
          >
            <Linkedin size={18} aria-hidden="true" />
            LinkedIn
          </a>
        </div>
      </section>

      <footer className="footer sectionShell">
        <span>© 2026 Gity Ghasemi</span>
        <span>Frontend Engineer · Europe remote & relocation</span>
      </footer>
    </main>
  );
}

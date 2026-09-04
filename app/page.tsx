import {
  ArrowDownRight,
  ArrowUpRight,
  CheckCircle2,
  Linkedin,
  Mail,
  MapPin,
  Sparkles,
} from "lucide-react";
import { experience, profile, projects, strengths } from "@/data/portfolio";

const avatarUrl = "https://avatars.githubusercontent.com/u/20185805?v=4";

export default function Home() {
  return (
    <main>
      <header className="siteHeader">
        <a className="brand" href="#top" aria-label="Back to top">
          GG
        </a>
        <nav className="nav" aria-label="Primary navigation">
          <a href="#about">About</a>
          <a href="#experience">Experience</a>
          <a href="#work">Work</a>
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
            Frontend engineer · open to relocation
          </p>
          <h1>
            I build frontend products that feel
            <span className="accentText"> clear, fast and dependable.</span>
          </h1>
          <p className="heroLead">
            I&apos;m {profile.name}, a frontend engineer with around seven years
            of experience building production web applications across fintech
            and B2B products. I work where engineering quality, product thinking
            and user experience meet.
          </p>
          <div className="heroActions">
            <a className="primaryButton" href="#work">
              See selected work <ArrowDownRight size={18} aria-hidden="true" />
            </a>
            <a className="textButton" href={"mailto:" + profile.email}>
              {profile.email}
            </a>
          </div>
          <div className="heroMeta">
            <span>
              <MapPin size={16} aria-hidden="true" /> {profile.location}
            </span>
            <span>
              <Sparkles size={16} aria-hidden="true" /> React · TypeScript ·
              Next.js · Vue
            </span>
          </div>
        </div>

        <div className="portraitColumn" aria-label="Portrait of Gity Ghasemi">
          <div className="portraitFrame">
            <img src={avatarUrl} alt="Gity Ghasemi" className="portrait" />
          </div>
          <div className="portraitNote">
            <span>Currently focused on</span>
            <strong>React ecosystems, product UX & scalable frontend architecture</strong>
          </div>
        </div>
      </section>

      <section className="statement sectionShell" id="about">
        <div className="sectionLabel">01 · About</div>
        <div className="statementGrid">
          <h2>Engineering with a product mindset.</h2>
          <div>
            <p>
              {profile.intro}
            </p>
            <p>
              I&apos;m especially comfortable in complex product areas: migrations,
              state-heavy flows, shared UI systems, automated testing and the
              parts of a frontend where maintainability starts to matter as much
              as visual polish.
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
          <h2>Production work, not just prototypes.</h2>
          <p>
            A track record of modernizing interfaces, improving reliability and
            working closely with product and design teams.
          </p>
        </div>

        <div className="timeline">
          {experience.map((item, index) => (
            <article className="experienceCard" key={item.company}>
              <div className="experienceIndex">0{index + 1}</div>
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
            <div className="sectionLabel">03 · Selected work</div>
            <h2>Projects that show how I think.</h2>
          </div>
          <p>
            Recent work spanning AI products, real-time data, server/client
            boundaries, optimistic UI and frontend state architecture.
          </p>
        </div>

        <div className="projectGrid">
          {projects.map((project, index) => (
            <article className="projectCard" key={project.title}>
              <div className="projectNumber">{String(index + 1).padStart(2, "0")}</div>
              <p className="projectEyebrow">{project.eyebrow}</p>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
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
            <h3>Make complexity legible</h3>
            <p>
              I prefer clear component boundaries, explicit state ownership and
              architecture that helps the next engineer understand the system.
            </p>
          </article>
          <article>
            <span>02</span>
            <h3>Ship with evidence</h3>
            <p>
              I use testing, reviewable increments and real product feedback to
              reduce regression risk without slowing delivery to a crawl.
            </p>
          </article>
          <article>
            <span>03</span>
            <h3>Stay close to the user</h3>
            <p>
              I collaborate closely with design and product, raise unresolved
              UX constraints early and treat frontend details as part of the
              product experience.
            </p>
          </article>
        </div>
      </section>

      <section className="contact sectionShell" id="contact">
        <div>
          <div className="sectionLabel">05 · Contact</div>
          <h2>Building something thoughtful?</h2>
          <p>
            I&apos;m open to frontend engineering opportunities and relocation.
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
        <span>Frontend Engineer · Open to relocation</span>
      </footer>
    </main>
  );
}

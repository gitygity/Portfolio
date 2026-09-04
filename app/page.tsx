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
          <img src={avatarUrl} alt="" className="brandAvatar" />
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
            Frontend engineering for
            <span className="accentText"> reliable, user-focused products.</span>
          </h1>
          <p className="heroLead">
            I&apos;m {profile.name}, a frontend engineer with 7 years of
            production experience across fintech and B2B products. I work mainly
            with React and TypeScript, with a strong focus on maintainability,
            product quality and user experience.
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
              Vue · Testing
            </span>
          </div>
        </div>

        <div className="portraitColumn" aria-label="Portrait of Gity Ghasemi">
          <div className="portraitFrame">
            <img src={avatarUrl} alt="Gity Ghasemi" className="portrait" />
          </div>
          <div className="portraitNote">
            <span>Currently focused on</span>
            <strong>React, TypeScript, product quality and frontend architecture</strong>
          </div>
        </div>
      </section>

      <section className="statement sectionShell" id="about">
        <div className="sectionLabel">01 · About</div>
        <div className="statementGrid">
          <h2>Engineering that supports both the product and the team.</h2>
          <div>
            <p>{profile.intro}</p>
            <p>
              I work best in teams where frontend engineering is part of product
              thinking, not only implementation. I like working closely with
              design, product and engineering, and I am comfortable taking
              initiative when I see a technical or workflow improvement that can
              help the team deliver better work.
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
          <h2>7 years of production frontend work.</h2>
          <p>
            Experience across product development, frontend rewrites, shared UI
            systems, automated testing and cross-functional delivery.
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
            <div className="sectionLabel">03 · Selected engineering work</div>
            <h2>Work that shows how I solve real frontend problems.</h2>
          </div>
          <p>
            A closer look at production work where architecture, product quality
            and delivery all mattered.
          </p>
        </div>

        <div className="projectGrid">
          {projects.map((project, index) => (
            <article className="projectCard" key={project.title}>
              <div className="projectNumber">{String(index + 1).padStart(2, "0")}</div>
              <p className="projectEyebrow">{project.eyebrow}</p>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <p className="projectOutcome"><strong>Outcome:</strong> {project.outcome}</p>
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
              I do not treat a ticket as finished just because the code is done.
              I think about the final behavior, raise risks early and follow the
              work through until it is in a good state for users and the team.
            </p>
          </article>
          <article>
            <span>02</span>
            <h3>Think about the user</h3>
            <p>
              I care about whether a feature is clear, useful and reliable in
              real use. I work closely with design and product and speak up when
              I see a user-flow problem that can be improved.
            </p>
          </article>
          <article>
            <span>03</span>
            <h3>Protect quality early</h3>
            <p>
              I check edge cases, UI states and likely failure points while I
              develop. I prefer finding regressions before release instead of
              depending on the final testing stage to catch them.
            </p>
          </article>
          <article>
            <span>04</span>
            <h3>Help the team move forward</h3>
            <p>
              I communicate openly, share what I learn and take initiative on
              practical improvements. In high-pressure periods, I focus on
              priorities, delivery risks and clear ownership so the team can
              keep moving without losing important work.
            </p>
          </article>
        </div>
      </section>

      <section className="contact sectionShell" id="contact">
        <div>
          <div className="sectionLabel">05 · Contact</div>
          <h2>Open to frontend opportunities in Europe.</h2>
          <p>
            I&apos;m interested in product-focused frontend roles where I can
            contribute to both engineering quality and the user experience.
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

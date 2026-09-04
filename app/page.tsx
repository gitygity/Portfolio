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
            I build frontend products that are
            <span className="accentText"> clear, reliable and easy to use.</span>
          </h1>
          <p className="heroLead">
            I&apos;m {profile.name}, a frontend engineer with around seven years
            of experience building production web applications in fintech and
            B2B products. I focus on building interfaces that are reliable,
            simple to use and easy for teams to maintain.
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
            <strong>React, product UX and maintainable frontend architecture</strong>
          </div>
        </div>
      </section>

      <section className="statement sectionShell" id="about">
        <div className="sectionLabel">01 · About</div>
        <div className="statementGrid">
          <h2>I care about both the product and the code.</h2>
          <div>
            <p>
              {profile.intro}
            </p>
            <p>
              I pay close attention to details while I build. I check different UI
              states, think about what a change might break, and test risky
              areas before I consider the work finished. I also like to share
              useful things I learn with the team.
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
          <h2>Real production experience.</h2>
          <p>
            Experience building and improving real products, rewriting older
            frontend code, adding tests, and working closely with design and
            product teams.
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
            <div className="sectionLabel">03 · Selected case studies</div>
            <h2>Selected work from production projects.</h2>
          </div>
          <p>
            Examples from production work: a Vue-to-React rewrite, a shared design
            system, testing improvements and a React PWA.
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
            <h3>Put the user first</h3>
            <p>
              If we offer a service to users, I believe it should be easy to use,
              useful and reliable. When a user-facing problem appears, I want the
              team to understand it and fix it quickly.
            </p>
          </article>
          <article>
            <span>02</span>
            <h3>Pay attention to details</h3>
            <p>
              During development, I check different states and think about where
              a change could break existing behavior. I prefer finding risky
              cases before they reach production.
            </p>
          </article>
          <article>
            <span>03</span>
            <h3>Take ownership</h3>
            <p>
              When I take responsibility for a piece of work, I try to carry it
              through properly. If I see a team problem or a way to improve how
              we work, I raise it and try to suggest a practical solution.
            </p>
          </article>
          <article>
            <span>04</span>
            <h3>Manage pressure with priorities</h3>
            <p>
              In agile and high-pressure periods, I focus on priorities, delivery
              risks and clear task ownership so the team has a better chance of
              meeting deadlines without losing track of important work.
            </p>
          </article>
          <article>
            <span>05</span>
            <h3>Learn and share</h3>
            <p>
              If a new technology can genuinely help the project, I am willing to
              learn it. I also enjoy sharing useful things I learn with teammates
              so the knowledge does not stay with one person.
            </p>
          </article>
          <article>
            <span>06</span>
            <h3>Work beyond the ticket</h3>
            <p>
              I do not like to think only in terms of assigned tasks. If I notice
              a small improvement that can make development faster, clearer or
              more reliable, I try to take initiative and move it forward.
            </p>
          </article>
        </div>
      </section>

      <section className="contact sectionShell" id="contact">
        <div>
          <div className="sectionLabel">05 · Contact</div>
          <h2>Looking for a frontend engineer?</h2>
          <p>
            I&apos;m open to frontend engineering roles and relocation opportunities.
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

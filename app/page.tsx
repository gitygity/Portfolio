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
            of experience building production web applications. My main focus is
            React, TypeScript, product quality and reliable user experiences.
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
          <h2>Frontend engineering with strong ownership and product focus.</h2>
          <div>
            <p>{profile.intro}</p>
            <p>
              I enjoy working closely with product, design and engineering teams,
              especially on complex areas where usability, technical quality and
              delivery all matter. I am comfortable learning new technologies
              when the project needs them, sharing knowledge with teammates and
              taking initiative when I see a practical way to improve the product
              or the team&apos;s development process.
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
            <h3>Own the outcome</h3>
            <p>
              I take responsibility for the result, not just the task. I follow
              work through, raise risks early and look for practical ways to
              improve the product or the way the team works.
            </p>
          </article>
          <article>
            <span>02</span>
            <h3>Build with the user in mind</h3>
            <p>
              I care about whether a feature is genuinely useful, clear and
              reliable for the user. I work closely with design and product, and
              I treat user-facing issues as problems worth solving quickly.
            </p>
          </article>
          <article>
            <span>03</span>
            <h3>Protect quality before release</h3>
            <p>
              I pay attention to edge cases, UI states and areas where a change
              could break existing behavior. I test risky paths during
              development instead of leaving quality checks until the end.
            </p>
          </article>
          <article>
            <span>04</span>
            <h3>Prioritize when pressure is high</h3>
            <p>
              In fast-moving agile teams, I focus on the work that matters most,
              make delivery risks visible and help organize tasks so deadlines
              stay realistic and important work does not get lost.
            </p>
          </article>
          <article>
            <span>05</span>
            <h3>Learn what the project needs</h3>
            <p>
              I am comfortable learning new tools and technologies when they can
              make a real difference to the project. I also share useful
              knowledge with teammates so the whole team benefits.
            </p>
          </article>
          <article>
            <span>06</span>
            <h3>Communicate and improve together</h3>
            <p>
              I prefer solving disagreements through clear discussion and shared
              problem-solving. I value a collaborative team environment and take
              initiative on small improvements that make development smoother.
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

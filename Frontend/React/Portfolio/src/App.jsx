import './App.css'
import mananImage from './assets/manan.jpg'

function App() { 
 
  return (
    <>
      <div className="main-container">
        {/* sidebar */}
        <div className="side-bar">
          {/* profile */}
          <div className="profile">
          <div className="image-container">
              <img src={mananImage} alt="manan.jpg" />
          </div>
           
            <h2>Manan</h2>
            <p>Aspiring Full Stack Developer</p>
          </div>

          {/* contacts */}
          <div className="contact">
            <div className="email">
              <h3 className="label">Email</h3>
              <a href="mailto:mananbhatt1010@gmail.com" className="value">mananbhatt1010@gmail.com</a>
            </div>
            <div className="phone">
              <h3 className="label">Phone</h3>
              <a href="tel:+919999999999" className="value">+91-xxxxxxxxxx</a>
            </div>
            <div className="location">
              <h3 className="label">Location</h3>
              <p className="value">India</p>
            </div>
          </div>

          {/* social */}
          <div className="social">
            <a href="https://x.com/MananCodes123"><img src="https://simpleicons.org/icons/x.svg" alt="x.svg" /></a>
            <a href="https://github.com/Manan-Devs"><img src="https://simpleicons.org/icons/git.svg" alt="git.svg" /></a>
          </div>
        </div>

        {/* main-content */}
        <div className="main-content">
          {/* navigation */}
          <div className="navigation">
            <nav>
              <a href="#about" className="active">About</a>
              <a href="#skills">Skills</a>
              <a href="#education">Education</a>
              <a href="#portfolio">Portfolio</a>
            </nav>
          </div>

          {/* about me */}
          <div id="about">
            <h2 className="heading">About me</h2>
            <div className="line"></div>
            <p className="content">I am a creative and passionate Full Stack Developer with a keen eye for detail and a love for building beautiful, functional, and user-friendly web experiences. My journey in web development is driven by a desire to turn complex problems into simple, elegant solutions. I specialize in modern web technologies and am always eager to learn and adapt to the ever-evolving digital landscape.</p>
          </div>

          {/* Skills */}
          <div id="skills">
            <h2 className="heading">Skills</h2>
            <div className="line"></div>
            <div className="grid-container">
              <div className="item">
                <img src="https://simpleicons.org/icons/html5.svg" alt="HTML5" />
                <h3>HTML5</h3>
              </div>
              <div className="item">
                <img src="https://simpleicons.org/icons/css.svg" alt="CSS3" />
                <h3>CSS3</h3>
              </div>
              <div className="item">
                <img src="https://simpleicons.org/icons/javascript.svg" alt="Javascript" />
                <h3>Javascript</h3>
              </div>
              <div className="item">
                <img src="https://simpleicons.org/icons/react.svg" alt="React" />
                <h3>React</h3>
              </div>
              <div className="item">
                <img src="https://simpleicons.org/icons/git.svg" alt="Git" />
                <h3>Git & Github</h3>
              </div>
              <div className="item">
                <img src="https://simpleicons.org/icons/typescript.svg" alt="Typescript" />
                <h3>Typescript</h3>
              </div>
            </div>
          </div>

          {/* Education */}
          <div id="education">
            <h2 className="heading">Education</h2>
            <div className="line"></div>
            <div className="edu">
              <h3>School Student</h3>
              <p>📚 School Student Studying in Class 12th now <br /> 🌱 Learning Web Development <br /> 💻 Building skills to become a <br /> Full-Time Web Developer <br /> 🚀 Consistency • Growth • Future in Tech</p>
              <div className="goal"></div>
              <div className="liner"></div>
            </div>
          </div>

          {/* Portfolio */}
          <div id="portfolio">
            <h2 className="heading">Portfolio</h2>
            <div className="line"></div>
            <div className="project-container">
              <div className="project">
                <img src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDN8fGNvZGluZ3xlbnwwfHx8fDE2NTg0MjU5NjM&ixlib=rb-1.2.1&q=80&w=400" alt="E-commerce" />
                <div className="card">
                  <h3>E-commerce Website</h3>
                  <p>A fully responsive online store built with modern design principles.</p>
                  <span>HTML</span><span>CSS</span>
                </div>
              </div>
              <div className="project">
                <img src="https://images.unsplash.com/photo-1542744095-291d1f67b221?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDEyfHx3ZWJzaXRlJTIwZGVzaWdufGVufDB8fHx8MTY1ODQyNTk5OQ&ixlib=rb-1.2.1&q=80&w=400" alt="Business" />
                <div className="card">
                  <h3>Business Landing Page</h3>
                  <p>A sleek, single-page site for a corporate client to generate leads</p>
                  <span>HTML</span><span>Flexbox</span>
                </div>
              </div>
              <div className="project">
                <img src="https://images.unsplash.com/photo-1509343256512-d77a5cb3791b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDE4fHxwb3J0Zm9saW98ZW58MHx8fHwxNjU4NDI2MDUx&ixlib=rb-1.2.1&q=80&w=400" alt="Blog" />
                <div className="card">
                  <h3>Personal Blog Theme</h3>
                  <p>A clean, content-focused blog theme designed for readability</p>
                  <span>HTML</span><span>CSS</span>
                </div>
              </div>
              <div className="project">
                <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDF8fGRhc2hib2FyZHxlbnwwfHx8fDE2NTg0MjYwMjM&ixlib=rb-1.2.1&q=80&w=400" alt="Dashboard" />
                <div className="card">
                  <h3>Analytics Dashboard UI</h3>
                  <p>A data visualization dashboard UI created with CSS Grid</p>
                  <span>CSS</span><span>UI UX</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App;
  import './App.css'
  import mananImage from './assets/manan.jpg'
  import { useEffect } from 'react'

  function App() {
    useEffect(() => {
      // Trigger animation on mount
      const elements = document.querySelectorAll('[data-animate]')
      elements.forEach((el, index) => {
        setTimeout(() => {
          el.classList.add('animate-in')
        }, index * 100)
      })
    }, [])

    return (
      <>
        <div className="main-container">
          {/* sidebar */}
          <div className="side-bar" data-animate>
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
            <div className="navigation" data-animate>
              <nav>
                <a href="#about" className="active">About</a>
                <a href="#skills">Skills</a>
                <a href="#education">Education</a>
                <a href="#portfolio">Portfolio</a>
              </nav>
            </div>

            {/* about me */}
            <div id="about" data-animate>
              <h2 className="heading">About me</h2>
              <div className="line"></div>
              <p className="content">I am a creative and passionate Full Stack Developer with a keen eye for detail and a love for building beautiful, functional, and user-friendly web experiences. My journey in web development is driven by a desire to turn complex problems into simple, elegant solutions. I specialize in modern web technologies and am always eager to learn and adapt to the ever-evolving digital landscape.</p>
            </div>

            {/* Skills */}
            <div id="skills" data-animate>
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
              </div>
            </div>

            {/* Education */}
            <div id="education" data-animate>
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
     <div id="portfolio" data-animate>
  <h2 className="heading">Portfolio</h2>
  <div className="line"></div>
  <div className="project-container">
    <div className="project">
      <img src="./src/assets/Library.jpg" alt="E-commerce" />
      <div className="card">
        <h3>E-commerce Website</h3>
        <p>A fully responsive online E-commerce store built with modern design principles.</p>
        <div className="project-links">
          <a href="https://github.com/Manan-Devs/Web-Development-/tree/main/Frontend/Projects/Project%202" target="_blank" rel="noopener noreferrer">
            <span>🔗 GitHub</span>
          </a>
          <a href="https://phenomenal-lollipop-b58023.netlify.app/" target="_blank" rel="noopener noreferrer">
            <span>🚀 Live</span>
          </a>
        </div>
      </div>
    </div>
    <div className="project">
      <img src="./src/assets/Todo.jpg" alt="Todo-App" />
      <div className="card">
        <h3>Todo App</h3>
        <p>Built a clean, responsive Todo App 📝 Simple UI, solid logic, real productivity vibes learning React by shipping, not just watching 🚀</p>
        <div className="project-links">
          <a href="https://github.com/Manan-Devs/Web-Development-/tree/main/Frontend/React/Projects/My%20App" target="_blank" rel="noopener noreferrer">
            <span>🔗 GitHub</span>
          </a>
          <a href="https://enchanting-cannoli-291c50.netlify.app/" target="_blank" rel="noopener noreferrer">
            <span>🚀 Live</span>
          </a>
        </div>
      </div>
    </div>
    <div className="project">
      <img src="./src/assets/EnergyCheckIn.jpg" alt="Blog" />
      <div className="card">
        <h3>Energychecker</h3>
        <p>Built EnergyChecker a simple app to track daily energy levels and learn real-world React patterns while building 🚀</p>
        <div className="project-links">
          <a href="https://github.com/Manan-Devs/Web-Development-/tree/main/Frontend/React/Projects/EnergyCheckIn%20App" target="_blank" rel="noopener noreferrer">
            <span>🔗 GitHub</span>
          </a>
          <a href="https://coruscating-pastelito-1dbb28.netlify.app/" target="_blank" rel="noopener noreferrer">
            <span>🚀 Live</span>
          </a>
        </div>
      </div>
    </div>
    <div className="project">
      <img src="./src/assets/AgeCalculation.jpg" alt="Dashboard" />
      <div className="card">
        <h3>Age Calculator</h3>
        <p>Built an Age Calculator 🧮 a clean, responsive app that calculates age accurately and sharpened my logic-building skills in React 🚀</p>
        <div className="project-links">
          <a href="https://github.com/Manan-Devs/Web-Development-/tree/main/Frontend/React/Projects/Age%20Calculator" target="_blank" rel="noopener noreferrer">
            <span>🔗 GitHub</span>
          </a>
          <a href="https://dynamic-froyo-eea4cd.netlify.app/" target="_blank" rel="noopener noreferrer">
            <span>🚀 Live</span>
          </a>
        </div>
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
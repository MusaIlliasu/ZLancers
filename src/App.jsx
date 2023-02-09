import "./App.css";
function App() {
  return (
    <div className="main">
      <div className="left">
        <div className="logo">ZLancers</div>
        <h1 className="hero__title">Start your journey with us.</h1>
        <h2 className="subtitle">
          Discover the world's best community of freelancers and business owners
        </h2>
        <div className="testimonial__card">
          <div className="say">
            <p>
              Simply unbelievable! I am really satisfied with my projects and
              business. This is absolutely wonderful.
            </p>
            <div className="author">
              <div className="profile__photo">
                <img src="src/assets/image.jpg" alt="image" srcSet="" />
              </div>
              <div className="author__name__position">
                <div className="name">
                  <p>Muhammad UI</p>
                </div>
                <div className="position">
                  <p>Freelancer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="dots">
          <div className="dot dot__active"></div>
          <div className="dot"></div>
          <div className="dot"></div>
        </div>
      </div>
      <div className="right">
        <form>
          <div className="signup__container">
            <p className="signup">Sign up</p>
            <p>
              Have an account ? <span className="login">Login</span>
            </p>
          </div>
          <p>Looking for </p>
          <div className="looking__for">
            <div className="label__container">
              <input
                type="radio"
                name="projects"
                value="Projects"
                id="projects"
              />
              <label className="projects" htmlFor="projects">
                Projects
              </label>
            </div>
            <div className="label__container">
              <input type="radio" name="projects" value="Design" id="design" />
              <label htmlFor="design">Design</label>
            </div>
          </div>
          <div className="email__container">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              required
              placeholder="your_email@domain.com"
            />
          </div>
          <div className="password__container">
            <label htmlFor="password">Password</label>
            <input type="password" name="password" id="password" required />
          </div>
          <div className="skills__container">
            <label htmlFor="skills">Select Skills</label>
            <input
              type="search"
              name="skills"
              id="skills"
              required
              placeholder="type to search skills"
            />
          </div>
          <div className="skills__tag">
            <div className="illustration">
              <p>
                Illustration <span>x</span>
              </p>
            </div>
            <div className="branding">
              <p>
                Branding <span>x</span>
              </p>
            </div>
          </div>
          <button>Create account</button>
        </form>
      </div>
    </div>
  );
}

export default App;

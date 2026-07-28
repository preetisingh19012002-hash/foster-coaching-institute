import './style.css'
import heroImage from './assets/images/hero.png'
import logo from './assets/images/logo.png'
document.querySelector('#app').innerHTML = `
  <header>
    <div class="logo">
      <img src="${logo}" alt="Foster Coaching Institute Logo">
      <h1>Foster Coaching Institute</h1>
    </div>
    <nav>
      <a href="#">Home</a>
      <a href="#">About</a>
      <a href="#">Courses</a>
      <a href="#">Faculty</a>
      <a href="#">Gallery</a>
      <a href="#">Contact</a>
    </nav>
  </header>
  <section class="hero">
      <div class="hero-content">
        <h2>Building Bright Minds, Shaping Brighter Futures</h2>
        <p>
          Best Coaching for Nursery to Class 10 with experienced teachers and personalized learning.
        </p>
        <button>Apply Now</button>
      </div>
  </section>
  <main>
    <section class="about">
      <div class="about-image">
      <img src="${heroImage}" alt="Students Learning">
      </div>
      <div class="about-text">
        <h2>About Foster Coaching Institute</h2>
        <p>
        Foster Coaching Institute is committed to providing quality education
        from Nursery to Class 10. Our experienced teachers focus on building
        strong concepts, improving confidence, and helping every student
        achieve academic excellence in a supportive learning environment.
        </p>
        <button>Read More</button>
      </div>
    </section>
    <section class="features">
      <h2>Why Choose Foster?</h2>
      <div class="feature-container">
        <div class="feature-card">
            <h3>📚 Quality Education</h3>
            <p>
                Well-structured courses designed to build strong concepts.
            </p>
        </div>
        <div class="feature-card">
            <h3>👨‍🏫 Expert Teachers</h3>
            <p>
                Learn from experienced teachers who guide every student.
            </p>
        </div>
        <div class="feature-card">
            <h3>🏆 Excellent Results</h3>
            <p>
                Consistent academic performance and student success.
            </p>
        </div>
      </div>
    </section>
  </main>
`
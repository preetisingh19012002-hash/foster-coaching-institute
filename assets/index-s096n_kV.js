(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=`/foster-coaching-institute/assets/hero-yCzK0tLM.png`,t=`/foster-coaching-institute/assets/logo-BFkohCsx.png`;document.querySelector(`#app`).innerHTML=`
  <header>
    <div class="logo">
      <img src="${t}" alt="Foster Coaching Institute Logo">
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
      <img src="${e}" alt="Students Learning">
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
`;
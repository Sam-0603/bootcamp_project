// src/components/Features.jsx
function Features() {
  return (
    <section className="features" id="features">
      <h2>FEATURES</h2>
      <div className="features-container">
        <div className="feature-box">
          <img src="https://img.icons8.com/ios/50/target.png" alt="Wide Range Icon" />
          <h3>Wide Range of Tests</h3>
          <p>Aptitude, Technical, Mock Exams</p>
        </div>
        <div className="feature-box">
          <img src="https://img.icons8.com/ios/50/combo-chart.png" alt="Instant Results Icon" />
          <h3>Instant Results</h3>
          <p>Real-time feedback and scoring</p>
        </div>
        <div className="feature-box">
          <img src="https://img.icons8.com/ios/50/graph.png" alt="Progress Tracker Icon" />
          <h3>Progress Tracker</h3>
          <p>See your growth over time</p>
        </div>
      </div>
    </section>
  );
}

export default Features;

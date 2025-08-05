// src/components/PopularTests.jsx
import { useNavigate } from "react-router-dom";

function PopularTests() {
  const navigate = useNavigate();

  return (
    <section className="popular-tests" id="tests">
      <h2>POPULAR TESTS</h2>
      <div className="test-grid">
        <div className="test-card" onClick={() => navigate("/quiz/java")}>
          <h4>Java Basics Quiz</h4>
          <p>Java Basics Quiz Exams</p>
        </div>
        <div className="test-card" onClick={() => navigate("/quiz/data structure")}>
          <h4>Data Structures MCQ</h4>
          <p>Technical Questions</p>
        </div>
        <div className="test-card" onClick={() => navigate("/quiz/aptitude")}>
          <h4>General Aptitude Test</h4>
          <p>Logical Reasoning & Math</p>
        </div>
        <div className="test-card" onClick={() => navigate("/quiz/dbms")}>
          <h4>Database Management Test</h4>
          <p>DBMS Theory & Practice</p>
        </div>
      </div>
      <button className="view-tests">
        <a href="#tests">View All Tests</a>
      </button>
    </section>
  );
}

export default PopularTests;

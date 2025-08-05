import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

function QuizPage() {
  const { id } = useParams();
  const [questions, setQuestions] = useState([]);
  const [score, setScore] = useState(null);

  useEffect(() => {
    import(`../assets/${id}.json`)
      .then(module => setQuestions(module.default))
      .catch(() => setQuestions([]));
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    let newScore = 0;
    const formData = new FormData(e.target);
    questions.forEach((q, i) => {
      if (formData.get(`q${i}`) === q.answer) {
        newScore++;
      }
    });
    setScore(newScore);
  };

  return (
    <div className="quiz-container">
      <h1>{id.toUpperCase()} Quiz</h1>
      <form onSubmit={handleSubmit}>
        {questions.map((q, i) => (
          <div key={i}>
            <p>{i + 1}. {q.question}</p>
            {q.options.map((opt, j) => (
              <label key={j}>
                <input type="radio" name={`q${i}`} value={opt} required /> {opt}
              </label>
            ))}
          </div>
        ))}
        <button type="submit">Submit</button>
      </form>
      {score !== null && (
        <div id="result">You scored {score} out of {questions.length}</div>
      )}
    </div>
  );
}

export default QuizPage;

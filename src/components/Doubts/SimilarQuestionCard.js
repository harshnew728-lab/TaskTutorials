import "./SimilarQuestionCard.css";
import { useState } from "react";
import {
  FiAward,
  FiCheckCircle,
  FiChevronDown,
  FiThumbsDown,
  FiThumbsUp,
} from "react-icons/fi";

function SimilarQuestionCard({ question }) {
  const [isOpen, setIsOpen] = useState(false);
  const [feedback, setFeedback] = useState(null);

  const similarity = question.id === 1 ? 98 : 94;

  const handleFeedback = (type, e) => {
    e.stopPropagation();
    setFeedback((prev) => (prev === type ? null : type));
  };

  return (
    <article
      className={`similar-question-card ${
        isOpen ? "open" : ""
      }`}
    >
      <button
        className="card-header"
        onClick={() => setIsOpen((prev) => !prev)}
        type="button"
      >
        <div className="badge-group">
          <span className="card-badge success">
            <FiCheckCircle />
            {similarity}% Match
          </span>

          <span className="card-badge info">
            <FiAward />
            Verified Solution
          </span>
        </div>

        <span className="accordion-arrow">
          <FiChevronDown />
        </span>
      </button>

      <h4 className="question-title">
        {question.question}
      </h4>

      <div className="accordion-content">
        <div className="answer-divider" />

        <p className="answer-text">
          {question.answer}
        </p>

        <div
          className="feedback-row"
          onClick={(e) => e.stopPropagation()}
        >
          <span className="feedback-question">
            Was this solution helpful?
          </span>

          <div className="feedback-buttons">
            <button
              type="button"
              className={`feedback-btn ${
                feedback === "yes"
                  ? "active yes"
                  : ""
              }`}
              onClick={(e) =>
                handleFeedback("yes", e)
              }
            >
              <FiThumbsUp />
              Yes
            </button>

            <button
              type="button"
              className={`feedback-btn ${
                feedback === "no"
                  ? "active no"
                  : ""
              }`}
              onClick={(e) =>
                handleFeedback("no", e)
              }
            >
              <FiThumbsDown />
              No
            </button>
          </div>

          {feedback && (
            <span className="thanks-message">
              Thank you for your feedback.
            </span>
          )}
        </div>
      </div>

      <div className="card-footer">
        <span onClick={()=>setIsOpen(!isOpen)}>
          {isOpen
            ? "Collapse Solution"
            : "View Verified Solution"}
        </span>
      </div>
    </article>
  );
}

export default SimilarQuestionCard;
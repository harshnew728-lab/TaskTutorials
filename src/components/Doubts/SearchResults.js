import "./SearchResults.css";
import SimilarQuestionCard from "./SimilarQuestionCard";
import {
  FiBookOpen,
  FiAlertCircle,
} from "react-icons/fi";

function SearchResults({
  results = [],
  searched = false,
}) {
  if (!searched) return null;

  const resultCount = results.length;
  const hasResults = resultCount > 0;

  return (
    <section className="search-results fade-in">
      <div className="results-header">
        <div className="results-header-title">
          <FiBookOpen className="results-header-icon" />
          <h3>Similar Questions</h3>
        </div>

        {hasResults && (
          <span className="results-count">
            {resultCount}{" "}
            {resultCount === 1
              ? "match"
              : "matches"}{" "}
            found
          </span>
        )}
      </div>

      {hasResults ? (
        <div className="results-list">
          {results.map((question) => (
            <SimilarQuestionCard
              key={question.id}
              question={question}
            />
          ))}
        </div>
      ) : (
        <div className="empty-result-card">
          <div className="empty-illustration">
            <FiAlertCircle className="empty-warn-icon" />
            <div className="illustration-glow" />
          </div>

          <h3>No Matching Answers Found</h3>

          <p>
            We searched our verified question
            library but couldn't find a matching
            answer. You can forward this query to
            a live teacher for personalized help.
          </p>
        </div>
      )}
    </section>
  );
}

export default SearchResults;
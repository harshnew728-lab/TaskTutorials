import "./Doubts.css";
import { useState } from "react";
import { toast } from "react-toastify";
import Navbar from "../../components/Navbar/Navbar";
import SidebarButton from "../../components/SidebarButton/SidebarButton";
import SearchResults from "../../components/Doubts/SearchResults";
// import { subjectTopics } from "../../data/doubtsData";
import {
  FiCpu,
  FiDroplet,
  FiGrid,
  FiSearch,
  FiSend,
  FiTrash2,
  FiZap,
} from "react-icons/fi";

const subjectTopics = {
  Physics: [
    "Mechanics",
    "Optics",
    "Thermodynamics"
  ],

  Chemistry: [
    "Organic",
    "Inorganic",
    "Physical"
  ],

  Maths: [
    "Algebra",
    "Trigonometry",
    "Calculus"
  ]
};

const SUBJECT_CONFIG = {
  Physics: {
    icon: <FiZap />,
    description: "Mechanics & Wave Dynamics",
  },
  Chemistry: {
    icon: <FiDroplet />,
    description: "Organic & Physical Compounds",
  },
  Maths: {
    icon: <FiGrid />,
    description: "Calculus, Algebra & Trigonometry",
  },
};

const DUMMY_RESULTS = [
  {
    id: 1,
    question: "How to find sin 30°?",
    answer:
      "To find sin 30°, we use a standard 30-60-90 triangle. In such a triangle, the side opposite 30° is exactly half of the hypotenuse. Therefore, sin 30° = Opposite / Hypotenuse = 1/2.",
  },
  {
    id: 2,
    question: "Values of common trigonometric ratios",
    answer:
      "sin 0° = 0\nsin 30° = 1/2\nsin 45° = 1/√2\nsin 60° = √3/2\nsin 90° = 1\n\ncos 0° = 1\ncos 30° = √3/2\ncos 45° = 1/√2\ncos 60° = 1/2\ncos 90° = 0",
  },
];

function Doubts() {
  const [subject, setSubject] = useState("");
  const [topic, setTopic] = useState("");
  const [question, setQuestion] = useState("");
  const [searched, setSearched] = useState(false);
  const [results, setResults] = useState([]);

  const questionLength = question.length;
  const hasQuestion = question.trim().length > 0;

  const resetTopic = (selectedSubject) => {
    setSubject(selectedSubject);
    setTopic("");
  };

  const validateForm = () => {
    if (!subject) {
      toast.warning("Please select a subject first.");
      return false;
    }

    if (!topic) {
      toast.warning("Please choose a topic.");
      return false;
    }

    if (!question.trim()) {
      toast.warning("Please describe your doubt.");
      return false;
    }

    return true;
  };

  const handleSearch = () => {
    if (!validateForm()) return;

    setResults(DUMMY_RESULTS);
    setSearched(true);

    toast.success(
      "Found similar questions matching your query."
    );
  };

  const handleTeacherRequest = () => {
    toast.success(
      "Question submitted successfully. Our tutors will respond shortly."
    );
  };

  return (
    <div className="doubts-page">
      {/* HEADER */}
      <header className="top-header-glass">
        <div className="top-header-content">
          <div className="sidebar-wrapper">
            <SidebarButton />
          </div>

          <h2 className="logo-title">TASK TUTORIALS</h2>

          <div className="profile-wrapper">
            <img
              src="https://i.pravatar.cc/300?img=12"
              alt="Profile"
              className="profile-image"
            />
            <span className="active-pulse" />
          </div>
        </div>
      </header>

      {/* MAIN */}
      <main className="doubts-container">
        {/* HERO */}
        <section className="doubt-hero">
          {/* 
          <div className="hero-badge">
            <FiCpu />
            <span>AI Assisted Doubt Solver</span>
          </div>
          */}

          <h1>
            Got a Doubt?
            <br />
            <span className="gradient-text">
              Let's Clear It Up.
            </span>
          </h1>

          <p>
            Select your subject, choose a topic, describe your
            doubt, and instantly discover verified solutions
            from our educator database.
          </p>
        </section>

        {/* FORM */}
        <section className="doubt-form-card">
          {/* SUBJECTS */}
          <div className="form-section">
            <label className="section-label">
              <span className="step-num">1</span>
              Select Subject
            </label>

            <div className="subject-grid">
              {Object.entries(SUBJECT_CONFIG).map(
                ([name, config]) => (
                  <button
                    key={name}
                    type="button"
                    className={`subject-card-button ${name.toLowerCase()} ${
                      subject === name ? "active" : ""
                    }`}
                    onClick={() => resetTopic(name)}
                  >
                    <div className="subj-icon-wrapper">
                      {config.icon}
                    </div>

                    <div className="subj-info">
                      <span className="subj-title">
                        {name}
                      </span>

                      <span className="subj-desc">
                        {config.description}
                      </span>
                    </div>
                  </button>
                )
              )}
            </div>
          </div>

          {/* TOPICS */}
          {subject && (
            <div className="form-section fade-in">
              <label className="section-label">
                <span className="step-num">2</span>
                Select Topic
              </label>

              <div className="topic-chips-container">
                {subjectTopics[subject]?.map(
                  (topicName) => (
                    <button
                      key={topicName}
                      type="button"
                      className={`topic-chip ${
                        topic === topicName
                          ? "active"
                          : ""
                      }`}
                      onClick={() =>
                        setTopic(topicName)
                      }
                    >
                      {topicName}
                    </button>
                  )
                )}
              </div>
            </div>
          )}

          {/* QUESTION */}
          <div className="form-section">
            <div className="textarea-header">
              <label className="section-label">
                <span className="step-num">3</span>
                Describe Your Doubt
              </label>

              <span
                className={`char-count ${
                  questionLength > 450
                    ? "limit-warning"
                    : ""
                }`}
              >
                {questionLength}/500
              </span>
            </div>

            <div className="textarea-container">
              <textarea
                maxLength={500}
                value={question}
                onChange={(e) =>
                  setQuestion(e.target.value)
                }
                placeholder="What exactly are you struggling with? Describe your doubt here..."
              />

              {hasQuestion && (
                <button
                  type="button"
                  className="textarea-clear"
                  onClick={() => setQuestion("")}
                  aria-label="Clear question"
                >
                  <FiTrash2 />
                </button>
              )}
            </div>
          </div>

          {/* SEARCH */}
          <button
            className="search-btn-gradient"
            onClick={handleSearch}
          >
            <FiSearch className="btn-icon" />
            <span>Search Verified Database</span>
          </button>
        </section>

        {/* RESULTS */}
        <SearchResults
          searched={searched}
          results={results}
        />

        {/* TEACHER CTA */}
        {searched && (
          <section className="teacher-cta-glass fade-in">
            <div className="cta-content">
              <div className="tutor-avatars-row">
                <div className="avatar-group">
                  <img
                    src="https://i.pravatar.cc/100?img=33"
                    alt="Tutor"
                  />
                  <img
                    src="https://i.pravatar.cc/100?img=11"
                    alt="Tutor"
                  />
                  <img
                    src="https://i.pravatar.cc/100?img=47"
                    alt="Tutor"
                  />
                </div>

                <div className="online-indicator">
                  <span className="pulse-dot" />
                  <span>
                    3 Subject Experts Online
                  </span>
                </div>
              </div>

              <div className="cta-text-details">
                <h3>Still Need Help?</h3>

                <p>
                  If the available answers didn't solve
                  your problem, submit your doubt
                  directly to a live tutor and receive
                  personalized guidance.
                </p>
              </div>

              <button
                className="ask-tutor-btn"
                onClick={handleTeacherRequest}
              >
                <FiSend className="btn-icon" />
                <span>Submit to Teacher</span>
              </button>
            </div>
          </section>
        )}
      </main>

      <Navbar />
    </div>
  );
}

export default Doubts;
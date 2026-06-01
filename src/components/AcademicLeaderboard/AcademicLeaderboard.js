import "./AcademicLeaderboard.css";

const AcademicLeaderboard = () => {
  const champion = {
    name: "Aryan Sharma",
    score: "98.7%",
    title: "Weekly Academic Champion",
  };

  const subjectKings = [
    {
      emoji: "📐",
      subject: "Mathematics",
      name: "Rohan Singh",
      score: "99%",
    },
    {
      emoji: "⚛️",
      subject: "Physics",
      name: "Ananya Gupta",
      score: "98%",
    },
    {
      emoji: "🧪",
      subject: "Chemistry",
      name: "Megha Patel",
      score: "97%",
    },
    {
      emoji: "💻",
      subject: "Programming",
      name: "Kunal Mehta",
      score: "100%",
    },
  ];

  const topTen = [
    "Aryan Sharma",
    "Neeraj Verma",
    "Ananya Gupta",
    "Rohan Singh",
    "Megha Patel",
    "Kunal Mehta",
    "Pooja Sharma",
    "Vivek Jain",
    "Rahul Verma",
    "Priya Gupta",
  ];

  return (
    <div className="academic-page">

      {/* HALL OF FAME */}

      <div className="hall-of-fame">

        <div className="champion-glow" />
        <div className="champion-glow champion-glow--alt" />

        <div className="hall-inner">

          <div className="hall-badge">
            🏆 Hall of Scholars
          </div>

          <h1>Academic Excellence Board</h1>

          <p className="hall-subtitle">
            Recognizing the highest achievers of the week.
          </p>

          <div className="champion-card">

            <img
              src={`https://api.dicebear.com/7.x/initials/svg?seed=${champion.name}`}
              alt={champion.name}
            />

            <div className="champion-meta">

              <div className="champion-pill">
                Champion
              </div>

              <h2>{champion.name}</h2>

              <h3>{champion.title}</h3>

              <div className="champion-stats">

                <div>
                  <small>Score</small>
                  <div className="champion-score gold">
                    {champion.score}
                  </div>
                </div>

                <div className="divider" />

                <div>
                  <small>Status</small>
                  <div className="champion-score">
                    #1
                  </div>
                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

      {/* SUBJECT CHAMPIONS */}

      <div>

        <div className="section-head">
          <div className="section-title">
            Subject Champions
          </div>

          <div className="section-sub">
            Highest performers in each subject
          </div>
        </div>

        <div className="subject-slider">

          <div className="subject-grid">

            {subjectKings.map((item, index) => (

              <div
                key={index}
                className="subject-card"
              >

                <div className="subject-icon">
                  {item.emoji}
                </div>

                <h4>{item.subject}</h4>

                <h3>{item.name}</h3>

                <span>{item.score}</span>

              </div>

            ))}

          </div>

        </div>

      </div>

      {/* TOP 10 */}

      <div>

        <div className="section-head">
          <div className="section-title">
            Top 10 Scholars
          </div>

          <div className="section-sub">
            Ranked by overall academic performance
          </div>
        </div>

        <div className="top-ten-slider">

          <div className="top-ten-grid">

            {topTen.map((student, index) => (

              <div
                key={index}
                className={`scholar-card ${
                  index === 0 ? "legend-card" : ""
                }`}
              >

                <div className="scholar-rank">
                  #{index + 1}
                </div>

                <img
                  src={`https://api.dicebear.com/7.x/initials/svg?seed=${student}`}
                  alt={student}
                />

                <h4>{student}</h4>

                <div className="scholar-grade">
                  Scholar
                </div>

                <div className="scholar-gpa">
                  <span>{98 - index * 0.5}%</span>
                  <small>Score</small>
                </div>

              </div>

            ))}

          </div>

        </div>

      </div>

      {/* MY RANK */}

      <div className="my-rank-card">

        <div className="my-rank-head">

          <div>

            <h4>Your Position</h4>

            <h1>#17</h1>

            <p>
              Only 2.3% away from entering Top 10
            </p>

          </div>

          <div className="my-rank-meta">

            <div>
              <span>92%</span>
              <small>Average</small>
            </div>

            <div>
              <span>+4</span>
              <small>This Week</small>
            </div>

          </div>

        </div>

        <div className="progress-line">
          <div className="progress-fill" />
        </div>

        <div className="progress-caption">
          You are <strong>78%</strong> of the way to the Top 10.
        </div>

      </div>

    </div>
  );
};

export default AcademicLeaderboard;
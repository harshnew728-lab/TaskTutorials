import "./HomeworkCard.css";

const HomeworkCard = ({
  homework,
  onSelect
}) => {

  const getStatusClass = () => {

    switch (homework.status) {

      case "pending":
        return "status-pending";

      case "submitted":
        return "status-submitted";

      case "checked":
        return "status-checked";

      default:
        return "";

    }

  };

  return (

    <div className="homework-card">

      <div className="homework-card-top">

        <span className="subject-badge">
          {homework.subject}
        </span>

        <span
          className={`homework-status ${getStatusClass()}`}
        >
          {homework.status}
        </span>

      </div>

      <div className="homework-card-content">

        <h3>
          {homework.title}
        </h3>

        <p className="homework-due-date">

          Due: {homework.dueDate}

        </p>

      </div>

      <div className="homework-card-footer">

        <button
          className="homework-action-btn"
          onClick={onSelect}
        >

          {
            homework.status === "pending"
              ? "Submit Homework"
              : homework.status === "submitted"
              ? "View Submission"
              : "View Feedback"
          }

        </button>

      </div>

    </div>

  );

};

export default HomeworkCard;
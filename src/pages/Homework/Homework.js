import "./Homework.css";

import { useState } from "react";

import Navbar from "../../components/Navbar/Navbar";
import SidebarButton from "../../components/SidebarButton/SidebarButton";

import HomeworkCard from "../../components/Homework/HomeworkCard";
import HomeworkUpload from "../../components/Homework/HomeworkUpload";

const Homework = () => {

  const [selectedHomework, setSelectedHomework] =
    useState(null);

  const homeworks = [
    {
      id: 1,
      subject: "Mathematics",
      title: "Exercise 4.2 Questions 1-10",
      dueDate: "8 June 2026",
      status: "pending",
    },
    {
      id: 2,
      subject: "Science",
      title: "Chapter 5 Notes",
      dueDate: "10 June 2026",
      status: "submitted",
    },
    {
      id: 3,
      subject: "English",
      title: "Essay Writing",
      dueDate: "12 June 2026",
      status: "checked",
    },
  ];

  const pendingCount =
    homeworks.filter(
      (hw) => hw.status === "pending"
    ).length;

  const submittedCount =
    homeworks.filter(
      (hw) => hw.status === "submitted"
    ).length;

  const checkedCount =
    homeworks.filter(
      (hw) => hw.status === "checked"
    ).length;

  return (

    <div className="homework-page">

      <SidebarButton />

      <div className="homework-container">

        <div className="homework-header">

          <div className="homework-heading">

            <h1>
              Homework
            </h1>

            <p>
              Submit assignments and track progress
            </p>

          </div>

        </div>

        <div className="homework-stats">

          <div className="stat-card pending-card">

            <span className="stat-value">
              {pendingCount}
            </span>

            <span className="stat-label">
              Pending
            </span>

          </div>

          <div className="stat-card submitted-card">

            <span className="stat-value">
              {submittedCount}
            </span>

            <span className="stat-label">
              Submitted
            </span>

          </div>

          <div className="stat-card checked-card">

            <span className="stat-value">
              {checkedCount}
            </span>

            <span className="stat-label">
              Checked
            </span>

          </div>

        </div>

        <div className="homework-section">

          <div className="section-header">

            <h2>
              Assigned Homework
            </h2>

          </div>

          <div className="homework-grid">

            {homeworks.map((homework) => (

              <HomeworkCard
                key={homework.id}
                homework={homework}
                onSelect={() =>
                  setSelectedHomework(homework)
                }
              />

            ))}

          </div>

        </div>

        {selectedHomework && (

          <div className="upload-section">

            <div className="upload-header">

              <div>

                <h2>
                  Submit Homework
                </h2>

                <p>
                  {selectedHomework.subject}
                </p>

              </div>

              <button
                className="close-upload-btn"
                onClick={() =>
                  setSelectedHomework(null)
                }
              >
                ✕
              </button>

            </div>

            <HomeworkUpload
              homework={selectedHomework}
            />

          </div>

        )}

      </div>

      <Navbar />

    </div>

  );

};

export default Homework;
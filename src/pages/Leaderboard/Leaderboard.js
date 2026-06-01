import "./Leaderboard.css";

import { useState } from "react";

import Navbar from "../../components/Navbar/Navbar";
import SidebarButton from "../../components/SidebarButton/SidebarButton";

import ActivityLeaderboard from "../../components/ActivityLeaderboard/ActivityLeaderboard";
import AcademicLeaderboard from "../../components/AcademicLeaderboard/AcademicLeaderboard";

const Leaderboard = () => {

  const [activeTab, setActiveTab] =
    useState("activity");

  return (

    <div className="leaderboard-page">

      <SidebarButton />

      <div className="leaderboard-container">

        <div className="leaderboard-header">

          <div className="leaderboard-heading">

            <h1>
              Leaderboards
            </h1>

            <p>
              Track rankings and student performance
            </p>

          </div>

          <div className="leaderboard-switch">

            <button
              className={
                activeTab === "activity"
                  ? "switch-option active-switch"
                  : "switch-option"
              }
              onClick={() =>
                setActiveTab("activity")
              }
            >
              Activity
            </button>

            <button
              className={
                activeTab === "academic"
                  ? "switch-option active-switch"
                  : "switch-option"
              }
              onClick={() =>
                setActiveTab("academic")
              }
            >
              Academic
            </button>

          </div>

        </div>

        {
          activeTab === "activity"
            ? <ActivityLeaderboard />
            : <AcademicLeaderboard />
        }

      </div>

      <Navbar />

    </div>

  );

};

export default Leaderboard;
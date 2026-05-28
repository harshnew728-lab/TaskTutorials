import "./ActivityLeaderboard.css";

import { useState } from "react";

import {
  FaFire,
  FaMedal,
  FaTrophy
} from "react-icons/fa";

import {
  IoChevronForward
} from "react-icons/io5";

import Navbar
from "../../components/Navbar/Navbar";

import SidebarButton
from "../../components/SidebarButton/SidebarButton";

const ActivityLeaderboard = () => {

  const [activeTab,setActiveTab] =
    useState("activity");

  const topThree = [

    {
      name:"Aryan Sharma",
      xp:"2,350",
      streak:38
    },

    {
      name:"Neeraj Verma",
      xp:"2,850",
      streak:42
    },

    {
      name:"Megha Patel",
      xp:"2,150",
      streak:35
    }

  ];

  const currentUser = {

    rank:27,
    streak:18,
    attendance:91,
    xp:"1,820"

  };

  const nearbyStudents = [

    {
      rank:25,
      name:"Rohan Singh",
      streak:20,
      attendance:89,
      xp:"1,920"
    },

    {
      rank:26,
      name:"Ananya Gupta",
      streak:19,
      attendance:90,
      xp:"1,870"
    },

    {
      rank:27,
      name:"Neeraj Verma",
      streak:18,
      attendance:91,
      xp:"1,820",
      active:true
    },

    {
      rank:28,
      name:"Kunal Mehta",
      streak:17,
      attendance:88,
      xp:"1,750"
    },

    {
      rank:29,
      name:"Pooja Sharma",
      streak:16,
      attendance:87,
      xp:"1,680"
    }

  ];

  const achievements = [

    {
      icon:"👑",
      title:"Consistency King",
      subtitle:"30 Day Streak"
    },

    {
      icon:"📖",
      title:"Notes Master",
      subtitle:"Opened 100+ Notes"
    },

    {
      icon:"⚡",
      title:"Fast Learner",
      subtitle:"Completed 20+ Quizzes"
    },

    {
      icon:"🎯",
      title:"Quiz Genius",
      subtitle:"90%+ Avg Score"
    },

    {
      icon:"🔥",
      title:"Attendance Hero",
      subtitle:"90%+ Attendance"
    }

  ];

  return (

    <div className="leaderboard-page">

      <SidebarButton />

      <div className="leaderboard-container">

        {/* HEADER */}

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

        {/* ACTIVITY LEADERBOARD */}

        {
          activeTab === "activity" && (

            <>

              {/* PODIUM */}

              <div className="podium-wrapper">

                <div className="podium-card second">

                  <div className="crown">
                    🥈
                  </div>

                  <img
                    src={`https://api.dicebear.com/7.x/initials/svg?seed=${topThree[0].name}`}
                    alt=""
                  />

                  <h3>
                    {topThree[0].name}
                  </h3>

                  <span>
                    ⭐ {topThree[0].xp} XP
                  </span>

                  <p>
                    🔥 {topThree[0].streak} Day Streak
                  </p>

                </div>

                <div className="podium-card first">

                  <div className="crown">
                    👑
                  </div>

                  <img
                    src={`https://api.dicebear.com/7.x/initials/svg?seed=${topThree[1].name}`}
                    alt=""
                  />

                  <h2>
                    {topThree[1].name}
                  </h2>

                  <span>
                    ⭐ {topThree[1].xp} XP
                  </span>

                  <p>
                    🔥 {topThree[1].streak} Day Streak
                  </p>

                </div>

                <div className="podium-card third">

                  <div className="crown">
                    🥉
                  </div>

                  <img
                    src={`https://api.dicebear.com/7.x/initials/svg?seed=${topThree[2].name}`}
                    alt=""
                  />

                  <h3>
                    {topThree[2].name}
                  </h3>

                  <span>
                    ⭐ {topThree[2].xp} XP
                  </span>

                  <p>
                    🔥 {topThree[2].streak} Day Streak
                  </p>

                </div>

              </div>

              {/* CURRENT USER */}

              <div className="current-user-card">

                <div className="rank-box">

                  <h2>
                    {currentUser.rank}
                  </h2>

                </div>

                <div className="current-user-main">

                  <h4>
                    Your Rank
                  </h4>

                  <div className="current-stats">

                    <div>

                      <FaFire />

                      <span>
                        {currentUser.streak}
                      </span>

                      <p>
                        Day Streak
                      </p>

                    </div>

                    <div>

                      <FaMedal />

                      <span>
                        {currentUser.attendance}%
                      </span>

                      <p>
                        Attendance
                      </p>

                    </div>

                    <div>

                      <FaTrophy />

                      <span>
                        {currentUser.xp}
                      </span>

                      <p>
                        Total XP
                      </p>

                    </div>

                  </div>

                </div>

                <button className="next-btn">

                  <IoChevronForward />

                </button>

              </div>

              {/* STUDENTS */}

              <div className="section-header">

                <h3>
                  Students Near You
                </h3>

                <span>
                  View All
                </span>

              </div>

              <div className="students-list">

                {
                  nearbyStudents.map(
                    (student,index) => (

                      <div
                        key={index}
                        className={`student-row ${
                          student.active
                            ? "active-row"
                            : ""
                        }`}
                      >

                        <div className="left">

                          <h4>
                            {student.rank}
                          </h4>

                          <img
                            src={`https://api.dicebear.com/7.x/initials/svg?seed=${student.name}`}
                            alt=""
                          />

                          <h5>
                            {student.name}
                          </h5>

                        </div>

                        <div className="student-stats">

                          <span>
                            🔥 {student.streak}
                          </span>

                          <span>
                            {student.attendance}%
                          </span>

                          <span>
                            ⭐ {student.xp}
                          </span>

                          <IoChevronForward />

                        </div>

                      </div>

                    )
                  )
                }

              </div>

              {/* ACHIEVEMENTS */}

              <div className="section-header">

                <h3>
                  Your Achievements
                </h3>

                <span>
                  View All
                </span>

              </div>

              <div className="achievements-grid">

                {
                  achievements.map(
                    (item,index)=>(

                      <div
                        className="achievement-card"
                        key={index}
                      >

                        <div className="achievement-icon">

                          {item.icon}

                        </div>

                        <h4>
                          {item.title}
                        </h4>

                        <p>
                          {item.subtitle}
                        </p>

                      </div>

                    )
                  )
                }

              </div>

            </>

          )
        }

        {/* ACADEMIC */}

        {
          activeTab === "academic" && (

            <div className="academic-placeholder">

              <div className="placeholder-content">

                <span>
                  📚
                </span>

                <h2>
                  Academic Leaderboard
                </h2>

                <p>
                  Academic leaderboard component
                  will render here.
                </p>

              </div>

            </div>

          )
        }

      </div>

      <Navbar />

    </div>
  );
};

export default ActivityLeaderboard;
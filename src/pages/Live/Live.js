import "./Live.css";

import Navbar from "../../components/Navbar/Navbar";
import Filter from "../../components/Filter/Filter";

import { useNavigate } from "react-router-dom";

import {
  useState,
  useRef
} from "react";

import {
  FiVideo,
  FiClock
} from "react-icons/fi";

function Live() {

  const navigate = useNavigate();

  const sliderRef = useRef(null);

  const [activeSubject, setActiveSubject] =
    useState("All");

  const [showFilters, setShowFilters] =
    useState(false);

  const [sortByTime, setSortByTime] =
    useState(false);

  const classes = [

    {
      id: 1,
      subject: "Physics",
      teacher: "Ravi Sharma",
      time: "6:00 PM",
      topic: "Laws of Motion"
    },

    {
      id: 2,
      subject: "Chemistry",
      teacher: "Rohan Verma",
      time: "9:00 AM",
      topic: "Chemical Bonding"
    },

    {
      id: 3,
      subject: "Maths",
      teacher: "Aman Sir",
      time: "2:00 PM",
      topic: "Trigonometry"
    },

    {
      id: 4,
      subject: "Physics",
      teacher: "Neha Ma'am",
      time: "7:00 AM",
      topic: "Current Electricity"
    },

    {
      id: 5,
      subject: "Maths",
      teacher: "Deepak Sir",
      time: "11:00 AM",
      topic: "Probability"
    },

    {
      id: 6,
      subject: "Chemistry",
      teacher: "Pooja Ma'am",
      time: "4:00 PM",
      topic: "Hydrocarbons"
    },

    {
      id: 7,
      subject: "Physics",
      teacher: "Arvind Sir",
      time: "1:00 PM",
      topic: "Ray Optics"
    },

    {
      id: 8,
      subject: "Maths",
      teacher: "Anjali Ma'am",
      time: "8:00 PM",
      topic: "Matrices"
    },

    {
      id: 9,
      subject: "Chemistry",
      teacher: "Aditya Sir",
      time: "12:00 PM",
      topic: "Periodic Table"
    },

    {
      id: 10,
      subject: "Physics",
      teacher: "Karan Sir",
      time: "10:00 AM",
      topic: "Thermodynamics"
    },
     
  ];

  // TIME CONVERTER

  function convertToMinutes(time) {

    const [timePart, modifier] =
      time.split(" ");

    let [hours, minutes] =
      timePart.split(":").map(Number);

    if (
      modifier === "PM" &&
      hours !== 12
    ) {
      hours += 12;
    }

    if (
      modifier === "AM" &&
      hours === 12
    ) {
      hours = 0;
    }

    return hours * 60 + minutes;
  }

  // FILTERED + SORTED CLASSES

  const filteredClasses =
    [...classes]

      .filter((item) => {

        if (activeSubject === "All")
          return true;

        return (
          item.subject === activeSubject
        );

      })

      .sort((a, b) => {

        if (!sortByTime)
          return 0;

        return (
          convertToMinutes(a.time) -
          convertToMinutes(b.time)
        );

      });

  // FILTER BUTTONS

  const filterButtons = [

    {
      id: 1,
      label: "All",
      active: activeSubject === "All",

      onClick: () =>
        setActiveSubject("All")
    },

    {
      id: 2,
      label: "Physics",
      active:
        activeSubject === "Physics",

      onClick: () =>
        setActiveSubject("Physics")
    },

    {
      id: 3,
      label: "Chemistry",
      active:
        activeSubject === "Chemistry",

      onClick: () =>
        setActiveSubject("Chemistry")
    },

    {
      id: 4,
      label: "Maths",
      active:
        activeSubject === "Maths",

      onClick: () =>
        setActiveSubject("Maths")
    },

    {
      id: 5,
      label: "Biology",
      active:
        activeSubject === "Biology",

      onClick: () =>
        setActiveSubject("Biology")
    }

  ];

  return (

    <div className="live-page">

      {/* HEADER */}

      <div className="top-header">

        <img
          src="https://tse1.mm.bing.net/th/id/OIP.qwylZspe0tt884RHXmhfWgHaHa?pid=Api&P=0&h=180"
          alt="TT Logo"
          className="tt-logo"
        />

        <h2>TASK TUTORIALS</h2>

        <img
          src="https://i.pravatar.cc/300?img=12"
          alt="profile"
          className="profile-image"
          onClick={() =>
            navigate("/profile")
          }
        />

      </div>

      {/* LIVE CARD */}

      <div className="live-card">

        <div className="live-badge">

          ● LIVE NOW

        </div>

        <h1>Xth PCMB</h1>

        <p>
          Physics Live Class with Ravi Sharma
        </p>

        <div className="live-info">

          <span>

            <FiClock />

            12:00 - 1:00 PM

          </span>

          <span>

            Lesson 4/12

          </span>

        </div>

        <button className="join-btn">

          <FiVideo />

          Join Classroom

        </button>

      </div>

      {/* TITLE */}

      <div className="section-title">

        <h2>Upcoming Classes</h2>

      </div>

      {/* FILTER */}

      <Filter

        showFilters={showFilters}

        setShowFilters={
          setShowFilters
        }

        buttons={filterButtons}

        sortLabel="Nearest"

        sortActive={sortByTime}

        onSortClick={() =>
          setSortByTime(!sortByTime)
        }

      />

      {/* CLASSES */}

      <div
        key={`${sortByTime}-${activeSubject}`}
        className="classes-grid"
        ref={sliderRef}
      >

        {
          filteredClasses.length > 0 ? (

            filteredClasses.map((item) => (

              <div
                className="class-card"
                key={item.id}
              >

                <div className="class-top">

                  <h3>
                    {item.subject}
                  </h3>

                  <span>
                    {item.time}
                  </span>

                </div>

                <p>
                  {item.teacher}
                </p>

                <div className="topic">

                  {item.topic}

                </div>

                <button>

                  Remind Me

                </button>

              </div>

            ))

          ) : (

            <div className="no-classes">

              <h3>
                No Classes Found
              </h3>

              <p>
                No live classes are available
                for this filter.
              </p>

            </div>

          )
        }

      </div>

      <Navbar />

    </div>

  );

}

export default Live;
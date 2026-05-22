import "./Recordings.css";

import Navbar from "../../components/Navbar/Navbar";

import Filter from "../../components/Filter/Filter";

import recordingsData from "../../data/recordingsData";

import { useNavigate } from "react-router-dom";

import { useState } from "react";

// import {
//   HiOutlineMenu
// } from "react-icons/hi";

import {
  FiSearch,
  FiVideo
} from "react-icons/fi";

function Recordings() {

  const navigate = useNavigate();

  const [activeSubject, setActiveSubject] =
    useState("All");

  const [showFilters, setShowFilters] =
    useState(false);

  const [searchTerm, setSearchTerm] =
    useState("");

  // FILTERED RECORDINGS

  const filteredRecordings =
    recordingsData.filter((item) => {

      const matchesSubject =
        activeSubject === "All"
          ? true
          : item.subject === activeSubject;

      const matchesSearch =
        item.title
          .toLowerCase()
          .includes(
            searchTerm.toLowerCase()
          );

      return (
        matchesSubject &&
        matchesSearch
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
    }

  ];

  return (

    <div className="recordings-page">

      {/* TOP HEADER */}

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
          onClick={() => navigate("/profile")}
          className="profile-image"
        />

      </div>

      {/* RED SECTION */}

      <div className="recordings-banner">

        <div className="banner-text">

          <h1>Recordings</h1>

          <p>
            Access your live class recordings
          </p>

        </div>

        {/* SEARCH */}

        <div className="banner-search-box">

          <FiSearch className="search-input-icon" />

          <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) =>
              setSearchTerm(e.target.value)
            }
          />

        </div>

      </div>

      {/* FILTER */}

      <Filter

        showFilters={showFilters}

        setShowFilters={
          setShowFilters
        }

        buttons={filterButtons}

      />

      {/* RECORDINGS GRID */}

      <div className="recordings-grid">

        {
          filteredRecordings.length > 0 ? (

            filteredRecordings.map((item) => (

              <div
                className="recording-card"
                key={item.id}
              >

                <div className="video-icon-box">

                  <FiVideo className="video-icon" />

                </div>

                <h3>
                  {item.title}
                </h3>

                <p>
                  ⏺ {item.videos} Videos
                </p>

                <span>
                  {item.time}
                </span>

              </div>

            ))

          ) : (

            <div className="no-recordings">

              <h3>
                No Recordings Found
              </h3>

              <p>
                No recordings available for
                this filter.
              </p>

            </div>

          )
        }

      </div>

      <Navbar />

    </div>

  );

}

export default Recordings;
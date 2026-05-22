import "./Notes.css";

import Navbar from "../../components/Navbar/Navbar";

import Filter from "../../components/Filter/Filter";

import notesData from "../../data/notesData";

import { useNavigate } from "react-router-dom";

import { useState } from "react";

import {
  FiFolder,
  FiSearch
} from "react-icons/fi";

function Notes() {

  const navigate = useNavigate();

  const [activeSubject, setActiveSubject] =
    useState("All");

  const [showFilters, setShowFilters] =
    useState(false);

  const [searchTerm, setSearchTerm] =
    useState("");

  // FILTERED NOTES

  const filteredNotes =
    notesData.filter((item) => {

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

    <div className="notes-page">

      {/* TOP HEADER */}

      <div className="top-header">

        {/* TT LOGO */}

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

      {/* RED BANNER */}

      <div className="notes-banner">

        <div className="banner-text">

          <h1>Smart E-notes</h1>

          <p>
            Access your comprehensive study material
          </p>

        </div>

        {/* SEARCH INPUT */}

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

      {/* NOTES GRID */}

      <div className="notes-grid">

        {
          filteredNotes.length > 0 ? (

            filteredNotes.map((item) => (

              <div
                className="notes-card"
                key={item.id}
              >

                <div className="folder-icon-box">

                  <FiFolder className="folder-icon" />

                </div>

                <h3>
                  {item.title}
                </h3>

                <p>
                  📄 {item.notes} Notes
                </p>

                <span>
                  {item.time}
                </span>

              </div>

            ))

          ) : (

            <div className="no-notes">

              <h3>
                No Notes Found
              </h3>

              <p>
                No notes available for this
                filter.
              </p>

            </div>

          )
        }

      </div>

      <Navbar />

    </div>

  );

}

export default Notes;
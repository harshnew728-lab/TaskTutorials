import "./Profile.css";

import {
  useState,
  useEffect
} from "react";

import {
  useNavigate
} from "react-router-dom";

import Navbar from "../../components/Navbar/Navbar";

import { FiEdit2 } from "react-icons/fi";

import {
  signOut
} from "firebase/auth";

import {
  auth
} from "../../firebase/firebase";

import {
  toast
} from "react-toastify";
import SidebarButton from "../../components/SidebarButton/SidebarButton";

function Profile() {

  const navigate = useNavigate();

  // THEME STATE

  const [darkMode, setDarkMode] =
    useState(
      localStorage.getItem("theme") === "dark"
    );

  // APPLY THEME

  useEffect(() => {

    if (darkMode) {

      document.body.classList.add(
        "dark-theme"
      );

    }

    else {

      document.body.classList.remove(
        "dark-theme"
      );

    }

  }, [darkMode]);

  // TOGGLE THEME

  function handleThemeToggle() {

    const updatedTheme = !darkMode;

    setDarkMode(updatedTheme);

    localStorage.setItem(
      "theme",
      updatedTheme
        ? "dark"
        : "light"
    );

  }

  // LOGOUT

  async function handleLogout() {

    try {

      await signOut(auth);

      toast.success(
        "Logged Out Successfully"
      );

      navigate("/");

    } catch (error) {

      console.log(error);

      toast.error(
        "Logout Failed"
      );

    }

  }

  return (

    <div className="profile-page">

      {/* TOP HEADER */}

      <div className="top-header">

        {/* TT LOGO */}

        <div className="sidebar-wrapper">

  <SidebarButton />

</div>

        <h2>TASK TUTORIALS</h2>

        <img
          src="https://i.pravatar.cc/300?img=12"
          alt="profile"
          className="top-profile-image"
        />

      </div>

      {/* PROFILE SECTION */}

      <div className="profile-section">

        <div className="profile-image-wrapper">

          <img
            src="https://i.pravatar.cc/300?img=12"
            alt="profile"
            className="main-profile-image"
          />

          <button className="edit-btn">

            <FiEdit2 />

          </button>

        </div>

        <h1 className="profile-name">

          Aaryan Sharma

        </h1>

        <div className="student-badge">

          Student

        </div>

      </div>

      {/* STATS */}

      <div className="stats-container">

        <div className="stat-card">

          <div className="stat-icon pink-icon">

            🎓

          </div>

          <h2>24</h2>

          <p>CLASSES</p>

        </div>

        <div className="stat-card">

          <div className="stat-icon green-icon">

            📋

          </div>

          <h2>112</h2>

          <p>TASKS</p>

        </div>

        <div className="stat-card">

          <div className="stat-icon dark-icon">

            ⏰

          </div>

          <h2>86h</h2>

          <p>STUDY</p>

        </div>

      </div>

      {/* ACCOUNT OPTIONS */}

      <div className="section-heading">

        Account Options

      </div>

      <div className="profile-card">

        <div className="profile-option">

          <div className="option-left">

            <div className="option-icon pink-bg">

              👤

            </div>

            <div>

              <h3>Personal Information</h3>

              <p>
                Manage your profile details
              </p>

            </div>

          </div>

          <span>›</span>

        </div>

        <div className="profile-option">

          <div className="option-left">

            <div className="option-icon green-bg">

              📘

            </div>

            <div>

              <h3>My Courses</h3>

              <p>
                View enrolled programs
              </p>

            </div>

          </div>

          <span>›</span>

        </div>

        <div className="profile-option">

          <div className="option-left">

            <div className="option-icon mint-bg">

              💳

            </div>

            <div>

              <h3>Payment History</h3>

              <p>
                Transactions & invoices
              </p>

            </div>

          </div>

          <span>›</span>

        </div>

        <div className="profile-option no-border">

          <div className="option-left">

            <div className="option-icon gray-bg">

              ❓

            </div>

            <div>

              <h3>Help & Support</h3>

              <p>
                FAQs and support
              </p>

            </div>

          </div>

          <span>›</span>

        </div>

      </div>

      {/* SETTINGS */}

      <div className="section-heading">

        App Settings

      </div>

      <div className="profile-card">

        <div className="profile-option">

          <div className="option-left">

            <div className="option-icon gray-bg">

              🌙

            </div>

            <h3>Dark Mode</h3>

          </div>

          <div
            className={
              darkMode
                ? "toggle-switch active"
                : "toggle-switch"
            }
            onClick={handleThemeToggle}
          ></div>

        </div>

        <div className="profile-option no-border">

          <div className="option-left">

            <div className="option-icon gray-bg">

              🔔

            </div>

            <h3>Push Notifications</h3>

          </div>

          <div className="toggle-switch active"></div>

        </div>

      </div>

      {/* LOGOUT */}

      <button
        className="logout-btn"
        onClick={handleLogout}
      >

        ⎋ Log Out

      </button>

      <Navbar />

    </div>

  );

}

export default Profile;
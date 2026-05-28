import "./Navbar.css";

import {
  useNavigate,
  useLocation
} from "react-router-dom";

import {
  RiLiveFill,
  RiVideoFill,
  RiBookOpenFill,
  RiUser3Fill
} from "react-icons/ri";

function Navbar() {

  const navigate = useNavigate();

  const location = useLocation();

  return (

    <div className="bottom-navbar">

      {/* LIVE */}

      <div
        className={
          location.pathname === "/live"
            ? "nav-item active-nav"
            : "nav-item"
        }
        onClick={() => navigate("/live")}
      >

        <div className="nav-icon-wrapper">

          <RiLiveFill className="nav-icon" />

        </div>

        <p>Live</p>

      </div>

      {/* RECORDINGS */}

      <div
        className={
          location.pathname === "/recordings"
            ? "nav-item active-nav"
            : "nav-item"
        }
        onClick={() =>
          navigate("/recordings")
        }
      >

        <div className="nav-icon-wrapper">

          <RiVideoFill className="nav-icon" />

        </div>

        <p>Recordings</p>

      </div>

      {/* NOTES */}

      <div
        className={
          location.pathname === "/notes"
            ? "nav-item active-nav"
            : "nav-item"
        }
        onClick={() => navigate("/notes")}
      >

        <div className="nav-icon-wrapper">

          <RiBookOpenFill className="nav-icon" />

        </div>

        <p>Notes</p>

      </div>

      {/* PROFILE */}

      <div
        className={
          location.pathname === "/profile"
            ? "nav-item active-nav"
            : "nav-item"
        }
        onClick={() => navigate("/profile")}
      >

        <div className="nav-icon-wrapper">

          <RiUser3Fill className="nav-icon" />

        </div>

        <p>Profile</p>

      </div>

    </div>

  );

}

export default Navbar;
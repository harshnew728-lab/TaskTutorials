import { useState } from "react";

import { useNavigate } from "react-router-dom";

import {
  FaBars
} from "react-icons/fa";

import {
  IoClose
} from "react-icons/io5";

import "./SidebarButton.css";

const SidebarButton = () => {

  const [open,setOpen] =
    useState(false);

  const navigate = useNavigate();

  const goToLeaderboard = () => {

    navigate("/leaderboard");

    setOpen(false);

  };
  const goToDoubts = () => {
  navigate("/doubts");
  setOpen(false);
};

  return (

    <>

      <button
        className="sidebar-toggle"
        onClick={() =>
          setOpen(true)
        }
      >

        <FaBars />

      </button>

      {
        open && (

          <div
            className="sidebar-overlay"
            onClick={() =>
              setOpen(false)
            }
          />

        )
      }

      <div
        className={`sidebar ${
          open
            ? "show-sidebar"
            : ""
        }`}
      >

        <div className="sidebar-top">

          <h3 className="sidebar-logo">
  Task<span>Tutorials</span>
</h3>

          <button
            className="close-btn"
            onClick={() =>
              setOpen(false)
            }
          >

            <IoClose />

          </button>

        </div>

       <button
  className="sidebar-link"
  onClick={goToLeaderboard}
>
  🏆 Leaderboard
</button>
<button
  className="sidebar-link"
  onClick={goToDoubts}
>
  ❓ Doubts
</button>
<button
  className="sidebar-link"
  onClick={() => {
    navigate("/privacy-policy");
    setOpen(false);
  }}
>
  🔒 Privacy Policy
</button>

<button
  className="sidebar-link"
  onClick={() => {
    navigate("/about");
    setOpen(false);
  }}
>
  ℹ️ About Us
</button>

<div className="sidebar-footer">
  Learn. Build. Grow.
</div>
      </div>
      

    </>

  );
};

export default SidebarButton;
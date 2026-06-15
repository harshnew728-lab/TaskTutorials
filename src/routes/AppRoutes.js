// import {
//   BrowserRouter,
//   Routes,
//   Route,
//   useLocation
// } from "react-router-dom";

// import { useEffect } from "react";

// import Login from "../pages/Login/Login";
// import Signup from "../pages/Signup/Signup";
// import Recordings from "../pages/Recordings/Recordings";
// import Notes from "../pages/Notes/Notes";
// import Profile from "../pages/Profile/Profile";
// import Live from "../pages/Live/Live";

// import ProtectedRoute
//   from "./ProtectedRoute";
// import ScrollToTop from "../components/ScrollToTop";

// // INNER ROUTES COMPONENT

// function AppContent() {

//   const location = useLocation();

//   // HANDLE THEME

//   useEffect(() => {

//     const authPages = [
//       "/",
//       "/signup"
//     ];

//     const isAuthPage =
//       authPages.includes(
//         location.pathname
//       );

//     const savedTheme =
//       localStorage.getItem("theme");

//     if (
//       savedTheme === "dark" &&
//       !isAuthPage
//     ) {

//       document.body.classList.add(
//         "dark-theme"
//       );

//     }

//     else {

//       document.body.classList.remove(
//         "dark-theme"
//       );

//     }

//   }, [location.pathname]);

//   return (

//     <Routes>

//       {/* PUBLIC ROUTES */}

//       <Route
//         path="/"
//         element={<Login />}
//       />

//       <Route
//         path="/signup"
//         element={<Signup />}
//       />

//       {/* PROTECTED ROUTES */}

//       <Route
//         path="/recordings"
//         element={

//           <ProtectedRoute>

//             <Recordings />

//           </ProtectedRoute>

//         }
//       />

//       <Route
//         path="/live"
//         element={

//           <ProtectedRoute>

//             <Live />

//           </ProtectedRoute>

//         }
//       />

//       <Route
//         path="/notes"
//         element={

//           <ProtectedRoute>

//             <Notes />

//           </ProtectedRoute>

//         }
//       />

//       <Route
//         path="/profile"
//         element={

//           <ProtectedRoute>

//             <Profile />

//           </ProtectedRoute>

//         }
//       />

//     </Routes>

//   );

// }

// // MAIN APP ROUTES

// function AppRoutes() {

//   return (
    

//     <BrowserRouter>
//     <ScrollToTop/>
//       <AppContent />

//     </BrowserRouter>

//   );

// }

// export default AppRoutes;


import {
  BrowserRouter,
  Routes,
  Route,
  useLocation
} from "react-router-dom";

import { useEffect } from "react";

import Login from "../pages/Login/Login";
import Signup from "../pages/Signup/Signup";
import Recordings from "../pages/Recordings/Recordings";
import Notes from "../pages/Notes/Notes";
import Profile from "../pages/Profile/Profile";
import Live from "../pages/Live/Live";
import Enrollment from "../pages/Enrollment/Enrollment";
import Homework from "../pages/Homework/Homework";
import Leaderboard
from "../pages/Leaderboard/Leaderboard";
import Doubts from "../pages/Doubts/Doubts";

import ProtectedRoute
  from "./ProtectedRoute";

import ScrollToTop
from "../components/ScrollToTop";

// INNER ROUTES COMPONENT

function AppContent() {

  const location = useLocation();

  // HANDLE THEME

  useEffect(() => {

    const authPages = [
      "/",
      "/signup"
    ];

    const isAuthPage =
      authPages.includes(
        location.pathname
      );

    const savedTheme =
      localStorage.getItem("theme");

    if (
      savedTheme === "dark" &&
      !isAuthPage
    ) {

      document.body.classList.add(
        "dark-theme"
      );

    }

    else {

      document.body.classList.remove(
        "dark-theme"
      );

    }

  }, [location.pathname]);

  return (

    <Routes>

      {/* PUBLIC ROUTES */}

      <Route
        path="/"
        element={<Login />}
      />

      <Route
        path="/signup"
        element={<Signup />}
      />

      {/* PROTECTED ROUTES */}

      <Route
        path="/recordings"
        element={

          <ProtectedRoute>

            <Recordings />

          </ProtectedRoute>

        }
      />

      <Route
        path="/live"
        element={

          <ProtectedRoute>

            <Live />

          </ProtectedRoute>

        }
      />

      <Route
        path="/notes"
        element={

          <ProtectedRoute>

            <Notes />

          </ProtectedRoute>

        }
      />

      <Route
        path="/profile"
        element={

          <ProtectedRoute>

            <Profile />

          </ProtectedRoute>

        }
      />

      {/* LEADERBOARD ROUTE */}

      <Route
        path="/leaderboard"
        element={

          <ProtectedRoute>

             <Leaderboard />

          </ProtectedRoute>

        }
      />
      <Route
  path="/enrollment"
  element={

    <ProtectedRoute>

      <Enrollment />

    </ProtectedRoute>

  }
/>

<Route
        path="/homework"
        element={

          <ProtectedRoute>

            <Homework />

          </ProtectedRoute>

        }
      />
      <Route
        path="/doubts"
        element={

          <ProtectedRoute>

            <Doubts />

          </ProtectedRoute>

        }
      />

    </Routes>

  );

}

// MAIN APP ROUTES

function AppRoutes() {

  return (

    <BrowserRouter>

      <ScrollToTop />

      <AppContent />

    </BrowserRouter>

  );

}

export default AppRoutes;
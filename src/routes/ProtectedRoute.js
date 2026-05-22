import {
  useEffect,
  useState
} from "react";

import {
  Navigate
} from "react-router-dom";

import {
  onAuthStateChanged
} from "firebase/auth";

import {
  auth
} from "../firebase/firebase";

function ProtectedRoute({
  children
}) {

  const [user, setUser] =
    useState(undefined);

  useEffect(() => {

    const unsubscribe =
      onAuthStateChanged(
        auth,
        (currentUser) => {

          setUser(currentUser);

        }
      );

    return () => unsubscribe();

  }, []);

  // LOADING STATE

  if (user === undefined) {

    return null;

  }

  // NOT LOGGED IN

  if (!user) {

    return (
      <Navigate
        to="/"
        state={{
          message:
            "Please login first"
        }}
      />
    );

  }

  // LOGGED IN

  return children;

}

export default ProtectedRoute;
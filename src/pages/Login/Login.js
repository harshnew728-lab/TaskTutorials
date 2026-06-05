import "./Login.css";

import {
  useState,
  useEffect
} from "react";

import {
  useNavigate,
  Link,
  useLocation
} from "react-router-dom";

import {
  FaEye,
  FaEyeSlash
} from "react-icons/fa";

import {
  signInWithEmailAndPassword
} from "firebase/auth";

import { auth } from "../../firebase/firebase";

import {
  toast
} from "react-toastify";

function Login() {

  const navigate = useNavigate();

  const location = useLocation();

  const [formData, setFormData] =
    useState({
      email: "",
      password: ""
    });

  const [errors, setErrors] =
    useState({});

  const [showPassword, setShowPassword] =
    useState(false);

  // SHOW TOAST AFTER REDIRECT

 useEffect(() => {

  if (location.state?.message) {

    toast.error(
      location.state.message
    );

    navigate(
      location.pathname,
      { replace: true }
    );

  }

}, [location, navigate]);
  // HANDLE INPUT CHANGE

  function handleChange(e) {

    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value
    });

    setErrors({
      ...errors,
      [name]: ""
    });

  }

  // VALIDATION

  function validateForm() {

    let newErrors = {};

    // EMAIL

    if (!formData.email.trim()) {

      newErrors.email =
        "Email is required";

    }

    else if (
      !/\S+@\S+\.\S+/.test(
        formData.email
      )
    ) {

      newErrors.email =
        "Enter a valid email";

    }

    // PASSWORD

    if (!formData.password.trim()) {

      newErrors.password =
        "Password is required";

    }

    else if (
      formData.password.length < 6
    ) {

      newErrors.password =
        "Password must be at least 6 characters";

    }

    return newErrors;

  }

  // SUBMIT

  async function handleSubmit(e) {

    e.preventDefault();

    const validationErrors =
      validateForm();

    if (
      Object.keys(validationErrors)
        .length > 0
    ) {

      setErrors(validationErrors);

    }

    else {

      setErrors({});

      try {

        const userCredential =
          await signInWithEmailAndPassword(
            auth,
            formData.email,
            formData.password
          );

        console.log(
          "Login Success",
          userCredential.user
        );

        toast.success(
          "Login Successful"
        );

        navigate("/enrollment");

      } catch (error) {

        console.log(error.message);

        toast.error(
          "Invalid email or password"
        );

      }

    }

  }

  return (

    <div className="login-page">

      {/* CENTER SECTION */}

      <div className="center-logo-section">

        <div className="big-logo">

          <img
            src="https://tse1.mm.bing.net/th/id/OIP.qwylZspe0tt884RHXmhfWgHaHa?pid=Api&P=0&h=180"
            alt="TT Logo"
          />

        </div>

        <h1>Welcome Back</h1>

        <p>
          Continue your learning journey
        </p>

      </div>

      {/* LOGIN CARD */}

      <form
        className="login-card"
        onSubmit={handleSubmit}
      >

        {/* EMAIL */}

        <label>Email</label>

        <input
          type="email"
          name="email"
          placeholder="student@gmail.com"
          value={formData.email}
          onChange={handleChange}
        />

        {
          errors.email && (

            <p className="error-text">

              {errors.email}

            </p>

          )
        }

        {/* PASSWORD */}

        <label>Password</label>

        <div className="password-box">

          <input
            type={
              showPassword
                ? "text"
                : "password"
            }
            name="password"
            placeholder="••••••••"
            value={formData.password}
            onChange={handleChange}
          />

          <button
            type="button"
            className="show-btn"
            onClick={() =>
              setShowPassword(
                !showPassword
              )
            }
          >

            {
              showPassword
                ? <FaEyeSlash />
                : <FaEye />
            }

          </button>

        </div>

        {
          errors.password && (

            <p className="error-text">

              {errors.password}

            </p>

          )
        }

        {/* FORGOT PASSWORD */}

        <p className="forgot-password">

          Forgot Password?

        </p>

        {/* LOGIN BUTTON */}

        <button
          className="login-btn"
          type="submit"
        >

          Sign In

        </button>

        {/* DIVIDER */}

        <div className="login-divider">

          OR CONTINUE WITH

        </div>

        {/* GOOGLE BUTTON */}

        <div className="social-buttons">

          <button
            type="button"
            className="social-btn"
          >

            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg"
              alt="google"
            />

            <span>Google</span>

          </button>

        </div>

      </form>

      {/* SIGNUP */}

      <p className="signup-text">

        Don’t have an account?

        <Link to="/signup">

          <span> Sign Up</span>

        </Link>

      </p>

    </div>

  );

}

export default Login;
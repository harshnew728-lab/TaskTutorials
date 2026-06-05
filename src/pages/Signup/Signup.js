import "./Signup.css";

import { useState } from "react";

import { useNavigate } from "react-router-dom";

import {
  FaEye,
  FaEyeSlash
} from "react-icons/fa";

import {
  createUserWithEmailAndPassword
} from "firebase/auth";

import { auth } from "../../firebase/firebase";

import {
  doc,
  setDoc
} from "firebase/firestore";

import { db } from "../../firebase/firebase";

import {
  toast
} from "react-toastify";

function Signup() {

  const navigate = useNavigate();

  const [formData, setFormData] =
    useState({
      fullName: "",
      email: "",
      password: "",
      confirmPassword: ""
    });

  const [errors, setErrors] =
    useState({});

  const [showPassword, setShowPassword] =
    useState(false);

  const [
    showConfirmPassword,
    setShowConfirmPassword
  ] = useState(false);

  // HANDLE INPUT CHANGE

  function handleChange(e) {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });

  }

  // VALIDATION

  function validateForm() {

    let newErrors = {};

    // NAME

    if (!formData.fullName.trim()) {

      newErrors.fullName =
        "Full name is required";

    }

    // EMAIL

    if (!formData.email.trim()) {

      newErrors.email =
        "Email is required";

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

    // CONFIRM PASSWORD

    if (
      formData.password !==
      formData.confirmPassword
    ) {

      newErrors.confirmPassword =
        "Passwords do not match";

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
          await createUserWithEmailAndPassword(
            auth,
            formData.email,
            formData.password
          );

        await setDoc(
          doc(
            db,
            "users",
            userCredential.user.uid
          ),
          {

            fullName:
              formData.fullName,

            email:
              formData.email,

            createdAt:
              new Date()

          }
        );

        console.log(
          "Signup Success",
          userCredential.user
        );

        toast.success(
          "Account Created Successfully"
        );

        navigate("/enrollment");

      } catch (error) {

        console.log(error.message);

        if (
          error.code ===
          "auth/email-already-in-use"
        ) {

          toast.error(
            "Email already exists"
          );

        }

        else {

          toast.error(
            "Signup Failed"
          );

        }

      }

    }

  }

  return (

    <div className="signup-page">

      <div className="center-logo-section">

        <div className="big-logo">

          <img
            src="https://tse1.mm.bing.net/th/id/OIP.qwylZspe0tt884RHXmhfWgHaHa?pid=Api&P=0&h=180"
            alt="TT Logo"
          />

        </div>

        <h1>Create Account</h1>

        <p>
          Start your learning journey
        </p>

      </div>

      <form
        className="signup-card"
        onSubmit={handleSubmit}
      >

        {/* FULL NAME */}

        <label>Full Name</label>

        <input
          type="text"
          name="fullName"
          placeholder="Enter Full Name"
          value={formData.fullName}
          onChange={handleChange}
        />

        {
          errors.fullName &&

          <p className="error-text">

            {errors.fullName}

          </p>
        }

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
          errors.email &&

          <p className="error-text">

            {errors.email}

          </p>
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
          errors.password &&

          <p className="error-text">

            {errors.password}

          </p>
        }

        {/* CONFIRM PASSWORD */}

        <label>Confirm Password</label>

        <div className="password-box">

          <input
            type={
              showConfirmPassword
                ? "text"
                : "password"
            }
            name="confirmPassword"
            placeholder="••••••••"
            value={formData.confirmPassword}
            onChange={handleChange}
          />

          <button
            type="button"
            className="show-btn"
            onClick={() =>
              setShowConfirmPassword(
                !showConfirmPassword
              )
            }
          >

            {
              showConfirmPassword
                ? <FaEyeSlash />
                : <FaEye />
            }

          </button>

        </div>

        {
          errors.confirmPassword &&

          <p className="error-text">

            {errors.confirmPassword}

          </p>
        }

        {/* BUTTON */}

        <button
          className="signup-btn"
          type="submit"
        >

          Create Account

        </button>

      </form>

      {/* LOGIN TEXT */}

      <p className="login-text">

        Already have an account?

        <span
          onClick={() => navigate("/")}
        >

          {" "}Login

        </span>

      </p>

    </div>

  );

}

export default Signup;
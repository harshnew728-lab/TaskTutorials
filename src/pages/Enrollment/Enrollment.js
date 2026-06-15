import "./Enrollment.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Enrollment() {
  const [step, setStep] = useState(1);
const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    gender: "",
    school: "",
    studentClass: "",

    fatherName: "",
    fatherOccupation: "",
    fatherMobile: "",
    motherMobile: "",
    whatsapp: "",
    address: "",

    board: "",
    stream: "",
    course: "",
    goal: ""
  });

  const courses = [
    {
      id: "pcm-offline",
      title: "PCM Offline",
      fee: "₹2000 / month",
      description:
        "Physical classroom coaching for Physics, Chemistry & Mathematics"
    },
    {
      id: "pcm-online",
      title: "PCM Online",
      fee: "₹1500 / month",
      description:
        "Live online PCM classes with recordings"
    },
    {
      id: "bio-offline",
      title: "Biology Offline",
      fee: "₹2000 / month",
      description:
        "Offline Biology coaching with doubt support"
    },
    {
      id: "bio-online",
      title: "Biology Online",
      fee: "₹1500 / month",
      description:
        "Online Biology classes with recordings"
    }
  ];

  function handleChange(e) {
    const { name, value } = e.target;

    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  }

  const needsStream =
    formData.studentClass === "11" ||
    formData.studentClass === "12";

  function nextStep() {

  if (
    step === 1 &&
    !isStep1Valid
  ) return;

  if (
    step === 2 &&
    !isStep2Valid
  ) return;

  setStep(prev => prev + 1);
}

  function prevStep() {
    setStep(step - 1);
  }

function handleSubmit() {

  if (!isStep3Valid)
    return;

  console.log(formData);

  alert(
    "Enrollment Submitted Successfully 🎉"
  );
  navigate("/live");
}

  const progress =
    step === 1
      ? 33
      : step === 2
      ? 66
      : 100;

     const isStep1Valid = Boolean(
  formData.fullName.trim().length >= 3 &&
  /\S+@\S+\.\S+/.test(formData.email) &&
  formData.gender &&
  formData.school.trim().length >= 3 &&
  formData.studentClass
);

const isStep2Valid = Boolean(
  formData.fatherName.trim().length >= 3 &&
  formData.fatherOccupation.trim() &&
  /^[0-9]{10}$/.test(formData.fatherMobile) &&
  /^[0-9]{10}$/.test(formData.motherMobile) &&
  /^[0-9]{10}$/.test(formData.whatsapp) &&
  formData.address.trim()
);

const isStep3Valid = Boolean(
  formData.board &&
  formData.course &&
  formData.goal &&
  (
    !needsStream ||
    formData.stream
  )
);
  return (
    <div className="enrollment-page">
      <div className="enrollment-hero">
        <div className="hero-content">
          <div className="progress-pill">
            Enrollment Wizard
          </div>

          <h1>
            Complete Your Enrollment
          </h1>

          <p>
            Fill your details in
            three simple steps.
          </p>
        </div>

        <div className="hero-progress">
          <div className="hero-progress-top">
            <span>Progress</span>
            <span>{progress}%</span>
          </div>

          <div className="enrollment-progress-bar">
            <div
              className="enrollment-progress-fill"
              style={{
                width: `${progress}%`
              }}
            />
          </div>

          <div className="steps-bar">
            <div
              className={`step-circle ${
                step >= 1
                  ? "active"
                  : ""
              }`}
            >
              1
            </div>

            <div className="step-line" />

            <div
              className={`step-circle ${
                step >= 2
                  ? "active"
                  : ""
              }`}
            >
              2
            </div>

            <div className="step-line" />

            <div
              className={`step-circle ${
                step >= 3
                  ? "active"
                  : ""
              }`}
            >
              3
            </div>
          </div>
        </div>
      </div>

      <form
        className="enrollment-card"
        // onSubmit={handleSubmit}
      >
        {/* STEP 1 */}

        {step === 1 && (
          <>
            <h2 className="step-title">
              Student Details
            </h2>

            <div className="details-grid">
              <label className="info-card">
                <h4>Full Name</h4>

                <input
                  type="text"
                  name="fullName"
                  value={
                    formData.fullName
                  }
                  onChange={
                    handleChange
                  }
                />
              </label>

              <label className="info-card">
                <h4>Email</h4>

                <input
                  type="email"
                  name="email"
                  value={
                    formData.email
                  }
                  onChange={
                    handleChange
                  }
                />
              </label>

              <label className="info-card">
                <h4>Gender</h4>

                <select
                  name="gender"
                  value={
                    formData.gender
                  }
                  onChange={
                    handleChange
                  }
                >
                  <option value="">
                    Select
                  </option>

                  <option>
                    Male
                  </option>

                  <option>
                    Female
                  </option>
                </select>
              </label>

              <label className="info-card">
                <h4>School</h4>

                <input
                  type="text"
                  name="school"
                  value={
                    formData.school
                  }
                  onChange={
                    handleChange
                  }
                />
              </label>

              <label className="info-card">
                <h4>Class</h4>

                <select
                  name="studentClass"
                  value={
                    formData.studentClass
                  }
                  onChange={
                    handleChange
                  }
                >
                  <option value="">
                    Select
                  </option>

                  {[6,7,8,9,10,11,12]
                    .map(cls => (
                      <option
                        key={cls}
                        value={cls}
                      >
                        Class {cls}
                      </option>
                    ))}
                </select>
              </label>
            </div>
          </>
        )}

        {/* STEP 2 */}

        {step === 2 && (
          <>
            <h2 className="step-title">
              Parent Details
            </h2>

            <div className="details-grid">
              <label className="info-card">
                <h4>
                  Father's Name
                </h4>

                <input
                  type="text"
                  name="fatherName"
                  value={
                    formData.fatherName
                  }
                  onChange={
                    handleChange
                  }
                />
              </label>

              <label className="info-card">
                <h4>
                  Father's Occupation
                </h4>

                <input
                  type="text"
                  name="fatherOccupation"
                  value={
                    formData.fatherOccupation
                  }
                  onChange={
                    handleChange
                  }
                />
              </label>

              <label className="info-card">
                <h4>
                  Father's Mobile
                </h4>

               <input
  type="tel"
  maxLength={10}
  name="fatherMobile"
  value={formData.fatherMobile}
  onChange={(e)=>
    setFormData({
      ...formData,
      fatherMobile:
        e.target.value.replace(
          /\D/g,
          ""
        )
    })
  }
/>
              </label>

              <label className="info-card">
                <h4>
                  Mother's Mobile
                </h4>

               <input
  type="tel"
  maxLength={10}
  name="motherMobile"
  value={
    formData.motherMobile
  }
  onChange={(e)=>
    setFormData({
      ...formData,
      motherMobile:
        e.target.value.replace(
          /\D/g,
          ""
        )
    })
  }
/>
              </label>

              <label className="info-card">
                <h4>
                  Whatsapp Number
                </h4>

                <input
  type="tel"
  maxLength={10}
  name="whatsapp"
  value={
    formData.whatsapp
  }
  onChange={(e)=>
    setFormData({
      ...formData,
      whatsapp:
        e.target.value.replace(
          /\D/g,
          ""
        )
    })
  }
/>
              </label>

              <label className="info-card full-width">
                <h4>Address</h4>

                <textarea
                  rows="4"
                  name="address"
                  value={
                    formData.address
                  }
                  onChange={
                    handleChange
                  }
                />
              </label>
            </div>
          </>
        )}

        {/* STEP 3 */}

        {step === 3 && (
          <>
            <h2 className="step-title">
              Academic Details
            </h2>

            <div className="details-grid">
              <label className="info-card">
                <h4>Board</h4>

                <select
                  name="board"
                  value={
                    formData.board
                  }
                  onChange={
                    handleChange
                  }
                >
                  <option value="">
                    Select
                  </option>

                  <option>
                    CBSE
                  </option>

                  <option>
                    ICSE
                  </option>

                  <option>
                    RBSE
                  </option>

                  <option>
                    State Board
                  </option>
                </select>
              </label>

              {needsStream && (
                <label className="info-card">
                  <h4>Stream</h4>

                  <select
                    name="stream"
                    value={
                      formData.stream
                    }
                    onChange={
                      handleChange
                    }
                  >
                    <option value="">
                      Select
                    </option>

                    <option>
                      PCM
                    </option>

                    <option>
                      PCB
                    </option>

                    <option>
                      Commerce
                    </option>

                    <option>
                      Arts
                    </option>
                  </select>
                </label>
              )}
            </div>

            <div className="subject-section">
              <h3>
                Select Course
              </h3>

              <div className="course-grid">
                {courses.map(
                  course => (
                    <div
                    key={course.id}
  className={`course-card ${
    formData.course === course.id
      ? "active"
      : ""
  }`}
  onClick={() =>
    setFormData({
      ...formData,
      course: course.id
    })
  }
>

  {formData.course === course.id ? (
    <div className="selected-course">

      <p>{course.fee}</p>

      <small>
        {course.description}
      </small>

    </div>
  ) : (

    <h4>{course.title}</h4>

  )}

</div>
                  )
                )}
              </div>
            </div>

            <div className="subject-section">
              <h3>
                Learning Goal
              </h3>

              <div className="goal-grid">
                {[
                  "School Exams",
                  "JEE",
                  "NEET"
                ].map(goal => (
                  <div
                    key={goal}
                    className={`goal-card ${
                      formData.goal ===
                      goal
                        ? "active"
                        : ""
                    }`}
                    onClick={() =>
                      setFormData({
                        ...formData,
                        goal
                      })
                    }
                  >
                    {goal}
                  </div>
                ))}
              </div>
            </div>
          </>
        )}

        <div className="step-actions">
          {step > 1 && (
            <button
              type="button"
              className="secondary-btn"
              onClick={prevStep}
            >
              ← Back
            </button>
          )}

       {step < 3 ? (
  <button
    type="button"
    className="enroll-btn"
    onClick={nextStep}
    disabled={
      (step === 1 &&
        !isStep1Valid) ||

      (step === 2 &&
        !isStep2Valid)
    }
  >
    Continue →
  </button>
) : (
            <button
  type="button"
  className="enroll-btn"
  disabled={!isStep3Valid}
  onClick={handleSubmit}
>
  Complete Enrollment
</button>
          )}
        </div>
      </form>
    </div>
  );
}

export default Enrollment;
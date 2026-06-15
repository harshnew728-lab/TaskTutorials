import "./HomeworkUpload.css";

import { useState } from "react";

const HomeworkUpload = ({
  homework
}) => {

  const [images, setImages] =
    useState([]);

  const handleImageUpload = (
    event
  ) => {

    const files = Array.from(
      event.target.files
    );

    const imagePreviews =
      files.map((file) => ({

        file,

        preview:
          URL.createObjectURL(file)

      }));

    setImages((prev) => [
      ...prev,
      ...imagePreviews
    ]);

  };

  const removeImage = (
    index
  ) => {

    setImages((prev) =>
      prev.filter(
        (_, i) => i !== index
      )
    );

  };

  const handleSubmit = () => {

    if (!images.length) {

      alert(
        "Please upload at least one image."
      );

      return;

    }

    console.log(
      "Homework:",
      homework
    );

    console.log(
      "Images:",
      images
    );

    alert(
      "Homework submitted successfully!"
    );

  };

  return (

    <div className="homework-upload">

      <div className="selected-homework">

        <h3>
          {homework.title}
        </h3>

        <p>
          Due Date:
          {" "}
          {homework.dueDate}
        </p>

      </div>

      <label
        className="upload-box"
      >

        <input
          type="file"
          accept="image/*"
          multiple
          onChange={
            handleImageUpload
          }
        />

        <div className="upload-content">

          <div className="upload-icon">
            📷
          </div>

          <h4>
            Upload Homework Photos
          </h4>

          <p>
            Click here to select
            one or more images
          </p>

        </div>

      </label>

      {images.length > 0 && (

        <div className="preview-grid">

          {images.map(
            (
              image,
              index
            ) => (

              <div
                className="preview-card"
                key={index}
              >

                <img
                  src={
                    image.preview
                  }
                  alt={`Page ${
                    index + 1
                  }`}
                />

                <button
                  className="remove-btn"
                  onClick={() =>
                    removeImage(
                      index
                    )
                  }
                >
                  ✕
                </button>

                <span className="page-number">
                  Page {index + 1}
                </span>

              </div>

            )
          )}

        </div>

      )}

      <button
        className="submit-homework-btn"
        onClick={handleSubmit}
      >
        Submit Homework
      </button>

    </div>

  );

};

export default HomeworkUpload;
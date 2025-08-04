import React from 'react';

const CourseDetails = ({ courses }) => {
  if (!courses || courses.length === 0) {
    return (
      <div className="details-container no-data">
        <h2 className="details-title">Course Details</h2>
        <p>No courses found.</p>
      </div>
    );
  }

  return (
    <div className="details-container">
      <h2 className="details-title">Course Details</h2>
      <div className="details-grid">
        {courses.map((course) => (
          <div key={course.id} className="details-card">
            <h3 className="course-title">{course.title}</h3>
            <p>Published: {course.date}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseDetails;
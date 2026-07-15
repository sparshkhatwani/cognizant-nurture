function CourseDetails(props) {

  return (
    <div>
      <h1>Course Details</h1>

      {props.courses.map(course => (
        <div key={course.id}>
          <h2>{course.name}</h2>

          <h3>{course.date}</h3>
        </div>
      ))}
    </div>
  );

}

export default CourseDetails;
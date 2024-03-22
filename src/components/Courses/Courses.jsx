import PropTypes from "prop-types";
import Course from "../Course/Course";

const Courses = ({ handleAddToCart, courses }) => {
  return (
    <div className="pb-10">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {courses?.map((course, idx) => (
          <Course
            key={idx}
            course={course}
            handleAddToCart={handleAddToCart}
          ></Course>
        ))}
      </div>
    </div>
  );
};

Courses.propTypes = {
  handleAddToCart: PropTypes.func,
  courses: PropTypes.array,
};

export default Courses;

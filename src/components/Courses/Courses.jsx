import Course from "../Course/Course";

const Courses = ({ handleAddToCart, courses }) => {
  return (
    <div className="pb-10">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
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

export default Courses;

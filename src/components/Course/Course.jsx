import PropTypes from "prop-types";
import { IoBookOutline } from "react-icons/io5";
import { FaDollarSign } from "react-icons/fa";

const Course = ({ course, handleAddToCart }) => {
  //   console.log(course);
  const { image, course_title, credit_hour, description, price } = course;
  return (
    <div className="bg-white relative min-h-[400px] shadow-lg  p-3 rounded-lg">
      <div className="">
        <div className="flex justify-center items-center ">
          <img
            className="rounded-lg w-full"
            src={image}
            alt={`Image for ${course_title}`}
          />
        </div>
        <div className="mt-3">
          <div className="">
            <h1 className="text-base font-semibold mb-2">{course_title}</h1>
            <p className="text-[14px] text-[#1C1B1B] mb-2">
              {description?.slice(0, 150)}
            </p>
          </div>
          <div className="flex justify-between items-center gap-2 absolute bottom-[60px]">
            <p className="flex justify-between items-center gap-1">
              <FaDollarSign />
              <span className="text-[#1c1b1bba]">Price : {price}</span>
            </p>

            <p className="flex justify-between items-center gap-1">
              <IoBookOutline />{" "}
              <span className="text-[#1c1b1bba]">
                Credit : {credit_hour} hr
              </span>
            </p>
          </div>
          <div className="px-2 flex justify-center w-full items-end my-2 absolute bottom-0 right-0 ">
            <button
              onClick={() => handleAddToCart(course)}
              className="bg-[#2F80ED] text-white font-semibold w-full py-2 rounded-lg"
            >
              Select
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

Course.propTypes = {
  handleAddToCart: PropTypes.func,
  course: PropTypes.object,
  image: PropTypes.string,
  course_title: PropTypes.string,
  credit_hour: PropTypes.number,
  description: PropTypes.string,
  price: PropTypes.number,
};

export default Course;

import { IoBookOutline } from "react-icons/io5";
import { FaDollarSign } from "react-icons/fa";

const Course = ({ course,handleAddToCart }) => {
  //   console.log(course);
  const { image, id, course_title, credit_hour, description, price } = course;
  return (
    <div className="bg-white  p-3 rounded-lg grid grid-rows-[auto,1fr,auto]">
      <div className="">
        <div className="flex justify-center items-center ">
          <img
            className="rounded-lg"
            src={image}
            alt={`Image for ${course_title}`}
          />
        </div>
        <div className="mt-3">
          <div className="">
            <h1 className="text-lg font-semibold mb-2">{course_title}</h1>
            <p className="text-[14px] text-[#1C1B1B] mb-2">
              {description?.slice(0, 150)}
            </p>
          </div>
          <div className="flex justify-between items-center">
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
          <div className="flex justify-center items-center my-2">
            <button 
            onClick={()=>handleAddToCart(course)}
            className="bg-[#2F80ED] text-white font-semibold w-full py-2 rounded-lg">
              Select
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Course;

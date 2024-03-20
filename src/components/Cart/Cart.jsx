import { useState } from "react";
import { IoBookOutline } from "react-icons/io5";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Cart = ({ carts ,remainingHours,remainingCreditHour,totalPrice}) => {
 

  return (
    <div className="bg-white p-6 rounded-lg">
      <div>
        <h1 className="text-[#2F80ED] text-[18px] font-bold">
          Credit Hour Remaining{" "}
          <span>
            {remainingHours <= 20
              ? remainingHours
              : toast("Credit hour should be greater then 0")}
          </span>{" "}
          hr{" "}
        </h1>
        <hr className="mt-4 text-[#1C1B1B] border-[1px]" />
      </div>
      <div>
        <h1 className="mt-2 text-[#1C1B1B] text-[20px] font-bold">
          Course Name
          <ol className="mt-3">
            {carts?.map((cart, idx) => (
              <li key={idx} className="text-[#1C1B1B] text-[14px] font-normal">
                {/* <span>{idx + 1}</span> {cart?.course_title} */}
                <p className="flex justify-start items-center gap-4 mb-2"><img className="w-7 h-7 rounded-full" src={cart?.image} alt="" /> <span>{cart?.course_title}</span></p>
              </li>
            ))}
          </ol>
        </h1>
      </div>
      <hr className="mt-4 text-[#1C1B1B] border-[1px]" />
      <div className="mt-2">
        <h1 className="text-[#1C1B1B] font-medium text-[16px]">
          Total Credit Hour :{" "}
          <span>
            {" "}
            {remainingCreditHour <= 20
              ? remainingCreditHour
              : (toast.error("Credit hour should not exceed 20"), 20)}{" "}
          </span>
          <ToastContainer />
        </h1>
      </div>
      <hr className="mt-4 text-[#1C1B1B] border-[1px]" />
      <div className="mt-3">
        <h1 className="text-[#1C1B1B] font-semibold">
          Total Price : <span>{totalPrice} </span> USD
        </h1>
      </div>
    </div>
  );
};

export default Cart;

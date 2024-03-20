import { useEffect, useState } from "react";
import "./App.css";
import Cart from "./components/Cart/Cart";
import Courses from "./components/Courses/Courses";
import Header from "./components/Header/Header";
import { toast } from "react-toastify";

function App() {
  const [carts, setCarts] = useState([]);
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetch("courses.json")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);

  const remainingCreditHour = carts?.reduce(
    (total, cart) => total + parseFloat(cart.credit_hour),
    0
  );
  const remainingHours = Math.max(20 - remainingCreditHour, 0);

  const totalPrice = carts
    ?.reduce((total, cart) => total + parseFloat(cart?.price), 0)
    .toFixed(2);

  const handleAddToCart = (course) => {
    const existingCartItem = carts.find((item) => item.id === course.id);
    // console.log(existingCartItem);

    if (existingCartItem ) {
      toast.error(`Cart ${course?.course_title} already exists`);
    } else if (remainingCreditHour + parseFloat(course.credit_hour) > 20) {
      toast.error(`Adding ${course?.course_title} would exceed the credit hour limit.`);
    }else {
      const newCartProduct = [...carts, course];
      setCarts(newCartProduct);
      toast.success(`Added  ${course?.course_title} Successfully to cart`);
    }
  };
  return (
    <div className="max-w-8xl mx-auto px-5 lg:px-10 bg-slate-200">
      <Header />
      <div className="grid grid-cols-1 lg:grid-cols-[6fr_2fr] gap-5">
        <div className="order-last lg:order-first">
          <Courses handleAddToCart={handleAddToCart} courses={courses} />
        </div>
        <div>
          <Cart
            handleAddToCart={handleAddToCart}
            carts={carts}
            remainingCreditHour={remainingCreditHour}
            remainingHours={remainingHours}
            totalPrice={totalPrice}
          />
        </div>
      </div>
    </div>
  );
}

export default App;

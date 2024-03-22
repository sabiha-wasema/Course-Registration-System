import { useEffect, useState } from "react";
import "./App.css";
import Cart from "./components/Cart/Cart";
import Courses from "./components/Courses/Courses";
import Header from "./components/Header/Header";
import { toast } from "react-toastify";
import { addToLocalStorage, getStoredValue } from "./utilities/localStorage";

function App() {
  const [carts, setCarts] = useState([]);
  const [courses, setCourses] = useState([]);


  //  data fetch
  useEffect(() => {
    fetch("courses.json")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);


  // local storage data store
  useEffect(() => {
    // console.log(courses.length)
    if (courses.length > 0) {
      const storedCart = getStoredValue();
      // console.log(storedCart);
      const savedCart = [];
      for (const id of storedCart) {
        // console.log(id);
        const course = courses.find((course) => course.id === id);
        // console.log(course);
        if (course) {
          savedCart.push(course);
        }
      }
      // console.log(savedCart);
      setCarts(savedCart);
    }
  }, [courses]);


  // remaining credit hour calculations
  const remainingCreditHour = carts?.reduce(
    (total, cart) => total + parseFloat(cart.credit_hour),
    0
  );
  const remainingHours = Math.max(20 - remainingCreditHour, 0);


  // total cart product price calculation
  const totalPrice = carts
    ?.reduce((total, cart) => total + parseFloat(cart?.price), 0)
    .toFixed(2);


    // event handler for cart
  const handleAddToCart = (course) => {
    const existingCartItem = carts.find((item) => item.id === course.id);
    // console.log(existingCartItem);

    if (existingCartItem) {
      toast.error(`${course?.course_title} already exists`);
    } else if (remainingCreditHour + parseFloat(course.credit_hour) > 20) {
      toast.error(
        `Adding ${course?.course_title} would exceed the credit hour limit.`
      );
    } else {
      const newCartProduct = [...carts, course];
      setCarts(newCartProduct);
      toast.success(`Added  ${course?.course_title} Successfully to the cart`);
      addToLocalStorage(course.id);
    }
  };
  return (
    <div className=" px-5 lg:px-8 bg-slate-200">
      <Header />
      <div className="grid grid-cols-1 lg:grid-cols-[6fr_2fr] gap-4">
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

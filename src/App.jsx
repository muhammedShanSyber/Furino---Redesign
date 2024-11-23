import { IoSearch } from "react-icons/io5";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FaRegHeart } from "react-icons/fa";
import { BsPersonExclamation } from "react-icons/bs";
import { AiFillDelete } from "react-icons/ai";
import { HiOutlineTrophy } from "react-icons/hi2";
import { RiVerifiedBadgeLine } from "react-icons/ri";
import { GrDeliver } from "react-icons/gr";
import { RiCustomerService2Line } from "react-icons/ri";

import "./App.css";

function App() {
  return (
    <>
      <nav className="bg-white  fixed w-full z-20 top-0 start-0 border-b border-gray-200 ">
        <div className=" flex flex-wrap items-center justify-between mx-auto p-4">
          <div className="flex items-center space-x-3 rtl:space-x-reverse">
            <img src={"public/logo.png"} className="h-8" alt="Flowbite Logo" />
            <span className="self-center text-4xl font-bold whitespace-nowrap text-black">
              Furniro
            </span>
          </div>
          <div className="flex md:order-2  w-fit">
            <BsPersonExclamation className="w-8 h-8 font-bold mr-5" />
            <IoSearch className="w-8 h-8 font-bold mr-5" />
            <FaRegHeart className="w-8 h-8 font-bold mr-5" />
            <AiOutlineShoppingCart className="w-8 h-8 font-bold " />
          </div>
          <div
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-sticky"
          >
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-normal  text-lg bg-white md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 text-black  ">
              <li>
                <a
                  href="#"
                  className="block py-2 font-bold px-3 text-black     "
                  aria-current="page"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 font-bold px-3 text-black     "
                >
                  Shop
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 font-bold px-3 text-black     "
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 font-bold px-3 text-black     "
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="relative">
        {/* Banner Image */}
        <img
          className="h-auto w-full"
          src="public/cartbanner.png"
          alt="Banner Image"
        />
        {/* Logo and Text - Centered */}
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <img src="public/logo.png" className="h-8 mb-2" alt="Flowbite Logo" />
          <span className="text-4xl font-semibold text-black">Cart</span>

          <nav className="flex" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
              <li className="inline-flex items-center">
                <a
                  href="#"
                  className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white"
                >
                  <svg
                    className="w-3 h-3 me-2.5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
                  </svg>
                  Home
                </a>
              </li>
              <li>
                <div className="flex items-center">
                  <svg
                    className="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 6 10"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m1 9 4-4-4-4"
                    />
                  </svg>
                  <a
                    href="#"
                    className="ms-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ms-2 dark:text-gray-400 dark:hover:text-white"
                  >
                    Projects
                  </a>
                </div>
              </li>
              <li aria-current="page">
                <div className="flex items-center">
                  <svg
                    className="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 6 10"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m1 9 4-4-4-4"
                    />
                  </svg>
                  <span className="ms-1 text-sm font-medium text-gray-500 md:ms-2 dark:text-gray-400">
                    Flowbite
                  </span>
                </div>
              </li>
            </ol>
          </nav>
        </div>
      </div>

      <div className="  py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-6">
            <div className="md:w-3/4">
              <div className="bg-white  mb-4">
                <table className="w-full">
                  <thead className="bg-[#F9F1E7]">
                    <tr className="">
                      <th className="text-left font-semibold p-5">Product</th>
                      <th className="text-left font-semibold">Price</th>
                      <th className="text-left font-semibold">Quantity</th>
                      <th className="text-left font-semibold">Subtotal</th>
                    </tr>
                  </thead>

                  <tbody>
                    <tr>
                      <td className="py-4">
                        <div className="flex items-center">
                          <img
                            className="h-20 w-20 mr-4 bg-[#F9F1E7] rounded-lg "
                            src="public/product.png"
                            alt="Product image"
                          />
                          <span className="font-semibold text-gray-600">
                            Asgaard sofa
                          </span>
                        </div>
                      </td>
                      <td className="py-4 text-gray-600">$250,000.00</td>
                      <td className="py-4">
                        <div className="flex items-center">
                          <button className="border rounded-md py-2 px-4 mr-2">
                            <span className="text-center w-8">1</span>
                          </button>
                        </div>
                      </td>
                      <div className="flex">
                        <td className="py-10 flex">$250,000.00</td>
                        <AiFillDelete className="text-[#B88E2F] h-6 w-6 mt-10 ml-10 " />
                      </div>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="md:w-1/4 ">
              <div className="bg-[#F9F1E7]  p-6 justify-center items-center content-center text-center">
                <h2 className="text-3xl font-bold mb-4">Cart Totals</h2>
                <div className="flex justify-between mt-10">
                  <span className="font-semibold text-lg">Subtotal</span>
                  <span className="font-semibold text-lg text-gray-600">
                    $250,000.00
                  </span>
                </div>
                {/* <div className="flex justify-between mb-2">
                  <span>Taxes</span>
                  <span>$1.99</span>
                </div>
                <div className="flex justify-between mb-2">
                  <span>Shipping</span>
                  <span>$0.00</span>
                </div> */}
                {/* <hr className="my-2" /> */}
                <div className="flex justify-between mb-2">
                  <span className="font-semibold text-lg">Total</span>
                  <span className="font-semibold text-xl text-[#B88E2F]">
                    $250,000.00
                  </span>
                </div>
                <button className=" mt-10 bg-none border border-black text-2xl text-black py-3 px-3 rounded-xl  pl-14 pr-14">
                  Check Out
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#F9F1E7] w-full h-80 flex justify-between items-center mt-10 ">
        <div className="flex ml-8">
          <HiOutlineTrophy className="h-20 w-20" />
          <div className="p-2">
            <div className="font-bold text-2xl">High Quality</div>
            <div className="font-bold text-2xl text-[#898989]">
              crafted from top materials
            </div>
          </div>
        </div>
        <div className="flex">
          <RiVerifiedBadgeLine className="h-20 w-20" />
          <div className="p-2">
            <div className="font-bold text-2xl">Warrenty Protection</div>
            <div className="font-bold text-2xl text-[#898989]">
              Over 2 years
            </div>
          </div>
        </div>
        <div className="flex">
          <GrDeliver className="h-20 w-20" />
          <div className="p-2">
            <div className="font-bold text-2xl">Free Shipping</div>
            <div className="font-bold text-2xl text-[#898989]">
              Order over 150$
            </div>
          </div>
        </div>
        <div className="flex mr-8">
          <RiCustomerService2Line className="h-20 w-20" />
          <div className="p-2">
            <div className="font-bold text-2xl">24/7 Support</div>
            <div className="font-bold text-2xl text-[#898989]">
              Dedicated support
            </div>
          </div>
        </div>
      </div>
      <section className="pt-16 pb-7 ">
        <div className="mx-auto  px-20 ">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 xl:gap-24 pb-14 border-b-2 border-gray-200">
            <div className="block w-full lg:max-w-full max-lg:mx-auto">
              <div className="flex flex-col gap-8 w-full lg:max-w-xs ">
                <span className="py-1.5 font-extrabold text-xl max-[470px]:w-full max-[470px]:flex items-center justify-center">
                  Funiro.
                </span>
                <p className="text-base font-normal text-gray-600 max-[470px]:text-center">
                  400 University Drive Suite 200 Coral Gables, FL 33134 USA
                </p>
              </div>
            </div>
            <div className="w-full mx-auto flex flex-col min-[470px]:flex-row max-[470px]:items-center min-[470px]:justify-between gap-6 sm:gap-10 xl:gap-24">
              <div className="">
                <h6 className="text-lg font-bold text-gray-600 mb-7 max-[470px]:text-center">
                  Links
                </h6>
                <ul className="flex flex-col max-[470px]:items-center gap-6">
                  <li>
                    <a
                      href="javascript:;"
                      className="text-base font-semibold max-lg:text-center text-black whitespace-nowrap transition-all duration-300 hover:text-indigo-600 focus-within:outline-0 focus-within:text-indigo-600"
                    >
                      Home
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascript:;"
                      className="text-base font-semibold max-lg:text-center text-black whitespace-nowrap transition-all duration-300 hover:text-indigo-600 focus-within:outline-0 focus-within:text-indigo-600"
                    >
                      Shop
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascript:;"
                      className="text-base font-semibold max-lg:text-center text-black whitespace-nowrap transition-all duration-300 hover:text-indigo-600 focus-within:outline-0 focus-within:text-indigo-600"
                    >
                      About
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascript:;"
                      className="text-base font-semibold max-lg:text-center text-black whitespace-nowrap transition-all duration-300 hover:text-indigo-600 focus-within:outline-0 focus-within:text-indigo-600"
                    >
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
              <div className="">
                <h6 className="text-lg font-bold text-gray-600 max-[470px]:text-center mb-7">
                  Help
                </h6>
                <ul className="flex flex-col max-[470px]:items-center gap-6">
                  <li>
                    <a
                      href="javascript:;"
                      className="text-base font-semibold max-lg:text-center text-black whitespace-nowrap transition-all duration-300 hover:text-indigo-600 focus-within:outline-0 focus-within:text-indigo-600"
                    >
                      Payment Options
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascript:;"
                      className="text-base font-semibold max-lg:text-center text-black whitespace-nowrap transition-all duration-300 hover:text-indigo-600 focus-within:outline-0 focus-within:text-indigo-600"
                    >
                      Returns
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascript:;"
                      className="text-base font-semibold max-lg:text-center text-black whitespace-nowrap transition-all duration-300 hover:text-indigo-600 focus-within:outline-0 focus-within:text-indigo-600"
                    >
                      Privacy Policies
                    </a>
                  </li>
                </ul>
              </div>
              <div className="">
                <h6 className="text-lg font-bold text-gray-600 max-[470px]:text-center mb-7">
                  Newsletter
                </h6>
                <ul className="flex flex-col max-[470px]:items-center gap-6">
                  <li>
                    <div className="flex">
                      <input
                        className="border-b-2 font-semibold border-black"
                        type="text"
                        placeholder="Enter Your Email Address"
                      />{" "}
                      <button className="border-b-2 font-semibold border-black ml-2">
                        SUBSCRIBE
                      </button>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="flex flex-col-reverse gap-5 md:flex-row items-center first-letter:items-center justify-between pt-7">
            <p className="font-normal text-sm text-black">
              2023 furino. All rights reverved
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;

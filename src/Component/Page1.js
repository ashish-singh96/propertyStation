import React from "react";
import { FaFacebook } from "react-icons/fa";
const Page1 = () => {
  return (
    <>
      <div
        className="bg-white"
        style={{
          position: "fixed",
          top: -4,
          left: 0,
          right: 0,
          padding: "5px",
          backgroundColor: "#fff",
          boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
          display: "flex",
          zIndex: 1000,
        }}
      >
        <div className="text-slate-700 relative  flex max-w-screen-xl flex-col overflow-hidden px-4 py-4 md:mx-auto md:flex-row md:items-center">
          <h3 className="flex cursor-pointer items-center whitespace-nowrap text-2xl font-black">
            <span className="mr-2 text-4xl text-cyan-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                role="img"
                width="1em"
                height="1em"
                preserveAspectRatio="xMidYMid meet"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M6.925 16.875Q5.2 16.225 4.1 14.713Q3 13.2 3 11.25q0-1.975.938-3.513Q4.875 6.2 6 5.15q1.125-1.05 2.062-1.6L9 3v2.475q0 .625.45 1.062q.45.438 1.075.438q.35 0 .65-.15q.3-.15.5-.425L12 6q.95.55 1.625 1.35t1.025 1.8l-1.675 1.675q-.05-.6-.287-1.175q-.238-.575-.638-1.05q-.35.2-.738.287q-.387.088-.787.088q-1.1 0-1.987-.612Q7.65 7.75 7.25 6.725q-.95.925-1.6 2.062Q5 9.925 5 11.25q0 .775.275 1.462q.275.688.75 1.213q.05-.5.287-.938q.238-.437.588-.787L9 10.1l2.15 2.1q.05.05.1.125t.1.125l-1.425 1.425q-.05-.075-.087-.125q-.038-.05-.088-.1L9 12.925l-.7.7q-.125.125-.212.287q-.088.163-.088.363q0 .3.175.537q.175.238.45.363ZM9 10.1Zm0 0ZM7.4 22L6 20.6L19.6 7L21 8.4L17.4 12H21v2h-5.6l-.5.5l1.5 1.5H21v2h-2.6l2.1 2.1l-1.4 1.4l-2.1-2.1V22h-2v-4.6l-1.5-1.5l-.5.5V22h-2v-3.6Z"
                />
              </svg>
            </span>
          </h3>
          <input type="checkbox" className="peer hidden" id="navbar-open" />
          <label
            className="absolute top-5 right-7 cursor-pointer md:hidden"
            htmlFor="navbar-open"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </label>
          <div className="peer-checked:mt-8 peer-checked:max-h-56 flex max-h-0 w-full flex-col items-center justify-between overflow-hidden transition-all md:ml-24 md:max-h-full md:flex-row md:items-start">
            <ul className="flex flex-col items-center space-y-2 md:ml-auto md:flex-row md:space-y-0">
              <li className="font-bold md:mr-12">
                <a href="#">Home</a>
              </li>
              <li className="md:mr-12">
                <a href="#overview">Overview</a>
              </li>
              <li className="md:mr-12">
                <a href="#price">Price List</a>
              </li>
              <li className="md:mr-12">
                <a href="#">Floor Plan</a>
              </li>

              <li className="md:mr-12">
                <a href="#amenities">Amenities</a>
              </li>

              <li className="md:mr-12">
                <a href="#location">Location</a>
              </li>

              <li className="md:mr-12">
                <a href="#gallery">Gallery</a>
              </li>

              <li className="md:mr-12">
                <a href="#footer">Contact Us</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div>
        <img
          className="h-auto max-w-full"
          src="https://4sdevelopersgurgaon.com/new/images/banner-2.webp"
          alt="image description"
        />
      </div>
   

      <div className="pt-12 ">
        <div className=" py-6 sm:py-8 lg:py-12 bg-[#49243E]">
          <div className="mx-auto max-w-screen-xl px-4 md:px-8">
            <div className="grid gap-8 md:grid-cols-2 lg:gap-12">
              <div>
                <div className="h-64 overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-auto">
                  <img
                    src="https://4sdevelopersgurgaon.com/new/images/about_image.png"
                    loading="lazy"
                    alt="Photo"
                    className="h-96 sm:h-64 md:h-64 lg:h-96 w-full object-fit object-center"
                  />
                </div>
              </div>
              <div className="md:pt-8 lg:flex lg:flex-col lg:justify-center">
                <p className="text-center font-bold text-green-700 md:text-left">
                  Overview
                </p>
                <h1 className="mb-4 text-center text-2xl font-bold text-black sm:text-3xl md:mb-6 md:text-left">
                  Gurugram’s New Luxury Marvel
                </h1>
                <p className="mb-6 text-white sm:text-lg md:mb-8">
                  The seven towers of 4S The Aurum will rise majestically above
                  the city of Gurugram and the lush, verdant paradise of the
                  Aravalli mountain range. Conceptualized to be a vibrant,
                  lively and open enclave, 4S The Aurum offers an ecosystem that
                  does not just include spaces to live, but to nurture and
                  harbour the warmth of a real community.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="pt-12" id="overview">
        <div className="py-6 sm:py-8 lg:py-12 bg-[#F5E8C7]">
          <div className="mx-auto max-w-screen-xl px-4 md:px-8">
            <div className="grid gap-8 md:grid-cols-2 lg:gap-12">
              <div className="md:pt-8 lg:flex lg:flex-col lg:justify-center">
                <p className="text-center text-lg font-bold text-green-500 md:text-left">
                  Our Highlights
                </p>
                <h1 className="mb-4 text-center text-2xl font-bold text-gray-800 sm:text-3xl md:mb-6 md:text-left">
                  Discover the Finest Features and Finishes
                </h1>
                <div className="w-full mx-5 sm:mx-6 lg:mx-5 md:mx-4 sm:w-full  text-black">
                  <div>
                    <ul
                      className="list-disc"
                      style={{ listStyleType: "circle" }}
                    >
                      <li className="mb-2 text-black">
                        Low-Density High-Rise Development
                      </li>
                      <li className="mb-2 text-black">
                        Number of Storeys: S+36
                      </li>
                      <li className="mb-2 text-black">
                        Equipped with a Clubhouse with Modern Amenities
                      </li>
                      <li className="mb-2 text-black">
                        Car Parks: 2 each in 3BR and 4BR units
                      </li>
                      <li className="mb-2 text-black">
                        All apartments are sun-facing and Aravali-facing
                      </li>

                      <li className="mb-2 text-black">
                        Architect - Hafeej Contractor
                      </li>

                      <li className="mb-2 text-black">
                        Construction - Shapoorji Pallonji
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div>
                <div className="h-64 overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-auto">
                  <img
                    src="https://4sdevelopersgurgaon.com/new/images/highlights.png"
                    loading="lazy"
                    alt="Photo by Martin Sanchez"
                    className="h-96 sm:h-64 md:h-64 lg:h-96 w-full object-fit object-center"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid gap-4 pt-12 " id="gallery">
        <div>
          <img
            className="h-auto max-w-full "
            src="https://www.imkan.ae/sites/default/files/2023-08/rawya%205%20rear%20hero%2001.jpg"
            alt="image1"
          />
        </div>
        <div className="grid grid-cols-5 gap-4">
          <div>
            <img
              className="h-auto max-w-full"
              src="https://images.bayut.com/thumbnails/612682545-1066x800.webp"
              alt="image3"
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full"
              src="https://images.bayut.com/thumbnails/612682545-1066x800.webp"
              alt="image3"
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full"
              src="https://images.bayut.com/thumbnails/612682560-1066x800.webp"
              alt="image3"
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full"
              src="https://images.bayut.com/thumbnails/612682560-1066x800.webp"
              alt="image3"
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full"
              src="https://images.bayut.com/thumbnails/612682558-1066x800.webp"
              alt="image3"
            />
          </div>
        </div>
      </div>

      <div className="pt-12" id="location">
        <img
          className="h-auto w-full"
          src="../Image/location.jpg"
          alt="image description"
        />
      </div>

      <div className="pt-12" id="amenities">
        <div className="flex  bg-[#F5E8C7] p-4 md:h-40">
          {" "}
          <div className="flex flex-col md:flex-row">
            {" "}
            <div className="bg-gray-700 flex items-center justify-center h-28 md:w-40 w-60 px-4 mx-0.5 my-0.5">
              <div className="flex flex-col items-center justify-center">
                <span className="text-white font-medium">
                  Jogging
                  <br />
                  Track
                </span>
              </div>
            </div>
            <div className="bg-gray-700 flex items-center justify-center h-28 md:w-40 w-60 px-4 mx-0.5 my-0.5">
              <div className="flex flex-col items-center justify-center">
                <span className="text-white font-medium">
                  {" "}
                  Co-Working <br />
                  space
                </span>
              </div>
            </div>
            <div className="bg-gray-700 flex items-center justify-center h-28 md:w-40 w-60 px-4 mx-0.5 my-0.5">
              <div className="flex flex-col items-center justify-center">
                <span className="text-white font-medium">
                  {" "}
                  Badminton
                  <br />
                  Court
                </span>
              </div>
            </div>
            <div className="bg-gray-700 flex items-center justify-center h-28 md:w-40 w-60 px-4 mx-0.5 my-0.5">
              <div className="flex flex-col items-center justify-center">
                <span className="text-white font-medium">
                  {" "}
                  Bank
                  <br />
                  ATM
                </span>
              </div>
            </div>
            <div className="bg-gray-700 flex items-center justify-center h-28 md:w-40 w-60 px-4 mx-0.5 my-0.5">
              <div className="flex flex-col items-center justify-center">
                <span className="text-white font-medium">
                  {" "}
                  Basketball <br />
                  court
                </span>
              </div>
            </div>
            <div className="bg-gray-700 flex items-center justify-center h-28 md:w-40 w-60 px-4 mx-0.5 my-0.5">
              <div className="flex flex-col items-center justify-center">
                <span className="text-white font-medium">
                  {" "}
                  3-tier <br />
                  security
                </span>
              </div>
            </div>
            <div className="bg-gray-700 flex items-center justify-center h-28 md:w-40 w-60 px-4 mx-0.5 my-0.5">
              <div className="flex flex-col items-center justify-center">
                <span className="text-white font-medium">
                  indoor Gaming <br />
                  zone
                </span>
              </div>
            </div>
            <div className="bg-gray-700 flex items-center justify-center h-28 md:w-40 w-60 px-4 mx-0.5 my-0.5">
              <div className="flex flex-col items-center justify-center">
                <span className="text-white font-medium">
                  Parking
                  <br />
                  Area
                </span>
              </div>
            </div>
          </div>{" "}
        </div>
      </div>

      <div>
        <div className="pt-4 " id="price">
          <div className="flex flex-col w-full border-black ">
            <div className="flex flex-shrink-0 bg-[#49243E] text-white ">
              <div className="flex items-center justify-center flex-grow w-0 h-10 px-2 border-b  border-black">
                <span>Unit Type</span>
              </div>
              <div className="flex items-center justify-center flex-grow w-0 h-10 px-2 border-b  border-black">
                <span>Unit Size</span>
              </div>

              <div className="flex items-center justify-center flex-grow w-0 h-10 px-2 border-b  border-black">
                <span>Unit Price</span>
              </div>
            </div>

            <div className="overflow-auto">
              <div className="flex flex-shrink-0">
                <div className="flex items-center justify-center flex-grow w-0 lg:h-10 sm:h-auto px-2 border-b  border-black">
                  <span> 2 LDK</span>
                </div>

                <div className="flex items-center justify-center flex-grow w-0 lg:h-10 sm:h-auto px-2 border-b  border-black">
                  <span>1448 - 1479 SQ.FT</span>
                </div>

                <div className="flex items-center justify-center flex-grow w-0 lg:h-10 sm:h-auto px-2 border-b  border-black">
                  <span>2.46 - 3.32 Cr</span>
                </div>
              </div>

              <div className="flex flex-shrink-0">
                <div className="flex items-center justify-center flex-grow w-0 lg:h-10 sm:h-auto px-2 border-b  border-black">
                  <span> 5 LDK</span>
                </div>

                <div className="flex items-center justify-center flex-grow w-0 lg:h-10 sm:h-auto px-2 border-b  border-black">
                  <span>4534 - 6534 SQ.FT</span>
                </div>

                <div className="flex items-center justify-center flex-grow w-0 lg:h-10 sm:h-auto px-2 border-b  border-black">
                  <span>5.46 - 8.32 Cr</span>
                </div>
              </div>

              <div className="flex flex-shrink-0">
                <div className="flex items-center justify-center flex-grow w-0 lg:h-10 sm:h-auto px-2 border-b  border-black">
                  <span> 2 LDK</span>
                </div>

                <div className="flex items-center justify-center flex-grow w-0 lg:h-10 sm:h-auto px-2 border-b  border-black">
                  <span>1448 - 1479 SQ.FT</span>
                </div>

                <div className="flex items-center justify-center flex-grow w-0 lg:h-10 sm:h-auto px-2 border-b  border-black">
                  <span>2.46 - 3.32 Cr</span>
                </div>
              </div>

              <div className="flex flex-shrink-0">
                <div className="flex items-center justify-center flex-grow w-0 lg:h-10 sm:h-auto px-2 border-b  border-black">
                  <span> 5 LDK</span>
                </div>

                <div className="flex items-center justify-center flex-grow w-0 lg:h-10 sm:h-auto px-2 border-b  border-black">
                  <span>4534 - 6534 SQ.FT</span>
                </div>

                <div className="flex items-center justify-center flex-grow w-0 lg:h-10 sm:h-auto px-2 border-b  border-black">
                  <span>5.46 - 8.32 Cr</span>
                </div>
              </div>

              <div className="flex flex-shrink-0">
                <div className="flex items-center justify-center flex-grow w-0 lg:h-10 sm:h-auto px-2 border-b  border-black">
                  <span> 2 LDK</span>
                </div>

                <div className="flex items-center justify-center flex-grow w-0 lg:h-10 sm:h-auto px-2 border-b  border-black">
                  <span>1448 - 1479 SQ.FT</span>
                </div>

                <div className="flex items-center justify-center flex-grow w-0 lg:h-10 sm:h-auto px-2 border-b  border-black">
                  <span>2.46 - 3.32 Cr</span>
                </div>
              </div>

              <div className="flex flex-shrink-0">
                <div className="flex items-center justify-center flex-grow w-0 lg:h-10 sm:h-auto px-2 border-b  border-black">
                  <span> 5 LDK</span>
                </div>

                <div className="flex items-center justify-center flex-grow w-0 lg:h-10 sm:h-auto px-2 border-b  border-black">
                  <span>4534 - 6534 SQ.FT</span>
                </div>

                <div className="flex items-center justify-center flex-grow w-0 lg:h-10 sm:h-auto px-2 border-b  border-black">
                  <span>5.46 - 8.32 Cr</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="pt-12 " id="footer">
        <div className=" bg-[#49243E]">
          <div className="flex items-center justify-center">
            {" "}
            <div className="m-2 w-full max-w-5xl">
              {" "}
              <div className="flex flex-col justify-around md:flex-row items-center">
                {" "}
                <div className="text-black font-semibold m-1">
                  Join Our Newsletter
                </div>{" "}
                <div>
                  {" "}
                  <input
                    type="text"
                    name="Email Address"
                    placeholder="Email Address"
                    className="m-1 bg-gray-300 text-gray-600 h-8"
                  />{" "}
                  <button className="bg-blue-600 p-1 rounded-xl text-white hover:bg-white hover:text-blue-600 ease-in duration-300">
                    {" "}
                    Subscribe{" "}
                  </button>{" "}
                </div>{" "}
                <div>
                  {" "}
                  <a
                    href="#"
                    className="w-9 h-9 rounded-full bg-gray-300 hover:bg-blue-600 hover:text-white mx-1 pt-1 inline-block"
                  >
                    <i className="fa fa-twitter ml-2 p-1" />
                  </a>{" "}
                  <a
                    href="#"
                    className="w-9 h-9 rounded-full bg-gray-300 hover:bg-blue-600 hover:text-white mx-1 pt-1 inline-block"
                  >
                    <i className="fa fa-instagram ml-2 p-1" />
                  </a>{" "}
                  <a
                    href="#"
                    className="w-9 h-9 rounded-full bg-gray-300 hover:bg-blue-600 hover:text-white mx-1 pt-1 inline-block"
                  >
                    <i className="fa fa-facebook ml-2 p-1" />
                  </a>{" "}
                  <a
                    href="#"
                    className="w-9 h-9 rounded-full bg-gray-300 hover:bg-blue-600 hover:text-white mx-1 pt-1 inline-block"
                  >
                    <i className="fa fa-linkedin ml-2 p-1" />
                  </a>{" "}
                  <a
                    href="#"
                    className="w-9 h-9 rounded-full bg-gray-300 hover:bg-blue-600 hover:text-white mx-1 pt-1 inline-block"
                  >
                    <i className="fa fa-quora ml-2 p-1" />
                  </a>{" "}
                </div>{" "}
              </div>{" "}
              <hr className="mt-2" />{" "}
              <div className="flex flex-col items-center justify-around md:flex-row">
                {" "}
                <div className="items-center m-1 justify-items-start w-60">
                  {" "}
                  <h1 className="flex flex-col text-xl text-black font-medium">
                    {" "}
                    Product{" "}
                  </h1>{" "}
                  <a href="#" className="flex text-white">
                    Features
                  </a>{" "}
                  <a href="#" className="flex  text-white">
                    Integrations
                  </a>{" "}
                  <a href="#" className="flex  text-white">
                    Shopify Integrations
                  </a>{" "}
                  <a href="#" className="flex  text-white">
                    Pricing
                  </a>{" "}
                  <a href="#" className="flex  text-white">
                    Chrome Extensions
                  </a>{" "}
                </div>{" "}
                <div className="items-center m-1 justify-start w-60">
                  {" "}
                  <h1 className="flex flex-col text-xl text-black font-medium">
                    {" "}
                    Company{" "}
                  </h1>{" "}
                  <a href="#" className="flex  text-white">
                    Terms
                  </a>{" "}
                  <a href="#" className="flex  text-white">
                    Customers
                  </a>{" "}
                  <a href="#" className="flex  text-white">
                    Blog
                  </a>{" "}
                  <a href="#" className="flex  text-white">
                    Terms of Services
                  </a>{" "}
                  <a href="#" className="flex  text-white">
                    Privacy Policy
                  </a>{" "}
                </div>{" "}
                <div className="items-center m-1 w-60">
                  {" "}
                  <h1 className="flex flex-col text-xl text-black font-medium">
                    {" "}
                    Support{" "}
                  </h1>{" "}
                  <a href="#" className="flex  text-white">
                    Community
                  </a>{" "}
                  <a href="#" className="flex  text-white">
                    Support Customers
                  </a>{" "}
                  <a href="#" className="flex  text-white">
                    Documentations
                  </a>{" "}
                  <a href="#" className="flex  text-white">
                    Service Providers
                  </a>{" "}
                  <a href="#" className="flex  text-white">
                    Email Contact
                  </a>{" "}
                </div>{" "}
                <div className="items-center m-1 w-60 md:-mt-16">
                  {" "}
                  <h1 className="flex flex-col text-xl text-black font-medium">
                    {" "}
                    Contact Us{" "}
                  </h1>{" "}
                  <a href="#" className="flex  text-white">
                    suppport@admin.com
                  </a>{" "}
                  <a href="#" className="flex  text-white">
                    (+251)987-6543-210
                  </a>{" "}
                </div>{" "}
              </div>{" "}
            </div>{" "}
          </div>
        </div>
      </div>
    </>
  );
};

export default Page1;

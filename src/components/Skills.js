// import meter1 from "../assets/img/meter1.svg";
// import meter2 from "../assets/img/meter2.svg";
// import meter3 from "../assets/img/meter3.svg";
// import Carousel from "react-multi-carousel";
// import java from "../assets/img/java.svg";
// import java from "../assets/img/java.svg";
import c from "../assets/img/c-program-icon.svg";
import html from "../assets/img/html.svg";
import javascript from "../assets/img/javascript.svg";
import react from "../assets/img/react.svg";
import dbms from "../assets/img/database.svg";
import tailwind from "../assets/img/tailwind-css.svg";
import chakraUI from "../assets/img/chakra-ui.svg";
import sql from "../assets/img/sql.svg";
import expressjs from "../assets/img/express-js.svg";
import nextjs from "../assets/img/nextjs-icon.svg";
import typescript from "../assets/img/typescript-icon.svg";

import backendImg from "../assets/img/backend.png";
// import "./Sill.css";
import mongoImage from "../assets/img/mongodb-icon.svg";
import nodeJSImage from "../assets/img/node-js.svg";

import "react-multi-carousel/lib/styles.css";
// import arrow1 from "../assets/img/arrow1.svg";
// import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png";

export const Skills = () => {
  // const responsive = {
  //   superLargeDesktop: {
  //     // the naming can be any, depends on you.
  //     breakpoint: { max: 4000, min: 3000 },
  //     items: 5,
  //   },
  //   desktop: {
  //     breakpoint: { max: 3000, min: 1024 },
  //     items: 3,
  //   },
  //   tablet: {
  //     breakpoint: { max: 1024, min: 464 },
  //     items: 2,
  //   },
  //   mobile: {
  //     breakpoint: { max: 464, min: 0 },
  //     items: 1,
  //   },
  // };

  return (
    <section id="skills">
      <div className="container lg:pt-5">
        <div className="text-center">
          <h2 className="text-headingColor font-[800] text-[2.4rem] mb-5">
            Skill Set
          </h2>
          <p className="lg:max-w-[600px] lg:max-auto justify-between text-headingcolor font-[500] text-[16px] leading-7 "></p>
        </div>

        <div className="flex flex-col justify-center sm:py-12">
          <div className="w-full py-3 px-2 sm:max-w-xl sm:mx-auto sm:px-0">
            <div className="relative text-gray-700 antialiased text-sm font-semibold">
              {/* vertical line  */}
              <div className="hidden absolute w-1 sm:block bg-indigo-300 h-full left-1/2 transform-translate-x-1/2"></div>

              <div className="mt-6 sm:mt-0 sm:mb-12">
                <div className="flex items-center flex-col sm:flex-row">
                  <div className="flex justify-start w-full mx-auto items-center">
                    <div className="w-full sm:w-1/2 sm:pr-8">
                      <div
                        data-aos="fade-right"
                        data-aos-duration="1200"
                        className=" p-4 bg-white rounded group shadow 
                                        cursor-pointer ease-in duration-150"
                      >
                        <h3 className="flex items-center text-[20px]">
                          <img
                            className="h-[40px] w-[40px] items-center ml-16 mr-7"
                            src={nextjs}
                            alt="nextjs"
                          ></img>
                          NextJs
                        </h3>
                        {/* <h3 className='text-primaryColor font-[700] text-center mt-3 mb-3 group-hover:text-white group-hover:font[600] text-xl'> */}
                        {/* Java */}
                        {/* <FontAwesomeIcon icon="fa-brands fa-java" /></h3> */}
                      </div>
                    </div>
                  </div>

                  <div
                    className="rounded-full bg-black border-white border-4 w-10 h-10 absolute left-1/2
                                transform -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center justify-center"
                  >
                    <figure>
                      <img src={backendImg} alt="backend" />
                    </figure>
                  </div>
                </div>
              </div>
              <div className="mt-6 sm:mt-0 sm:mb-12">
                <div className="flex items-center flex-col sm:flex-row">
                  <div className="flex justify-end w-full mx-auto items-center">
                    <div className="w-full sm:w-1/2 sm:pl-8">
                      <div
                        data-aos="fade-left"
                        data-aos-duration="1200"
                        className="bg-white p-4 rounded group shadow 
                                        cursor-pointer ease-in duration-150"
                      >
                        <h3 className="flex items-center text-[20px] ">
                          <img
                            className="h-[40px] w-[40px] items-center ml-10 mr-5"
                            src={typescript}
                            alt="typescript"
                          ></img>
                          TypeScript
                        </h3>
                      </div>
                    </div>
                  </div>

                  <div
                    className="rounded-full bg-black border-white border-4 w-10 h-10 absolute left-1/2
                                transform -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center justify-center"
                  >
                    <figure>
                      <img src={backendImg} alt="" />
                    </figure>
                  </div>
                </div>
              </div>

              {/* left card */}
              <div className="mt-6 sm:mt-0 sm:mb-12">
                <div className="flex items-center flex-col sm:flex-row">
                  <div className="flex justify-start w-full mx-auto items-center">
                    <div className="w-full sm:w-1/2 sm:pr-8">
                      <div
                        data-aos="fade-right"
                        data-aos-duration="1200"
                        className=" p-4 bg-white rounded group shadow 
                                        cursor-pointer ease-in duration-150"
                      >
                        <h3 className="flex items-center text-[20px]">
                          <img
                            className="h-[40px] w-[40px] items-center ml-16 mr-7"
                            src={c}
                            alt="java"
                          ></img>
                          C
                        </h3>
                        {/* <h3 className='text-primaryColor font-[700] text-center mt-3 mb-3 group-hover:text-white group-hover:font[600] text-xl'> */}
                        {/* Java */}
                        {/* <FontAwesomeIcon icon="fa-brands fa-java" /></h3> */}
                      </div>
                    </div>
                  </div>

                  <div
                    className="rounded-full bg-black border-white border-4 w-10 h-10 absolute left-1/2
                                transform -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center justify-center"
                  >
                    <figure>
                      <img src={backendImg} alt="backend" />
                    </figure>
                  </div>
                </div>
              </div>

              {/* right card */}
              <div className="mt-6 sm:mt-0 sm:mb-12">
                <div className="flex items-center flex-col sm:flex-row">
                  <div className="flex justify-end w-full mx-auto items-center">
                    <div className="w-full sm:w-1/2 sm:pl-8">
                      <div
                        data-aos="fade-left"
                        data-aos-duration="1200"
                        className="bg-white p-4 rounded group shadow 
                                        cursor-pointer ease-in duration-150"
                      >
                        <h3 className="flex items-center text-[20px] ">
                          <img
                            className="h-[40px] w-[40px] items-center ml-10 mr-5"
                            src={html}
                            alt="html"
                          ></img>
                          HTML & CSS
                        </h3>
                      </div>
                    </div>
                  </div>

                  <div
                    className="rounded-full bg-black border-white border-4 w-10 h-10 absolute left-1/2
                                transform -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center justify-center"
                  >
                    <figure>
                      <img src={backendImg} alt="" />
                    </figure>
                  </div>
                </div>
              </div>

              {/* left card */}
              <div className="mt-6 sm:mt-0 sm:mb-12">
                <div className="flex items-center flex-col sm:flex-row">
                  <div className="flex justify-start w-full mx-auto items-center">
                    <div className="w-full sm:w-1/2 sm:pr-8">
                      <div
                        data-aos="fade-right"
                        data-aos-duration="1200"
                        className="bg-white p-4 rounded group shadow 
                                        cursor-pointer ease-in duration-150"
                      >
                        <h3 className="flex items-center text-[20px] ">
                          <img
                            className="h-[40px] w-[40px] items-center ml-12 mr-5"
                            src={javascript}
                            alt="javascript"
                          ></img>
                          Javascript
                        </h3>
                        {/* <h3 className='text-primaryColor font-[700] text-center mt-3 mb-3 group-hover:text-white group-hover:font[600] text-xl'> */}
                        {/* Java */}
                        {/* <i class="ri-javascript-fill"></i></h3> */}
                      </div>
                    </div>
                  </div>

                  <div
                    className="rounded-full bg-black border-white border-4 w-10 h-10 absolute left-1/2
                                transform -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center justify-center"
                  >
                    <figure>
                      <img src={backendImg} alt="" />
                    </figure>
                  </div>
                </div>
              </div>

              {/* right card */}
              <div className="mt-6 sm:mt-0 sm:mb-12">
                <div className="flex items-center flex-col sm:flex-row">
                  <div className="flex justify-end w-full mx-auto items-center">
                    <div className="w-full sm:w-1/2 sm:pl-8">
                      <div
                        data-aos="fade-left"
                        data-aos-duration="1200"
                        className="bg-white p-4 rounded group shadow 
                                        cursor-pointer ease-in duration-150"
                      >
                        <h3 className="flex items-center text-[20px] ">
                          <img
                            className="h-[40px] w-[40px] items-center ml-14 mr-5"
                            src={react}
                            alt="react"
                          ></img>
                          ReactJs
                        </h3>
                      </div>
                    </div>
                  </div>

                  <div
                    className="rounded-full bg-black border-white border-4 w-10 h-10 absolute left-1/2
                                transform -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center justify-center"
                  >
                    <figure>
                      <img src={backendImg} alt="" />
                    </figure>
                  </div>
                </div>
              </div>

              <div className="mt-6 sm:mt-0 sm:mb-12">
                <div className="flex items-center flex-col sm:flex-row">
                  <div className="flex justify-start w-full mx-auto items-center">
                    <div className="w-full sm:w-1/2 sm:pr-8">
                      <div
                        data-aos="fade-right"
                        data-aos-duration="1200"
                        className="bg-white p-4 rounded group shadow 
                                        cursor-pointer ease-in duration-150"
                      >
                        <h3 className="flex items-center text-[20px] group-hover:">
                          <img
                            className="h-[40px] w-[40px] items-center ml-14 mr-5"
                            src={mongoImage}
                            alt="pyImage"
                          ></img>
                          MongoDB
                        </h3>
                      </div>
                    </div>
                  </div>

                  <div
                    className="rounded-full bg-black border-white border-4 w-10 h-10 absolute left-1/2
                                transform -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center justify-center"
                  >
                    <figure>
                      <img src={backendImg} alt="" />
                    </figure>
                  </div>
                </div>
              </div>

              <div className="mt-6 sm:mt-0 sm:mb-12">
                <div className="flex items-center flex-col sm:flex-row">
                  <div className="flex justify-end w-full mx-auto items-center">
                    <div className="w-full sm:w-1/2 sm:pl-8">
                      <div
                        data-aos="fade-left"
                        data-aos-duration="1200"
                        className="bg-white p-4 rounded group shadow 
                                        cursor-pointer ease-in duration-150"
                      >
                        <h3 className="flex items-center text-[20px] ">
                          <img
                            className="h-[40px] w-[40px] items-center ml-10 mr-5"
                            src={nodeJSImage}
                            alt="html"
                          ></img>
                          NodeJS
                        </h3>
                      </div>
                    </div>
                  </div>

                  <div
                    className="rounded-full bg-black border-white border-4 w-10 h-10 absolute left-1/2
                                transform -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center justify-center"
                  >
                    <figure>
                      <img src={backendImg} alt="" />
                    </figure>
                  </div>
                </div>
              </div>

              <div className="mt-6 sm:mt-0 sm:mb-12">
                <div className="flex items-center flex-col sm:flex-row">
                  <div className="flex justify-start w-full mx-auto items-center">
                    <div className="w-full sm:w-1/2 sm:pr-8">
                      <div
                        data-aos="fade-right"
                        data-aos-duration="1200"
                        className="bg-white p-4 rounded group shadow 
                                        cursor-pointer ease-in duration-150"
                      >
                        <h3 className="flex items-center text-[20px] ">
                          <img
                            className="h-[40px] w-[40px] items-center ml-12 mr-5"
                            src={dbms}
                            alt="javascript"
                          ></img>
                          DBMS
                        </h3>
                        {/* <h3 className='text-primaryColor font-[700] text-center mt-3 mb-3 group-hover:text-white group-hover:font[600] text-xl'> */}
                        {/* Java */}
                        {/* <i class="ri-javascript-fill"></i></h3> */}
                      </div>
                    </div>
                  </div>

                  <div
                    className="rounded-full bg-black border-white border-4 w-10 h-10 absolute left-1/2
                                transform -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center justify-center"
                  >
                    <figure>
                      <img src={backendImg} alt="" />
                    </figure>
                  </div>
                </div>
              </div>

              <div className="mt-6 sm:mt-0 sm:mb-12">
                <div className="flex items-center flex-col sm:flex-row">
                  <div className="flex justify-end w-full mx-auto items-center">
                    <div className="w-full sm:w-1/2 sm:pl-8">
                      <div
                        data-aos="fade-left"
                        data-aos-duration="1200"
                        className="bg-white p-4 rounded group shadow 
                                        cursor-pointer ease-in duration-150"
                      >
                        <h3 className="flex items-center text-[20px] ">
                          <img
                            className="h-[40px] w-[40px] items-center ml-10 mr-5"
                            src={tailwind}
                            alt="html"
                          ></img>
                          Tailwind CSS
                        </h3>
                      </div>
                    </div>
                  </div>

                  <div
                    className="rounded-full bg-black border-white border-4 w-10 h-10 absolute left-1/2
                                transform -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center justify-center"
                  >
                    <figure>
                      <img src={backendImg} alt="" />
                    </figure>
                  </div>
                </div>
              </div>

              <div className="mt-6 sm:mt-0 sm:mb-12">
                <div className="flex items-center flex-col sm:flex-row">
                  <div className="flex justify-start w-full mx-auto items-center">
                    <div className="w-full sm:w-1/2 sm:pr-8">
                      <div
                        data-aos="fade-right"
                        data-aos-duration="1200"
                        className="bg-white p-4 rounded group shadow 
                                        cursor-pointer ease-in duration-150"
                      >
                        <h3 className="flex items-center text-[20px] ">
                          <img
                            className="h-[40px] w-[40px] items-center ml-12 mr-5"
                            src={chakraUI}
                            alt="javascript"
                          ></img>
                          ChakrUI
                        </h3>
                        {/* <h3 className='text-primaryColor font-[700] text-center mt-3 mb-3 group-hover:text-white group-hover:font[600] text-xl'> */}
                        {/* Java */}
                        {/* <i class="ri-javascript-fill"></i></h3> */}
                      </div>
                    </div>
                  </div>

                  <div
                    className="rounded-full bg-black border-white border-4 w-10 h-10 absolute left-1/2
                                transform -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center justify-center"
                  >
                    <figure>
                      <img src={backendImg} alt="" />
                    </figure>
                  </div>
                </div>
              </div>

              <div className="mt-6 sm:mt-0 sm:mb-12">
                <div className="flex items-center flex-col sm:flex-row">
                  <div className="flex justify-end w-full mx-auto items-center">
                    <div className="w-full sm:w-1/2 sm:pl-8">
                      <div
                        data-aos="fade-left"
                        data-aos-duration="1200"
                        className="bg-white p-4 rounded group shadow 
                                        cursor-pointer ease-in duration-150"
                      >
                        <h3 className="flex items-center text-[20px] ">
                          <img
                            className="h-[40px] w-[40px] items-center ml-10 mr-5"
                            src={sql}
                            alt="html"
                          ></img>
                          SQL
                        </h3>
                      </div>
                    </div>
                  </div>

                  <div
                    className="rounded-full bg-black border-white border-4 w-10 h-10 absolute left-1/2
                                transform -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center justify-center"
                  >
                    <figure>
                      <img src={backendImg} alt="" />
                    </figure>
                  </div>
                </div>
              </div>

              <div className="mt-6 sm:mt-0 sm:mb-12">
                <div className="flex items-center flex-col sm:flex-row">
                  <div className="flex justify-start w-full mx-auto items-center">
                    <div className="w-full sm:w-1/2 sm:pr-8">
                      <div
                        data-aos="fade-right"
                        data-aos-duration="1200"
                        className="bg-white p-4 rounded group shadow 
                                        cursor-pointer ease-in duration-150"
                      >
                        <h3 className="flex items-center text-[20px] ">
                          <img
                            className="h-[40px] w-[40px] items-center ml-12 mr-5"
                            src={expressjs}
                            alt="javascript"
                          ></img>
                          ExpressJS
                        </h3>
                        {/* <h3 className='text-primaryColor font-[700] text-center mt-3 mb-3 group-hover:text-white group-hover:font[600] text-xl'> */}
                        {/* Java */}
                        {/* <i class="ri-javascript-fill"></i></h3> */}
                      </div>
                    </div>
                  </div>

                  <div
                    className="rounded-full bg-black border-white border-4 w-10 h-10 absolute left-1/2
                                transform -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center justify-center"
                  >
                    <figure>
                      <img src={backendImg} alt="" />
                    </figure>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="bg" />
    </section>
  );
};

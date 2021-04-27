import React from 'react';
import first from '../../Images/first.jpg';
import second from '../../Images/second.jpg';
import third from '../../Images/third.jpg';
function Landing() {
  return (
    <div className="landing bg-opacity-100">
      <div className=" bg-landing h-10 min-h-screen w-100 bg-gradient-to-bl from gray-400 to gray 100 ">
        <div className="flex justify-between p-10 min-w-20 items-center">
          <div>
            <h1 className="text-white  font-bold  text-4xl md:text-4xl font-bold  ">Sangini</h1>
          </div>
          <div>
            <button className="text-white text-lg font-bold md:text-2xl font-bold">Signin </button>
          </div>
        </div>
        <div className="flex justify-center flex-col items-center text-justify  mt-20">
          <div className="text-white text-3xl text-center md:text-4xl font-bold mt-20  lg:text-4xl  ">
            <span>Explore people with</span>

            <span> great music taste like you</span>
          </div>
          <div className=" flex flex-col md: flex-row justify-between  items-center mt-10 w-full ">
            <button className=" p-2 text-black  text-lg hover:bg-gray-200 focus:outline-none border-none outline-none bg-white rounded-full w-1/2 md:p-4 text-1xl font-bold">
              Signin
            </button>
            <br></br>
            <button className=" p-2 text-black text-lg  hover:bg-gray-200 focus:outline-none  border-none outline-none bg-white rounded-full w-1/2 md:p-4 text-1xl font-bold">
              Signout
            </button>
          </div>
        </div>
      </div>
      <div className="bg-blackish border-gray-800 border-4 flex  flex-col md:flex-row  w-full space-between  lg:p-5 md:p-20 ">
        <div className=" md:w-6/12">
          <div className=" p-10 mt-10 text-white  md:p-20 xl:p-40  ">
            <h1 className="text-4xl">Enjoy on your TV</h1>
            <br></br>
            <span className="mt-20">
              Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.
            </span>
          </div>
        </div>
        <div className=" md:w-6/12">
          <div className=" m-10">
            <div>
              <img
                className=" w-full  h-48  object-contain items-center  md:h-96 w-1/2 object-cover  "
                src={first}></img>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-blackish border-gray-800 border-4 flex  flex-col md:flex-row  w-full space-between lg:p-5 md:p-20 ">
        <div className=" md:w-6/12">
          <div className=" m-10">
            <div>
              <img
                className=" w-full  h-48  object-contain items-center  md:h-96 w-1/2 object-cover  "
                src={second}></img>
            </div>
          </div>
        </div>
        <div className=" md:w-6/12">
          <div className=" p-10 mt-10 text-white  md:p-20 xl:p-40  ">
            <h1 className="text-4xl">Enjoy on your TV</h1>
            <br></br>
            <span className="mt-20">
              Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.
            </span>
          </div>
        </div>
      </div>
      <div className="bg-blackish border-gray-800 border-4 flex  flex-col md:flex-row  w-full space-between lg:p-5 md:p-20 ">
        <div className=" md:w-6/12">
          <div className=" p-10 mt-10 text-white  md:p-20 xl:p-40 ">
            <h1 className="text-4xl">Enjoy on your TV</h1>
            <br></br>
            <span className="mt-20">
              Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.
            </span>
          </div>
        </div>
        <div className=" md:w-6/12">
          <div className=" m-10">
            <div>
              <img
                className=" w-full  h-48  object-contain items-center  md:h-96 w-1/2 object-cover  "
                src={third}></img>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-blackish border-gray-800 border-4">
        <h1 className="text-white text-center">Sangini Pvt Limited</h1>
      </div>
    </div>
  );
}
export default Landing;

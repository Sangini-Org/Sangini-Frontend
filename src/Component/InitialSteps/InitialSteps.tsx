import React, { useState } from 'react';
import { BiAddToQueue } from 'react-icons/bi';
import { FaSpotify, FaToggleOn } from 'react-icons/fa';
import Dropdown from '../Dropdown/Dropdown';
import DatePicker from '../Utils/DatePicker/DatePicker';
import user from '../Utils/Images/user.jpg';
import styles from './InitialSteps.module.css';
//changesteps
const InitialSteps = () => {
  let [currentstep, setcurrentstep] = useState<number>(1);

  //Step1
  const Step1 = () => {
    const [dropdown, setDropdown] = useState(false);
    const [dob, setDob] = useState(false);
    return (
      <div className={`h-full bg-purple-300 text-center flex justify-center mx-auto w-full md:w-1/2`}>
        <div className={`flex my-10 flex-col w-2/3`}>
          <h1 className={` ext-lg p-3 my-1 text-white bg-purple-900 rounded-md btn`}>Basic Information</h1>
          <div className="my-2">
            <form className="w-full h-full">
              <input className={`${styles.inputBox}`} type="text" id="name" name="name" placeholder="FullName" />
              <div>
                <input onClick={() => setDropdown(!dropdown)} className={`${styles.inputBox}`} placeholder="Gender" />
                {dropdown ? <Dropdown dropdown={dropdown} setDropdown={setDropdown} /> : ''}
              </div>
              <div>
                <input onClick={() => setDob(!dob)} className={`${styles.inputBox}`} placeholder="Date Of Birth" />
                {dob ? <DatePicker dropdown={dob} setDropdown={setDob} /> : ''}
              </div>
              <div>
                <input onClick={() => setDropdown(!dropdown)} className={`${styles.inputBox}`} placeholder="City" />
                {dropdown ? <Dropdown dropdown={dropdown} setDropdown={setDropdown} /> : ''}
              </div>
              <div>
                <input onClick={() => setDropdown(!dropdown)} className={`${styles.inputBox}`} placeholder="State" />
                {dropdown ? <Dropdown dropdown={dropdown} setDropdown={setDropdown} /> : ''}
              </div>
              <input className={`${styles.inputBox}`} type="number" id="mobile" name="mobile" placeholder="Mobile" />
              <footer className="flex justify-end mt-20">
                <button
                  className="bg-purple-900 hover:bg-purple-500 rounded-md text-sm btn"
                  type="submit"
                  onClick={() => setcurrentstep(2)}>
                  Done
                </button>
              </footer>
            </form>
          </div>
        </div>
      </div>
    );
  };

  //step2
  const Step2 = () => {
    return (
      <div className={`h-full bg-purple-300 text-center flex justify-center mx-auto w-full md:w-1/2`}>
        <div className={`flex my-10 flex-col w-2/3`}>
          <div className={`flex text-lg justify-center p-3 my-1 rounded-md btn bg-purple-900`}>
            <FaSpotify size="30" className="mr-4" /> <span>Connect Spotify</span>
          </div>
          <div className="my-2">
            <form className="w-full h-full">
              <div className="flex flex-center btn hover:text-green-600">
                <FaToggleOn size="30" />
              </div>

              <input
                className={`${styles.inputBox}`}
                type="text"
                id="musicbio"
                name="musicbio"
                placeholder="Add a Musical Bio"
              />
              <div>
                <input
                  type="search"
                  id="searchsong"
                  name="searchsong"
                  className={`${styles.inputBox}`}
                  placeholder="Add Your Favourite Songs"
                />
              </div>
              <footer className="flex justify-end mt-20">
                <button
                  className="bg-purple-900 hover:bg-purple-500 rounded-md text-sm btn"
                  type="submit"
                  onClick={() => setcurrentstep(3)}>
                  Done
                </button>
              </footer>
            </form>
          </div>
        </div>
      </div>
    );
  };

  // Step3
  const ImageBox = (source: any) => {
    const [selectedImg, setSelectedImg] = useState(['']);
    function handlePreview(e: any) {
      if (e.target.files) {
        const filesArray = Array.from(e.target.files).map((file) => URL.createObjectURL(file));
        setSelectedImg((prevImages) => prevImages.concat(filesArray));
      }
    }

    const renderPhotos = (source: string[]) => {
      return source.map((photo) => {
        if (photo) {
          return (
            <div className={`inline-flex`} key={photo}>
              <img
                className={`w-28 h-28 md:w-32 md:h-32 rounded-md flex flex-col text-center cursor-pointer m-1.5 bg-gray-300`}
                src={photo}
              />
            </div>
          );
        }
      });
    };

    return (
      <div className="flex flex-wrap flex-center">
        {renderPhotos(selectedImg)}
        <label
          className={`${
            selectedImg.length == 5 ? 'hidden' : ''
          } w-24 h-24 flex flex-col flex-center text-center text-sm rounded-md text-purple-500 cursor-pointer m-1.5 bg-white`}
          htmlFor="img">
          <BiAddToQueue size="28" />
          <span className="uppercase">Upload image</span>
          <input type="file" id="img" accept=".jpg, .jpeg, .png, .mov, .mp4" hidden onChange={handlePreview} />
        </label>
      </div>
    );
  };

  const Step3 = () => {
    const [profilePic, setprofilePic] = useState(user);
    function changeProfile(e: any) {
      if (e.target.files) {
        const filesArray = URL.createObjectURL(e.target.files[0]);
        setprofilePic(filesArray);
        URL.revokeObjectURL(e.target.files);
      }
    }
    return (
      <div className={`h-full bg-purple-300 text-center container flex justify-center mx-auto w-full md:w-1/2`}>
        <div className={`flex my-10 flex-col w-2/3`}>
          <div className={`flex justify-center rounded-md bg-purple-900 text-lg p-3 my-1 btn`}>Add Pictures</div>
          <div className="my-2">
            <form className="w-full flex-1 h-full">
              <div className="w-full flex flex-center flex-col">
                <img className="h-32 w-32 md:h-40 md:w-40 rounded-full" src={profilePic} alt="user" />
                <input type="file" id="profilePic" hidden onChange={changeProfile} />
                <label
                  className="h-10 w-10 -mt-8 -mr-20 bg-white rounded-full cursor-pointer"
                  htmlFor="profilePic"></label>
              </div>
              <div className={`flex justify-center text-sm text-white p-1 my-4 bg-purple-900 rounded-md`}>
                Add More Gallery Images
              </div>
              <div className="w-full flex flex-center flex-col">
                {/* <img className="rounded-full" height="100" width="100" src={user} alt="user" /> */}
                <ImageBox />
              </div>
              <footer className="flex justify-between mt-8">
                <button className="hover:bg-purple-500 rounded-md border-2 text-sm btn" type="submit">
                  Skip
                </button>
                <button className=" bg-purple-900 hover:bg-purple-500 rounded-md text-sm btn" type="submit">
                  Done
                </button>
              </footer>
            </form>
          </div>
        </div>
      </div>
    );
  };

  return <>{currentstep === 1 ? <Step1 /> : currentstep === 2 ? <Step2 /> : <Step3 />}</>;
};

export default InitialSteps;

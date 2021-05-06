import React, { useState } from 'react';
import styles from './EditProfile.module.css';
import user from '../Utils/Images/user.jpg';
import Dropdown from '../Dropdown/Dropdown';
import DatePicker from '../Utils/DatePicker/DatePicker';
import { BiAddToQueue } from 'react-icons/all';

type gallery = {
  showGallery: Boolean;
};

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
              className={`w-36 h-36 md:w-44 md:h-44 xl:w-52 xl:h-52 rounded-md flex flex-col text-center cursor-pointer m-1.5 bg-gray-300`}
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
        className="w-36 h-36 flex flex-col flex-center text-center md:w-34 md:h-34 xl:w-52 xl:h-52 text-sm rounded-md text-gray-500 cursor-pointer m-1.5 bg-gray-300"
        htmlFor="img">
        <BiAddToQueue size="28" />
        <span className="uppercase">Upload image</span>
        <input type="file" id="img" accept=".jpg, .jpeg, .png, .mov, .mp4" hidden onChange={handlePreview} />
      </label>
    </div>
  );
};

const Gallery = () => {
  return (
    <form className="w-full px-5">
      <div className="flex flex-wrap flex-row flex-center">
        <ImageBox />
      </div>
      <main className="flex my-8">
        <button className="bg-red-600 mr-1 w-full uppercase rounded-md btn">cancel</button>
        <button className="bg-purple-900 ml-1 w-full uppercase rounded-md btn" type="submit">
          save
        </button>
      </main>
    </form>
  );
};

const Info = () => {
  const [dropdown, setDropdown] = useState(false);
  const [dob, setDob] = useState(false);
  return (
    <form className="w-full px-5">
      <div className={styles.formEl}>
        <label htmlFor="firstName">first name</label>
        <input type="text" id="firstName" name="firstName" />
      </div>
      <div className={styles.formEl}>
        <label htmlFor="lastName">last name</label>
        <input type="text" id="lastName" name="lastName" />
      </div>
      <div className={styles.formEl}>
        <label htmlFor="dob">date of birth</label>
        <p onClick={() => setDob(!dob)} className="mt-2 cursor-pointer text-grey-200 uppercase text-sm">
          25/07/2000
        </p>
        {dob ? <DatePicker dropdown={dob} setDropdown={setDob} /> : ''}
      </div>
      <div className={styles.formEl}>
        <label htmlFor="gender">gender</label>
        <p onClick={() => setDropdown(!dropdown)} className="mt-2 cursor-pointer text-grey-200 uppercase text-sm">
          Female
        </p>
        {dropdown ? <Dropdown dropdown={dropdown} setDropdown={setDropdown} /> : ''}
      </div>
      <h1 className="my-6 mainHeading text-lg uppercase">Address</h1>
      <div className={styles.formEl}>
        <label htmlFor="city">city</label>
        <p onClick={() => setDropdown(!dropdown)} className="mt-2 cursor-pointer text-grey-200 uppercase text-sm">
          Delhi
        </p>
        {dropdown ? <Dropdown dropdown={dropdown} setDropdown={setDropdown} /> : ''}
      </div>
      <div className={styles.formEl}>
        <label htmlFor="state">state</label>
        <p onClick={() => setDropdown(!dropdown)} className="mt-2 cursor-pointer text-grey-200 uppercase text-sm">
          Delhi
        </p>
        {dropdown ? <Dropdown dropdown={dropdown} setDropdown={setDropdown} /> : ''}
      </div>
      <main className="flex my-8">
        <button className="bg-red-600 mr-1 w-full uppercase rounded-md btn">cancel</button>
        <button className="bg-purple-900 ml-1 w-full uppercase rounded-md btn" type="submit">
          save
        </button>
      </main>
    </form>
  );
};

function EditProfile({ showGallery }: gallery) {
  return (
    <div className="min-h-full h-full 2xl:w-1/2 md:w-2/3 md:m-auto">
      <div className="w-full bg-gray-200 flex flex-center flex-col pt-20">
        <img className={`${styles.userImg} rounded-full`} src={user} alt="user" />
        <input type="file" id="profilePic" hidden />
        <label className="h-10 w-10 -mt-8 -mr-20 bg-white rounded-full cursor-pointer" htmlFor="profilePic"></label>
        <p className="pb-4 font-medium text-lg m-3 mb-0">Drishty Pal</p>
      </div>
      <div className="flex-col pt-4 flex flex-center">{showGallery ? <Gallery /> : <Info />}</div>
    </div>
  );
}

export default EditProfile;

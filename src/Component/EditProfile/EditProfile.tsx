import React, { useState } from 'react';
import styles from './EditProfile.module.css';
import user from '../Utils/Images/user.jpg';
import Dropdown from '../Dropdown/Dropdown';

type gallery = {
  showGallery: Boolean;
};

const ImageBox = () => {
  return (
    <div className="inline-flex">
      <input type="file" hidden id="img" />
      <label
        className="w-36 h-36 md:w-44 md:h-44 xl:w-52 xl:h-52 text-sm uppercase rounded-md text-gray-500 flex flex-center cursor-pointer m-1.5 bg-gray-300"
        htmlFor="img">
        upload image
      </label>
    </div>
  );
};

const Gallery = () => {
  return (
    <form className="w-full px-5">
      <div className="flex flex-wrap flex-row flex-center">
        <ImageBox />
        <ImageBox />
        <ImageBox />
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
        <input type="text" id="dob" name="dob" />
      </div>
      <div className={styles.formEl}>
        <label htmlFor="gender">gender</label>
        <input type="text" id="gender" name="gender" />
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
        <input type="text" id="state" name="state" />
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
    <div className="min-h-full 2xl:w-1/2 md:w-2/3 md:m-auto">
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

import React, { useState } from 'react';
import styles from './EditProfile.module.css';
import user from '../Utils/Images/user.jpg';
import { BiAddToQueue } from 'react-icons/all';

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
              className={`w-32 h-32 md:w-36 md:h-36 xl:w-56 xl:h-56 rounded-md flex flex-col text-center cursor-pointer m-1.5 bg-gray-300`}
              src={photo}
            />
          </div>
        );
      }
    });
  };

  return (
    <div className="flex flex-wrap">
      {renderPhotos(selectedImg)}
      <label
        className="w-32 h-32 flex flex-shrink-0 flex-col justify-center items-center text-center md:w-36 md:h-36 xl:w-56 xl:h-56 text-sm rounded-md text-gray-500 cursor-pointer m-1.5 bg-gray-300"
        htmlFor="img">
        <BiAddToQueue size="28" />
        <span>Upload image</span>
        <input type="file" id="img" accept=".jpg, .jpeg, .png, .mov, .mp4" hidden onChange={handlePreview} />
      </label>
    </div>
  );
};

const Gallery = () => {
  return (
    <form className="w-full px-4">
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
  return (
    <form className={`${styles.formWrapper} w-full px-5`}>
      <div>
        <label htmlFor="firstName">first name</label>
        <input type="text" id="firstName" name="firstName" />
      </div>
      <div>
        <label htmlFor="lastName">last name</label>
        <input type="text" id="lastName" name="lastName" />
      </div>
      <div>
        <label htmlFor="dob">date of birth</label>
        <input type="text" id="dob" name="dob" />
      </div>
      <div>
        <label htmlFor="gender">gender</label>
        <input type="text" id="gender" name="gender" />
      </div>
      <h1 className="my-6 mainHeading text-lg uppercase">Address</h1>
      <div>
        <label htmlFor="city">city</label>
        <input type="text" id="city" name="city" />
      </div>
      <div>
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

function EditProfile() {
  const [gallery, setGallery] = useState(false);

  const toggleGalery = () => {
    setGallery((prev) => !prev);
  };

  return (
    <div className="min-h-full 2xl:w-1/2 md:w-2/3 md:m-auto">
      <div className="w-full bg-gray-200 flex flex-center flex-col pt-4">
        <img className={`${styles.userImg} rounded-full`} src={user} alt="user" />
        <input type="file" id="profilePic" hidden />
        <label className="h-10 w-10 -mt-8 -mr-20 bg-white rounded-full cursor-pointer" htmlFor="profilePic"></label>
        <p className="pb-4 font-medium text-lg m-3 mb-0">Drishty Pal</p>
      </div>
      <button onClick={() => setGallery(!gallery)} className="px-5 mt-4 uppercase mainHeading text-md">
        {gallery ? 'edit profile' : 'edit gallery'}
      </button>
      <div className="flex-col pt-4 flex flex-center">{gallery ? <Gallery /> : <Info />}</div>
    </div>
  );
}

export default EditProfile;

function FileArray(FileArray: any): never[] {
  throw new Error('Function not implemented.');
}

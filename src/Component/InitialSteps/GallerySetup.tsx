import React, { useState } from 'react';
import { IoIosAdd, HiOutlineMinusSm } from 'react-icons/all';
import styles from './GallerySetup.module.css';
import { axiosConfig, setAxiosAuthToken } from '../../configs/axios';
import { apiEndPoints } from '../../configs/endpoints';

export default function GallerySetup() {
  const [selectedImg, setSelectedImg] = useState(['']);
  async function handlePreview(e: any) {
    try {
      if (e.target.files) {
        const filesArray = Array.from(e.target.files).map((file) => URL.createObjectURL(file));
        const data = new FormData();
        data.append('file', e.target.files[0]);
        data.append('type', 'gallery');
        console.log(e.target.files[0]);
        console.log(data);
        const result = await axiosConfig.post(apiEndPoints.userImageUpload, data);
        console.log(result);
        setSelectedImg((prevImages) => prevImages.concat(filesArray));
      }
    } catch (err) {}
  }

  function deleteItem(id: any) {
    setSelectedImg((prevItems) => {
      return prevItems.filter((photo, index) => {
        return index !== id;
      });
    });
  }
  const renderPhotos = (source: string[]) => {
    return source.map((photo, id) => {
      if (photo) {
        return (
          <div className={'inline-flex relative'} key={photo}>
            <img
              className="object-cover	dark-sec-bg rounded-xl mx-1.5 w-32 h-44 flex flex-row flex-col-reverse md:w-34 md:h-34 cursor-pointer my-2"
              src={photo}
              key={id}
            />
            <label className={`${styles.img} h-6 w-6 absolute rounded-full cursor-pointer`}>
              <HiOutlineMinusSm
                className={`bg-white ${styles.img} bg-gray-300 h-6 w-6 rounded-full`}
                onClick={() => deleteItem(id)}
              />
            </label>
          </div>
        );
      }
    });
  };

  return (
    <div className={`${styles.container} h-full flex mx-auto md:py-6 flex flex-col`}>
      <h2 className="text-3xl font-medium text-white text-center font-bold mt-14 mb-10 md:mt-20">Add Photos</h2>
      <div className="inline-flex px-2 flex-wrap flex-center md:items-center md:justify-between">
        {renderPhotos(selectedImg)}
        <label
          className={`${
            selectedImg.length < 7 ? '' : 'hidden'
          } dark-sec-bg rounded-xl w-32 h-44 mx-1.5 relative flex flex-row md:w-34 md:h-34 cursor-pointer`}
          htmlFor="img">
          <input type="file" id="image" accept=".jpg, .jpeg, .png, .mov, .mp4" hidden onChange={handlePreview} />
          <label className="h-full w-full absolute rounded-full cursor-pointer" htmlFor="image">
            <div className="text-gray-400 h-full w-full flex flex-center">
              <IoIosAdd size="3rem" />
            </div>
          </label>
        </label>
      </div>
      <div className="px-4 md:px-2">
        <button className="w-full my-10 font-bold rounded-full primary-bg text-white text-xl py-3">Done</button>
      </div>
    </div>
  );
}

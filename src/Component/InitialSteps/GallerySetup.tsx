import React, { useState } from "react";
import { IoIosAdd, HiOutlineMinusSm } from "react-icons/all";
import styles from "./GallerySetup.module.css";

export default function GallerySetup() {
  const [selectedImg, setSelectedImg] = useState([""]);
  function handlePreview(e: any) {
    if (e.target.files) {
      const filesArray = Array.from(e.target.files).map((file) => URL.createObjectURL(file));
      setSelectedImg((prevImages) => prevImages.concat(filesArray));
      console.log(filesArray);
    }
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
          <div className={"inline-flex relative"} key={photo}>
            <img
              className={`${styles.image} w-28 h-48 flex flex-row flex-col-reverse md:w-34 md:h-34 xl:w-34 xl:h-34 cursor-pointer my-5 mx-1.5`}
              src={photo}
              key={id}
            />
            <label className={`${styles.img} h-5 w-5 absolute bg-white rounded-full cursor-pointer bg-gray-500`}>
              <HiOutlineMinusSm
                className={`${styles.icon} ${styles.img} h-5 w-5 rounded-full`}
                onClick={() => deleteItem(id)}
              />
            </label>
          </div>
        );
      }
    });
  };

  return (
    <div className={`${styles.container} h-full flex mx-auto p-6 flex flex-col`}>
      <h2 className="text-3xl font-medium text-white text-center font-bold my-20 xl:my-12">Add Photos</h2>
      <div className="inline-flex flex-wrap md:items-center md:justify-center">
        {renderPhotos(selectedImg)}
        <label
          className={`${selectedImg.length < 7 ? "" : 'hidden'} ${
            styles.image
          } w-28 h-48 flex flex-row flex-col-reverse relative md:w-34 md:h-34 xl:w-34 xl:h-34 cursor-pointer my-5 mx-1.5`}
          htmlFor="img">
          <input type="file" id="image" accept=".jpg, .jpeg, .png, .mov, .mp4" hidden onChange={handlePreview} />
          <label
            className={`${styles.icon_part} h-5 w-5 absolute bg-white rounded-full cursor-pointer`}
            htmlFor="image">
            <IoIosAdd className={`${styles.icon_part} ${styles.icon} h-5 w-5 rounded-full`} />
          </label>
        </label>
      </div>
      <div className="flex flex-1 flex-center relative">
        <button className="w-full absolute bottom-0 mb-10 py-5 font-bold rounded-2xl primary-bg text-white text-xl rounded-full xl:py-3">
          Done
        </button>
      </div>
    </div>
  );
}

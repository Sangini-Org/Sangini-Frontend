import React, { useEffect, useState } from 'react';
import styles from './Explore.module.css';
import userphoto from '../Utils/Images/user.jpg';
import pic from '../Utils/Images/pic.png';
import pic2 from '../Utils/Images/pic2.png';
import { FaHeart, FaSearch } from 'react-icons/fa';
import { useFormState } from 'react-hook-form';
import { axiosConfig, setAxiosAuthToken } from '../../configs/axios';
import { apiEndPoints } from '../../configs/endpoints';
import { useAuthStore } from '../../stores/useAuthStore';

function Explore() {
  const [alluser, setAlluser] = useState([]);
  const userId = useAuthStore((state) => state.userId);

  useEffect(() => {
    setAxiosAuthToken();
    fetchAllUsers();
  }, []);

  const fetchAllUsers = async () => {
    const result = await axiosConfig.get(apiEndPoints.listAllUsers);
    const users = result.data.data.users.filter((user: any) => user.id != userId);
    setAlluser(users);
  };

  const sendFriendRequest = async (id: string) => {
    const result = await axiosConfig.post(apiEndPoints.sendFriendRequest, { id });
    console.log(result);
  };

  // const users = [
  //   {
  //     name: 'Harshit Singh',
  //     photo: pic,
  //     mood: '😎',
  //     bio:
  //       'Cause you said forever, now I drive alone past your street. Cause you said forever, now I drive alone past your street.',
  //   },
  //   {
  //     name: 'Drishty Pal',
  //     photo: pic2,
  //     mood: '😍',
  //     bio: 'Cause you said forever, now I drive alone past your street ',
  //   },
  //   {
  //     name: 'Meghal Bisht',
  //     photo: userphoto,
  //     mood: '😆',
  //     bio: 'Cause you said forever, now I drive alone past your street ',
  //   },
  //   {
  //     name: 'Dholu Bholu',
  //     photo: pic,
  //     mood: '😆',
  //     bio: 'Cause you said forever, now I drive alone past your street ',
  //   },
  //   {
  //     name: 'Harsh',
  //     photo: pic,
  //     mood: '😎',
  //     bio:
  //       'Cause you said forever, now I drive alone past your street. Learned our lessons through the tears. Made memories we knew would never fade',
  //   },
  //   {
  //     name: 'Pranjal Singh',
  //     photo: pic2,
  //     mood: '😍',
  //     bio: 'Learned our lessons through the tears. Made memories we knew would never fade',
  //   },
  //   {
  //     name: 'Mehul Bisht',
  //     photo: userphoto,
  //     mood: '😆',
  //     bio: 'The animals inside came out to play. Went face to face with all our fears',
  //   },
  //   {
  //     name: 'Ranjit Shah',
  //     photo: pic,
  //     mood: '😆',
  //     bio:
  //       'Once upon a younger year. When all our shadows disappeared. Learned our lessons through the tears. Made memories we knew would never fade',
  //   },
  // ];

  return (
    <div className={`flex flex-center justify-center px-4 flex-col m-auto ${styles.baseContainer}`}>
      <h1 className="text-2xl text-white font-bold text-center py-10 md:pt-24">Explore</h1>
      <div className={`p-4 w-full rounded-lg ${styles.searchBox}`}>
        <FaSearch />
        <input className="ml-2 placeholder-white bg-transparent" name="search" placeholder="Search..." />
      </div>
      <div className="my-4 max-h-500 overflow-hidden overflow-y-scroll">
        <div className="ml-1">
          {alluser.map((user: any, i: number) => {
            return (
              <div className={`flex flex-col md:flex-row border-b py-2 w-full mb-2 ${styles.border}`} key={i}>
                <div className="flex md:w-4/6">
                  <img className="h-16 w-16 rounded-full" src={pic} />
                  <div className="px-2">
                    <p className="primary-txt mb-2">{user?.username} </p>
                    <p className="text-white text-xs">Just Checking hey hey i matrix fixing div width</p>
                  </div>
                </div>
                <div className="px-2 py-2 md:w-2/6 flex md:flex-col flex-center">
                  <div className="flex justify-center my-1 mx-4">
                    <button className="rounded-full flex flex-center px-2">
                      <FaHeart className="red-txt" />
                      <p className="ml-2 text-white">52</p>
                    </button>
                  </div>
                  <button className="primary-bg rounded-full py-1 px-6 my-1" onClick={() => sendFriendRequest(user.id)}>
                    Request
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Explore;

import React, { useState, useEffect } from 'react';
import styles from './ProfileUpdate.module.css';
import { FiCamera } from 'react-icons/fi';
import { IoIosArrowDown } from 'react-icons/io';
import Dropdown from '../Utils/Dropdown/Dropdown';
import DatePicker from '../Utils/DatePicker/DatePicker';
import { states, genders } from '../Utils/Static';
import { useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { axiosConfig, setAxiosAuthToken } from '../../configs/axios';
import { apiEndPoints } from '../../configs/endpoints';
import { toast } from 'react-toastify';
import { useProfileStore } from '../../stores/useProfileStore';
import { useAuthStore } from '../../stores/useAuthStore';
import HobbiePicker from './HobbiePicker';

type ProfileData = {
  firstName: string | undefined;
  lastName: string | undefined;
  bio: string | undefined;
  state: string | undefined;
  gender: string | undefined;
  dob: string;
  updateState: string | undefined;
  url: string;
};

function ProfileUpdate() {
  useEffect(() => {
    setAxiosAuthToken();
    fetchInitialProfileData();
  }, []);

  const userId = useAuthStore((state) => state.userId);
  const [userdata, setuserData] = useState<null | ProfileData>(null);
  console.log(userdata);
  const [selectedImg, setSelectedImg] = useState<null | ProfileData>(null);
  const [drop, setDrop] = useState(false);
  const [hobbies, setHobbies] = useState(false);
  const [dropTitle, setDropTitle] = useState('');
  const [dropList, setDropList] = useState(['']);
  const [dobModal, setDobModal] = useState(false);
  const [dp, setDp] = useState('');
  const gender = useProfileStore((state: any) => state.gender);
  const dob = useProfileStore((state: any) => state.dob);
  const state = useProfileStore((state: any) => state.state);

  const { handleSubmit, register } = useForm<ProfileData>();
  const history = useHistory();

  async function fetchInitialProfileData() {
    const result = await axiosConfig.get(apiEndPoints.userProfileData + userId + '/image?type=profile');
    setSelectedImg(result.data.data[0]);
    const profileResult = await axiosConfig.get(apiEndPoints.userProfileData + userId);
    setuserData(profileResult.data.data.user);
  }
  const setGender = () => {
    setDropList(genders);
    setDropTitle('Gender');
    setDrop(true);
  };

  const setState = () => {
    setDropList(states);
    setDropTitle('State');
    setDrop(true);
  };
  async function handlePreview(e: any) {
    try {
      if (e.target.files) {
        const data = new FormData();
        data.append('file', e.target.files[0]);
        data.append('type', 'profile');
        const result = await axiosConfig.post(apiEndPoints.userImageUpload, data);
        console.log(result.data.data);
        setSelectedImg(result.data.data);
      }
    } catch (err) {}
  }

  const onSubmit = async (data: ProfileData): Promise<any> => {
    data.firstName = data.firstName ? data.firstName : userdata?.firstName;
    data.lastName = data.lastName ? data.lastName : userdata?.lastName;
    data.state = state ? state : userdata?.state;
    data.dob = dob ? dob : userdata!.dob;
    data.gender = gender ? gender : userdata?.gender;
    data.updateState = '1';
    console.log(data);
    try {
      const result = await axiosConfig.put(apiEndPoints.profileDataEdit, data);
      if (result.status === 200) {
        history.push('/spotifyconnect');
      }
    } catch (err: any) {
      toast.error(err.response?.data.metadata.message);
      console.log(err);
    }
  };

  return (
    <div className="flex flex-col flex-center px-6">
      {drop ? <Dropdown dropdown={drop} setDropdown={setDrop} dropdownList={dropList} title={dropTitle} /> : ''}
      {dobModal ? <DatePicker dropdown={dobModal} setDropdown={setDobModal} /> : ''}
      <label htmlFor="pp">
        <div className="flex cursor-pointer flex-center justify-center flex-col relative my-14 w-full max-w-450">
          <div className={`box-content h-28 w-28 absolute rounded-3xl px-1 ${styles.gra2}`}></div>
          <div className={`box-content h-28 w-28 absolute rounded-3xl mx-1  ${styles.gra}`}></div>
          <div className="flex flex-center box-content h-28 w-28 bg-white z-10 text-4xl rounded-3xl">
            <input id="pp" type="file" hidden onChange={handlePreview} />
            {selectedImg?.url === '' ? (
              <FiCamera className="text-black" />
            ) : (
              <img className={`dark-sec-bg rounded-xl cursor-pointer h-28 w-28`} src={selectedImg?.url} />
            )}{' '}
          </div>
        </div>
      </label>
      <form className="flex flex-col flex-center text-white w-full max-w-450" onSubmit={handleSubmit(onSubmit)}>
        <div className="w-full mt-2">
          <label className="text-md">First Name</label>
          <input
            className={`outline-none rounded-md dark-sec-bg py-1 mb-5 mt-1 w-full`}
            {...register('firstName')}
            defaultValue={userdata?.firstName}
            required
          />
        </div>
        <div className="w-full mt-2">
          <label className="text-md">Last Name</label>
          <input
            className={`${styles.borderMuted} outline-none rounded-md dark-sec-bg py-1 mb-5 mt-1 w-full`}
            {...register('lastName')}
            defaultValue={userdata?.lastName}
            required
          />
        </div>
        <div className="w-full mt-2">
          <label className="text-md">Gender</label>
          <p
            onClick={setGender}
            className={`cursor-pointer relative flex flex-col ${styles.borderMuted} outline-none rounded-md dark-bg text-sm text-gray-300 py-1 mb-5 mt-1 w-full`}>
            {gender ? gender : userdata ? userdata.gender : 'Select an option'}

            <IoIosArrowDown className="absolute right-0 text-white text-xl" />
          </p>
        </div>
        <div className="w-full mt-2">
          <label className="text-md">DOB</label>
          <p
            onClick={() => setDobModal(true)}
            className={`cursor-pointer relative flex flex-col ${styles.borderMuted} dark-bg text-sm text-gray-300 py-1 mb-5 mt-1 w-full`}>
            {dob ? dob : userdata ? userdata?.dob?.split('T')[0].split('-').reverse().join('-') : 'Select an option'}
            <IoIosArrowDown className="absolute right-0 text-white text-xl" />
          </p>
        </div>
        <div className="w-full mt-2">
          <label className="text-md">State</label>
          <p
            onClick={setState}
            className={`cursor-pointer relative flex flex-col ${styles.borderMuted} dark-bg text-sm text-gray-300 py-1 mb-5 mt-1 w-full`}>
            {state ? state : userdata ? userdata.state : 'Select an option'}
            <IoIosArrowDown className="absolute right-0 text-white text-xl" />
          </p>
        </div>

        {/* hobbie part will do it later */}
        {/* <div className="w-full mt-2">
          <label className="text-md">Interests or hobbies</label>
          <p
            onClick={() => setHobbies(!hobbies)}
            className="cursor-pointer relative flex flex-col borderMuted dark-bg text-sm text-gray-300 py-1 mb-5 mt-1 w-full">
            Select interest &amp; hobbies
            <IoIosArrowDown className="absolute right-0 text-white text-xl" />
          </p>
        </div> */}
        <div className="w-full mt-2">
          <label className="text-md">Bio</label>
          <textarea
            rows={3}
            className="outline-none rounded-lg p-3 mb-5 mt-1 dark-sec-bg w-full"
            {...register('bio')}
            required
          />
        </div>
        <button className="font-semibold rounded-md my-4 py-1.5 px-12 dark-sec-bg" type="submit">
          Save & Continue
        </button>
      </form>
    </div>
  );
}

export default ProfileUpdate;

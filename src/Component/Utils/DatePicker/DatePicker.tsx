import React, { useState } from 'react';
import { AiFillCloseCircle } from 'react-icons/ai';
import styles from './DatePicker.module.css';
import { useForm } from 'react-hook-form';
import { useProfileStore } from '../../../stores/useProfileStore';

type dropdownAgs = {
  dropdown: boolean;
  setDropdown: (dp: boolean) => void;
};

type Dob = {
  date: string;
  month: string;
  year: string;
};

function DatePicker({ dropdown, setDropdown }: dropdownAgs) {
  const setDob = useProfileStore((state: any) => state.setDob);
  const { handleSubmit, register } = useForm<Dob>();

  const onSubmit = async (data: Dob): Promise<any> => {
    const dob = data.month + '-' + data.date + '-' + data.year;
    console.log(dob);
    setDob(dob);
    setDropdown(false);
  };

  return (
    <div
      className="z-50 fixed flex flex-center z-10 w-full h-full inset-0 m-0 overflow-y-auto"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true">
      <div className="w-full md:w-1/2 lg:w-1/3 max-w-500 md:mx-4 flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div className="fixed inset-0 bg-black opacity-60 bg-opacity-90 transition-opacity" aria-hidden="true"></div>
        <div className="w-full max-h-400 min-h-400 static inline-block align-bottom rounded-lg text-left shadow-xl transform transition-all align-middle">
          <AiFillCloseCircle
            onClick={() => setDropdown(!dropdown)}
            size="2rem"
            className="text-white cursor-pointer absolute m-2.5 right-0"
          />
          <form
            className="dark-sec-bg rounded px-4 pt-5 pb-4 sm:p-6 sm:pb-4 flex flex-col flex-center"
            onSubmit={handleSubmit(onSubmit)}>
            <h3 className="text-white text-2xl font-bold" id="modal-title">
              Select your DOB
            </h3>
            <div className={`${styles.inputBox} my-8 flex flex-col md:flex-row flex-center max-h-400`} role="menu">
              <p>
                <label htmlFor="date">date</label>
                <input type="number" id="date" {...register('date')} required />
              </p>
              <p>
                <label htmlFor="month">month</label>
                <input type="number" id="month" {...register('month')} required />
              </p>
              <p>
                <label htmlFor="year">year</label>
                <input type="number" id="year" {...register('year')} required />
              </p>
            </div>
            <button className="py-3 primary-bg font-bold w-1/3 my-2 rounded-full" type="submit">
              Done
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default DatePicker;

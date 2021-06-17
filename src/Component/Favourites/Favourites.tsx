import React, { useMemo, useState } from 'react';
import styles from './Favourites.module.css';
import { genres } from '../Utils/Static';
import { getRandomColor } from '../Utils/Functions/RandomColor';

export default function Favourites(props: any) {
  console.log(props);
  const [searchTerm, setSearchTerm] = useState('');

  const AllGenre = useMemo(() => {
    if (!searchTerm) {
      return genres;
    }
    return genres.filter((genre) => {
      return genre.toLowerCase().includes(searchTerm.toLowerCase());
    });
  }, [searchTerm, genres]);

  return (
    <div className="h-full flex flex-col px-4 py-8 max-w-450 text-white mx-auto">
      <div className="flex flex-col">
        <h2 className="text-3xl font-bold mb-8">Genre</h2>
        <input
          type="search"
          placeholder="Search here"
          className={`${styles.input} h-12 px-4 mb-6`}
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value)}
        />
      </div>
      <div className="flex flex-col flex-1">
        <div
          className={`max-h-500 overflow-y-scroll flex flex-wrap ${
            searchTerm === '' ? 'justify-between' : 'justify-start'
          }`}>
          {AllGenre.map((genre: any, index: any) => {
            let clr = getRandomColor();
            return (
              <label
                key={index}
                style={{ backgroundColor: `${clr}` }}
                className={`${styles.card} flex flex-row justify-center text-center items-center h-24 w-24 sm:h-32 sm:w-32 mb-4 mr-1`}
                htmlFor="genre">
                {genre}
              </label>
            );
          })}
        </div>
      </div>
      <div className="flex flex-2 flex-col text-center">
        <span className="mb-6 text-lg">Skip Now</span>
        <button className={`${styles.btn} w-36 h-10 mx-auto text-black primary-bg`}>Continue</button>
      </div>
    </div>
  );
}

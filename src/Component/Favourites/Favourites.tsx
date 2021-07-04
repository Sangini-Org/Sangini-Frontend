import React, { useMemo, useState } from 'react';
import styles from './Favourites.module.css';
import { genres } from '../Utils/Static';
import { getRandomColor } from '../Utils/Functions/RandomColor';
import { FaSearch } from 'react-icons/fa';

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
    <div className={`flex flex-center justify-center px-4 flex-col m-auto ${styles.baseContainer}`}>
      <h2 className="text-2xl text-white font-bold text-center py-10 md:pt-24">Genre</h2>
      <div className={`p-4 w-full rounded-lg ${styles.searchBox}`}>
        <FaSearch />
        <input
          className="ml-2 placeholder-white bg-transparent"
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value)}
          name="search"
          placeholder="Search..."
        />
      </div>
      <div className="my-4 max-h-500 w-full overflow-y-scroll">
        <div className="mr-2 flex flex-wrap justify-between">
          {AllGenre.map((genre: any, index: any) => {
            let clr = getRandomColor(index);
            return (
              <label
                key={index}
                style={{ backgroundColor: `${clr}` }}
                className="capitalize rounded-3xl text-center flex flex-center text-white h-24 w-24 sm:h-32 sm:w-32 mb-4"
                htmlFor="genre">
                {genre}
              </label>
            );
          })}
        </div>
      </div>
      <div className="flex flex-center flex-col w-full">
        <span className="my-4 text-md text-muted">Skip Now</span>
        <button className="py-2 text-black w-1/3 uppercase primary-bg rounded-md">Continue</button>
      </div>
    </div>
  );
}

import React from 'react';

type spotifyPlayAgs = {
  player: boolean;
  setPlayer: (dp: boolean) => void;
  trackid: string;
};
const SpotifyPlay = ({ player, setPlayer, trackid }: spotifyPlayAgs) => {
  console.log(player);
  return (
    <div
      className="z-50 fixed flex flex-center w-full h-full inset-0 m-0 overflow-y-auto"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true">
      <div className="text-white w-full md:w-1/2 lg:w-1/3 max-w-500 md:mx-4 flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div
          onClick={() => setPlayer(false)}
          className="fixed inset-0 bg-black opacity-60 bg-opacity-90 transition-opacity"
          aria-hidden="true"></div>
        <div className="w-full static inline-block align-bottom rounded-lg shadow-xl transform transition-all">
          <iframe
            src={'https://open.spotify.com/embed/track/' + trackid + '?theme=0'}
            width="100%"
            height="80"
            frameBorder="0"
            allow="encrypted-media"></iframe>
        </div>
      </div>
    </div>
  );
};

export default SpotifyPlay;

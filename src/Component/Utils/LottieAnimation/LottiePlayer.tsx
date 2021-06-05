import React from 'react';
import Lottie from 'react-lottie';
import Tick from './Lotties/Tick.json';
const LottiePlayer = (animationData: any) => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <div>
      <Lottie options={defaultOptions} height={400} width={400} />
    </div>
  );
};

export const TickLottie = () => {
  return LottiePlayer(Tick);
};

import React from 'react';
import { IoMail } from 'react-icons/all';
import ScreenBlockerNotifs from '../Utils/ScreenBlockerNotifs/ScreenBlockerNotifs';

const EmailVerify = () => {
  const handleEmail = () => {};

  return (
    <ScreenBlockerNotifs
      icon={IoMail}
      btnText={'Verify your Email Address'}
      subText={'Verfication mail has been sent to your email address.'}
      theme={'blue-bg'}
      handleClick={handleEmail}
    />
  );
};

export default EmailVerify;

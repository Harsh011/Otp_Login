import React, { useState } from "react";
import OtpComp from "./OtpComp";

const Phonelogin = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [showOtpInput, setShowOtpInput] = useState(false);

  const handlePhoneNumber = (e) => {
    setPhoneNumber(e.target.value);
  };
  const handlePhoneSubmit = (e) => {
    e.preventDefault();

    //phone validations
    const regix = /[^0-9]/g;
    if (phoneNumber.length < 10 || regix.test(phoneNumber)) {
      alert("Invalid Phone Number");
      return;
    }

    //call be API
    //show opt field
    setShowOtpInput(true);
  };

  const onOtpSubmit = (otp) => {
    console.log("Login Successful", otp);
  };

  return (
    <div>
      {!showOtpInput ? (
        <form onSubmit={handlePhoneSubmit}>
          <input
            type="text"
            value={phoneNumber}
            placeholder="Enter your Phone Number"
            onChange={handlePhoneNumber}
          />
          <button type="submit">Submit</button>
        </form>
      ) : (
        <div>
          <p>Enter OTP sent to {phoneNumber}</p>
          <OtpComp length={4} onOtpSubmit={onOtpSubmit} />
        </div>
      )}
    </div>
  );
};

export default Phonelogin;

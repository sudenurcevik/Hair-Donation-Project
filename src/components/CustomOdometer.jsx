import React, { useEffect, useState } from "react";
import Odometer from "react-odometerjs";
import "odometer/themes/odometer-theme-default.css";
import "./odometer-custom.css";

export default function CustomOdometer({ totalDonation }) {
  return (
    <div className="odometer-wrapper">
      <Odometer format="(,ddd).dd" duration={1000} value={totalDonation} />
    </div>
  );
}

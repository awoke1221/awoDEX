import React from "react";

import { IoBarChartSharp } from "react-icons/io5";
import { MdLock } from "react-icons/md";
//import { FaWpforms } from "react-icons/fa";
import { FaBalanceScale } from "react-icons/fa";
import { ImProfile } from "react-icons/im";
import { MdAdminPanelSettings } from "react-icons/md";
import { FcAdvertising } from "react-icons/fc";

const links = [
  { text: "Pools", path: ".", icon: <FaBalanceScale /> },
  { text: "farming", path: "farming", icon: <MdLock /> },
  { text: "Swap", path: "Swap", icon: <FcAdvertising /> },
  { text: "stats", path: "stats", icon: <IoBarChartSharp /> },
  { text: "profile", path: "profile", icon: <ImProfile /> },
  { text: "admin", path: "admin", icon: <MdAdminPanelSettings /> },
];

export default links;

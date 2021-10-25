import { BsShieldLockFill } from "react-icons/bs";
import { IoMdOptions } from "react-icons/io";
import { BsFillCloudArrowUpFill } from "react-icons/bs";
import { MdOutlineSupportAgent } from "react-icons/md";
import { FaMoneyBillWave } from "react-icons/fa";
import { GrHostMaintenance } from "react-icons/gr";
const iconStyle = (Icon) => <Icon size="3rem" color="#0f0f0f" />;

export const featuresData = [
  {
    name: "Best Security",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    icon: iconStyle(BsShieldLockFill),
  },
  {
    name: "Easy to use",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    icon: iconStyle(IoMdOptions),
  },
  {
    name: "Dedicated Maintenance",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    icon: iconStyle(BsFillCloudArrowUpFill),
  },
  {
    name: "24/7 Supoport",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    icon: iconStyle(MdOutlineSupportAgent),
  },
  {
    name: "Accessible Price",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    icon: iconStyle(FaMoneyBillWave),
  },
  {
    name: "Scalable",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    icon: iconStyle(GrHostMaintenance),
  },
];

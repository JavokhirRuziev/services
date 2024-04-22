import Apartment from "../icons/Apartment";
import VillaIcon from "@mui/icons-material/Villa";
import FactoryIcon from "@mui/icons-material/Factory";
import BusinessIcon from "@mui/icons-material/Business";
import BusAlertIcon from "@mui/icons-material/BusAlert";
import ElectricRickshawIcon from "@mui/icons-material/ElectricRickshaw";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import CarRepairIcon from "@mui/icons-material/CarRepair";
import ScreenshotMonitorIcon from "@mui/icons-material/ScreenshotMonitor";
import DryCleaningIcon from "@mui/icons-material/DryCleaning";
import SanitizerIcon from "@mui/icons-material/Sanitizer";
import DevicesOtherIcon from "@mui/icons-material/DevicesOther";

export const services_data = [
  {
    name: "Rent",
    category: [
      { name: "Sell", icon: <Apartment /> },
      { name: "Residential", icon: <FactoryIcon /> },
      { name: "Rent", icon: <BusinessIcon /> },
      { name: "For business", icon: <VillaIcon /> },
      { name: "Fixing", icon: <BusAlertIcon /> },
      { name: "Service", icon: <ElectricRickshawIcon /> },
      { name: "Rent", icon: <LocalShippingIcon /> },
      { name: "Pitstop", icon: <CarRepairIcon /> },
    ],
  },
  {
    name: "Cars",
    category: [
      { name: "Fixing", icon: <BusAlertIcon /> },
      { name: "Service", icon: <ElectricRickshawIcon /> },
      { name: "Rent", icon: <LocalShippingIcon /> },
      { name: "Pitstop", icon: <CarRepairIcon /> },
      { name: "Fixing", icon: <BusAlertIcon /> },
      { name: "Service", icon: <ElectricRickshawIcon /> },
      { name: "Rent", icon: <LocalShippingIcon /> },
      { name: "Pitstop", icon: <CarRepairIcon /> },
    ],
  },
  {
    name: "Home cleaning",
    category: [
      { name: "Window", icon: <ScreenshotMonitorIcon /> },
      { name: "Carpet", icon: <SanitizerIcon /> },
      { name: "Clothes", icon: <DryCleaningIcon /> },
      { name: "Other", icon: <DevicesOtherIcon /> },
      { name: "Window", icon: <ScreenshotMonitorIcon /> },
      { name: "Carpet", icon: <SanitizerIcon /> },
      { name: "Clothes", icon: <DryCleaningIcon /> },
      { name: "Other", icon: <DevicesOtherIcon /> },
    ],
  },
];

import {
  LayoutDashboard,
  History,
  CalendarDays,
  CalendarCheck,
  BarChart2,
  MessageCircle,
  Headset,
  Settings
} from "lucide-react";
import { RiDashboardFill } from "react-icons/ri";

import { MdEscalator } from "react-icons/md";
import { BiSolidCalendar } from "react-icons/bi";
import { HiMiniArrowsUpDown } from "react-icons/hi2";

import { FaSquarePlus } from "react-icons/fa6";
import { IoChatbubbleEllipsesSharp } from "react-icons/io5";
import { FaPhone } from "react-icons/fa6";
import { IoMdSettings } from "react-icons/io";




export const generalNavigationLinks = [
  { id: 'dashboard', label: 'Dashboard', icon: RiDashboardFill },
  { id: 'history', label: 'History', icon: HiMiniArrowsUpDown  },
  { id: 'calendar', label: 'Calendar', icon: BiSolidCalendar },
  { id: 'appointments', label: 'Appointments', icon: FaSquarePlus },
  { id: 'statistics', label: 'Statistics', icon: MdEscalator  },
];

export const toolsNavigationLinks = [
  { id: 'chat', label: 'Chat', icon: IoChatbubbleEllipsesSharp  },
  { id: 'support', label: 'Support', icon: FaPhone 
 },
];

export const settingsNavigationLink = {
  id: 'setting', label: 'Setting', icon: IoMdSettings
};

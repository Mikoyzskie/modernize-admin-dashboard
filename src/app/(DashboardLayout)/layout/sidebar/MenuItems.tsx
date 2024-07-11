import {
  IconRoute,
  IconCopy,
  IconLayoutDashboard,
  IconLogin,
  IconTable,
  IconReportAnalytics,
  IconUserPlus,
} from "@tabler/icons-react";

import { uniqueId } from "lodash";

const Menuitems = [
  {
    navlabel: true,
    subheader: "Home",
  },

  {
    id: uniqueId(),
    title: "Dashboard",
    icon: IconLayoutDashboard,
    href: "/",
  },
  {
    navlabel: true,
    subheader: "Utilities",
  },
  {
    id: uniqueId(),
    title: "Reports",
    icon: IconReportAnalytics,
    href: "/utilities/reports",
  },
  {
    id: uniqueId(),
    title: "Monitoring",
    icon: IconCopy,
    href: "/utilities/shadow",
  },
  {
    navlabel: true,
    subheader: "Extra",
  },
  {
    id: uniqueId(),
    title: "Tabular Data",
    icon: IconTable,
    href: "/tables",
  },
  {
    id: uniqueId(),
    title: "Routes",
    icon: IconRoute,
    href: "/routes",
  },
  {
    navlabel: true,
    subheader: "Auth",
  },
  {
    id: uniqueId(),
    title: "Login",
    icon: IconLogin,
    href: "/authentication/login",
  },
  {
    id: uniqueId(),
    title: "Register",
    icon: IconUserPlus,
    href: "/authentication/register",
  },

];

export default Menuitems;

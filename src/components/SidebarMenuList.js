import DashboardIcon from "@mui/icons-material/Dashboard";
import OndemandVideoIcon from "@mui/icons-material/OndemandVideo";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";

export const listMenu = [
  {
    title: "Netflix App",
    subMenu: [
      {
        icon: <DashboardIcon />,
        title: "Dashboard",
        link: "dashboard",
      },
      {
        icon: <AccountCircleIcon />,
        title: "Users",
        link: "users",
      },
      {
        icon: <OndemandVideoIcon />,
        title: "Movies",
        link: "movies",
      },
      {
        icon: <FormatListBulletedIcon />,
        title: "Lists",
        link: "lists",
      },
    ],
  },
];

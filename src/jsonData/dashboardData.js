import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";

export const charts =[
    { name: "January", Total: 1200 },
    { name: "February", Total: 2100 },
    { name: "March", Total: 800 },
    { name: "April", Total: 1600 },
    { name: "May", Total: 900 },
    { name: "June", Total: 1700 },
    { name: "July", Total: 600 },
    { name: "Augest", Total: 900 },
    { name: "September", Total: 1400 },
    { name: "October", Total: 1200 },
    { name: "November", Total: 1600 },
    { name: "December", Total: 1100 }
  ];

export const widgets={
    user:{
      title: "USERS",
      isMoney: false,
      link: "See all users",
      redirect: "/users",
      amount:200,
      diff:10,
      icon: (
        <PersonOutlinedIcon
          className="icon"
          style={{
            color: "crimson",
            backgroundColor: "rgba(255, 0, 0, 0.2)",
          }}
        />
      ),
    },
     order: {
      title: "ORDERS",
      isMoney: false,
      link: "View all orders",
      redirect: "/orders",
      amount:300,
      diff:30,
      icon: (
        <ShoppingCartOutlinedIcon
          className="icon"
          style={{
            backgroundColor: "rgba(218, 165, 32, 0.2)",
            color: "goldenrod",
          }}
        />
      ),
    },
    earning: {
      title: "EARNINGS",
      isMoney: true,
      link: "View net earnings",
      redirect: "/earnings",
      amount:1000,
      diff:-5,
      icon: (
        <MonetizationOnOutlinedIcon
          className="icon"
          style={{ backgroundColor: "rgba(0, 128, 0, 0.2)", color: "green" }}
        />
      ),
    },
    balance: {
      title: "BALANCE",
      isMoney: true,
      link: "See details",
      redirect: "/transactions",
      amount:2000,
      diff:20,
      icon: (
        <AccountBalanceWalletOutlinedIcon
          className="icon"
          style={{
            backgroundColor: "rgba(128, 0, 128, 0.2)",
            color: "purple",
          }}
        />
      ),
    }
}
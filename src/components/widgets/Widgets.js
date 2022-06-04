import "./widgets.scss";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp"; 
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown"; 
import { Link } from "react-router-dom";

const Widget = ({ data }) => {
  return (
    <div className="widget">
      <div className="left">
        <span className="title">{data.title}</span>
        <span className="counter">
          {data.isMoney && "Rs:"} {data.amount}
        </span>
          <span className="link"><Link to={data.redirect}>{data.link}</Link></span>
      </div>
      <div className="right">
        <div className={`percentage ${data.diff<0? 'negative':'positive'}`}>
        {
          data.diff>0?<KeyboardArrowUpIcon />:<KeyboardArrowDownIcon />
        }
          {data.diff} %
        </div>
        {data.icon}
      </div>
    </div>
  );
};

export default Widget;

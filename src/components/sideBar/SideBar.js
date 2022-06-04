import { Link } from 'react-router-dom';
import "./sideBar.scss";
import DashboardIcon from '@mui/icons-material/Dashboard';
import GroupIcon from '@mui/icons-material/Group';
import InfoIcon from '@mui/icons-material/Info';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const SideBar = () => {
    return (
        <div className='sidebar'>
            <div className='top'>
                <span className='logo'>Kinaxis</span>
            </div>
            <hr />
            <div className='center'>
                <ul>
                    <li>
                        <Link to="/dashboard" style={{ textDecoration: "none" }}>
                            <DashboardIcon className="icon"/>
                            <span>Dashboard </span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/users" style={{ textDecoration: "none" }}>
                            <GroupIcon className="icon"/><span>Users </span>
                        </Link>  
                    </li>
                    <li>
                        <Link to="/orders" style={{ textDecoration: "none" }}>
                            <ShoppingCartIcon className="icon"/><span>Orders </span>
                        </Link>  
                    </li>
                    <li>
                        <Link to="/about" style={{ textDecoration: "none" }}>
                            <InfoIcon className="icon"/><span>About</span>
                        </Link>  
                    </li>
                </ul>
            </div> 

        </div>
    )
}

export default SideBar
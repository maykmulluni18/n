//import "./everybody.scss";
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import SettingsTwoToneIcon from '@mui/icons-material/SettingsTwoTone';
import AssessmentIcon from '@mui/icons-material/Assessment';
import TocRoundedIcon from '@mui/icons-material/TocRounded';
//import EventNoteRoundedIcon from '@mui/icons-material/EventNoteRounded';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { LogOut, reset } from "./auth/Authen";
import img from "./UNAP.png"
import "./sidebar.scss"

const Sidebar = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { user } = useSelector((state) => state.auth)
    const logout = () => {
        dispatch(LogOut());
        dispatch(reset());
        navigate("/");
    }

    return (
        <div id='leftCol' className="sidebar_grid grid">
            <div className="Logo flex">
                <img src={img} alt="Imagen" />
                <h2>
                    Alamcen
                </h2>
            </div>
            <div className="menu_div">
                <h3 className="title_div">
                    Alamcen Central
                </h3>
                <ul className="menu_list grid">
                    <li className="list_item">
                        <a href="#" className="menu_link flex">
                            <DashboardIcon className="icon" />
                            <span className="smallText">
                                Inicio
                            </span>
                        </a>
                    </li>
                </ul>

                <ul className="menu_list grid">
                    <li className="list_item">
                        <a href="#" className="menu_link flex">
                            <DashboardIcon className="icon" />
                            <span className="smallText">
                                Inicio
                            </span>
                        </a>
                    </li>
                </ul>


                <ul className="menu_list grid">
                    <li className="list_item">
                        <a href="#" className="menu_link flex">
                            <DashboardIcon className="icon" />
                            <span className="smallText">
                                Inicio
                            </span>
                        </a>
                    </li>
                </ul>


                <ul className="menu_list grid">
                    <li className="list_item">
                        <a href="#" className="menu_link flex">
                            <DashboardIcon className="icon" />
                            <span className="smallText">
                                Inicio
                            </span>
                        </a>
                    </li>
                </ul>


                <ul className="menu_list grid">
                    <li className="list_item">
                        <a href="#" className="menu_link flex">
                            <DashboardIcon className="icon" />
                            <span className="smallText">
                                Inicio
                            </span>
                        </a>
                    </li>
                </ul>

            </div>
            <div className="menu_div">
                <h3 className="title_div">
                    Alamcen Central
                </h3>
                <ul className="menu_list grid">
                    <li className="list_item">
                        <a href="#" className="menu_link flex">
                            <DashboardIcon className="icon" />
                            <span className="smallText">
                                Inicio
                            </span>
                        </a>
                    </li>
                </ul>

                <ul className="menu_list grid">
                    <li className="list_item">
                        <a href="#" className="menu_link flex">
                            <DashboardIcon className="icon" />
                            <span className="smallText">
                                Inicio
                            </span>
                        </a>
                    </li>
                </ul>


                <ul className="menu_list grid">
                    <li className="list_item">
                        <a href="#" className="menu_link flex">
                            <DashboardIcon className="icon" />
                            <span className="smallText">
                                Inicio
                            </span>
                        </a>
                    </li>
                </ul>


                <ul className="menu_list grid">
                    <li className="list_item">
                        <a href="#" className="menu_link flex">
                            <DashboardIcon className="icon" />
                            <span className="smallText">
                                Inicio
                            </span>
                        </a>
                    </li>
                </ul>


                <ul className="menu_list grid">
                    <li className="list_item">
                        <a href="#" className="menu_link flex">
                            <DashboardIcon className="icon" />
                            <span className="smallText">
                                Inicio
                            </span>
                        </a>
                    </li>
                </ul>

            </div>
            <div className="menu_div">
                <h3 className="title_div">
                    Alamcen Central
                </h3>
                <ul className="menu_list grid">
                    <li className="list_item">
                        <a href="#" className="menu_link flex">
                            <DashboardIcon className="icon" />
                            <span className="smallText">
                                Inicio
                            </span>
                        </a>
                    </li>
                </ul>

                <ul className="menu_list grid">
                    <li className="list_item">
                        <a href="#" className="menu_link flex">
                            <DashboardIcon className="icon" />
                            <span className="smallText">
                                Inicio
                            </span>
                        </a>
                    </li>
                </ul>


                <ul className="menu_list grid">
                    <li className="list_item">
                        <a href="#" className="menu_link flex">
                            <DashboardIcon className="icon" />
                            <span className="smallText">
                                Inicio
                            </span>
                        </a>
                    </li>
                </ul>


                <ul className="menu_list grid">
                    <li className="list_item">
                        <a href="#" className="menu_link flex">
                            <DashboardIcon className="icon" />
                            <span className="smallText">
                                Inicio
                            </span>
                        </a>
                    </li>
                </ul>


                <ul className="menu_list grid">
                    <li className="list_item">
                        <a href="#" className="menu_link flex">
                            <DashboardIcon className="icon" />
                            <span className="smallText">
                                Inicio
                            </span>
                        </a>
                    </li>
                </ul>

            </div>


            <div className="seting_div">
                <h3 className="title_div">
                    Alamcen Central
                </h3>
                <ul className="menu_list grid">
                    <li className="list_item">
                        <a href="#" className="menu_link flex">
                            <DashboardIcon className="icon" />
                            <span className="smallText">
                                Inicio
                            </span>
                        </a>
                    </li>
                </ul>
                <ul className="menu_list grid">
                    <li className="list_item">
                        <a href="#" className="menu_link flex">
                            <DashboardIcon className="icon" />
                            <span className="smallText">
                                Inicio
                            </span>
                        </a>
                    </li>
                </ul>
                <ul className="menu_list grid">
                    <li className="list_item">
                        <a href="#" className="menu_link flex">
                            <DashboardIcon className="icon" />
                            <span className="smallText">
                                Inicio
                            </span>
                        </a>
                    </li>
                </ul>
            </div>
            <div className='sidebarcar'>
                <DashboardIcon className='icon' />
                <div className='carcontend'>
                    <div className='circle1'></div>
                    <div className='circle2'></div>
                    <h3>Help</h3>
                    <p>holas como estas</p>
                    <button className='btn'>help</button>
                </div>

            </div>
        </div>
    )
}

export default Sidebar
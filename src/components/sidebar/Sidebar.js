import React, { useEffect } from "react";
import styled from "styled-components";
import "./_sidebar.scss";
import { MdExitToApp, MdLibraryBooks, MdHome } from "react-icons/md";
import { useDispatch } from "react-redux";
import { log_out } from "../../redux/actions/auth.action";
import { Link } from "react-router-dom";

const Sidebar = ({ sidebar, handleToggleSidebar }) => {
    const dispatch = useDispatch();
    const logOutHandler = () => {
        dispatch(log_out());
        localStorage.setItem('defaultKeyword', 'All');
    };
    useEffect(() => { 
        localStorage.setItem('defaultKeyword', 'All'); 
    }, []);
    const defaultKeyword = localStorage.getItem('defaultKeyword') || 'All';
    
    return (
        <div className={sidebar ? "sidebar open" : "sidebar"} onClick={() => handleToggleSidebar(false)}>
            <Link to="/" exact>
                <li>
                <MdHome size={25} color="red" />
                <span>Home</span>
                </li>
            </Link>
            <Links href="https://www.cricbuzz.com/cricket-match/live-scores" target="_blank">
                <li>
                <MdLibraryBooks size={25} color="red" />
                <span>Live Score</span>
                </li>
            </Links>
            <hr className="one" />
            <Heading>
                <span>Fantasy Apps</span>
            </Heading>
            <br />
            <Links href="https://www.dream11.com/" target="_blank">
                <li>
                <img src="/images/dream11.jpg" alt="Dream11" />
                <span>Dream11</span>
                </li>
            </Links>
            <Links href="https://www.my11circle.com/" target="_blank">
                <li>
                <img src="/images/my11.jpg" alt="My11Circle" />
                <span>My11Circle</span>
                </li>
            </Links>
            <Links href="https://crex.live/" target="_blank">
                <li>
                <img src="/images/crex.jpg" alt="Crex" />
                <span>Crex</span>
                </li>
            </Links>
            <hr />
            <li onClick={logOutHandler}>
                <MdExitToApp size={25} color="red" />
                <span>Log Out</span>
            </li>
            <hr />
        </div>
    );
};

const Links = styled.a`
    font-size: 15px;
    font-weight: 500;
    letter-spacing: 0.4px;
    color: pink;
    text-decoration: none;
`;

const Heading = styled.span`
    margin-left: auto;
    margin-right: auto;
    font-size: 20px;
    font-weight: 500;
    letter-spacing: 0.4px;
    color: white;
`;

export default Sidebar;
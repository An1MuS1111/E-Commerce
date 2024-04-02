


import '@styles/Sidebar.css';
import { useState } from 'react';

const Sidebar = () => {
    const [isActive, setIsActive] = useState(false);

    const handleClick = () => {
        setIsActive(!isActive);
    };

    return (
        <div className="sidebar">
            <div className="item">
                <a className="sub-btn" onClick={handleClick}>
                    Tables
                    <img
                        className={isActive ? 'rotate' : ''}
                        height="25px"
                        src="/next.png"
                        alt=""
                    />
                </a>
                {isActive && ( // Conditionally render the submenu if isActive is true
                    <div className="sub-menu">
                        <a href="#" className="sub-item">
                            Sub Item 01
                        </a>
                        <a href="#" className="sub-item">
                            Sub Item 02
                        </a>
                        <a href="#" className="sub-item">
                            Sub Item 03
                        </a>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Sidebar;

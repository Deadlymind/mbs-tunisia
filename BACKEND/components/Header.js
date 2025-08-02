import { RiBarChartHorizontalLine } from "react-icons/ri";
import { BiExitFullscreen } from "react-icons/bi";
import { GoScreenFull } from "react-icons/go";
import { useState } from "react";

export default function Header({ handleAsideOpen }) {

    const [isFullscreen, setIsFullscreen] = useState(false);

    const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen().then(() => {
        setIsFullscreen(true);
        });
    } else {
        document.exitFullscreen().then(() => {
        setIsFullscreen(false);
        })
    }
    };

    return (
    <header className="header flex flex-sb">
        <div className="logo flex gap-2">
        <h1>MBS ADMIN</h1>
        <div className="headerham flex flex-center" onClick={handleAsideOpen}>
            <RiBarChartHorizontalLine />
        </div>
        </div>

        <div className="rightnav flex gap-2">
            <div onClick={toggleFullscreen}>
                {isFullscreen ? <BiExitFullscreen /> : <GoScreenFull />}
            </div>
            <div className="">
                <img src="/img/notification.png" alt="notification" />
            </div>
            <div className="profilenav">
                <img src="/img/mbslogo2.png" alt="user" style={{ width: '70px', height: 'auto' }} />
            </div>
        </div>
    </header>
    );
    }

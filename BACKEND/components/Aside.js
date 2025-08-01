import Link from "next/link";
import { IoHome } from "react-icons/io5";
import { BsPostcard } from "react-icons/bs";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { MdOutlineWorkOutline } from "react-icons/md";
import { RiShoppingCartLine } from "react-icons/ri";
import { GrGallery } from "react-icons/gr";
import { LuContact } from "react-icons/lu";
import { IoSettingsOutline } from "react-icons/io5";



export default function Aside() {
        
        const router = useRouter();

        const [clicked, setClicked] = useState(false);

        const [activeLink, setActiveLink] = useState('/');

        const handleClick = () => {
                setClicked(!clicked);
        };

        const handleLinkClick = (link) => {
                setActiveLink(prevActive => (prevActive === link ? null : link));
                setClicked(false);
        };

        useEffect(() => {
                // update active link state when the page is reloaded
                setActiveLink(router.pathname);
        }, [router.pathname]);
  
        return <>

        <aside className="asideleft active">
                <ul>
                        <Link href="/">
                                <li className="navactive">
                                        <IoHome />
                                        <span className="">Dashboard</span>
                                </li>
                        </Link>
                        <li className={activeLink === "/blogs" ? "navactive flex-col flex-left " : "flex-col flex-left"} onClick={() => handleLinkClick("/blogs")}>
                                <div className="flex gap-1">
                                        <BsPostcard />
                                        <span className="">Blogs</span>
                                </div>
                                {activeLink === "/blogs" && (                                
                                        <ul >
                                                <Link href="/blogs" ><li className="">ALL Blogs</li></Link>
                                                <Link href="/blogs/draft" ><li className="">Draft Blogs</li></Link>
                                                <Link href="/blogs/addblog" ><li className="">ADD Blogs</li></Link>
                                                
                                        </ul>
                                )}

                        </li>
                        <li className={activeLink === "/projects" ? "navactive flex-col flex-left " : "flex-col flex-left"} onClick={() => handleLinkClick("/projects")}>
                                <div className="flex gap-1">
                                        <MdOutlineWorkOutline />
                                        <span className="">projects</span>
                                </div>
                                {activeLink === "/projects" && (                                
                                        <ul >
                                                <Link href="/projects" ><li className="">ALL projects</li></Link>
                                                <Link href="/projects/draftprojects" ><li className="">Draft projects</li></Link>
                                                <Link href="/projects/addproject" ><li className="">ADD projects</li></Link>
                                                
                                        </ul>
                                )}
                        </li>
                        <li className={activeLink === "/shops" ? "navactive flex-col flex-left " : "flex-col flex-left"} onClick={() => handleLinkClick("/shops")}>
                                <div className="flex gap-1">
                                        <RiShoppingCartLine />
                                        <span className="">Shop</span>
                                </div>
                                {activeLink === "/shops" && (                                
                                        <ul >
                                                <Link href="/shops" ><li className="">ALL Products</li></Link>
                                                <Link href="/shops/draftshop" ><li className="">Draft Products</li></Link>
                                                <Link href="/shops/addproduct" ><li className="">ADD Products</li></Link>
                                                
                                        </ul>
                                )}
                        </li>
                        <li className={activeLink === "/gallery" ? "navactive flex-col flex-left " : "flex-col flex-left"} onClick={() => handleLinkClick("/gallery")}>
                                <div className="flex gap-1">
                                        <GrGallery />
                                        <span className="">Gallery</span>
                                </div>
                                {activeLink === "/gallery" && (                                
                                        <ul >
                                                <Link href="/gallery" ><li className="">ALL Photos</li></Link>
                                                <Link href="/gallery/addphoto" ><li className="">ADD Photo</li></Link>
                                                
                                        </ul>
                                )}

                        </li>
                        <Link href="/contacts">
                                <li className={activeLink === "/contacts" ? "navactive" : ""} onClick={() => handleLinkClick("/contacts")} >
                                        <LuContact />
                                        <span className="">Contacts</span>
                                </li>
                        </Link>
                        <Link href="/settings">
                                <li className={activeLink === "/settings" ? "navactive" : ""} onClick={() => handleLinkClick("/settings")} >
                                        <IoSettingsOutline />
                                        <span className="">Settings</span>
                                </li>
                        </Link>
                </ul>
        </aside>

        </>


}
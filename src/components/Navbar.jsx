import React, { useContext, useState } from 'react';
import { assets } from '../assets/assets';
import { NavLink, Link } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';

const Navbar = () => {
    const [visible, setVisible] = useState(false);
    const [showProfileMenu, setShowProfileMenu] = useState(false);
    const { setshowsearch, getcart } = useContext(ShopContext);

    return (
        <div>
            <div className='flex justify-between sm:flex sm:justify-between items-center p-10'>
                <div>
                    <Link to='/'>
                        <img src={assets.logo} alt="Logo" className='w-32' />
                    </Link>
                </div>

                <div className='hidden sm:flex'>
                    <ul className='flex gap-6'>
                        <li>
                            <NavLink to='/' className='flex flex-col items-center'>
                                <p style={{ fontSize: "14px" }}>HOME</p>
                                <hr />
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/collection' className='flex flex-col items-center'>
                                <p style={{ fontSize: "14px" }}>COLLECTION</p>
                                <hr />
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/about' className='flex flex-col items-center'>
                                <p style={{ fontSize: "14px" }}>ABOUT</p>
                                <hr />
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/contact' className='flex flex-col items-center'>
                                <p style={{ fontSize: "14px" }}>CONTACT</p>
                                <hr />
                            </NavLink>
                        </li>
                    </ul>
                </div>

                <div className='flex flex-row gap-5'>
                    <div className='side' onClick={() => setshowsearch(true)}>
                        <img src={assets.search_icon} alt="Search Icon" style={{ width: "20px" }} />
                    </div>

                    <div 
                        className='side relative'
                        onMouseEnter={() => setShowProfileMenu(true)}
                        onMouseLeave={() => setShowProfileMenu(false)}
                    >
                        <Link to='/login'><img src={assets.profile_icon} alt="Profile Icon" style={{ width: "20px", cursor: "pointer" }} /></Link>
                        {showProfileMenu && (
                            <div className='absolute right-0 mt-2 w-32 bg-white border border-gray-200 rounded-md shadow-lg'>
                                <ul className='text-gray-700'>
                                    <li className='p-2 hover:bg-gray-100 cursor-pointer'>Login</li>
                                    <li className='p-2 hover:bg-gray-100 cursor-pointer'>Signup</li>
                                </ul>
                            </div>
                        )}
                    </div>

                    <Link to='/cart'>
                        <div className='side' style={{ position: "relative" }}>
                            <img src={assets.cart_icon} alt="Cart Icon" style={{ width: "20px" }} />
                            <p className='text-white' style={{ backgroundColor: "black", color: "white", borderRadius: "50%", width: "15px", height: "15px", fontSize: "10px", textAlign: "center", position: "absolute", bottom: "1px", right: "-7px" }}>{getcart()}</p>
                        </div>
                    </Link>

                    <div className='side'>
                        <img src={assets.menu_icon} alt="Menu Icon" style={{ width: "20px", cursor: "pointer" }} className='sm:hidden' onClick={() => { setVisible(true); }} />
                    </div>
                </div>

                <div className={`absolute top-10 z-10 right-0 bottom-0 bg-white transition-all ${visible ? 'w-full min-h-full' : 'w-0 hidden'}`}>
                    <div>
                        <ul style={{ padding: "10px", display: "flex", flexDirection: "column", gap: "25px" }}>
                            <li style={{ marginBottom: "5px", display: "flex", gap: '5px', fontSize: "14px", cursor: "pointer" }}>
                                <img className='w-3 h-6 sm:hidden rotate-180' style={{ cursor: "pointer" }} src={assets.dropdown_icon} alt="Dropdown Icon" onClick={() => { setVisible(false); }} />
                                <p onClick={() => { setVisible(false); }}>BACK</p>
                            </li>
                            <li>
                                <NavLink to='/'>
                                    <p className='p' onClick={() => { setVisible(false); }}>HOME</p>
                                    <hr style={{ width: "100%", height: "0.5px" }} />
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to='/collection'>
                                    <p className='p' onClick={() => { setVisible(false); }}>COLLECTION</p>
                                    <hr style={{ width: "100%", height: "0.5px" }} />
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to='/about'>
                                    <p className='p' onClick={() => { setVisible(false); }}>ABOUT</p>
                                    <hr style={{ width: "100%", height: "0.5px" }} />
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to='/contact'>
                                    <p className='p' onClick={() => { setVisible(false); }}>CONTACT</p>
                                    <hr style={{ width: "100%", height: "0.5px" }} />
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <hr className='mb-11 text-gray-300' />
        </div>
    );
};

export default Navbar;

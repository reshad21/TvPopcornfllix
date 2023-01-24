import React from 'react';
import { Link } from 'react-router-dom';

const Navber = () => {
    const menuItems = <>
        <li><Link to='/'>Item 1</Link></li>
        <li><Link to='/' className="justify-between">Parent</Link></li>
        <li><Link to='/'>Item 3</Link></li>
    </>
    return (
        <div>
            <div className="navbar bg-[#0070e8] text-white lg:px-20">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {menuItems}
                        </ul>
                    </div>
                    <Link to='/' className="btn btn-ghost normal-case text-xl">daisyUI</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {menuItems}
                    </ul>
                </div>
                <div className="navbar-end">
                    <div className="form-control">
                        <input type="text" placeholder="Search" className="input input-bordered bg-inherit border-2 border-cyan-50" />
                    </div>
                    <button className="btn btn-ghost btn-circle">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Navber;
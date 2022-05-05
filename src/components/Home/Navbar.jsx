import React from 'react'
import  "./Navbar.css"
import { Link } from './links';

const Nav=()=>{
    var links=["home","explore","about"]
    return(
        <>
        <nav>
            <div className='logo'>
            <img src="https://newassets.apollo247.com/images/ic_logo.png" title="Online Doctor Consultation &amp; Medicines" alt="Online Doctor Consultation &amp; Medicines"/>
            </div>
            <div className='links'>
                {
                    links.map((e,i)=><Link text={e} key={i}/>)
                }
            </div>
            <div className='button'>
                <button>Contact</button>
            </div>
        </nav>
        </>
    )
}

export default Nav;

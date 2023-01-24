import React from 'react'


export default function Navbar(props) {
  return (
   <nav className={props.darkMode ? "dark": ""} >
        <div className="navHeader">
            <img src={`${window.location.origin}/assets/navLogo.png`} alt="Navbar Logo" className='nav-logo' />
            <h1 className='nav-title'>My travel journal</h1>
        </div>
        <div className="navToggler">
             <p className="toggler--light">Light</p>
             <div 
                    className="toggler--slider"
                    onClick={props.toggleDarkMode}
                >
                    
                    <div className="toggler--slider--circle"></div>
                </div>
             <p className="toggler--dark">Dark</p>
        </div>    
   </nav>
  )
}

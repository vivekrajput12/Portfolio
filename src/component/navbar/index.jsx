import React, { useEffect, useState } from 'react'

const Navbar = (props) => {
    const [showNavBarLine, setShowNavBarLine] = useState(false)
    const [openRigthSideBar, setOpenSideBar] = useState(false)
    useEffect(() => {
        const handleScroll = ()=>{
            const scrollY = window.scrollY;
            if(scrollY > 400){
                setShowNavBarLine(true)
            }else{
                setShowNavBarLine(false)
            }
            window.addEventListener('scroll', handleScroll)
            return () => {
                window.removeEventListener('scroll', handleScroll);
              }
        }
        handleScroll()
    },[])
    const handleNavBarLineClick = ()=>{
        console.log("casd")
        setOpenSideBar(!openRigthSideBar)
    }
  return (
    <>
        <nav className='displayFlex flexSpaceBetween'>
            <div>
                <span>Code by Vivek</span>
            </div>
            <div className='displayFlex rightArea'>
                <div>Work</div>
                <div>About</div>
                <div>Contact</div>
            </div>
        </nav>
        <div className={`navBarLine ${showNavBarLine ? 'active' : ''}` } onClick={()=>handleNavBarLineClick()}>
            <img src='/menu-button.png' className='menuImg'/>
        </div>
        {openRigthSideBar && 
          <div className='rightSideBarMenu'>
             <div>Work</div>
             <div>About</div>
             <div>Contact</div>
          </div>
        }
    </>
  )
}

export default Navbar
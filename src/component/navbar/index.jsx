import React, { useEffect, useRef, useState } from 'react'

const Navbar = (props) => {
    const [showNavBarLine, setShowNavBarLine] = useState(false)
    const [openRigthSideBar, setOpenSideBar] = useState(false)
    const [rect, setRect] = useState(null)
    const [rectForItem, setRectForItem] = useState(null)
    const ref = useRef(null)
    const rightSideBarItemRef = useRef(null)
    const handleMouseEnter = (e) => {
        console.log("window.innerWidth ",window.innerWidth)
        if (window.innerWidth <= 1200) return;
        if (rect) {
            const x = e.clientX - rect.left -30;
            const y = e.clientY - rect.top - 20;
            ref.current.style.transform = `translate(${x}px, ${y}px)`;
        }
    }
    const handleMouseLeave = () => {
        if (window.innerWidth <= 1200) return;
        ref.current.style.transform = 'translate(0, 0)';
    }
    const handleItemMouseMove = (e,xDir) => {
        if (window.innerWidth <= 1200) return;
        const item = e.currentTarget;
        const bounds = item.getBoundingClientRect();
        let y = e.clientY - bounds.top
        const x = e.clientX - bounds.left
        const mid = xDir ?  bounds.width / 2 : bounds.height / 2;
        if(xDir) y = x
        const offset = (y - mid) / mid * 5;
        if(xDir){
            item.style.transform = `translateX(${offset}px)`;
        } else{
        item.style.transform = `translateY(${offset}px)`;
        }
    };
    
    const handleItemMouseLeave = (e) => {
        const item = e.currentTarget;
        item.style.transform = `translateY(0px)`;
    };
    useEffect(() => {
        if (ref.current) {
            const { left, top, width, height } = ref.current.getBoundingClientRect();
            setRect({ left, top, width, height });
        }
        if (rightSideBarItemRef.current) {
            const { left, top, width, height } = rightSideBarItemRef.current.getBoundingClientRect();
            setRectForItem({ left, top, width, height });
        }
        const handleScroll = () => {
            const scrollY = window.scrollY;
            setShowNavBarLine(scrollY > 400);
        };
    
        window.addEventListener('scroll', handleScroll);
    
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);    
    const handleNavBarLineClick = ()=>{
        setOpenSideBar(!openRigthSideBar)
    }
  return (
    <>
        <nav className='displayFlex flexSpaceBetween'>
            <div className='overflowHidden'>
                <div className='nameContainer'>&copy; Code by Vivek Gaur</div>
            </div>
            <div className='displayFlex rightArea'>
                <div className='navItem'>Work</div>
                <div className='navItem'>About</div>
                <div className='navItem'>Contact</div>
            </div>
        </nav>
        <div
        className={`navBarLine ${showNavBarLine || openRigthSideBar ? 'active' : ''}` }
        onClick={()=>{showNavBarLine || openRigthSideBar ? handleNavBarLineClick():''}}
        ref={ref}
        onMouseMove={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        >
            <img src='/menu-button.png' className='menuImg'/>
        </div>
        <div className={`rightSideBarMenu ${openRigthSideBar ? 'active' : ''}`}>
            <div className='navigation'>
                <span>NAVIGATION</span>
            </div>
            <div className = 'displayFlex'>
                <div>
                    {["Work", "About", "Contact"].map((text, index) => (
                    <div
                    key={index}
                    className="item"
                    onMouseMove={(e)=>handleItemMouseMove(e)}
                    onMouseLeave={(e)=>handleItemMouseMove(e)}
                    >
                    {text}
                    </div>
                ))}
            </div>
            <div>
                <div>
                  Socials
                </div>
                <span onMouseMove={(e)=>handleItemMouseMove(e,true)}
                onMouseLeave={(e)=>handleItemMouseMove(e)}
                >Linkdin</span>
                <span className='pLeft20' onMouseMove={(e)=>handleItemMouseMove(e,true)}
                onMouseLeave={(e)=>handleItemMouseMove(e)}
                >Instagram</span>
                <span className='pLeft20' onMouseMove={(e)=>handleItemMouseMove(e,true)}
                onMouseLeave={(e)=>handleItemMouseMove(e)}
                >Twitter</span>
            </div>
        </div>
        </div>
    </>
  )
}

export default Navbar
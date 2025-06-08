import React, { useEffect } from 'react'

const Intro = (props) => {
  const handleNameScroll = () => {
    const nameElements = document.getElementsByClassName('name');
    let nameElement1 = nameElements[0];
    let nameElement2 = nameElements[1];
    let position = 0; // Start at 0
    const animate = () => {
      position -= 0.1; // Move a little bit each frame (speed)
      if (position <= -100) {
        position = 0;
      }
      const translateValue = `translateX(${position}%)`;
      nameElement1.style.transform = translateValue;
      nameElement2.style.transform = translateValue;
      requestAnimationFrame(animate);
    }
    animate();
  }
  useEffect(() => {
    handleNameScroll();
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }else {
        entry.target.classList.remove('visible');
      }
      });
    }, {
      threshold: 0.1
    });

    const fadeTexts = document.querySelectorAll('.fade-text');
    fadeTexts.forEach(el => observer.observe(el));

    return () => {
      fadeTexts.forEach(el => observer.unobserve(el));
    };
  }, []);
  return (
    <>
      <div className='myBannerContainer posRelative nonSelectable'>
        <div className='location displayFlex alignItemCenter flexSpaceBetween'>
          <div className='displayFlex locationContent'>
            <div className='locationText fitContent'>
              Located<br /><span className='blackTxt'>In</span><br />India
            </div>
            <div className='fitContent'>
              <img src='/globe.gif' alt='rotate' className='globe' />
            </div>
          </div>
          <div className='fitContent role'>
            <span>Software Developer</span>
          </div>
        </div>
        <div className='nameTraverseArea'>
          <div className='overflowHidden displayFlex flexCenterAlign'>
            <div className='biggerName displayFlex overflowHidden'>
              <h1 className='name'>Vivek Gaur - </h1 >
              <h1 className='name'>Vivek Gaur - </h1>
            </div>
          </div>
        </div>
      </div>
      <div className='aboutUsOnIntro nonSelectable'>
        <div className='displayFlex flexSpaceBetween'>
          <div className='myIntro fade-text'>
            <span>Building scalable software that powers the future.
              Focused on crafting reliable, efficient, and impactful solutions.
              Let's push the boundaries of what's possible — together.</span>
          </div>
          <div className='passion'>
            <span>
              My passion for building scalable systems, crafting clean code, and solving real-world problems puts me at a unique intersection of technology and innovation.
            </span>
          </div>
        </div>
      </div>
    </>
  )
}

export default Intro
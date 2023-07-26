import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Home.scss'

export default function Home() {
    const [scrollTop, setScrollTop] = useState(0);

    useEffect(() => {
        const handleScroll = (event) => {
          setScrollTop(window.scrollY);
        };
    
        window.addEventListener('scroll', handleScroll);
    
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);

    function handleLearnMore(){
        document.body.scrollTop = document.documentElement.scrollTop = 0;
    }

  return (
    <div className='homeContainer'>
        <div 
            className='homeContainer__intro'
            style={{ backgroundPositionY: `${Math.floor((scrollTop - 200) / 1.25)}px`}}
            >
            <div className='homeContainer__intro__details'>
                <h1>SONNET <span>LAMB</span></h1>
                <h3>Singer, Actor, Dancer</h3>
                <p>Thanks for visiting my site. I am a passionate Actor with years of experience in the industry. I love what I do, and want others to see that love shine through in all of my work. Take a look around to find information about myself, my career, updates on projects I’m working on, and any upcoming events.</p>
                <Link onClick={handleLearnMore}>Learn Now</Link>
            </div>
            <div className='homeContainer__intro__img'>
            </div>
        </div>
    </div>
  )
}
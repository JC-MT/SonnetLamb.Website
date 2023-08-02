import './Home.scss'
import { FixedBackground } from './FixedBackground';

export default function Home() {

    function handleLearnMore(){
        document.body.scrollTop = document.documentElement.scrollTop = 0;
    }

  return (
    <div className='homeContainer'>
      <div className='homeContainer__intro'>
        <div className='homeContainer__intro__details'>
            <h1>SONNET <span>LAMB</span></h1>
            <h3>Singer, Actor, Dancer</h3>
            <p>Thanks for visiting my site. I am a passionate Actor with years of experience in the industry. I love what I do, and want others to see that love shine through in all of my work. Take a look around to find information about myself, my career, updates on projects I’m working on, and any upcoming events.</p>
            <a href='#' onClick={handleLearnMore}>Learn Now</a>
        </div>
          <FixedBackground 
            src={'https://static.wixstatic.com/media/15312d_8947a28f34a947c88e0eccf3d84f0f8e~mv2_d_3000_4500_s_4_2.jpg/v1/fill/w_507,h_800,fp_0.38_0.25,q_85,usm_0.66_1.00_0.01,enc_auto/15312d_8947a28f34a947c88e0eccf3d84f0f8e~mv2_d_3000_4500_s_4_2.jpg'} 
            height="800px" 
            speed={6}
            >
          </FixedBackground>
      </div>
      <div className='homeContainer__contact'>
      <img className='homeContainer__contact__img' src='https://static.wixstatic.com/media/15312d_87e0a00d25c44421845f8a6a2a0cc6cb~mv2_d_2240_3360_s_2.jpeg/v1/fill/w_1396,h_760,fp_0.51_0.52,q_85,usm_0.66_1.00_0.01,enc_auto/15312d_87e0a00d25c44421845f8a6a2a0cc6cb~mv2_d_2240_3360_s_2.jpeg'/>
      <div className='homeContainer__contact__info'>
        <h2>CONTACT ME</h2>
        <a href="mailto:sayhello@sonnetlamb.com">sayhello@sonnetlamb.com</a>
        <div className='homeContainer__contact__info__socialmedia'>
          <a href='https://www.facebook.com/sonnet.lamb' target="_blank" rel="noreferrer" ><img width={'26px'} height={'26px'} src='https://static.wixstatic.com/media/23fd2a2be53141ed810f4d3dcdcd01fa.png/v1/fill/w_52,h_52,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Facebook.png'/></a>
          <a href='https://www.instagram.com/sonnetlamb/?hl=en' target="_blank" rel="noreferrer" ><img width={'26px'} height={'26px'} src='https://static.wixstatic.com/media/81af6121f84c41a5b4391d7d37fce12a.png/v1/fill/w_52,h_52,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Instagram.png'/></a>
        </div>
      </div>
    </div>
    </div>
  )
}
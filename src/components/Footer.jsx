import './Footer.scss'

export default function Footer() {

  return (
    <div className='footerContainer'>
        <div className='footerContainer__socialmedia'>
            <a href='https://www.facebook.com/sonnet.lamb' target="_blank" rel="noreferrer" ><img width={'20px'} height={'20px'} src='https://static.wixstatic.com/media/0fdef751204647a3bbd7eaa2827ed4f9.png/v1/fill/w_40,h_40,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Facebook.png'/></a>
            <a herf='https://www.instagram.com/sonnet_little_lamb/?hl=en' target="_blank" rel="noreferrer" ><img width={'20px'} height={'20px'} src='https://static.wixstatic.com/media/01c3aff52f2a4dffa526d7a9843d46ea.png/v1/fill/w_40,h_40,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Instagram.png'/></a>
        </div>
        <p className='footerContainer__copyrights'>©2023 by Sonnet Lamb. Proudly created by her husband</p>
    </div>
  )
}
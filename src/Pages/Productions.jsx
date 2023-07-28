import './Productions.scss'

export default function Productions() {

  return (
    <div className='productionsContainer'>
        <div className="productionsContainer__production">
            <img className="productionsContainer__production__img" src='https://static.wixstatic.com/media/15312d_5c898f1adf27400a865b07c017a68ca4~mv2_d_6720_4480_s_4_2.jpg/v1/fill/w_2378,h_960,fp_0.29_0.20,q_90,usm_0.66_1.00_0.01,enc_auto/15312d_5c898f1adf27400a865b07c017a68ca4~mv2_d_6720_4480_s_4_2.jpg' />
            <h3 className="productionsContainer__production__title" >CURRENT PROJECTS</h3>
            <p className="productionsContainer__production__synopsis" >Most recently, Sonnet produced a New York City Cabaret alongside some very dear and talented friends. It was standing room only and a huge success! Sonnet also worked as the Title Role in the premiere of a brand new musical titled <span>The Glassblower's Daughter</span>. It premiered in October 2021 in Boston, MA. She was also seen starring as mean girl Sabrina in a new musical titled <span>Rainbow Ring</span> in June 2022 in NYC.</p>
        </div>
        <div className="productionsContainer__production">
            <img className="productionsContainer__production__img" src='https://static.wixstatic.com/media/15312d_4249a7d219ae47208d8a073a4a4f2e87~mv2.jpg/v1/fill/w_1500,h_980,fp_0.47_0.33,q_85,enc_auto/15312d_4249a7d219ae47208d8a073a4a4f2e87~mv2.jpg' />
            <p className="productionsContainer__production__details" >Theatre Tulsa's <span>A Little Night Music</span> promo photo. Sonnet starred as Anne Egerman in early Spring 2020.</p>
        </div>
    </div>
  )
}
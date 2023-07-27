import './About.scss'

export default function About() {

  return (
    <div className='aboutContainer'>
        <img className="aboutContainer__img" src='https://static.wixstatic.com/media/15312d_99b3fb18dcc644dbb5f5c15d9bc4d1aa~mv2.jpg/v1/fill/w_800,h_800,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Sonnet%20Lamb%2C%20actor%2C%20singer%2C%20dancer%2C%20musical%20theatre%2C%20oklahoma.jpg' />
        <div className='aboutContainer__bio'>
            <h3>BIO</h3>
            <h4>The World’s a Stage</h4>
            <p>Classically trained, Sonnet has performed roles from Rosabella in Loesser's <span>The Most Happy Fella</span> to Cosette in <span>Les Miserables</span>. She is known for her pure soprano voice and sincere acting.</p>
            <p>A recent graduate from the University of Central Oklahoma, she earned her Bachelor's of Music in Musical Theatre. She has studied and been directed under Tony Walton, Dr. Greg White, Jonathan Beck Reed, and Amy Reynolds.</p>
            <p>Additional credits include <span>TEXAS: The Outdoor Musical</span> (Elsie), <span>The Pirates of Penzance</span> (Mabel), <span>Man of La Mancha</span> (Antonia), <span>Annie!</span> (Lily St. Regis), <span>Oliver!</span> (Charlotte), and <span>Into the Woods</span> (Rapunzel). Sonnet also has five years experience in teaching voice, piano, and acting</p>
            <p>Sonnet made the big move to New York City in 2020 with her very cute husband, Jan. She is often found at the piano, in the dance studio, or obsessively cleaning her already clean apartment. Sonnet is loving living the dream, and looks forward to starring anything opposite Ryan Reynolds.</p>
        </div>
        <a href="https://www.sonnetlamb.com/_files/ugd/15312d_45f679f5768545e4b778d61dcaa6595f.docx?dn=Resume2022.docx" target="_blank" rel="noreferrer">Click Here for Resumé</a>
    </div>
  )
}
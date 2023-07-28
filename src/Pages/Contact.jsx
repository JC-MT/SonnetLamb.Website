import './Contact.scss'

export default function Contact() {

  return (
    <div className='contactContainer'>
        <img className="contactContainer__img" src='https://static.wixstatic.com/media/15312d_87e0a00d25c44421845f8a6a2a0cc6cb~mv2_d_2240_3360_s_2.jpeg/v1/fill/w_980,h_1440,fp_0.51_0.52,q_85,usm_0.66_1.00_0.01,enc_auto/15312d_87e0a00d25c44421845f8a6a2a0cc6cb~mv2_d_2240_3360_s_2.jpeg' />
        <form className='contactContainer__form'>
            <h2>CONTACT ME</h2>
            <a href="mailto:sayhello@sonnetlamb.com">sayhello@sonnetlamb.com</a>
            <div className='contactContainer__form__fullname'>
                <input className='contactContainer__form__fullname__first' placeholder="Name" type='text'></input>
                <input className='contactContainer__form__fullname__last' placeholder="Email" type='email'></input>
            </div>
            <input className='contactContainer__form__subject' placeholder="Subject" type='text'></input>
            <textarea className='contactContainer__form__message' placeholder="Type your message here..."></textarea>
            <button className='contactContainer__form__button' type='submit'>Submit</button>
        </form>
    </div>
  )
}
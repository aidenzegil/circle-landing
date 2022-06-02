import React from 'react'
import '../../App.css'
import styles from './Contact.module.css'

const Contact = () => {
    return (
        <div className='Box' id='contact'>
            
            <div className={styles.TextContainer}>
                <p style={{textAlign: 'left', fontSize: 40, width: '100%'}} data-aos="fade-up-right">Get In Touch!</p>
                <p data-aos="fade-up-left">You made it this far, take the final step and join us!</p>
                <a data-aos="fade-up-left" className={styles.Link} href="https://docs.google.com/forms/d/e/1FAIpQLSemaY3k-Mss72hDS-fl6epdcnxkSGL09jU2DsyKzAOttQ01cg/viewform"><i>fullsend</i></a>
                <p data-aos="fade-up-left">Join our discord and play with our AI :D</p>
                <a data-aos="fade-up-left" className={styles.Link} href='https://discord.gg/RXBTth2n'><i>Discord</i></a>
                <p data-aos="fade-up-left">Need to contact us about anything else? Ping us at Hi@circlelabs.xyz</p>
            </div>
        </div>
    )
}

export default Contact

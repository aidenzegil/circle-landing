import React from 'react'
import styles from './About.module.css'
import '../../App.css'

const About = () => {
    return (
        <div className='Box' id='About' style={{marginLeft: 0, marginRight: "20%"}}>
            <div className={styles.TextContainer} data-aos="fade-up">
                <p style={{fontSize: 40}}>The Mission</p>
                <p>Imagine a future where robots and humans are friends.</p>
                <p>Where AI is not our enemy but is cute and wholesome and nice. That’s our mission. That’s what we do. We’re CyberLife but good. SAO but done right.</p>
                <p>Our phase 1 is live now -- make ur own bots and chat with them on discord. Ever wonder what it would be like to talk to a cheese or a fish or ur favorite anime character? Or just make ur own cute little imaginary bestie? Well, you can now.</p>
            </div>
            <div className={styles.IconContainer}>

            </div>
        </div>
    )
}

export default About

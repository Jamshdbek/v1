import React, { useEffect } from 'react'
import cls from "./main.module.scss"
import AOS from 'aos';
function Main() {
    AOS.init();

    return (
        <div className={cls.main}>
         
            <div className={cls.body} >
                
                {/* {Hi, my name is  } */}
                <p className={cls.text_start}
                    data-aos="fade-up"
                    data-aos-anchor-placement="center-center"
                >Hi, my name is</p>
                <h1 className={cls.text_big_start} >Ibroximov Jamshid</h1>
                <h2 className={cls.text_second_start} 
                     >I build things for the web.</h2>
                <p className={cls.smile_info} 
                  >I'm software engineer   specializing in build amending website, <br /> Correctly I'm focusing on building accessible, and researching good job </p>
            </div>
            
        </div>
    )
}

export default Main
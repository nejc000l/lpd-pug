import React from 'react';
import '../css/info.css'
import lzs from '../img/Lzs.png';

const Info = ()=>{
    return(
        <div className="container">
            <div className="container-left">
                    <div className="title big">Lovska Družina Pugled</div>
                    <div className="logo"><img src={lzs} alt="" />
                    <div className="information">Vidergarjeva ulica 13 Ljubljana <br />
                    1261 LJUBLJANA-DOBRUNJE <br /> <br />
                    EMAIL: <br />ld.pugled@gmail.com
                    </div>
                    </div>
                    <div className="nav">
                    <ul>
                        <li>
                            <a href="#">-Informacije javnega značaja</a>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <a href="#">-APK:Afriška Prašičja Kuga</a>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <a href="#">-APK-Načrt ravnanja upravljalca lovišč</a>
                        </li>
                    </ul>
                    
                    </div>
            </div>
            <div className="container-right">
                    <div></div>
                    <div className="title small">Title of the link</div>
                    <div className="content smaller-text">Lorem ipsum dolor, 
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus quidem, quaerat aliquid nulla nam nisi qui sapiente quam totam architecto quisquam ullam distinctio eius suscipit unde? Sapiente voluptates vero blanditiis?
                    sit amet consectetur adipisicing elit. Sequi, culpa. Accusantium officiis dolorem incidunt, totam quod illo corporis odio excepturi voluptas ea, quibusdam labore cumque atque provident in facilis. Itaque.</div>
            </div>
     
     
        </div>
        

    )
}

export default Info;
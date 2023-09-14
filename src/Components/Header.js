import React from 'react'

function Header() {
  return <>
   <header class="header" id="home">
        <div class="container">
            <div class="infos">
                <h6 class="subtitle">hello, I'm</h6>
                <h6 class="title">Kathiravan Arjunan</h6>
                <p>Full Stack Web Developer (MERN)</p>

                <div class="buttons pt-3">
                    <button class="btn btn-dark rounded">DOWNLOAD CV</button>
                </div>      

                <div class="socials mt-4">
                    
                    <a class="social-item" href="https://www.linkedin.com/in/kathiravan-arjunan-942975238/"><i class="ti-linkedin"></i></a>
                    <a class="social-item" href="https://github.com/kat369"><i class="ti-github"></i></a>
                    
                </div>
            </div>              
            <div class="img-holder">
                <img src="assets/imgs/man.svg" alt=""/>
            </div>      
        </div>  
    </header>
  </>
}

export default Header
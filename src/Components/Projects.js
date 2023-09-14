import React from 'react'

function Projects() {
  return<>
     <section id="portfolio" class="section">
        <div class="container text-center">
            <h6 class="subtitle">Projects</h6>
            <h6 class="section-title mb-4">Check My Wonderful Works</h6>
            {/* <p class="mb-5 pb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. In alias dignissimos. <br/> rerum commodi corrupti, temporibus non quam.</p> */}

            <div class="row">
                <div class="col-sm-4">
                    <div class="img-wrapper">
                        <img src="assets/imgs/folio-1.jpg" alt=""/>
                        <div class="overlay">
                            <div class="overlay-infos">
                                <h5>Project Management Tool</h5>
                                <a href="https://63b5b4a8dc7eb327bfd14719--cheerful-croissant-bf96fd.netlify.app/"><i class="ti-zoom-in"></i></a>
                                &nbsp;<a href="https://github.com/kat369/capstone-front"><i class="ti-link"></i></a>
                                &nbsp;<a href="https://github.com/kat369/capstone-back"><i class="ti-link"></i></a>
                            </div>  
                        </div>
                    </div>
                    <div class="img-wrapper">
                        <img src="assets/imgs/folio-1.jpg" alt=""/>
                        <div class="overlay">
                            <div class="overlay-infos">
                                <h5>Web Scrapper</h5>
                                <a href="https://peppy-selkie-e33c42.netlify.app/"><i class="ti-zoom-in"></i></a>
                                 &nbsp;<a href="javascript:void(0)"><i class="ti-link"></i></a>
                                 &nbsp;<a href="javascript:void(0)"><i class="ti-link"></i></a>
                            </div>  
                        </div>
                    </div>                  
                </div>
                <div class="col-sm-4">
                <div class="img-wrapper">
                        <img src="assets/imgs/folio-1.jpg" alt=""/>
                        <div class="overlay">
                            <div class="overlay-infos">
                                <h5>Chat Room</h5>
                                <a href="https://legendary-tulumba-c13295.netlify.app/"><i class="ti-zoom-in"></i></a>
                                 &nbsp;<a href="javascript:void(0)"><i class="ti-link"></i></a>
                                 &nbsp;<a href="javascript:void(0)"><i class="ti-link"></i></a>
                            </div>  
                        </div>
                    </div>
                                  
                </div>
             
                <div class="col-sm-4">
                <div class="img-wrapper">
                        <img src="assets/imgs/folio-1.jpg" alt=""/>
                        <div class="overlay">
                            <div class="overlay-infos">
                                <h5>Admin Panel</h5>
                                <a href="https://splendorous-travesseiro-cb808f.netlify.app/"><i class="ti-zoom-in"></i></a>
                                 &nbsp;<a href="javascript:void(0)"><i class="ti-link"></i></a>
                                 &nbsp;<a href="javascript:void(0)"><i class="ti-link"></i></a>
                            </div>  
                        </div>
                    </div> 
                                  
                </div>
            </div>

        </div>
    </section>
  </>
}

export default Projects
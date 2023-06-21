import React from 'react'
import Logo from './assets/copy.jpg'
import './Home.css'

export default function Home() {
  return (
    <div className="main-section col-13">
          <div className="d-flex flex-wrap container col-8">
              <div className="pt-5 col-lg-7 col-12 d-lg-none text-center">
                  <img src={Logo} alt="Arzoo Rai" width="100%" height="100%" />
              </div>
              <div className="my-5 col-lg-6 col-10 d-lg-block d-none text-center">
                  <img src={Logo} alt="Arzoo Rai" width="80%" height="80%" />
              </div>
              <div className="col-lg-6 mt-5 text-center pt-5">
                  {/* <h3>Welcome</h3> */}
                  <h1>I'm <br />
                  <marquee behavior="alternate" direction="left">
                    <span style={{fontsize: 72,color: `#0000ff`}}>Arzoo <br /> Rai</span>
                  </marquee></h1>
                  <p className="pt-3 title">Web Developer, Programmer <br /> UI/UX Designer</p>
                  <div className="nav-icon py-3">
                      <a href="https://www.linkedinhttps://www.linkedin.com/in/arzoo-rai-387a01228/" target="_blank" rel="noreferrer" className="text-white p-2">
                          <i className="fab fa-linkedin"></i></a>
                      <a href="https://www.facebook.com/ardip.rai.3" target="_blank" rel="noreferrer" className="text-white p-2 ml-3">
                          <i className="fab fa-facebook"></i></a>
                      <a href="https://www.instagram.com/arzoo9424" target="_blank" rel="noreferrer" className="text-white p-2 ml-3">
                          <i className="fab fa-instagram"></i></a>
                      <a href="https://github.com/Arzoo88/Online-Shopping" target="_blank" rel="noreferrer" className="text-white w-5 p-2 ml-3">
                          <i className="fab fa-github"></i></a>
                  </div>
              </div>
            </div>
        </div>
  )
}

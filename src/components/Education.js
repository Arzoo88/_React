import React from 'react'
import './Education.css'

export default function Education() {
  return (
    <section className="education text-white py-5" id='education'>
          <div className='container colo-13'>
            <h1>Education</h1>
            <ul className='pt-5'>
              <li className='d-flex col-12'>
                <div className='col-6 ml-auto'>
                  <h4>MNB Memorial Public School </h4>Matric <br />75%
                </div>
                <div className='col-5'>
                  <h5>2015-2016</h5>
                </div>
              </li>
              <li className='d-flex col-12 pt-3'>
                <div className='col-6 ml-auto'>
                  <h4>MNB Memorial Public School</h4>Intermediate<br />55%
                </div>
                <div className='col-5'>
                  <h5>2016-2018</h5>
                </div>
              </li>
              <li className='d-flex col-12 pt-3'>
                <div className='col-6 ml-auto'>
                  <h4>Veer Bahadur Singh Purvanchal University</h4>BCA <br />78%
                </div>
                <div className='col-5'>
                  <h5>2019-2022</h5>
                </div>
              </li>
              <li className='d-flex col-12 pt-3'>
                <div className='col-6 ml-auto'>
                  <h4>GD Goenka University</h4>MCA <br />-
                </div>
                <div className='col-5'>
                  <h5>2022-present</h5>
                </div>
              </li>
            </ul>
          </div>
    </section>
  )
}

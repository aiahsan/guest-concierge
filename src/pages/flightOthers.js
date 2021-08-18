import React from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/flight/footer';
import CustomTimeline from '../components/CustomTimeline';
import FlightSidebar from '../components/flight/flightSidebar';
import FlightTopBar from '../components/flight/flightTopbar';
import RightBar from '../components/flight/rightBar';
import FlightTable from '../components/flight/flightTable';
import Timeline from '../components/CustomTimeline';
export default () => {
  const [sidebaropen, setSidebaropen] = React.useState(false);
  return (
    <div>
      <Navbar isActive={1} />
      <section className='section-flight'>
        <div className='container-fluid'>
          <div className='row bg-white'>
            <div className='col-md-3'>
              <FlightSidebar />
            </div>
            <div
              className={`${
                sidebaropen == true ? 'col-md-7' : 'col-md-9'
              } pb-lg-5 pb-4 bg-white px-lg-4 px-3 py-4`}
            >
              <div className='row'>
                <FlightTopBar isrecomended={true} sidebaropen={sidebaropen} />
                <Timeline label='Recommended' isrecomended={true} />

                <div class='col-12 mt-3'>
                  <h2>Other Trip Options</h2>
                </div>

                <div class='col-12 py-4 mt-3 blue-bg'>
                  <div class='row'>
                    <div class='col-lg-4'>
                      <h6>Depart (days)</h6>
                      <div class='d-flex align-items-center'>
                        <div>
                          <p class='mb-0'>2 days</p>
                          <input type='range' name='' id='' />
                        </div>
                        <div
                          class='btn-group ml-2 btn-group-toggle'
                          data-toggle='buttons'
                        >
                          <label class='btn active'>
                            <input
                              type='radio'
                              name='options'
                              id='option1'
                              checked
                            />
                            earlier
                          </label>
                          <label class='btn'>
                            <input type='radio' name='options' id='option3' />
                            later
                          </label>
                        </div>
                      </div>
                    </div>
                    <div class='col-lg-4 mt-3 mt-lg-0'>
                      <h6>Return (days)</h6>
                      <div class='d-flex align-items-center'>
                        <div>
                          <p class='mb-0'>2 days</p>
                          <input type='range' name='' id='' />
                        </div>
                        <div
                          class='btn-group ml-2 btn-group-toggle'
                          data-toggle='buttons'
                        >
                          <label class='btn active'>
                            <input
                              type='radio'
                              name='options'
                              id='option1'
                              checked
                            />
                            earlier
                          </label>
                          <label class='btn'>
                            <input type='radio' name='options' id='option3' />
                            later
                          </label>
                        </div>
                      </div>
                    </div>
                    <div class='col-lg-4 mt-3 mt-lg-0'>
                      <h6>Hotel nights</h6>
                      <select name='' id='' class='site-input py-2 px-4'>
                        <option value=''>10</option>
                        <option value=''>12</option>
                        <option value=''>14</option>
                      </select>
                    </div>
                    <div class='col-12 mt-lg-4 mt-3'>
                      <h6>Airports</h6>
                      <div class='row px-3'>
                        <div class='col-lg-4 bg-white p-3 mt-3'>
                          <p class='black-text mb-0'>
                            <input
                              type='checkbox'
                              id='stopover1'
                              name='radio-group'
                            />
                            <label for='stopover1' class='bordered mb-0'>
                              Newark Liberty International (EWR)
                              <br></br>
                              16.48 m About <br></br> 27 min
                            </label>
                          </p>
                        </div>
                        <div class='col-lg-4 bg-white p-3 mt-3'>
                          <p class='black-text mb-0'>
                            <input
                              type='checkbox'
                              id='stopover2'
                              name='radio-group'
                            />
                            <label for='stopover2' class='bordered mb-0'>
                              Westchester Country (HPN)
                              <br></br> 16.48 m<br></br>
                              About 33 min
                            </label>
                          </p>
                        </div>
                        <div class='col-lg-4 bg-white p-3 mt-3'>
                          <p class='black-text mb-0'>
                            <input
                              type='checkbox'
                              id='stopover3'
                              name='radio-group'
                            />
                            <label for='stopover3' class='bordered mb-0'>
                              John F.Kennedy International (JKK) <br></br>16.48
                              m <br></br>About 35 min
                            </label>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <Timeline label='Option #1' isrecomended={true} />

                <Timeline label='Option #2' isrecomended={true} />

                <div className='col-12 py-5 mt-3 text-center l-blue-bg'>
                  <p className='d-grey-text semi-bold mb-0'>
                    Does this flight not fit you? You can choose another one.
                  </p>
                  <a href='#_' className='blue-text d-inline-block'>
                    Find Other Options
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

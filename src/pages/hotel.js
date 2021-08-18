import React from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/flight/footer';
import CustomTimeline from '../components/CustomTimeline';
import FlightSidebar from '../components/flight/flightSidebar';
import FlightTopBar from '../components/flight/flightTopbar';
import RightBar from '../components/flight/rightBar';
export default () => {
  const [sidebaropen, setSidebaropen] = React.useState(false);
  return (
    <div>
      <Navbar isActive={2} />
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
              <section className='section-flight'>
                <div className='container-fluid'>
                  <div className='row'>
                    <div className='col-lg-8 pb-lg-5 pb-4 col-xl-9 bg-white px-lg-5 px-3 py-4'>
                      <div className='row'>
                        <div className='col-sm-1 text-right col-2'>
                          <img
                            src='images/line.png'
                            alt=''
                            className='img-fluid'
                          />
                        </div>
                        <div className='col-sm-11 col-10'>
                          <h2 className='mt-2'>
                            Would you like us to provide your hotel
                            accommodations?
                          </h2>
                          <div className='d-sm-flex align-items-center'>
                            <a
                              href='#_'
                              className='site-btn border-btn px-5 d-block mt-4 d-sm-inline-block py-2 mr-sm-2'
                            >
                              Yes
                            </a>
                            <a
                              href='#_'
                              className='site-btn px-5 d-block mt-4 d-sm-inline-block py-2'
                            >
                              No
                            </a>
                          </div>
                          <h2 className='mt-5'>Where will you be staying?</h2>
                          <div className='d-sm-flex align-items-center'>
                            <a
                              href='#_'
                              className='site-btn border-btn px-3 py-2 text-center d-block mt-4 d-sm-inline-block mr-sm-2'
                            >
                              <img
                                src='images/friends.png'
                                alt=''
                                className='img-fluid mx-auto d-block'
                              />
                              With friends or
                              <br></br>
                              family
                            </a>
                            <a
                              href='#_'
                              className='site-btn border-btn px-3 py-2 text-center d-block mt-4 d-sm-inline-block'
                            >
                              <img
                                src='images/hotel.png'
                                alt=''
                                className='img-fluid mx-auto d-block'
                              />
                              I booked my hotel
                              <br></br>
                              elsewhere
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

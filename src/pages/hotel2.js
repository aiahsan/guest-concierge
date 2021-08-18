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
              <div className='row'>
                <div className='col-sm-1 text-right col-2'>
                  <img src='images/line.png' alt='' className='img-fluid' />
                </div>
                <div className='col-sm-11 col-10'>
                  <h2 className='mt-2'>
                    Would you like us to provide your hotel accommodations?
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
                  <div className='row'>
                    <div className='col-xl-3 col-lg-4 mt-3'>
                      <div className='W-100'>
                        <iframe
                          width='100%'
                          height='600'
                          frameborder='0'
                          scrolling='no'
                          marginheight='0'
                          marginwidth='0'
                          src='https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=1%20Grafton%20Street,%20Dublin,%20Ireland+(Projector)&amp;t=&amp;z=18&amp;ie=UTF8&amp;iwloc=B&amp;output=embed'
                        ></iframe>
                      </div>
                    </div>
                    <div className='col-xl-5 my-auto col-lg-8'>
                      <a
                        href='#_'
                        className='site-btn text-left mt-3 border-btn px-3 py-2 d-block'
                      >
                        <div className='media'>
                          1
                          <div className='media-body ml-3'>
                            <h6 className='mb-0'>Center Hotel</h6>
                            <div className='media mt-1'>
                              <i className='fas fa-map-marker-alt'></i>
                              <div className='media-body ml-2'>
                                <p className='mb-0'>
                                  South of Washington Boston, MA USA (50 m from
                                  center)
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </a>
                      <a
                        href='#_'
                        className='site-btn text-left mt-3 border-btn px-3 py-2 d-block'
                      >
                        <div className='media'>
                          2
                          <div className='media-body ml-3'>
                            <h6 className='mb-0'>
                              The Congress Plaza Hotel and Convention Center
                            </h6>
                            <div className='media mt-1'>
                              <i className='fas fa-map-marker-alt'></i>
                              <div className='media-body ml-2'>
                                <p className='mb-0'>
                                  South of Washington Boston, MA USA (50 m from
                                  center)
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </a>
                      <a
                        href='#_'
                        className='site-btn text-left mt-3 border-btn px-3 py-2 d-block'
                      >
                        <div className='media'>
                          3
                          <div className='media-body ml-3'>
                            <h6 className='mb-0'>River Hotel</h6>
                            <div className='media mt-1'>
                              <i className='fas fa-map-marker-alt'></i>
                              <div className='media-body ml-2'>
                                <p className='mb-0'>
                                  South of Washington Boston, MA USA (50 m from
                                  center)
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </a>
                      <a
                        href='#_'
                        className='site-btn text-left mt-3 border-btn px-3 py-2 d-block'
                      >
                        <div className='media'>
                          4
                          <div className='media-body ml-3'>
                            <h6 className='mb-0'>
                              Wyndham Grand Chicago Riverfront
                            </h6>
                            <div className='media mt-1'>
                              <i className='fas fa-map-marker-alt'></i>
                              <div className='media-body ml-2'>
                                <p className='mb-0'>
                                  South of Washington Boston, MA USA (50 m from
                                  center)
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
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

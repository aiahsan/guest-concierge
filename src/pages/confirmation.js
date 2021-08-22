import React from 'react';
import Navbar from '../components/navbar';
import { useHistory } from 'react-router-dom';

import {
  Link,
  DirectLink,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from 'react-scroll';

export default () => {
  const history = useHistory();

  const [isConfirm, setisConfirm] = React.useState(false);
  return (
    <div>
      <Navbar isActive={4} />
      <section className='section-flight'>
        <div className='container-fluid'>
          <div className='row'>
            <div className='col-md-3 pb-lg-5 pb-4  bg-grey px-lg-4 px-3 py-4'>
              {isConfirm == false ? (
                <>
                  <Link
                    activeClass='active'
                    to='details'
                    className='blue-text d-block mt-3'
                    spy={true}
                    smooth={true}
                    duration={250}
                  >
                    Invitation Details
                  </Link>
                  <Link
                    activeClass='active'
                    to='inforamtion'
                    className='blue-text d-block mt-3'
                    spy={true}
                    smooth={true}
                    duration={250}
                  >
                    Personal Information
                  </Link>
                  <Link
                    activeClass='active'
                    to='inventory'
                    className='blue-text d-block mt-3'
                    spy={true}
                    smooth={true}
                    duration={250}
                  >
                    Trip Inventory
                  </Link>
                  <Link
                    activeClass='active'
                    to='details'
                    className='blue-text d-block mt-3'
                    spy={true}
                    smooth={true}
                    duration={250}
                  >
                    Hotel Details
                  </Link>
                </>
              ) : (
                <></>
              )}
            </div>
            <div className='col-md-8 pb-lg-5 pb-4   px-lg-4 px-3 py-4'>
              <div className='row'>
                {isConfirm == true ? (
                  <div class='col-12 py-lg-5 px-lg-5 px-4 py-4 mt-4 mb-2 booking-confirmed'>
                    <div class='media justify-content-center'>
                      <img
                        src='images/check-mark.png'
                        alt=''
                        class='img-fluid'
                      />
                      <div class='media-body ml-3'>
                        <h2>Booking Confirmed</h2>
                        <p class='mb-0'>
                          We will send more details about your travel logistics
                          a few day prior to your departure.{' '}
                          <a href='#_' class='semi-bold'>
                            Show More
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                ) : (
                  <></>
                )}
                <div className='bg-white'>
                  <Element name='details'>
                    <div className='col-12'>
                      <h1>
                        Confirm the Details of Travel Invitation to Sandra Relly
                      </h1>
                      <p className='d-grey-text mb-0 semi-bold'>
                        Invitation #77829392
                      </p>
                      <div className='row'>
                        <div className='col-lg-4 mt-3'>
                          <img
                            src='images/projector-bg.png'
                            alt=''
                            className='img-fluid'
                          />
                        </div>
                        <div className='col-lg-8 mt-3 my-auto'>
                          <h2 className='mb-0'>
                            UX/UI design session at our Boston office
                          </h2>
                          <p className='d-grey-text mb-0 semi-bold'>
                            Hosted by Microsoft LTD
                          </p>
                          <div className='d-flex align-items-center mt-2'>
                            <i className='far fa-calendar-alt d-grey-text mr-2'></i>
                            <p className='mb-0'>
                              Sep, 12 at 4:00 PM - Sep, 14 at 6:00 PM
                            </p>
                          </div>
                          <div className='d-flex align-items-center mt-2'>
                            <i className='fas fa-map-marker-alt d-grey-text mr-2'></i>
                            <p className='mb-0'>
                              1 Ave de Lafayette, Boston, MA 02111, USA
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Element>
                  <Element name='inforamtion'>
                    <div className='col-12 mt-4 bg-gray px-lg-4 px-3 py-4'>
                      <div className='row'>
                        <div className='col-lg-4 mt-3 col-md-6'>
                          <p className='mb-0'>Full Name</p>
                          <p className='mb-0 semi-bold mt-2 d-gray-text'>
                            John Adam Smith
                          </p>
                        </div>
                        <div className='col-lg-4 mt-3 col-md-6'>
                          <p className='mb-0'>Date of birth</p>
                          <p className='mb-0 semi-bold mt-2 d-gray-text'>
                            20 January 1992
                          </p>
                        </div>
                        <div className='col-lg-4 mt-3 col-md-6'>
                          <p className='mb-0'>Gender</p>
                          <p className='mb-0 semi-bold mt-2 d-gray-text'>
                            Male
                          </p>
                        </div>
                        <div className='col-lg-4 mt-3 col-md-6'>
                          <p className='mb-0'>Redress Number</p>
                          <p className='mb-0 semi-bold mt-2 d-gray-text'>
                            4532415
                          </p>
                        </div>
                        <div className='col-lg-4 mt-3 col-md-6'>
                          <p className='mb-0'>TSA Number</p>
                          <p className='mb-0 semi-bold mt-2 d-gray-text'>
                            983241573
                          </p>
                        </div>
                        <div className='col-lg-4 mt-3 col-md-6'>
                          <p className='mb-0'>Frequent Traveler Number</p>
                          <p className='mb-0 semi-bold mt-2 d-gray-text'>
                            715260000
                          </p>
                        </div>
                      </div>
                    </div>
                  </Element>
                  <div className='col-12'>
                    <hr className='my-0'></hr>
                  </div>
                  <Element name='inventory'>
                    <div className='col-12 mt-4'>
                      <h2>
                        <i className='far fa-calendar d-grey-text mr-2'></i>Trip
                        Inventory
                      </h2>
                      <div className='d-md-flex align-items-center'>
                        <p className='mt-3 mb-0 mx-3'>
                          Start:{' '}
                          <span className='semi-bold'>4:30 AM 24.11.2018</span>
                        </p>
                        <p className='mt-3 mb-0 mx-3'>
                          End:{' '}
                          <span className='semi-bold'>7:44 AM 25.11.2018</span>
                        </p>
                      </div>
                    </div>
                    <div className='col-12 mt-4'>
                      <p className='d-grey-text mb-0'>24 November 2018</p>
                      <hr className='mt-0'></hr>
                      <div className='row'>
                        <div className='col-lg-4'>
                          <p className='mb-2'>06:05 AM</p>
                          <p className='mb-0'>06:30 AM</p>
                        </div>
                        <div className='col-lg-4 mt-3 mt-lg-0'>
                          <div className='media'>
                            <img
                              src='images/car.png'
                              alt=''
                              className='img-fluid'
                            />
                            <div className='media-body ml-3'>
                              <p className='mb-2 semi-bold'>Self-Drive</p>
                              <p className='mb-0'>Duration: 25m</p>
                            </div>
                          </div>
                        </div>
                        <div className='col-lg-4 mt-3 mt-lg-0'>
                          <p className='mb-2'>London, UK</p>
                          <p className='mb-0'>Termonal 4, Hitrow, London, UK</p>
                        </div>
                      </div>
                      <hr className='mt-3'></hr>
                      <div className='row'>
                        <div className='col-lg-4'>
                          <p className='mb-2'>07:30 AM</p>
                          <p className='mb-0'>08:48 AM</p>
                        </div>
                        <div className='col-lg-4 mt-3 mt-lg-0'>
                          <div className='media'>
                            <img
                              src='images/buffer-time.png'
                              alt=''
                              className='img-fluid'
                            />
                            <div className='media-body ml-3'>
                              <p className='mb-2 semi-bold'>Buffer time</p>
                              <p className='mb-0'>Duration: 2h</p>
                            </div>
                          </div>
                        </div>
                        <div className='col-lg-4 mt-3'>
                          <p className='mb-2'>London Airport</p>
                        </div>
                      </div>
                      <p className='d-grey-text mb-0 mt-3'>25 November 2018</p>
                      <hr className='mt-0'></hr>
                      <div className='row'>
                        <div className='col-lg-4'>
                          <p className='mb-2'>06:05 AM</p>
                          <p className='mb-0'>06:30 AM</p>
                        </div>
                        <div className='col-lg-4 mt-3 mt-lg-0'>
                          <div className='media'>
                            <img
                              src='images/turkish.png'
                              alt=''
                              className='img-fluid'
                            />
                            <div className='media-body ml-3'>
                              <p className='mb-0 semi-bold'>Turkish Airlines</p>
                              <p className='mb-0'>Confirmation: B740</p>
                              <p className='mb-0'>Duration: 1h 18m</p>
                            </div>
                          </div>
                        </div>
                        <div className='col-lg-4 mt-3 mt-lg-0'>
                          <p className='mb-2'>London, UK</p>
                          <p className='mb-0'>
                            Chicago O'Hare International Airport (ORD)
                          </p>
                        </div>
                      </div>
                      <p className='d-grey-text mb-0 mt-3'>26 November 2018</p>
                      <hr className='mt-0'></hr>
                      <div className='row'>
                        <div className='col-lg-4'>
                          <p className='mb-2'>06:05 AM</p>
                          <p className='mb-0'>06:30 AM</p>
                        </div>
                        <div className='col-lg-4 mt-3 mt-lg-0'>
                          <div className='media'>
                            <img
                              src='images/ryan.png'
                              alt=''
                              className='img-fluid'
                            />
                            <div className='media-body ml-3'>
                              <p className='mb-0 semi-bold'>Ryan Air</p>
                              <p className='mb-0'>Confirmation: B740</p>
                              <p className='mb-0'>Duration: 1h 18m</p>
                            </div>
                          </div>
                        </div>
                        <div className='col-lg-4 mt-3 mt-lg-0'>
                          <p className='mb-0'>
                            Chicago O'Hare International Airport (ORD)
                          </p>
                          <p className='mb-2'>Boston, Terminal Five (TFB)</p>
                        </div>
                      </div>
                      <p className='d-grey-text mb-0 mt-3'>27 November 2018</p>
                      <hr className='mt-0'></hr>
                      <div className='row'>
                        <div className='col-lg-4'>
                          <p className='mb-2'>06:05 AM</p>
                          <p className='mb-0'>06:30 AM</p>
                        </div>
                        <div className='col-lg-4 mt-3 mt-lg-0'>
                          <div className='media'>
                            <img
                              src='images/meeting.png'
                              alt=''
                              className='img-fluid'
                            />
                            <div className='media-body ml-3'>
                              <p className='mb-2 semi-bold'>Meeting</p>
                              <p className='mb-0'>Duration: 6days 19h 00m</p>
                            </div>
                          </div>
                        </div>
                        <div className='col-lg-4 mt-3 mt-lg-0'>
                          <p className='mb-0'>
                            3000 Sand Hill Road, Boston, BS 94128, USA
                          </p>
                        </div>
                      </div>
                      <p className='d-grey-text mt-3 mb-0'>2 December 2018</p>
                      <hr className='mt-0'></hr>
                      <div className='row'>
                        <div className='col-lg-4'>
                          <p className='mb-2'>06:05 AM</p>
                          <p className='mb-0'>06:30 AM</p>
                        </div>
                        <div className='col-lg-4 mt-3 mt-lg-0'>
                          <div className='media'>
                            <img
                              src='images/buffer-time.png'
                              alt=''
                              className='img-fluid'
                            />
                            <div className='media-body ml-3'>
                              <p className='mb-0 semi-bold'>Buffer-Time</p>
                              <p className='mb-0'>Duration: 2h</p>
                            </div>
                          </div>
                        </div>
                        <div className='col-lg-4 mt-3'>
                          <p className='mb-2'>London Airport</p>
                        </div>
                      </div>
                      <hr className='mt-3'></hr>
                      <div className='row'>
                        <div className='col-lg-4'>
                          <p className='mb-2'>07:30 AM</p>
                          <p className='mb-0'>08:48 AM</p>
                        </div>
                        <div className='col-lg-4 mt-3 mt-lg-0'>
                          <div className='media'>
                            <img
                              src='images/turkish.png'
                              alt=''
                              className='img-fluid'
                            />
                            <div className='media-body ml-3'>
                              <p className='mb-0 semi-bold'>UK Airlines</p>
                              <p className='mb-0'>Confirmation: B740</p>
                              <p className='mb-0'>Duration: 1h 18m</p>
                            </div>
                          </div>
                        </div>
                        <div className='col-lg-4 mt-3 mt-lg-0'>
                          <p className='mb-2'>Boston, Terminal Five (TFB)</p>
                          <p className='mb-0'>Termonal 4, Hitrow, London, UK</p>
                        </div>
                      </div>
                      <p className='d-grey-text mt-3 mb-0'>2 December 2018</p>
                      <hr className='mt-0'></hr>
                      <div className='row'>
                        <div className='col-lg-4'>
                          <p className='mb-2'>06:05 AM</p>
                          <p className='mb-0'>06:30 AM</p>
                        </div>
                        <div className='col-lg-4 mt-3 mt-lg-0'>
                          <div className='media'>
                            <img
                              src='images/car.png'
                              alt=''
                              className='img-fluid'
                            />
                            <div className='media-body ml-3'>
                              <p className='mb-0 semi-bold'>Self-Drive</p>
                              <p className='mb-0'>Duration: 25m</p>
                            </div>
                          </div>
                        </div>
                        <div className='col-lg-4 mt-3 mt-lg-0'>
                          <p className='mb-2'>Termonal 4, Hitrow, London, UK</p>
                          <p className='mb-0'>London, UK</p>
                        </div>
                      </div>
                      <hr className='mt-0'></hr>
                      <div className='row'>
                        <div className='col-lg-6'>
                          <div className='d-flex align-items-center'>
                            <span className='driving d-inline-block'></span>
                            <p className='d-grey-text mb-0 ml-2'>
                              Total Driving:{' '}
                              <span className='semi-bold'>2 hrs 13 min</span>
                            </p>
                          </div>
                        </div>
                        <div className='col-lg-6 mt-3 mt-lg-0'>
                          <div className='d-flex align-items-center'>
                            <span className='driving buffer d-inline-block'></span>
                            <p className='d-grey-text mb-0 ml-2'>
                              Total Buffer Time:{' '}
                              <span className='semi-bold'>2 hrs 13 min</span>
                            </p>
                          </div>
                        </div>
                        <div className='col-lg-6 mt-3'>
                          <div className='d-flex align-items-center'>
                            <span className='driving flight d-inline-block'></span>
                            <p className='d-grey-text mb-0 ml-2'>
                              Total Flight:{' '}
                              <span className='semi-bold'>16 hrs 03 min</span>
                            </p>
                          </div>
                        </div>
                        <div className='col-lg-6 mt-3'>
                          <div className='d-flex align-items-center'>
                            <span className='driving meeting d-inline-block'></span>
                            <p className='d-grey-text mb-0 ml-2'>
                              Meeting:{' '}
                              <span className='semi-bold'>
                                10 days 2 hrs 13 min
                              </span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Element>
                  <Element name='details'>
                    <div className='col-12'>
                      <hr></hr>
                      <h2>
                        <img
                          src='images/bed.png'
                          alt=''
                          className='img-fluid mr-2'
                        />
                        Hotel Details
                      </h2>
                      <div className='row'>
                        <div className='col-lg-6 mt-3'>
                          <div className='w-100'>
                            <iframe
                              width='100%'
                              height='200'
                              frameborder='0'
                              scrolling='no'
                              marginheight='0'
                              marginwidth='0'
                              src='https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=1%20Grafton%20Street,%20Dublin,%20Ireland+(Projector)&amp;t=&amp;z=18&amp;ie=UTF8&amp;iwloc=B&amp;output=embed'
                            ></iframe>
                          </div>
                        </div>
                        <div className='col-lg-6 mt-3'>
                          <h2>
                            The Congress Plaza Hotel and Convention Center
                          </h2>
                          <div className='media mt-2'>
                            <i className='fas fa-map-marker-alt d-grey-text'></i>
                            <div className='media-body ml-2'>
                              <p className='mb-0'>
                                South of Washington Boston, MA USA (50 m from
                                center)
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Element>
                </div>
              </div>
            </div>
            <div className='col-xl-3 bg-grey'></div>
          </div>
        </div>
      </section>

      <footer className='py-4'>
        <div className='container-fluid'>
          <div className='row'>
            <div className='col-xl-11 mx-auto'>
              <div className='d-lg-flex justify-content-between align-items-center'>
                <div className='d-md-flex align-items-center'>
                  <a
                    href='#_'
                    className='d-flex mr-xl-5 mt-3 d-grey-text align-items-center'
                  >
                    <i className='far mr-2 fa-question-circle'></i>
                    Help
                  </a>
                  <a
                    href='#_'
                    className='d-flex mt-3 ml-md-5 blue-text align-items-center'
                  >
                    <img
                      src='images/pdf.png'
                      alt=''
                      className='img-fluid mr-2'
                    />
                    Download as PDF
                  </a>
                </div>
                <div className='d-sm-flex align-items-center'>
                  <a
                    href='#_'
                    className='site-btn border-btn d-inline-block mr-sm-3 px-5 py-2 mt-3'
                  >
                    Decline
                  </a>
                  <a
                    onClick={() => setisConfirm(true)}
                    className='site-btn d-inline-block px-5 py-2 mt-3'
                  >
                    Book Flight
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

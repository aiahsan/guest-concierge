import React from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/flight/footer';
import CustomTimeline from '../components/CustomTimeline';
import FlightSidebar from '../components/flight/flightSidebar';
import FlightTopBar from '../components/flight/flightTopbar';
import RightBar from '../components/flight/rightBar';
import Fade from 'react-reveal/Fade';
import { useHistory } from 'react-router-dom';
export default () => {
  const [sidebaropen, setSidebaropen] = React.useState(false);
  const history = useHistory();
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
                <FlightTopBar
                  setSidebaropen={setSidebaropen}
                  sidebaropen={sidebaropen}
                />

                <CustomTimeline setSidebaropen={setSidebaropen} />
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
            <Fade right>
              <div
                className={`${sidebaropen == true ? 'col-md-2' : 'dsp-none'}`}
              >
                <RightBar setSidebaropen={setSidebaropen} />
              </div>
            </Fade>
          </div>
        </div>
      </section>
      <Footer onClick={() => history.push('flight-book')} />
    </div>
  );
};

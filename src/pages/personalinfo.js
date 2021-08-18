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
      <Navbar isActive={3} />
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
                <div className='col-xl-8 col-12 mx-auto'>
                  <h6>
                    Please fill the form with information as it appears in your
                    government ID
                  </h6>
                  <div className='row'>
                    <div className='col-xl-8 mt-3 col-12'>
                      <label for='' className='semi-bold'>
                        First Name
                      </label>
                      <input
                        type='text'
                        className='site-input w-100 py-2 px-3'
                      />
                    </div>
                    <div className='col-xl-8 mt-3 col-12'>
                      <label for='' className='semi-bold'>
                        Middle Name
                      </label>
                      <input
                        type='text'
                        className='site-input w-100 py-2 px-3'
                      />
                    </div>
                    <div className='col-xl-8 mt-3 col-12'>
                      <label for='' className='semi-bold'>
                        Last Name
                      </label>
                      <input
                        type='text'
                        className='site-input w-100 py-2 px-3'
                      />
                    </div>
                    <div className='col-xl-8 mt-3 col-12'>
                      <label for='' className='semi-bold'>
                        Date of birth
                      </label>
                      <input
                        type='date'
                        className='site-input w-100 py-2 px-3'
                      />
                    </div>
                    <div className='col-xl-8 mt-3 col-12'>
                      <label for='' className='semi-bold'>
                        Gender
                      </label>
                      <select
                        name=''
                        id=''
                        className='w-100 site-input py-2 px-3'
                      >
                        <option value=''>Male</option>
                        <option value=''>Female</option>
                      </select>
                    </div>
                    <div className='col-xl-8 mt-3 col-12'>
                      <label for='' className='semi-bold'>
                        TSA Number
                      </label>
                      <input
                        type='number'
                        className='site-input w-100 py-2 px-3'
                      />
                    </div>
                    <div className='col-xl-8 mt-3 col-12'>
                      <label for='' className='semi-bold'>
                        Redress Number
                      </label>
                      <input
                        type='number'
                        className='site-input w-100 py-2 px-3'
                      />
                    </div>
                    <div className='col-xl-8 mt-3 col-12'>
                      <label for='' className='semi-bold'>
                        Frequent Traveler Number
                      </label>
                      <input
                        type='number'
                        className='site-input w-100 py-2 px-3'
                      />
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

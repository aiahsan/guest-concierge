import React from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import Option from '../components/option';
export default () => {
  const [location, setlocation] = React.useState(false);
  const handleLocation = () => {
    setlocation(true);
    setTimeout(() => {
      setlocation(false);
    }, 4000);
  };
  return (
    <div>
      <Navbar isActive={0} />
      {location == true ? (
        <Option />
      ) : (
        <section className='your-location'>
          <div className='container'>
            <div className='row px-3'>
              <div className='col-12 home-card'>
                <div className='d-sm-flex justify-content-center align-items-center p-3'>
                  <img
                    src='images/projector.png'
                    alt=''
                    className='img-fluid'
                  />
                  <div className='ml-2'>
                    <h2>European Environmental Bureau</h2>
                    <p className='d-grey-text mb-0'>
                      Celebrating 40 years of environmental action
                    </p>
                  </div>
                </div>
                <hr className='my-0'></hr>
                <div className='row'>
                  <div className='col-lg-5 l-blue-bg py-4 px-lg-4 px-3'>
                    <h2>Travel Invitation to Sandra Relly</h2>
                    <p className='d-grey-text semi-bold'>ID #77829392</p>
                    <h2>UX/UI design session at our Boston office</h2>
                    <p className='d-grey-text semi-bold'>
                      Hosted by Microsoft LTD
                    </p>
                    <div className='d-flex align-items-center'>
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
                    <p className='mt-4'>Microsoft LTD covers:</p>
                    <div className='d-flex align-items-center mt-3'>
                      <img
                        src='images/check.png'
                        alt=''
                        className='img-fluid mr-2'
                      />
                      <p className='mb-0'>Airfare</p>
                    </div>
                    <div className='d-flex align-items-center mt-2'>
                      <img
                        src='images/check.png'
                        alt=''
                        className='img-fluid mr-2'
                      />
                      <p className='mb-0'>Hotel</p>
                    </div>
                    <div className='d-flex align-items-center mt-2'>
                      <img
                        src='images/check.png'
                        alt=''
                        className='img-fluid mr-2'
                      />
                      <p className='mb-0'>Ground Transportations</p>
                    </div>
                    <div className='d-flex align-items-center mt-2'>
                      <img
                        src='images/cross.png'
                        alt=''
                        className='img-fluid mr-2'
                      />
                      <p className='mb-0'>Uber</p>
                    </div>
                  </div>
                  <div className='col-lg-6 py-4 px-lg-4 px-3'>
                    <h1 className='mb-0'>Where will you be travelling from?</h1>
                    <p className='d-grey-text mt-0'>
                      Usually your home or office address
                    </p>
                    <div className='row'>
                      <div className='col-xl-7 col-lg-6 mt-3'>
                        <select
                          name=''
                          id=''
                          className='site-input w-100 py-2 px-3'
                        >
                          <option value=''>
                            Enter you city, street or zip code
                          </option>
                          <option value=''></option>
                        </select>
                      </div>
                      <div className='col-xl-5 col-lg-6 mt-3'>
                        <button
                          onClick={() => handleLocation()}
                          className='site-btn border-btn px-3 w-100 py-2 d-flex align-items-center justify-content-center'
                        >
                          <img
                            src='images/location.png'
                            alt=''
                            className='img-fluid mr-1'
                          />
                          Use My Location
                        </button>
                      </div>
                      <div className='col-12 mt-3'>
                        <a
                          href='#_'
                          className='site-btn w-100 py-2 d-block px-3'
                        >
                          Next
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
      <Footer />
    </div>
  );
};

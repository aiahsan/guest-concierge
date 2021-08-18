import React from 'react';
export default () => {
  return (
    <footer className='py-4'>
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-xl-11 mx-auto'>
            <div className='d-lg-flex justify-content-between align-items-center'>
              <a
                href='#_'
                className='d-flex mt-3 d-grey-text align-items-center'
              >
                <i className='far mr-2 fa-question-circle'></i>
                Help
              </a>
              <p className='semi-bold mb-0 mt-3'>
                Total trip duration: 9 days and 6 hrs
              </p>
              <div className='d-sm-flex align-items-center'>
                <a
                  href='#_'
                  className='site-btn border-btn d-inline-block mr-sm-3 px-5 py-2 mt-3'
                >
                  Decline
                </a>
                <a href='#_' className='site-btn d-inline-block px-5 py-2 mt-3'>
                  Book Flight
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

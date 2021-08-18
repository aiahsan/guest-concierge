import React from 'react';
export default ({ isActive }) => {
  return (
    <>
      <header className='py-2'>
        <div className='container-fluid'>
          <div className='row'>
            <div className='col-xl-11 mx-auto'>
              <nav className='navbar navbar-expand-lg navbar-light'>
                <a className='navbar-brand' href='index.html'>
                  <img src='images/logo.png' alt='' className='img-fluid' />
                </a>
                <button
                  className='navbar-toggler'
                  type='button'
                  data-toggle='collapse'
                  data-target='#navbarNav'
                  aria-controls='navbarNav'
                  aria-expanded='false'
                  aria-label='Toggle navigation'
                >
                  <span className='navbar-toggler-icon'></span>
                </button>

                <div className='collapse navbar-collapse' id='navbarNav'>
                  <ul className='navbar-nav ml-auto'>
                    <li
                      className={`nav-item  ${isActive == 0 ? 'active' : ''}`}
                    >
                      <a className='nav-link' href='#'>
                        1. Your location{' '}
                        <span className='sr-only'>(current)</span>
                      </a>
                    </li>
                    <li className='nav-item mt-2 d-none d-lg-block mx-2'>
                      <i className='fas fa-angle-right grey-text'></i>
                    </li>
                    <li
                      className={`nav-item  ${isActive == 1 ? 'active' : ''}`}
                    >
                      <a className='nav-link' href='#'>
                        2. Flight
                      </a>
                    </li>
                    <li className='nav-item mt-2 d-none d-lg-block mx-2'>
                      <i className='fas fa-angle-right grey-text'></i>
                    </li>
                    <li
                      className={`nav-item  ${isActive == 2 ? 'active' : ''}`}
                    >
                      <a className='nav-link' href='#'>
                        3. Hotel
                      </a>
                    </li>
                    <li className='nav-item mt-2 d-none d-lg-block mx-2'>
                      <i className='fas fa-angle-right grey-text'></i>
                    </li>
                    <li
                      className={`nav-item  ${isActive == 3 ? 'active' : ''}`}
                    >
                      <a className='nav-link' href='#'>
                        4. Personal Information
                      </a>
                    </li>
                    <li className='nav-item mt-2 d-none d-lg-block mx-2'>
                      <i className='fas fa-angle-right grey-text'></i>
                    </li>
                    <li
                      className={`nav-item  ${isActive == 4 ? 'active' : ''}`}
                    >
                      <a className='nav-link' href='#'>
                        5. Confirmation
                      </a>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

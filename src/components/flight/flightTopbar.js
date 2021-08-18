import React from 'react';
export default ({ sidebaropen, isrecomended }) => {
  return (
    <div className='col-12 flightTopBar'>
      <div
        className={`f-top-bar d-flex ${
          isrecomended && true
            ? 'justify-content-end'
            : 'justify-content-between'
        }`}
      >
        {isrecomended && true ? (
          <></>
        ) : (
          <div
            className={`d-flex f-top-bar-inner ${
              sidebaropen == true ? 'flex-column' : ''
            }`}
          >
            <h3 className='mr-2 mb-0 mt-2'>Recommended Trip</h3>
            <div className='d-flex time-line-flex'>
              <div className='d-flex mt-2 align-items-center mr-3'>
                <p className='mb-0 d-grey-text'>Start:</p>
                <p className='mb-0 d-grey-text semi-bold'>4:30 AM 24.11.2018</p>
              </div>
              <div className='d-flex mt-2 align-items-center'>
                <p className='mb-0 d-grey-text'>End:</p>
                <p className='mb-0 d-grey-text semi-bold'>
                  7:44 AM 25.11.2018{' '}
                </p>
              </div>
            </div>
          </div>
        )}
        <div className='d-flex mt-2 ml-xl-5 ml-2 align-items-center child-2'>
          <div className='d-flex mt-2 ml-xl-5 ml-2 align-items-center'>
            <img src='images/clock.png' alt='' className='img-fluid' />
            <p className='mb-0 d-grey-text mr-2 '>Time zone:</p>
            <select name='' id='' className='site-input blue-bg'>
              <option value=''>+2h GMT (Boston)</option>
              <option value=''>+1h GMT (London)</option>
              <option value=''>Local Time</option>
            </select>
          </div>
          <div className='d-flex mt-2 ml-2 align-items-center'>
            <input
              type='date'
              name=''
              id=''
              className='site-input w-48 blue-bg px-0 py-2'
            />
            <button className='btn btn-menu'>
              <i className='fas fa-bars color-bggray1'></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

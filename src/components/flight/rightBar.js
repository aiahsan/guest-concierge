import React from 'react';
export default ({ setSidebaropen }) => {
  return (
    <div className='pb-lg-5 px-lg-4 px-3 py-3'>
      <div className='text-right'>
        <button
          onClick={() => setSidebaropen(false)}
          className='d-grey-text transparent-btn'
        >
          <i className='fas fa-times mr-1'></i>
          Hide
        </button>
      </div>
      <img src='images/turkish-airline.png' alt='' className='img-fluid' />
      <hr></hr>
      <h2 className='mt-3'>Flight</h2>
      <h6 className='mb-0'>From</h6>
      <p>London, UK (LND)</p>
      <h6 className='mb-0'>To</h6>
      <p>Chicago O'Hare International Airport (ORD)</p>
      <h6 className='mb-0'>Starts</h6>
      <p>05:45 am, Wed 24</p>
      <h6 className='mb-0'>Ends</h6>
      <p className='mb-0'>08:00 am, Wed 24</p>
      <p>(Timezone is changed)</p>
      <h6 className='mb-0'>Confirmation</h6>
      <p>B740</p>
      <h6 className='mb-0'>Duration</h6>
      <p>2h 15m</p>
    </div>
  );
};

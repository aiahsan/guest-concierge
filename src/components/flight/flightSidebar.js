import React from 'react';
export default () => {
  return (
    <div className='pb-lg-5 pb-4 bg-white px-lg-4 px-3 py-3 sidebar-flight'>
      <img src='images/projector-bg.png' alt='' className='img-fluid' />
      <h6 className='mt-3 mb-0'>Travel Invitation to Sandra Relly</h6>
      <p className='d-grey-text semi-bold'>Invitation #77829392</p>
      <h2 className='mb-0'>UX/UI design session at our Boston office</h2>
      <p className='d-grey-text semi-bold'>Hosted by Microsoft LTD</p>
      <div className='d-flex align-items-center'>
        <i className='far fa-calendar-alt d-grey-text mr-2'></i>
        <p className='mb-0'>Sep, 12 at 4:00 PM - Sep, 14 at 6:00 PM</p>
      </div>
      <div className='d-flex align-items-center mt-2'>
        <i className='fas fa-map-marker-alt d-grey-text mr-2'></i>
        <p className='mb-0'>1 Ave de Lafayette, Boston, MA 02111, USA</p>
      </div>
      <h6 className='mt-3'>Departure</h6>
      <div className='d-flex align-items-center'>
        <i className='fas fa-map-marker-alt d-grey-text mr-2'></i>
        <p className='mb-0'>1 Ave de Lafayette, Boston, MA 02111, USA</p>
      </div>
    </div>
  );
};

import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
export const defaultItemRenderer = ({
  item,
  itemContext,
  getItemProps,
  getResizeProps,
}) => {
  const { left: leftResizeProps, right: rightResizeProps } = getResizeProps();
  console.log(itemContext);
  return (
    <div {...getItemProps(item.itemProps)}>
      {itemContext.useResizeHandle ? <div {...leftResizeProps} /> : ''}

      <div
        className='rct-item-content'
        style={{ maxHeight: `${itemContext.dimensions.height}` }}
      >
        <div style={{ display: 'flex' }}>
          <div></div>
          <div>{itemContext.title}</div>
        </div>
      </div>

      {itemContext.useResizeHandle ? <div {...rightResizeProps} /> : ''}
    </div>
  );
};

// TODO: update this to actual prop types. Too much to change before release
// future me, forgive me.
defaultItemRenderer.propTypes = {
  item: PropTypes.any,
  itemContext: PropTypes.any,
  getItemProps: PropTypes.any,
  getResizeProps: PropTypes.any,
};

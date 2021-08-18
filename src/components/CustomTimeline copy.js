import React, { Component } from 'react';
import moment from 'moment';
import generateFakeData from './generate-fake-data';
import Timeline from './components/chart';
import './components/chart/Timeline.css';
import Icon from '../style/icons';
var keys = {
  groupIdKey: 'id',
  groupTitleKey: 'title',
  groupRightTitleKey: 'rightTitle',
  itemIdKey: 'id',
  itemTitleKey: 'title',
  itemDivTitleKey: 'title',
  itemGroupKey: 'group',
  itemTimeStartKey: 'start',
  itemTimeEndKey: 'end',
  groupLabelKey: 'title',
};

export default class App extends Component {
  constructor(props) {
    super(props);
    const { groups, items } = generateFakeData();
    const defaultTimeStart = moment().add(0, 'hour');
    const defaultTimeEnd = moment().add(7, 'hour');
    const defaultVisableTimeEnd = moment().add(24, 'hour');
    this.state = {
      groups,
      items,
      defaultTimeStart,
      defaultTimeEnd,
      defaultVisableTimeEnd,
      labelBox: false,
      visibleTimeStart: moment().add(0, 'hour'),
      visibleTimeEnd: moment().add(24, 'hour'),
    };
  }

  itemRenderer = ({
    item,
    timelineContext,
    itemContext,
    getItemProps,
    getResizeProps,
  }) => {
    const GetBar = ({ type, item }) => {
      console.log(type, 'type');
      switch (type) {
        case 'Buffer': {
          return (
            <>
              <div className='bar-item-cst color-buffer'>
                {item.iconType == 0 ? <Icon name='buffer' /> : <></>}
                {item.title}
              </div>
            </>
          );
        }
        case 'Flight': {
          return (
            <>
              <div className='bar-item-cst color-buffer h-100 d-flex justify-content-between p-cst-time align-items-center'>
                <div className='d-flex align-items-center h-100'>
                  <Icon
                    name={
                      item.flightData.flightType == 'departure'
                        ? 'pright'
                        : 'pleft'
                    }
                  />

                  {item.title != '' ? (
                    <span className='flight-text'>{item.title}</span>
                  ) : (
                    <img
                      src={item.flightData.airline.logo}
                      className='ml-2'
                      alt=''
                    />
                  )}
                </div>
                <div>
                  {item.flightData.hasclock == true ? (
                    <Icon name='clock' />
                  ) : (
                    <></>
                  )}
                </div>
              </div>
            </>
          );
        }
        case 'Driving': {
          return (
            <div className='warning-cst'>
              <div className='warning-cst-child'>
                {item.hasWarning == true ? <Icon name='warning' /> : <></>}
              </div>
            </div>
          );
        }
        case 'Meeting': {
          return (
            <div className='bar-item-cst color-meeting'>
              {item.iconType == 0 ? <Icon name='cal' /> : <></>}

              <span className='pos-cst-res'>{item.title}</span>
            </div>
          );
        }
        default:
          return <></>;
      }
    };

    const { left: leftResizeProps, right: rightResizeProps } = getResizeProps();
    const backgroundColor = itemContext.selected
      ? itemContext.dragging
        ? 'red'
        : item.selectedBgColor
      : item.bgColor;
    const borderColor = itemContext.resizing ? 'red' : item.color;
    return (
      <div
        {...getItemProps({
          style: {
            backgroundColor,
            color: item.color,
            borderStyle: 'solid',
            borderColor: 'transparent',
            borderWidth: 1,
            borderLeftWidth: itemContext.selected ? 10 : 1,
            borderRightWidth: itemContext.selected ? 10 : 1,
          },
          onMouseDown: () => {
            console.log('on item click', item);
          },
        })}
      >
        {itemContext.useResizeHandle ? <div {...leftResizeProps} /> : null}

        <div
          style={{
            height: itemContext.dimensions.height,
            overflow: 'hidden',
            paddingLeft: 3,
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
            color: 'black',
            borderColor: 'transparent',
            fontSize: 19,
          }}
          onMouseOver={(x) => {}}
          onDoubleClick={(x) =>
            this.handleSplit(
              itemContext.startTime,
              itemContext.endTime,
              item.id
            )
          }
        >
          <GetBar type={item.type} item={item} />
          {itemContext.title}
        </div>

        {itemContext.useResizeHandle ? <div {...rightResizeProps} /> : null}
      </div>
    );
  };

  handleItemMove = (itemId, dragTime, newGroupOrder) => {
    const { items, groups } = this.state;

    const group = groups[newGroupOrder];

    this.setState({
      items: items.map((item) =>
        item.id === itemId
          ? Object.assign({}, item, {
              start: dragTime,
              end: dragTime + (item.end - item.start),
              group: group.id,
            })
          : item
      ),
    });

    //console.log("Moved", itemId, dragTime, newGroupOrder);
  };

  handleItemResize = (itemId, time, edge) => {
    const { items } = this.state;

    this.setState({
      items: items.map((item) =>
        item.id === itemId
          ? Object.assign({}, item, {
              start: edge === 'left' ? time : item.start,
              end: edge === 'left' ? item.end : time,
            })
          : item
      ),
    });
  };
  handleSplit = (timeStart, timeEnd, itemId) => {
    console.log(timeStart, timeEnd);
    const { items } = this.state;
    var date1 = moment(timeStart);
    var date2 = moment(timeEnd);
    const differDate = moment.utc(
      moment(date2, 'DD/MM/YYYY HH:mm:ss').diff(
        moment(date1, 'DD/MM/YYYY HH:mm:ss')
      )
    );
    var middleDate = moment(date2).subtract({
      hours: differDate.format('HH') / 2,
      minutes: differDate.format('mm') / 2,
    });

    const objectGet = items.find((x) => x.id === itemId);
    if (objectGet) {
      let itemsNew = items.map((item) =>
        item.id === itemId
          ? Object.assign({}, item, {
              start: item.start,
              end: middleDate,
            })
          : item
      );
      itemsNew.push({
        ...objectGet,
        id: objectGet.id + moment().format('DDHHmmss') + '',
        start: middleDate,
        end: objectGet.end,
      });
      this.setState({
        items: itemsNew,
      });
    }
  };

  render() {
    const defaultTimeRange =
      this.state.visibleTimeEnd - this.state.visibleTimeStart;

    const {
      groups,
      items,
      defaultTimeStart,
      defaultTimeEnd,
      defaultVisableTimeEnd,
    } = this.state;

    return (
      <div className='timelineparent'>
        <Timeline
          groups={groups}
          items={items}
          keys={keys}
          fullUpdate
          itemTouchSendsClick={false}
          itemRenderer={this.itemRenderer}
          // stackItems
          itemHeightRatio={0.9}
          canMove={true}
          canResize={true}
          sidebarWidth={120}
          defaultTimeStart={defaultTimeStart}
          defaultTimeEnd={defaultTimeEnd}
          onItemMove={this.handleItemMove}
          onItemResize={this.handleItemResize}
          fullUpdate={true}
          minZoom={defaultTimeRange}
          maxZoom={defaultTimeRange}
          onTimeChange={(_start, _end, updateScrollCanvas) => {
            if (_start > defaultTimeStart && _end < defaultVisableTimeEnd)
              updateScrollCanvas(_start, _end);
          }}
        />
        <div className='d-flex justify-content-center align-items-center flex-wrap mt-4'>
          <div className='total-time'>
            <div className='bg-1'></div>
            <p>
              Total Driving:
              <span> 2 hrs 13 min</span>
            </p>
          </div>
          <div className='total-time'>
            <div className='bg-2'></div>
            <p>
              Total Buffer Time:
              <span> 2 hrs 13 min</span>
            </p>
          </div>
          <div className='total-time'>
            <div className='bg-3'></div>
            <p>
              Total Flight:
              <span> 16 hrs 03 min</span>
            </p>
          </div>
          <div className='total-time'>
            <div className='bg-4'></div>
            <p>
              Meeting:
              <span> 10 days 2 hrs 13 min</span>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

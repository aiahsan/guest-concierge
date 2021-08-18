import faker from 'faker';
import randomColor from 'randomcolor';
import moment from 'moment';
// function randomBetween(min, max) {
//   if (min < 0) {
//     return min + Math.random() * (Math.abs(min) + max);
//   } else {
//     return min + Math.random() * max;
//   }
// }
// export default function (groupCount = 4, itemCount = 20, daysInPast = 1) {
//   let randomSeed = Math.floor(Math.random() * 1000);
//   let groups = [];
//   for (let i = 0; i < groupCount; i++) {
//     groups.push({
//       id: `${i + 1}`,
//       title:
//         i == 0
//           ? moment().add(0, 'day').format('ddd DD')
//           : i == 1
//           ? moment().add(1, 'day').format('ddd DD')
//           : i == 2
//           ? moment().add(2, 'day').format('ddd DD')
//           : i == 3
//           ? moment().add(3, 'day').format('ddd DD')
//           : '',
//       rightTitle:
//         i == 0
//           ? moment().add(0, 'day').format('ddd DD')
//           : i == 1
//           ? moment().add(1, 'day').format('ddd DD')
//           : i == 2
//           ? moment().add(2, 'day').format('ddd DD')
//           : moment().add(3, 'day').format('ddd DD'),
//       bgColor: randomColor({ luminosity: 'light', seed: randomSeed + i }),
//     });
//   }
//   let types = ['Buffer', 'Flight', 'Driving', 'Meeting'];
//   let color = ['#EBEFF1', '#BBDEFB', '#A8B6FF', '#D6EDBB'];
//   let items = [];
//   for (let i = 0; i < itemCount; i++) {
//     const random = Math.floor(randomBetween(0, 4));
//     console.log(random, 'rnd');
//     const startDate =
//       faker.date.recent(daysInPast).valueOf() + daysInPast * 0.3 * 86400 * 1000;
//     const startValue =
//       Math.floor(moment(startDate).valueOf() / 10000000) * 10000000;
//     const endValue = moment(
//       startDate + faker.random.number({ min: 2, max: 20 }) * 1 * 60 * 1000
//     ).valueOf();

//     items.push({
//       id: i + '',
//       group: faker.random.number({ min: 1, max: groups.length }) + '',
//       title: types[random],
//       start: startValue,
//       end: endValue,
//       canMove: true,
//       canResize: 'both',
//       selectedBgColor: '#e48903',
//       bgColor: color[random],
//       type: types[random],
//       borderColor: 'transparent',
//       className:
//         moment(startDate).day() === 6 || moment(startDate).day() === 0
//           ? 'item-weekend'
//           : '',
//       itemProps: {
//         'data-tip': faker.hacker.phrase(),
//       },
//     });
//   }

//   items = items.sort((a, b) => b - a);

//   return { groups, items };
// }

export default function () {
  let color = ['#EBEFF1', '#BBDEFB', '#A8B6FF', '#D6EDBB'];

  let groups = [
    {
      id: 0,
      title: moment().add(0, 'day').format('ddd DD'),
      rightTitle: moment().add(0, 'day').format('ddd DD'),
      bgColor: color[0],
    },
    {
      id: 1,
      title: moment().add(1, 'day').format('ddd DD'),
      rightTitle: moment().add(1, 'day').format('ddd DD'),
      bgColor: color[1],
    },
    {
      id: 2,
      title: moment().add(2, 'day').format('ddd DD'),
      rightTitle: moment().add(2, 'day').format('ddd DD'),
      bgColor: color[2],
    },
    {
      id: 3,
      title: moment().add(3, 'day').format('ddd DD'),
      rightTitle: moment().add(3, 'day').format('ddd DD'),
      bgColor: color[3],
    },
  ];
  let types = ['Buffer', 'Flight', 'Driving', 'Meeting'];
  let items = [
    {
      id: 1,
      group: 0,
      title: '',
      start: moment().add(0, 'hour'),
      end: moment().add(10, 'minutes'),
      canMove: true,
      canResize: 'both',
      selectedBgColor: '#a8b6ff',
      bgColor: color[2],
      borderColor: 'transparent',
      type: types[2],
      iconType: 0,
      flightData: {},
      hasWarning: false,
    },
    {
      id: 2,
      group: 0,
      title: 'Buffer time (LND)',
      start: moment().add(10, 'minutes'),
      end: moment().add(2, 'hour'),
      canMove: true,
      canResize: 'both',
      selectedBgColor: '#ebeff1',
      bgColor: color[0],
      borderColor: 'transparent',
      type: types[0],
      iconType: 0,
      flightData: {},
    },
    {
      id: 3,
      group: 0,
      title: '',
      start: moment().add(2, 'hour'),
      end: moment().add(2.9, 'hour'),
      canMove: true,
      canResize: 'both',
      selectedBgColor: '#bbdefb',
      bgColor: color[1],
      borderColor: 'transparent',
      type: types[1],
      iconType: 0,
      flightData: {
        hasclock: true,
        flightType: 'departure',
        from: 'London, UK (LND)',
        to: `Chicago O'Hare International Airport (ORD)`,
        starts: '05:45 am, Wed 24',
        ends: '08:00 am, Wed 24',
        timezone: '(Timezone is changed)',
        confirmation: 'B740',
        duration: '2h 15m',
        airline: {
          name: 'Turkish Airline',
          logo: 'images/t1.png',
          image: 'images/turkish-airline.png',
        },
      },
    },
    {
      id: 4,
      group: 0,
      title: 'ORD',
      start: moment().add(2.9, 'hour'),
      end: moment().add(3.3, 'hour'),
      canMove: true,
      canResize: 'both',
      selectedBgColor: '#ebeff1',
      bgColor: color[0],
      borderColor: 'transparent',
      type: types[0],
      iconType: 1,
      flightData: {},
    },
    {
      id: 5,
      group: 0,
      title: '',
      start: moment().add(3.3, 'hour'),
      end: moment().add(3.5, 'hour'),
      canMove: true,
      canResize: 'both',
      selectedBgColor: '#a8b6ff',
      bgColor: color[2],
      borderColor: 'transparent',
      type: types[2],
      title: '',
      iconType: 0,
      flightData: {},
      hasWarning: true,
    },
    {
      id: 6,
      group: 0,
      title: 'DPF',
      start: moment().add(3.5, 'hour'),
      end: moment().add(3.9, 'hour'),
      canMove: true,
      canResize: 'both',
      selectedBgColor: '#ebeff1',
      bgColor: color[0],
      borderColor: 'transparent',
      type: types[0],
      iconType: 1,
      flightData: {},
    },
    {
      id: 7,
      group: 0,
      title: '',
      start: moment().add(3.9, 'hour'),
      end: moment().add(4.9, 'hour'),
      canMove: true,
      canResize: 'both',
      selectedBgColor: '#bbdefb',
      bgColor: color[1],
      borderColor: 'transparent',
      type: types[1],
      iconType: 0,
      flightData: {
        hasclock: false,
        flightType: 'departure',
        from: 'London, UK (LND)',
        to: `Chicago O'Hare International Airport (ORD)`,
        starts: '05:45 am, Wed 24',
        ends: '08:00 am, Wed 24',
        timezone: '(Timezone is changed)',
        confirmation: 'B740',
        duration: '2h 15m',
        airline: {
          name: 'Turkish Airline',
          logo: 'images/r1.png',
          image: 'images/turkish-airline.png',
        },
      },
    },
    {
      id: 8,
      group: 0,
      title: 'TFB',
      start: moment().add(4.9, 'hour'),
      end: moment().add(5.3, 'hour'),
      canMove: true,
      canResize: 'both',
      selectedBgColor: '#ebeff1',
      bgColor: color[0],
      borderColor: 'transparent',
      type: types[0],

      iconType: 1,
      flightData: {},
    },
    {
      id: 9,
      group: 0,
      title: 'UX/UI design session at our Boston office',
      start: moment().add(5.3, 'hour'),
      end: moment().add(7.3, 'hour'),
      canMove: true,
      canResize: 'both',
      selectedBgColor: '#d6edbb',
      bgColor: color[3],
      borderColor: 'transparent',
      type: types[3],
      iconType: 0,
      flightData: {},
      iconType: 0,
    },
    {
      id: 10,
      group: 1,
      title: 'office',
      start: moment().add(0, 'hour'),
      end: moment().add(7.3, 'hour'),
      canMove: true,
      canResize: 'both',
      selectedBgColor: '#d6edbb',
      bgColor: color[3],
      borderColor: 'transparent',
      type: types[3],
      iconType: 0,
      flightData: {},
      iconType: 1,
    },
    {
      id: 11,
      group: 2,
      title: '',
      start: moment().add(0, 'hour'),
      end: moment().add(2.3, 'hour'),
      canMove: true,
      canResize: 'both',
      selectedBgColor: '#d6edbb',
      bgColor: color[3],
      borderColor: 'transparent',
      type: types[3],
      iconType: 0,
      flightData: {},
      iconType: 1,
    },
    {
      id: 12,
      group: 2,
      title: 'Buffer time',
      start: moment().add(2.3, 'hour'),
      end: moment().add(4.5, 'hour'),
      canMove: true,
      canResize: 'both',
      selectedBgColor: '#ebeff1',
      bgColor: color[0],
      borderColor: 'transparent',
      type: types[0],
      iconType: 0,
      flightData: {},
      iconType: 0,
    },
    {
      id: 13,
      group: 2,
      title: '',
      start: moment().add(4.5, 'hour'),
      end: moment().add(6.5, 'hour'),
      canMove: true,
      canResize: 'both',
      selectedBgColor: '#bbdefb',
      bgColor: color[1],
      borderColor: 'transparent',
      type: types[1],
      iconType: 0,
      flightData: {
        hasclock: false,
        flightType: 'departure',
        from: 'London, UK (LND)',
        to: `Chicago O'Hare International Airport (ORD)`,
        starts: '05:45 am, Wed 24',
        ends: '08:00 am, Wed 24',
        timezone: '(Timezone is changed)',
        confirmation: 'B740',
        duration: '2h 15m',
        airline: {
          name: 'Turkish Airline',
          logo: 'images/t1.png',
          image: 'images/turkish-airline.png',
        },
      },
    },
    {
      id: 14,
      group: 3,
      title: '',
      start: moment().add(0, 'hour'),
      end: moment().add(2.2, 'hour'),
      canMove: true,
      canResize: 'both',
      selectedBgColor: '#bbdefb',
      bgColor: color[1],
      borderColor: 'transparent',
      type: types[1],
      iconType: 0,
      flightData: {
        hasclock: false,
        flightType: 'departure',
        from: 'London, UK (LND)',
        to: `Chicago O'Hare International Airport (ORD)`,
        starts: '05:45 am, Wed 24',
        ends: '08:00 am, Wed 24',
        timezone: '(Timezone is changed)',
        confirmation: 'B740',
        duration: '2h 15m',
        airline: {
          name: 'Turkish Airline',
          logo: 'images/t1.png',
          image: 'images/turkish-airline.png',
        },
      },
    },
    {
      id: 15,
      group: 3,
      title: '',
      start: moment().add(2.2, 'hour'),
      end: moment().add(2.4, 'hour'),
      canMove: true,
      canResize: 'both',
      selectedBgColor: '#a8b6ff',
      bgColor: color[2],
      borderColor: 'transparent',
      type: types[2],
      iconType: 0,
      flightData: {},
      hasWarning: false,
    },
  ];

  return { groups, items: items.sort((a, b) => b - a) };
}

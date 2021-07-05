/**
  Basic working config
*/

export default {
  filename: 'report',
  sheet: {
    data: [
      [{
        value: 'Test',
        type: 'string'
      }, {
        value: 1000,
        type: 'number'
      },
      {
        value: new Date(2000, 0, 19),
        type: 'date'
      },
      {
        value: 1000,
        type: 'time'
      },
      {
        value: 1000,
        type: 'datetime'
      }]
    ]
  }
};

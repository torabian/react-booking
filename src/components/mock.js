const data = {
  title: 'Campaing number 1',
  description:
    'Lorem Ipsum is simply dummy text of the printing and typesetting industry ...',
  events: [
    {
      date: '2019-08-26',
      slots: [
        {
          id: 1,
          from: '12:00',
          to: '13:00'
        },
        {
          id: 2,
          from: '14:00',
          to: '15:00'
        },
        {
          id: 3,
          from: '16:00',
          to: '17:00'
        }
      ]
    },
    {
      date: '2019-07-27',
      slots: [
        {
          id: 4,
          from: '12:30',
          to: '13:30'
        }
      ]
    },
    {
      date: '2019-07-28',
      slots: [
        {
          id: 5,
          from: '12:45',
          to: '13:45'
        },
        {
          id: 6,
          from: '16:45',
          to: '17:45'
        }
      ]
    },
    {
      date: '2019-07-29',
      slots: [
        {
          id: 7,
          from: '12:15',
          to: '13:15'
        },
        {
          id: 8,
          from: '14:15',
          to: '15:15'
        },
        {
          id: 9,
          from: '16:15',
          to: '17:15'
        },
        {
          id: 10,
          from: '18:15',
          to: '19:15'
        },
        {
          id: 11,
          from: '20:15',
          to: '21:15'
        }
      ]
    }
  ]
};

export async function getMockData() {
  return data;
}

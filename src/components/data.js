const sample = {
  apiVersion: 'beta',
  data: {
    items: [
      {
        slots: [
          {
            start: '2019-07-25T19:30:00.000Z',
            end: '2019-07-26T19:30:00.000Z',
            user: 3,
            bookable_term: 29,
            capacity: 1,
            id: 36,
            createdAt: '2019-07-25T08:28:21.000Z',
            updatedAt: '2019-07-25T08:28:21.000Z'
          },
          {
            start: '2019-07-26T19:30:00.000Z',
            end: '2019-07-27T19:30:00.000Z',
            user: 3,
            bookable_term: 29,
            capacity: 1,
            id: 37,
            createdAt: '2019-07-25T08:28:34.000Z',
            updatedAt: '2019-07-25T08:28:34.000Z'
          },
          {
            start: '2019-07-27T19:30:00.000Z',
            end: '2019-07-29T19:30:00.000Z',
            user: 3,
            bookable_term: 29,
            capacity: 2,
            id: 38,
            createdAt: '2019-07-25T08:31:28.000Z',
            updatedAt: '2019-07-25T08:31:28.000Z'
          }
        ],
        term: {
          title: 'Test',
          description: 'Test',
          location: null,
          images: null,
          payment_on_cash: true,
          tracking_campaign: 'ydSm-UyCJq',
          user: 3,
          status: 'active',
          id: 29,
          createdAt: '2019-07-25T08:27:40.000Z',
          updatedAt: '2019-07-25T08:27:40.000Z'
        }
      }
    ]
  }
};

export async function getAvailabelSlots(campaign) {
  return sample.data.items[0].slots;
}

import React from 'react';
import { SERVICE_SIGNUP_URL } from '../../links';

export class CreateAccountDoc extends React.Component {
  render() {
    return (
      <div>
        <h1>How to insert a booking service into a website – Visual guide</h1>

        <p>
          Booking is important for your customers? We understand it. Wether
          looking for free bookings and reservation, or paid, you still need to
          have some software in your website, blog, social media to let people
          get your product and avoid too many phone calls.{' '}
        </p>
        <p>
          A clear way of understanding how to get the service, and how to make
          an appointment is crucial to avoid further issues with
          misunderstandings, collision in meetings and so on.{' '}
        </p>
        <p>
          To implement a booking service for your website, you don’t need to
          write a line of code even. Just put “PixelPlux Calendar” embedded
          code/link to your website and let people use that.{' '}
        </p>
        <p>
          Here are 5 steps to retain a reservation service for your website:
        </p>

        <h2>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={SERVICE_SIGNUP_URL}
          >
            Signup for PixelPlux Calendar
          </a>{' '}
          – Free!
        </h2>

        <p>
          First you need an account to manage all of your campaigns. Each
          calendar is so called a campaign, and it will help you easily have
          multiple calendars for multiple services or products.
        </p>

        <p>
          Signup is very simple process which only requires an email and
          password. Now you’ll be logged into your dashboard.
        </p>

        <div className="docs-image-view small">
          <img
            alt="Signup for pixelplux booking calendar"
            src={require('../assets/calendar-signup.png')}
          />
        </div>

        <h2>Create first campaign for booking</h2>

        <p>
          So far you did great. Now one important step is remaining, to create
          your first campaign. You can find “Add campaign” on the top left menu,
          or in the center of dashboard since you do not have any yet.
        </p>

        <p>
          Campaigns, are your calendars. The reason you can create multiple
          calendars is, you can have multiple services or even managing a team.
          Let’s say you have 5 different type of tours in your boat agency for
          each boat and you don’t want mess things up together.
        </p>

        <div className="docs-image-view ">
          <img
            alt="Create new booking campaign"
            src={require('../assets/create-a-new-campaign.png')}
          />
        </div>

        <h2>Fill information about campaign and appointments</h2>

        <p>
          Now you should write your campaign title, for example: “Boat Mok 707
          rental” or “Getting legal advice”. You can also type in a description.
          After that, click or press “Create the booking”. Don’t worry there
          information can be changed easily in next step.
        </p>

        <div className="docs-image-view ">
          <img
            alt="Fill booking campaign information"
            src={require('../assets/fill-campaign-information.png')}
          />
        </div>

        <p>
          Another important thing is your actual calendar. On the right side you
          see a calendar which is quite empty. You need to create your
          appointments first. Click on “Insert single appointment”. try to fill
          the modal, and create your appointment based on start and end time.
          Also you can specify how many people can attend, since there is an
          option multiple people will be attending if you specify any number
          more than 1.
        </p>

        <div className="docs-image-view ">
          <img
            alt="Setup appointment for your campaign"
            src={require('../assets/setup-appointment-calendar.png')}
          />
        </div>

        <p>
          <strong>
            It’s important to notice the Capacity of a campaign means how many
            different people can book.
          </strong>{' '}
          Don’t mistake this with your internal service capacity. If you give a
          private rental only to one person, and you won’t care how many family
          members are coming, write 1. If you set an appointment for more, there
          will be possibly two or more different people will book it at the same
          time – this option is useful for group tours, tickets or other group
          activities.
        </p>

        <div className="docs-image-view small">
          <img
            alt="Appointment modal"
            src={require('../assets/fill-appointment-modal.png')}
          />
        </div>

        <p>
          The price fields is also there for you to mention how much of booking
          this session might cost. At the moment, we only notify users and
          online payment is not available for all countries. We are working hard
          to make this happen.
        </p>
        <p>
          After submit, you’ll be able to see this appointment on your calendar:
        </p>

        <h2>Share your booking link with others</h2>

        <p>
          Now you can share your calendar link with other people, it would look
          like something like this:
        </p>

        <div className="docs-image-view medium ">
          <img
            alt="Share booking link"
            src={require('../assets/share-booking-link.png')}
          />
        </div>

        <p>
          Hope you did enjoy this article. You can create your account here:{' '}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={SERVICE_SIGNUP_URL}
          >
            Signup for PixelPlux reservation services.
          </a>
        </p>
      </div>
    );
  }
}

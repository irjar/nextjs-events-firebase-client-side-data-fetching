import { Fragment } from 'react';

import { getEventById, getFeaturedEvents } from '../../helpers/api-util';
import EventSummary from '../../components/event-detail/event-summary';
import EventLogistics from '../../components/event-detail/event-logistics';
import EventContent from '../../components/event-detail/event-content';
import ErrorAlert from '../../components/ui/error-alert';

function EventDetailPage(props) {
  const event = props.selectedEvent;

  if (!event) {
    return (
      <div className='center'>
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <Fragment>
      <EventSummary title={event.title} />
      <EventLogistics
        date={event.date}
        address={event.location}
        image={event.image}
        imageAlt={event.title}
      />
      <EventContent>
        <p>{event.description}</p>
      </EventContent>
    </Fragment>
  );
}

export async function getStaticProps(context){
  const eventId = context.params.eventId;

  const event = await getEventById(eventId);

  // regenerate the page every 60 seconds for every incoming request
  return {
    props: {
      selectedEvent: event 
    }, revalidate: 60
  };

}

export async function getStaticPaths(){
 const events = await getFeaturedEvents();

 // map the array of events into an array of objects 
 // where every object has a params key which holds another object
 // where the event id is set to event.id
 const paths = events.map(event => ({params: {eventId: event.id}}))

  return {
    paths: paths,
    fallback: 'blocking'
  }
}

export default EventDetailPage;

import { getFeaturedEvents } from '../helpers/api-util';
import EventList from '../components/events/event-list';

function HomePage(props) {


  return (
    <div>
      <EventList items={props.events} />
    </div>
  );
}

// every 30 minutes regenerate the page for every incoming request
export async function getStaticProps(){
  const featuredEvents = await getFeaturedEvents();
  return {
    props: {
      events: featuredEvents
    }, revalidate: 1800
  }
}

export default HomePage;

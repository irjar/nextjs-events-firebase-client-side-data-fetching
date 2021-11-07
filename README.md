This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

The app allows to browse events, select a single event and filter for events. There is an events page, the user can explore individual events and filter them by selecting the year and month filters, the app uses dummy back end on Firebase so the dummy data can be fetched from there. 

o	The app allows to browse events, select a single event and filter for events.
o	There is a starting page with a list of featured events.
o	There is a /events route to the Events page with all events.
o	Users can click an event to see details of that event to potentially sign up for it and book it on Events Details page (/events/ route).
o	There is a feature that the users can filter the events by year and month (route events/…slug with a dynamic slug segment)


## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

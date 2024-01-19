import React from 'react';

const Event = ({ event }) => (
  <div>
    <h2>{event.title}</h2>
    <p>
      <strong>Date:</strong> {event.date}<br />
      <strong>Venue:</strong> {event.venue}<br />
      <strong>Price:</strong> {event.price}<br />
      <strong>Details:</strong> {event.details}
    </p>
  </div>
);

export default Event;
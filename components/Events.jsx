import React from 'react';
import Event from './Event';
export { default as Events } from './Events';
export { default as NewEvent } from './NewEvent';

const Events = ({ events }) => (
  <div>
    {events.map((event, index) => (
      <Event key={index} event={event} />
    ))}
  </div>
);

export default Events;
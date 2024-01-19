import React, { useState } from 'react';
export { default as Events } from './Events';
export { default as NewEvent } from './NewEvent';
const NewEvent = () => {
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [venue, setVenue] = useState('');
  const [price, setPrice] = useState('');
  const [details, setDetails] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // TODO: Send the new event data to the server
    console.log({ title, date, venue, price, details });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add a new event</h2>
      <label>
        Title:
        <input
          type="text"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
      </label>
      <label>
        Date:
        <input
          type="text"
          value={date}
          onChange={(event) => setDate(event.target.value)}
        />
      </label>
      <label>
        Venue:
        <input
          type="text"
          value={venue}
          onChange={(event) => setVenue(event.target.value)}
        />
      </label>
      <label>
        Price:
        <input
          type="text"
          value={price}
          onChange={(event) => setPrice(event.target.value)}
        />
      </label>
      <label>
        Details:
        <textarea
          value={details}
          onChange={(event) => setDetails(event.target.value)}
        />
      </label>
      <button type="submit">Add event</button>
    </form>
  );
};

export default NewEvent;
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../context/AuthProvider';
import SingleEvent from './SingleEvent';

const Events = () => {
   const {user} = useContext(AuthContext);
   const [events, setEvents] = useState([]);
   console.log(events);
   useEffect(()=> {
    fetch(`http://localhost:5000/events?email=${user?.email}`)
    .then(res => res.json())
    .then(data => setEvents(data))
    .catch(err => console.log(err));
   },[user?.email])
    return (
      <div className="container mx-auto">
        <div className="overflow-x-auto w-full">
          <table className="table w-full">
            <thead>
              <tr>
                <th>
                  <label>
                    <input type="checkbox" className="checkbox" />
                  </label>
                </th>
                <th>Name</th>
                <th>Location</th>
                <th>Address</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {events.map((SingleEvent) => (
                <SingleEvent
                  key={SingleEvent._id}
                  SingleEvent={SingleEvent}
                ></SingleEvent>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
};

export default Events;
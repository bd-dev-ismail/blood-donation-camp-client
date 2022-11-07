import React, { useContext, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
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
   },[user?.email]);
   const handalDelete = (id) => {
     const procced = window.confirm("Are You Sure? You want to cancel Events?");
     if (!procced) {
       return;
     }
     fetch(`http://localhost:5000/events/${id}`, {
       method: "DELETE",
     })
       .then((res) => res.json())
       .then((data) => {
         console.log(data);
         if(data.deletedCount > 0){
          toast.warning('You Cancel a Event');
          const remaning = events.filter(ev => ev._id !== id);
          setEvents(remaning);
         }
       });
   };
    return (
      <div className="container mx-auto mt-10 mb-20">
        <div>
          <h3 className="text-3xl text-center font-bold my-20">
            Your Total Event is {events.length}
          </h3>
        </div>
        <div className="overflow-x-auto w-full">
          <table className="table w-full">
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Donation Location</th>
                <th>Email</th>
                <th>confirming</th>
              </tr>
            </thead>
            <tbody>
              {events.map((eventRow) => (
                <SingleEvent
                  key={eventRow._id}
                  eventRow={eventRow}
                  handalDelete={handalDelete}
                ></SingleEvent>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
};

export default Events;
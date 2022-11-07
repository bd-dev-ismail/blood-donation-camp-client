import React, { useContext, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { AuthContext } from '../context/AuthProvider';
import SingleEvent from './SingleEvent';


const Events = () => {
   const { user, logOut } = useContext(AuthContext);
   const [events, setEvents] = useState([]);
   console.log(events);
   useEffect(()=> {
    fetch(`https://blood-donation-camp-server.vercel.app/events?email=${user?.email}`, {
      headers: {
        authorization: `Bearer ${localStorage.getItem("blood-donaiton")}`,
      },
    })
      .then((res) => {
        if(res.status === 401 || res.status === 403){
          logOut();
        }
        return res.json()
      })
      .then((data) => setEvents(data))
      .catch((err) => console.log(err));
   },[user?.email, logOut]);
   const handalDelete = (id) => {
     const procced = window.confirm("Are You Sure? You want to cancel Events?");
     if (!procced) {
       return;
     }
     fetch(`https://blood-donation-camp-server.vercel.app/events/${id}`, {
       headers: {
         authorization: `Bearer ${localStorage.getItem("blood-donaiton")}`,
       },
       method: "DELETE",
     })
       .then((res) => res.json())
       .then((data) => {
         console.log(data);
         if (data.deletedCount > 0) {
           toast.warning("You Cancel a Event");
           const remaning = events.filter((ev) => ev._id !== id);
           setEvents(remaning);
         }
       });
   };
   const updateStatus = (id)=> {
      fetch(`https://blood-donation-camp-server.vercel.app/events/${id}`, {
        method: "PATCH",
        headers: {
          "content-type": "applicaiton/json",
          authorization: `Bearer ${localStorage.getItem("blood-donaiton")}`,
        },
        body: JSON.stringify({ status: "Confrimed" }),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          //clear the concept in support session!
          if (data.matchedCount > 0) {
            const remaning = events.filter((ev) => ev._id !== id);
            const approving = events.find((ev) => ev._id === id);
            approving.status = "Confrimed";
            const newEvents = [approving, ...remaning];
            setEvents(newEvents);
          }
        });
   }
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
                  updateStatus={updateStatus}
                ></SingleEvent>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
};

export default Events;
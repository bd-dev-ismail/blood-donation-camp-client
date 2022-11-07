import React, { useEffect, useState } from 'react';
import SingleDonation from './SingleDonation';

const AllDonation = () => {
    const [donations , setDonations] = useState([]);
   
    useEffect(()=>{
        fetch("http://localhost:5000/donation")
        .then(res => res.json())
        .then(data => setDonations(data))
        .catch(err=> console.log(err))
    },[])
    return (
      <div className="container mx-auto text-center">
        <div className="text-cetner">
          <h3 className="text-3xl font-bold mb-2">
            Our All Donation Campining Districts
          </h3>
          <p>
            Blood is the most precious gift that anyone can give to another
            person – the gift of life. A decision to donate your blood can save
            a life
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-10">
          {donations.map((donation) => (
            <SingleDonation
              key={donation._id}
              donation={donation}
            ></SingleDonation>
          ))}
        </div>
      </div>
    );
};

export default AllDonation;
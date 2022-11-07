import React, { useEffect, useState } from 'react';
import SingleDonation from './SingleDonation';

const AllDonation = () => {
    const [donations , setDonations] = useState([]);
    const [count, setCount] = useState(0);
    const [size, setSize] = useState(5);
    const [page, setPage] = useState(0);
    const pages = Math.ceil(count/size);
    
    useEffect(()=>{
        fetch(`https://blood-donation-camp-server.vercel.app/donation?page=${page}&size=${size}`)
          .then((res) => res.json())
          .then((data) => {
            setDonations(data.donation);
            setCount(data.count);
          })
          .catch((err) => console.log(err));
    },[page, size])
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
        <div className="my-10">
          <p className="text-center text-3xl font-semibold my-5">
            Current Page Number is {page} & Data Size is {size}
          </p>
          <div>
            <button onClick={()=> setPage(page -1)} className='btn btn-primary mr-5'>Prev</button>
            <button onClick={()=> setPage(page +1)} className='btn btn-secondary'>Next</button>
          </div>
          {[...Array(pages).keys()].map((number) => (
            <button
              onClick={()=> setPage(number)}
              className="btn ml-5"
              key={number}
            >
              {number}
            </button>
          ))}
          <select
            onChange={(e) => setSize(e.target.value)}
            className={`btn btn-warning ml-5 my-5`}
          >
            <option selected value="5">
              5
            </option>
            <option value="10">10</option>
            <option value="15">15</option>
            <option value="20">20</option>
          </select>
        </div>
      </div>
    );
};

export default AllDonation;
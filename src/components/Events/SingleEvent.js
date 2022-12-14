import React, { useEffect, useState } from 'react';
import { FaTrashAlt } from 'react-icons/fa';

const SingleEvent = ({ eventRow, handalDelete, updateStatus }) => {
  const {
    event,
    address,
    email,
    name,
    bloodGroup,
    eventLocation,
    _id,
    status,
  } = eventRow;
  const [donation, setDonation] = useState({});
  useEffect(() => {
    fetch(`https://blood-donation-camp-server.vercel.app/donation/${event}`)
      .then((res) => res.json())
      .then((data) => setDonation(data));
  }, [event]);

  return (
    <tr>
      <th>
        <label>
          <button onClick={() => handalDelete(_id)}>
            <FaTrashAlt className="text-xl text-red-600 hover:text-red-400" />
          </button>
        </label>
      </th>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              <img
                src={donation?.bannerURL}
                alt="Avatar Tailwind CSS Component"
              />
            </div>
          </div>
          <div>
            <div className="font-bold">{name}</div>
            <div className="text-sm opacity-50">Blood Group: {bloodGroup}</div>
            <div className="text-sm opacity-50">Your Address: {address}</div>
          </div>
        </div>
      </td>
      <td>{eventLocation}</td>
      <td>{email}</td>
      <th>
        <button onClick={() => updateStatus(_id)} className="btn btn-ghost btn-xs">
          {status ? status :  'Pending'}
       
        </button>
      </th>
    </tr>
  );
};

export default SingleEvent;
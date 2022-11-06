import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import AddEvents from './AddEvents';
import './AdminLayout.css'
import { FaPlus, FaUsers } from "react-icons/fa";
import DonnerList from './DonnerList';
import Donation from '../Donation/Donation';
const AdminLayout = () => {
    return (
      <div className=" container mx-auto my-36">
        <div className="my-5 border border-red-500 p-3 bg-base-300">
          <div className='flex justify-center items-center h-full py-20'>
            <Link to="/addDonation">
              <button
                className="btn btn-link text-xl "
                style={{ textDecoration: "none" }}
              >
                <FaPlus className="mr-2" />
                Add Donation
              </button>
            </Link>
            <Link to="/donnerList">
              <button
                className="btn btn-link text-xl"
                style={{ textDecoration: "none" }}
              >
                <FaUsers className="mr-2" />
                Donner List
              </button>
            </Link>
          </div>
        </div>
      </div>
    );
};

export default AdminLayout;
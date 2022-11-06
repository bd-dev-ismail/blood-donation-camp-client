import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import AddEvents from './AddEvents';
import './AdminLayout.css'
import { FaPlus, FaUsers } from "react-icons/fa";
import DonnerList from './DonnerList';
const AdminLayout = () => {
    return (
      <div className="custom-grid container mx-auto">
        <div className="my-5 border border-red-500 p-3 bg-base-200">
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
        <div>
          <AddEvents/>
          <DonnerList/>
        </div>
      </div>
    );
};

export default AdminLayout;
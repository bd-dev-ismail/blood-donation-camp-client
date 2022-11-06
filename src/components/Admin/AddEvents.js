import React, { useState } from 'react';
import { FaPlus, FaUsers } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
const AddEvents = () => {
   const [startDate, setStartDate] = useState(new Date());
    return (
      <div className="container mx-auto custom-grid my-30">
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
        <section className="p-6 dark:bg-gray-800 dark:text-gray-50">
          <form className="container flex flex-col mx-auto space-y-12 ng-untouched ng-pristine ng-valid">
            <fieldset className=" gap-6 p-6 rounded-md shadow-sm dark:bg-gray-900">
              {/* <div className="space-y-2 col-span-full lg:col-span-1">
                <p className="font-medium">Add Donation</p>
              </div> */}
              {/* grid grid-cols-4 */}
              <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
                <div className="col-span-full text-center my-5">
                  <h2 className="text-2xl ">Add Donation</h2>
                  <p className="text-xs py-3">
                    Donate Your Blood to Us, Save More Life Together
                  </p>
                </div>
                <div className="col-span-full sm:col-span-3">
                  <label htmlFor="donationLocation" className="text-sm">
                    Donation Location
                  </label>
                  <input
                    id="donationLocation"
                    type="text"
                    placeholder="Donation Location"
                    className="input input-bordered w-full"
                  />
                </div>
                <div className="col-span-full sm:col-span-3">
                  <label htmlFor="date" className="text-sm">
                    Dontaion Date
                  </label>
                  {/* <input
                    id="date"
                    type="text"
                    placeholder="Donation Date"
                    className="input input-bordered w-full"
                  /> */}
                  <div className="">
                    
                    <DatePicker
                      className="input input-bordered w-full flex items-center"
                      selected={startDate}
                      onChange={(date) => setStartDate(date)}
                    />
                  </div>
                </div>
                <div className="col-span-full sm:col-span-3">
                  <label htmlFor="desc" className="text-sm">
                    Description
                  </label>
                  <input
                    id="desc"
                    type="text"
                    placeholder="Description"
                    className="input input-bordered w-full"
                  />
                </div>
                <div className="col-span-full sm:col-span-3">
                  <label htmlFor="bannerURL" className="text-sm">
                    Banner URL
                  </label>
                  <input
                    id="bannerURL"
                    type="text"
                    placeholder="Banner URL"
                    className="input input-bordered w-full"
                  />
                </div>
                <div>
                  <button className="btn btn-error">Add Donation</button>
                </div>
              </div>
            </fieldset>
          </form>
        </section>
      </div>
    );
};

export default AddEvents;
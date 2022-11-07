import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../components/context/AuthProvider';

const DonnerForm = () => {
     const donation = useLoaderData();
     const {location, _id, date} = donation;
     const {user} = useContext(AuthContext);
     const handalConfrimEvent = (e)=> {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
       
        const email = user?.email || 'unregistered';
        const address = form.address.value;
        const age = form.age.value;
        const weight = form.weight.value;
        const bloodGroup = form.group.value;
        const message = form.message.value;
        if (age.length > 2 || weight.length > 2) {
          return toast.warning("Age & Weight Accepts only Two Number");
        }
        const agreed = window.confirm('You Want to Add a Donation Event?');
        if(!agreed){
            return;
        }
        const event = {
          event: _id,
          eventLocation: location,
          name,
          email,
          address,
          age,
          weight,
          bloodGroup,
          message,
        };
        console.log(event);
        fetch("http://localhost:5000/events", {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(event)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.acknowledged){
                toast.success('Event Added Succesfully!');
                form.reset();
            }
        })
        .catch(err => console.log(err))
        
     }
    return (
      <div className="container mx-auto my-10">
        <div className='text-center my-10'>
            <h3 className="text-3xl font-bold">Event Location: {location}</h3>
            <p className='text-xl font-semibold'>Date: {date}</p>
        </div>
        <section className="p-6 bg-gray-800 rounded-2xl text-gray-50">
          <form
            onSubmit={handalConfrimEvent}
            
            className="container flex flex-col mx-auto space-y-12 ng-untouched ng-pristine ng-valid"
          >
            <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm dark:bg-gray-900">
              <div className="space-y-2 col-span-full lg:col-span-1">
                <p className="font-medium text-xl">Personal Inormation</p>
                <p className="text-xs">
                  Donate Your Blood to Us, Save More Life Together
                </p>
              </div>
              <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
                <div className="col-span-full sm:col-span-3">
                  <label for="name" className="text-sm">
                    Full name
                  </label>
                  <input
                  
                    required
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Enter Your Full Name"
                    className="w-full px-3 py-2 border border-gray-400 rounded-md dark:border-gray-700 text-gray-900"
                  />
                </div>
                <div className="col-span-full sm:col-span-3">
                  <label for="email" className="text-sm">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    readOnly
                    defaultValue={user?.email}
                    className="w-full px-3 py-2 border  border-gray-400 rounded-md dark:border-gray-700 bg-gray-900 text-gray-100"
                  />
                </div>

                <div className="col-span-full">
                  <label for="address" className="text-sm">
                    Address
                  </label>
                  <input
                    required
                    type="text"
                    name="address"
                    id="address"
                    placeholder="Enter Your Address"
                    className="w-full px-3 py-2 border border-gray-400 rounded-md dark:border-gray-700 text-gray-900 "
                  />
                </div>
                <div className="col-span-full sm:col-span-2">
                  <label for="age" className="text-sm">
                    Age
                  </label>
                  <input
                    required
                    type="number"
                    name="age"
                    id="age"
                    placeholder="Enter Your Age"
                    className="w-full px-3 py-2 border border-gray-400 rounded-md dark:border-gray-700 text-gray-900"
                  />
                </div>
                <div className="col-span-full sm:col-span-2">
                  <label for="weight" className="text-sm">
                    Weight
                  </label>
                  <input
                    required
                    type="text"
                    name="weight"
                    id="weight"
                    placeholder="Enter Your Weight in KG"
                    className="w-full px-3 py-2 border border-gray-400 rounded-md dark:border-gray-700 text-gray-900 "
                  />
                </div>
                <div className="col-span-full sm:col-span-2">
                  <label for="group" className="text-sm">
                    Blood Group
                  </label>
                  <input
                    required
                    type="text"
                    name="group"
                    id="group"
                    placeholder="Enter Your Blood Group"
                    className="w-full px-3 py-2 border border-gray-400 rounded-md dark:border-gray-700 text-gray-900"
                  />
                </div>
                <div className="col-span-full">
                    <label htmlFor="message" className="text-sm">Your Message</label>
                  <textarea
                  name='message'
                    className="textarea text-gray-900 textarea-bordered w-full h-48"
                    placeholder="Bio"
                  ></textarea>
                </div>
                <div className="flex justify-center items-center">
                  <button className='btn btn-error' type="submit">Confrim Event</button>
                </div>
              </div>
            </fieldset>
          </form>
        </section>
      </div>
    );
};

export default DonnerForm;
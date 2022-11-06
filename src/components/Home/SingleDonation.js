import React from 'react';
import { FaLongArrowAltRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const SingleDonation = ({donation}) => {
    const { bannerURL , date, desc, location, _id} = donation;
    return (
      <div className="card w-96 bg-base-100 shadow-xl image-full border border-secondary-focus relative">
        <figure>
          <img src={bannerURL} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{location}</h2>
          <div className="card-actions justify-end">
            <Link to={`/events/${_id}`}>
              <button className="btn btn-link absolute left-[50%] bottom-0 text-warning" style={{textDecoration: 'none'}}>
                {" "}
                Donate Blood <FaLongArrowAltRight className='text-xl ml-2'/>
              </button>
            </Link>
          </div>
        </div>
      </div>
    );
};

export default SingleDonation;
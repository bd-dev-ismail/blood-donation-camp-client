import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Events = () => {
    const donation = useLoaderData();
    return (
        <div>
            Events
        </div>
    );
};

export default Events;
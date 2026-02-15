import { connect } from '@/app/lib/dbConnect';
import ServiceCard from '@/components/cards/ServiceCard';
import React from 'react';

export const metadata = {
    title: "Services-Care.IO",
}

const Services = async () => {
    const servicesCollection = await connect("services");
    const services = await servicesCollection.find().toArray();

    // Convert Mongo IDs to strings for serialization
    const serializedServices = services.map(service => ({
        ...service,
        _id: service._id.toString()
    }));

    console.log(serializedServices);

    return (
        <div>
            <h1 className='text-4xl text-center underline font-bold'>Service Page : {services.length}</h1>
            <div className='grid grid-cols-4 gap-4 w-[90%] mx-auto m-10'>
                {
                    serializedServices.map(service => <ServiceCard key={service._id} service={service}></ServiceCard>)
                }
            </div>

        </div>
    );
};

export default Services;
import { connect } from '@/app/lib/dbConnect';
import ServiceCard from '@/components/cards/ServiceCard';
import React from 'react';

export const metadata = {
    title: "Services-Care.IO",
}

export const dynamic = 'force-dynamic';

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
        <div className="min-h-screen bg-gray-50/50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16 space-y-4">
                    <h1 className='text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 tracking-tight'>
                        Our Premium <span className="text-blue-600">Care</span> Services
                    </h1>
                    <p className="text-gray-500 max-w-2xl mx-auto text-lg">
                        Expert care solutions tailored to your needs. Currently showing {services.length} active services.
                    </p>
                    <div className="w-24 h-1.5 bg-blue-600 mx-auto rounded-full"></div>
                </div>

                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8'>
                    {
                        serializedServices.map(service => (
                            <div key={service._id} className="h-full transform hover:-translate-y-2 transition-transform duration-300">
                                <ServiceCard service={service}></ServiceCard>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default Services;

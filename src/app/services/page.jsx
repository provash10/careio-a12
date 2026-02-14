
import ServiceCard from '@/components/cards/ServiceCard';
import React from 'react';
export const metadata = {
    title: "Services-Care.IO",
}

const getServices = async () => {
    const res = await fetch("http://localhost:3000/api/services",{
        cache:"force-cache",
    });
    return await res.json();
}

const Services = async () => {
    const services = await getServices();
    console.log(services);

    return (
        <div>
            <h1 className='text-4xl text-center underline font-bold'>Service Page : {services.length}</h1>
            <div className='grid grid-cols-4 gap-4 w-[90%] mx-auto m-10'>
                {
                    services.map(service=><ServiceCard key={service._id} service={service}></ServiceCard>)
                }
            </div>

        </div>
    );
};

export default Services;
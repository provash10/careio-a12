"use client";

import Image from "next/image";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

const ServiceDetails = () => {
  const params = useParams();
  const { id } = params;

  const [service, setService] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!id) return;

    const fetchService = async () => {
      setLoading(true);
      try {
        const res = await fetch(`/api/services/${id}`);
        if (!res.ok) {
          const errorData = await res.json().catch(() => ({}));
          throw new Error(errorData.message || "Failed to fetch service");
        }
        const data = await res.json();
        setService(data);
      } catch (err) {
        console.error("Fetch Error:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchService();
  }, [id]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[400px]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-600"></div>
        <p className="ml-4 text-gray-600 font-medium">Loading service details...</p>
      </div>
    );
  }

  if (error || !service) {
    return (
      <div className="p-10 text-center">
        <p className="text-red-500 text-xl font-semibold">
          {error || "Service not found"}
        </p>
        <a href="/services" className="mt-4 inline-block text-blue-600 hover:underline">
          Go back to services
        </a>
      </div>
    );
  }

  // const handleUpdate=async(e)=>{
  //   e.preventDefault();
  //   const name = e.target.name.value;
  //   const price = e.target.price.value;
  //   const image = e.target.image.value;
  //   const description = e.target.description.value;
  //   // console.log(name,price,image,description);
  //   const services = {name, price,image,description};


  //   const res=await fetch("http://localhost:3000/api/services",{
  //     method: "PATCH",
  //     headers: {
  //       "content-type" : "application/json",
  //     },
  //     body: JSON.stringify(services)
  //   })

  //   const data= await res.json();
  //   console.log(data);

  //   if(data.insertedId){
  //     alert("Success");
  //      e.target.reset();
  //   }

  // }

  return (
    <div className="p-4 md:p-8 max-w-6xl mx-auto bg-white shadow-2xl rounded-3xl mt-12 mb-12 border border-gray-100">
      <div className="flex flex-col md:flex-row gap-10">

        {/* Left Side: Image */}
        <div className="w-full md:w-1/2 overflow-hidden rounded-2xl shadow-lg ring-1 ring-black/5">
          {/* <img
            src={service.image}
            alt={service.name}
            className="w-full h-[300px] md:h-[500px] object-cover hover:scale-105 transition-transform duration-500"
          /> */}
          <Image
            width={300}
            height={180}
            src={service.image}
            alt={service.name}
            className="w-full h-[300px] md:h-[500px] object-cover hover:scale-105 transition-transform duration-500"
            unoptimized={true}
          />
        </div>

        {/* Right Side: Details */}
        <div className="w-full md:w-1/2 flex flex-col justify-between py-2">
          <div className="space-y-6">
            <div className="space-y-2">
              <span className="inline-block bg-blue-50 text-blue-600 px-3 py-1 rounded-md text-sm font-bold uppercase tracking-wider">
                Service Details
              </span>
              <h1 className="text-4xl font-extrabold text-gray-900 leading-tight">
                {service.name}
              </h1>
            </div>

            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
              <div className="text-3xl font-bold text-blue-600 mb-1">
                ৳{service.price}
              </div>
              <div className="text-gray-500 font-medium">Per Hour Service Charge</div>
            </div>

            <div className="space-y-3">
              <h2 className="text-xl font-semibold text-gray-800 flex items-center gap-2">
                <span className="w-1.5 h-6 bg-blue-600 rounded-full"></span>
                Description
              </h2>
              <p className="text-gray-600 leading-relaxed text-lg">
                {service.description}
              </p>
            </div>
          </div>
          <div className="flex justify-between gap-4">
            <button className="text-xl font-bold hover:text-white bg-green-600 px-8 py-2 mt-2 rounded-full cursor-pointer">Update</button>
            <button className="text-xl font-bold hover:text-white bg-red-600 px-8 py-2 mt-2 rounded-full cursor-pointer">Delete</button>

          </div>

          <div className="mt-8 space-y-4">
            <button className="w-full bg-blue-600 text-white py-2 rounded-xl text-xl font-bold hover:bg-blue-700 transition shadow-lg hover:shadow-blue-200 active:scale-95 duration-200">
              Book This Service
            </button>
            <p className="text-center text-gray-400 text-sm">
              Secure payment and trusted professional assistance
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ServiceDetails;

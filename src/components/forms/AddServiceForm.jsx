"use client";

import { FaServicestack, FaMoneyBillWave, FaImage, FaAlignLeft } from "react-icons/fa";

const AddServiceForm = () => {
  const handleAddSubmit=async(e)=>{
    e.preventDefault();
    const name = e.target.name.value;
    const price = e.target.price.value;
    const image = e.target.image.value;
    const description = e.target.description.value;
    // console.log(name,price,image,description);
    const services = {name, price,image,description};


    const res=await fetch("http://localhost:3000/api/services",{
      method: "POST",
      headers: {
        "content-type" : "application/json",
      },
      body: JSON.stringify(services)
    })

    const data= await res.json();
    console.log(data);

    if(data.insertedId){
      alert("Success");
       e.target.reset();
    }

  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="max-w-xl w-full bg-white shadow-2xl rounded-3xl p-8">
        
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-800 flex items-center justify-center gap-3">
          <FaServicestack className="text-blue-600 text-2xl" />
          Add New Service
        </h2>

        <form onSubmit={handleAddSubmit} className="space-y-6">
          
          {/* Service Name */}
          <div>
            <label className="text-sm font-semibold text-gray-700 flex items-center gap-2">
              <FaServicestack className="text-blue-500" />
              Service Name
            </label>
            <input
              type="text" name="name"
              className="w-full mt-2 px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition"
              placeholder="Enter service name"
            />
          </div>

          {/* Price */}
          <div>
            <label className="text-sm font-semibold text-gray-700 flex items-center gap-2">
              <FaMoneyBillWave className="text-green-500" />
              Price (Per Hour)
            </label>
            <input
              type="number" name="price"
              className="w-full mt-2 px-4 py-3 border rounded-xl focus:ring-2 focus:ring-green-500 outline-none transition"
              placeholder="Enter price"
            />
          </div>

          {/* Image URL */}
          <div>
            <label className="text-sm font-semibold text-gray-700 flex items-center gap-2">
              <FaImage className="text-purple-500" />
              Image URL
            </label>
            <input
              type="text" name="image"
              className="w-full mt-2 px-4 py-3 border rounded-xl focus:ring-2 focus:ring-purple-500 outline-none transition"
              placeholder="Enter image URL"
            />
          </div>

          {/* Description */}
          <div>
            <label className="text-sm font-semibold text-gray-700 flex items-center gap-2">
              <FaAlignLeft className="text-orange-500" />
              Description
            </label>
            <textarea
            name="description"
              rows="4"
              className="w-full mt-2 px-4 py-3 border rounded-xl focus:ring-2 focus:ring-orange-500 outline-none transition"
              placeholder="Enter service description"
            ></textarea>
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-xl font-semibold hover:bg-blue-700 transition duration-300 shadow-md hover:shadow-lg"
          >
            Add Service
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddServiceForm;

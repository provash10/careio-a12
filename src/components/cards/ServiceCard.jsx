import Image from "next/image";
import Link from "next/link";

 const ServiceCard = ({ service }) => {
  const { _id, name, price, image, description } = service;

  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden">
      
      <div className="relative w-full h-52">
        <Image
        width={300}
        height={180}
          src={image}
          alt={name}
          className="object-cover"
        />
      </div>

      <div className="p-6 space-y-3">
        <h2 className="text-xl font-bold text-gray-800">
          {name}
        </h2>

        <p className="text-gray-600 text-sm">
          {description}
        </p>

        <div className="flex justify-between items-center pt-3">
          <span className="text-blue-600 font-semibold">
            ৳{price} / Hour
          </span>

          <Link
            href={`/service/${_id}`}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-700 transition"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
import Image from "next/image";
import Link from "next/link";

const ServiceCard = ({ service }) => {
  const { _id, name, pricePerHour, image, shortDescription, rating } = service;

  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden flex flex-col h-full">

      <div className="relative w-full h-52">
        <Image
          fill
          src={image}
          alt={name}
          className="object-cover"
          unoptimized={true}
        />
        {rating && (
          <div className="absolute top-3 right-3 bg-white/90 backdrop-blur px-2 py-1 rounded-lg text-sm font-bold text-orange-500 shadow-sm">
            ★ {rating}
          </div>
        )}
      </div>

      <div className="p-6 flex flex-col flex-grow space-y-3">
        <h2 className="text-xl font-bold text-gray-800">
          {name}
        </h2>

        <p className="text-gray-600 text-sm line-clamp-2">
          {shortDescription}
        </p>

        <div className="flex flex-col gap-3 pt-4 mt-auto">
          <div className="flex gap-3">
            <div className="flex-1 bg-blue-50 text-blue-700 py-2.5 rounded-xl text-center font-black text-xs border border-blue-100 transition hover:bg-blue-100/50">
              ${pricePerHour} / Day
            </div>
            <div className="flex-1 bg-orange-50 text-orange-700 py-2.5 rounded-xl text-center font-black text-xs border border-orange-100 transition hover:bg-orange-100/50">
              ${service.pricePerDay || (pricePerHour * 8)} / Month
            </div>
          </div>

          <Link
            href={`/services/${_id?.toString() || ""}`}
            className="w-full bg-blue-600 text-white py-3 rounded-xl font-black text-sm hover:bg-blue-700 transition text-center shadow-lg shadow-blue-100 active:scale-95 duration-200"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
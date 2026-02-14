import React from 'react';
import { FaStar, FaRegStar } from 'react-icons/fa';

const ReviewCard = ({ review }) => {
  const { id, name, rating, text, image } = review;

  return (
    <div className="bg-white shadow-lg rounded-2xl p-5 hover:shadow-2xl transition duration-300 flex flex-col">
      {/* User info */}
      <div className="flex items-center gap-4 mb-4">
        <img
          src={image || 'https://i.pravatar.cc/150?img=3'}
          alt={name}
          className="w-14 h-14 rounded-full object-cover"
        />
        <div>
          <h3 className="font-bold text-lg text-green-600">{name}</h3>
          <div className="flex gap-1 text-yellow-400">
            {Array.from({ length: 5 }).map((_, i) =>
              i < rating ? <FaStar key={i} /> : <FaRegStar key={i} />
            )}
          </div>
        </div>
      </div>

      {/* Review text */}
      <p className="text-gray-700 flex-1">{text}</p>
    </div>
  );
};

export default ReviewCard;

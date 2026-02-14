"use client";

import ReviewCard from '@/components/cards/ReviewCard';
import React, { useEffect, useState } from 'react';


const Reviews = () => {
    const [reviews, setReviews] = useState([]);

   

    useEffect(() => {
        fetch("https://taxi-kitchen-api.vercel.app/api/v1/reviews")
            .then((res) => res.json())
            .then((data) => {setReviews(data.reviews || [])
                // setReviews(Array.isArray(data) ? data : data.reviews || []);
            });
    }, []);

   
    return (
        <div className='p-6'>
            <h1 className='text-4xl font-bold m-8 underline text-yellow-500'>
                Total <span className='text-green-600'>{reviews.length} Reviews</span>
            </h1>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
                {reviews.map(review => (
                    <ReviewCard key={review.id} review={review} />
                ))}
            </div>
        </div>
    );
};

export default Reviews;

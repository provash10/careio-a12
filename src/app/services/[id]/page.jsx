"use client";

import Image from "next/image";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const ServiceDetails = () => {
  const params = useParams();
  const router = useRouter();
  const { id } = params;

  const [service, setService] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentIdx, setCurrentIdx] = useState(0);

  // Combine main image and gallery for the slider
  const allImages = service ? [service.image, ...(service.gallery || [])] : [];

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

  // Auto-sliding logic
  useEffect(() => {
    if (allImages.length <= 1) return;

    const timer = setInterval(() => {
      setCurrentIdx((prev) => (prev === allImages.length - 1 ? 0 : prev + 1));
    }, 5000);

    return () => clearInterval(timer);
  }, [allImages]);

  const handlePrev = () => {
    setCurrentIdx((prev) => (prev === 0 ? allImages.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIdx((prev) => (prev === allImages.length - 1 ? 0 : prev + 1));
  };

  if (loading) {
    // ... rest remains same until the return statement
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

  const handleDelete = async () => {
    if (!confirm("Are you sure you want to delete this service?")) return;

    try {
      const res = await fetch(`/api/services/${id}`, {
        method: "DELETE",
      });
      if (res.ok) {
        alert("Deleted successfully");
        router.push("/services");
      } else {
        alert("Failed to delete");
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-12">
      <div className="bg-white shadow-xl rounded-2xl md:rounded-3xl border border-gray-100 overflow-hidden">
        <div className="flex flex-col md:flex-row">

          {/* Left Side: Main Image Slider & Gallery */}
          <div className="w-full md:w-1/2 p-4 md:p-8 space-y-6">
            <div className="relative group rounded-2xl overflow-hidden shadow-lg bg-gray-100 aspect-[4/3] sm:aspect-video md:aspect-[4/3]">
              <Image
                fill
                src={allImages[currentIdx]}
                alt={service.name || "Service Image"}
                className="object-cover transition-all duration-700 ease-in-out"
                unoptimized={true}
                priority
              />

              {/* Slider Controls */}
              {allImages.length > 1 && (
                <>
                  <button
                    onClick={handlePrev}
                    className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-2 rounded-full shadow-md transition duration-300 md:opacity-0 md:group-hover:opacity-100 z-10"
                    aria-label="Previous image"
                  >
                    <FaChevronLeft className="text-gray-800 text-xs md:text-base" />
                  </button>
                  <button
                    onClick={handleNext}
                    className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-2 rounded-full shadow-md transition duration-300 md:opacity-0 md:group-hover:opacity-100 z-10"
                    aria-label="Next image"
                  >
                    <FaChevronRight className="text-gray-800 text-xs md:text-base" />
                  </button>

                  {/* Dots indicator */}
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
                    {allImages.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => setCurrentIdx(idx)}
                        className={`transition-all duration-300 rounded-full ${currentIdx === idx ? 'bg-blue-600 w-5 h-1.5' : 'bg-white/60 w-1.5 h-1.5'}`}
                        aria-label={`Go to slide ${idx + 1}`}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>

            {allImages.length > 1 && (
              <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-4 lg:grid-cols-6 gap-2 md:gap-3">
                {allImages.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentIdx(idx)}
                    className={`aspect-square relative rounded-lg md:rounded-xl overflow-hidden border-2 transition-all duration-300 ${currentIdx === idx ? 'border-blue-600 ring-4 ring-blue-50 scale-95' : 'border-gray-100 hover:border-blue-200'}`}
                  >
                    <Image fill src={img} alt={`Thumbnail ${idx}`} className="object-cover" unoptimized />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Right Side: Details */}
          <div className="w-full md:w-1/2 p-5 md:p-7 md:pl-2 flex flex-col justify-between">
            <div className="space-y-4 md:space-y-5">
              <div className="space-y-1.5">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className={`px-3 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-widest ${service.availability === 'Available' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                    {service.availability || 'Available'}
                  </span>
                  <span className="text-[10px] font-bold text-gray-400 bg-gray-50 px-2 py-0.5 rounded border border-gray-100">ID: {id?.slice(-6)}</span>
                </div>
                <h1 className="text-2xl md:text-3xl font-black text-gray-900 leading-tight tracking-tight">
                  {service.name}
                </h1>
              </div>

              <div className="flex flex-col sm:flex-row gap-2">
                <div className="flex items-center bg-blue-50/50 px-3 py-1.5 rounded-lg border border-blue-100/50">
                  <span className="text-lg font-black text-blue-600">${service.pricePerHour}</span>
                  <span className="text-blue-900/60 text-[11px] font-bold uppercase ml-1">/ Day</span>
                </div>
                <div className="flex items-center bg-orange-50/50 px-3 py-1.5 rounded-lg border border-orange-100/50">
                  <span className="text-lg font-black text-orange-600">${service.pricePerDay || (service.pricePerHour * 8)}</span>
                  <span className="text-orange-900/60 text-[11px] font-bold uppercase ml-1">/ Month</span>
                </div>
              </div>

              <div className="space-y-2">
                <h2 className="text-lg font-bold text-gray-800 flex items-center gap-2">
                  <span className="w-1 h-5 bg-blue-600 rounded-full"></span>
                  Service Overview
                </h2>
                <p className="text-gray-600 leading-relaxed text-sm md:text-[15px]">
                  {service.description}
                </p>
              </div>

              {service.features && service.features.length > 0 && (
                <div className="space-y-3">
                  <h2 className="text-lg font-bold text-gray-800 flex items-center gap-2">
                    <span className="w-1 h-5 bg-orange-500 rounded-full"></span>
                    What's Included
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-gray-700 bg-gray-50/50 px-3 py-2 rounded-lg text-[13px] border border-gray-100/50 hover:bg-white transition-colors">
                        <span className="text-blue-500 text-xs flex-shrink-0">●</span>
                        <span className="font-semibold">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="mt-6 space-y-3 pt-4 border-t border-gray-50 md:border-t-0 md:pt-0">
              <div className="grid grid-cols-2 gap-3">
                <Link
                  href={`/services/${id}/update`}
                  className="py-2.5 rounded-lg font-bold text-sm border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white transition-all shadow-sm active:scale-95 text-center flex items-center justify-center"
                >
                  Update
                </Link>
                <button
                  onClick={handleDelete}
                  className="py-2.5 rounded-lg font-bold text-sm border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white transition-all shadow-sm active:scale-95">
                  Delete
                </button>
              </div>
              <button className="w-full bg-blue-600 text-white py-3.5 rounded-xl text-lg font-black hover:bg-blue-700 transition-all shadow-lg shadow-blue-100/50 active:scale-[0.98]">
                Book This Service
              </button>
            </div>
          </div>
        </div>

        {service.faq && service.faq.length > 0 && (
          <div className="border-t border-gray-100 bg-gray-50/30 p-6 md:p-12">
            <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-8 text-center uppercase tracking-tight">FAQ Section</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 max-w-5xl mx-auto">
              {service.faq.map((item, idx) => (
                <div key={idx} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 transition hover:shadow-md">
                  <h3 className="font-extrabold text-gray-800 mb-2 flex gap-2">
                    <span className="text-blue-600">Q:</span> {item.question}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed flex gap-2">
                    <span className="text-gray-300">A:</span> {item.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ServiceDetails;

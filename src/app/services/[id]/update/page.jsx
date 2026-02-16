"use client";

import UpdateServiceForm from "@/components/forms/UpdateServiceForm";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

const UpdateServicePage = () => {
    const { id } = useParams();
    const [service, setService] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!id) return;

        const fetchService = async () => {
            try {
                const res = await fetch(`/api/services/${id}`);
                if (!res.ok) throw new Error("Failed to fetch service data");
                const data = await res.json();
                setService(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchService();
    }, [id]);

    if (loading) {
        return (
            <div className="flex justify-center items-center min-h-screen bg-gray-50">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-green-600"></div>
            </div>
        );
    }

    if (error || !service) {
        return (
            <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-4 text-center">
                <h2 className="text-2xl font-bold text-red-600 mb-2">Error</h2>
                <p className="text-gray-600 mb-4">{error || "Service not found"}</p>
                <button
                    onClick={() => window.location.reload()}
                    className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
                >
                    Try Again
                </button>
            </div>
        );
    }

    return (
        <div className="bg-gray-50 min-h-screen">
            <UpdateServiceForm service={service} />
        </div>
    );
};

export default UpdateServicePage;

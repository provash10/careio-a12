"use client";

import { FaServicestack, FaChevronDown, FaPlus, FaMinus } from "react-icons/fa";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

const UpdateServiceForm = ({ service }) => {
    const router = useRouter();

    const serviceNames = [
        "Baby Sitting Service",
        "Elderly Care Service",
        "Post-Hospitalization Care",
        "Special Child Care",
        "Home Nursing Service",
        "Patient Care Attendant",
    ];

    const commonFeatures = [
        "Verified Caretaker, 24/7 Monitoring, First Aid Knowledge",
        "Professional Background, Elderly Friendly, Medication Support",
        "Emergency Response, Home Visit, Flexible Hours",
        "Personalized Care Plan, Compassionate Staff, Daily Progress Report",
    ];

    // States initialized with existing service data
    const [nameValue, setNameValue] = useState(service?.name || "");
    const [showNames, setShowNames] = useState(false);
    const [nameIndex, setNameIndex] = useState(-1);

    const [galleryInputs, setGalleryInputs] = useState(service?.gallery || [""]);
    const [featureValue, setFeatureValue] = useState(service?.features?.join(", ") || "");
    const [showFeatures, setShowFeatures] = useState(false);
    const [featureIndex, setFeatureIndex] = useState(-1);

    const [loading, setLoading] = useState(false);

    const handleKeyDown = (e, type) => {
        const list = type === "name" ? serviceNames : commonFeatures;
        const index = type === "name" ? nameIndex : featureIndex;
        const setIndex = type === "name" ? setNameIndex : setFeatureIndex;
        const setShow = type === "name" ? setShowNames : setShowFeatures;
        const setValue = type === "name" ? setNameValue : setFeatureValue;

        if (e.key === "ArrowDown") {
            e.preventDefault();
            setShow(true);
            setIndex((prev) => (prev < list.length - 1 ? prev + 1 : prev));
        } else if (e.key === "ArrowUp") {
            e.preventDefault();
            setIndex((prev) => (prev > 0 ? prev - 1 : 0));
        } else if (e.key === "Enter" && index >= 0) {
            e.preventDefault();
            setValue(list[index]);
            setShow(false);
            setIndex(-1);
        }
    };

    const handleUpdateSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        const formData = new FormData(e.target);

        const updatedData = {
            name: nameValue || formData.get("name"),
            shortDescription: formData.get("shortDescription"),
            description: formData.get("description"),
            pricePerHour: Number(formData.get("pricePerHour")),
            pricePerDay: Number(formData.get("pricePerDay")),
            discountPercentage: Number(formData.get("discountPercentage")) || 0,
            image: formData.get("image"),
            rating: Number(formData.get("rating")),
            gallery: galleryInputs.map(url => url.trim()).filter(url => url),
            features: (featureValue || formData.get("features")).split(",").map(i => i.trim()).filter(i => i),
            availability: formData.get("availability"),
        };

        try {
            const res = await fetch(`/api/services/${service._id?.toString()}`, {
                method: "PATCH",
                headers: { "content-type": "application/json" },
                body: JSON.stringify(updatedData),
            });

            const result = await res.json();

            if (res.ok) {
                alert("Service Updated Successfully!");
                router.push(`/services/${service._id}`);
                router.refresh();
            } else {
                alert(result.message || "Failed to update service");
            }
        } catch (err) {
            console.error("Update Error:", err);
            alert("An error occurred while updating");
        } finally {
            setLoading(false);
        }
    };

    const handleGalleryChange = (idx, value) => {
        const newInputs = [...galleryInputs];
        newInputs[idx] = value;
        setGalleryInputs(newInputs);
    };

    const addGalleryField = () => setGalleryInputs([...galleryInputs, ""]);

    const removeGalleryField = (idx) => {
        if (galleryInputs.length > 1) {
            const newInputs = galleryInputs.filter((_, i) => i !== idx);
            setGalleryInputs(newInputs);
        } else {
            setGalleryInputs([""]);
        }
    };

    return (
        <div className="min-h-screen py-6 flex items-center justify-center bg-gray-50 px-4">
            <div className="max-w-4xl w-full bg-white shadow-2xl rounded-3xl p-8 border border-gray-100">

                <h2 className="text-3xl font-extrabold mb-8 text-center text-gray-900 flex items-center justify-center gap-3">
                    <FaServicestack className="text-green-600" />
                    Update Service: {service?.name}
                </h2>

                <form onSubmit={handleUpdateSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">

                    {/* Service Name */}
                    <div className="md:col-span-2 relative">
                        <label className="text-sm font-bold text-gray-700 block mb-2">Service Name</label>
                        <div className="relative">
                            <input
                                type="text" name="name" required
                                value={nameValue}
                                onChange={(e) => { setNameValue(e.target.value); setShowNames(true); }}
                                onKeyDown={(e) => handleKeyDown(e, "name")}
                                onBlur={() => setTimeout(() => setShowNames(false), 200)}
                                className="w-full px-4 py-3 pr-10 border border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 outline-none transition"
                                placeholder="e.g. Premium Baby Care"
                                autoComplete="off"
                            />
                            <FaChevronDown
                                className={`absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 cursor-pointer transition-transform duration-300 ${showNames ? 'rotate-180' : ''}`}
                                onClick={() => setShowNames(!showNames)}
                            />
                        </div>
                        {showNames && (
                            <ul className="absolute z-50 w-full bg-white border border-gray-100 mt-1 rounded-xl shadow-xl overflow-hidden">
                                {serviceNames.map((name, idx) => (
                                    <li
                                        key={idx}
                                        onMouseDown={(e) => e.preventDefault()}
                                        onClick={() => { setNameValue(name); setShowNames(false); }}
                                        className={`px-4 py-3 cursor-pointer transition ${nameIndex === idx ? 'bg-green-600 text-white' : 'hover:bg-green-50 text-gray-700'}`}
                                    >
                                        {name}
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>

                    {/* Short Description */}
                    <div>
                        <label className="text-sm font-bold text-gray-700 block mb-2">Short Description</label>
                        <textarea
                            name="shortDescription" required
                            defaultValue={service?.shortDescription}
                            rows="3"
                            className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 outline-none transition"
                            placeholder="A brief summary..."
                        ></textarea>
                    </div>

                    {/* Full Description */}
                    <div>
                        <label className="text-sm font-bold text-gray-700 block mb-2">Full Description</label>
                        <textarea
                            name="description" required
                            defaultValue={service?.description}
                            rows="3"
                            className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 outline-none transition"
                            placeholder="Detailed explanation..."
                        ></textarea>
                    </div>

                    {/* Pricing Grid */}
                    <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div>
                            <label className="text-sm font-bold text-gray-700 block mb-2">Price (Per Hour)</label>
                            <input type="number" name="pricePerHour" required defaultValue={service?.pricePerHour} className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 outline-none transition" placeholder="300" />
                        </div>
                        <div>
                            <label className="text-sm font-bold text-gray-700 block mb-2">Price (Per Day)</label>
                            <input type="number" name="pricePerDay" required defaultValue={service?.pricePerDay} className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 outline-none transition" placeholder="2200" />
                        </div>
                        <div>
                            <label className="text-sm font-bold text-gray-700 block mb-2">Off / Discount (%)</label>
                            <input type="number" name="discountPercentage" defaultValue={service?.discountPercentage} className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 outline-none transition" placeholder="20" />
                        </div>
                    </div>

                    {/* Image */}
                    <div>
                        <label className="text-sm font-bold text-gray-700 block mb-2">Main Image URL</label>
                        <input type="text" name="image" required defaultValue={service?.image} className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 outline-none transition" placeholder="https://..." />
                    </div>

                    {/* Gallery */}
                    <div className="relative">
                        <div className="flex justify-between items-center mb-2">
                            <label className="text-sm font-bold text-gray-700">Gallery URLs</label>
                            <button
                                type="button"
                                onClick={addGalleryField}
                                className="text-xs bg-green-100 text-green-600 px-3 py-1.5 rounded-lg hover:bg-green-200 flex items-center gap-1 font-bold transition"
                            >
                                <FaPlus className="text-[10px]" /> Add More
                            </button>
                        </div>
                        <div className="space-y-2 max-h-[140px] overflow-y-auto pr-1">
                            {galleryInputs.map((url, idx) => (
                                <div key={idx} className="flex gap-2">
                                    <input
                                        type="text"
                                        value={url}
                                        onChange={(e) => handleGalleryChange(idx, e.target.value)}
                                        className="flex-1 px-4 py-2 text-sm border border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 outline-none transition shadow-sm"
                                        placeholder={`Image ${idx + 1} URL`}
                                    />
                                    <button
                                        type="button"
                                        onClick={() => removeGalleryField(idx)}
                                        className="px-3 bg-red-500 text-white rounded-xl hover:bg-red-600 transition flex items-center justify-center h-[38px] min-w-[38px]"
                                    >
                                        <FaMinus className="text-xs" />
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Rating & Availability */}
                    <div>
                        <label className="text-sm font-bold text-gray-700 block mb-2">Rating</label>
                        <input type="number" step="0.1" max="5" name="rating" required defaultValue={service?.rating} className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 outline-none transition" placeholder="4.8" />
                    </div>
                    <div>
                        <label className="text-sm font-bold text-gray-700 block mb-2">Availability</label>
                        <select name="availability" defaultValue={service?.availability} className="w-full px-4 py-3 border border-gray-200 rounded-xl bg-white focus:ring-2 focus:ring-green-500 outline-none transition appearance-none">
                            <option value="Available">Available</option>
                            <option value="Busy">Busy</option>
                            <option value="Unavailable">Unavailable</option>
                        </select>
                    </div>

                    {/* Features */}
                    <div className="md:col-span-2 relative">
                        <label className="text-sm font-bold text-gray-700 block mb-2">Features (Comma separated)</label>
                        <div className="relative">
                            <input
                                type="text" name="features" required
                                value={featureValue}
                                onChange={(e) => { setFeatureValue(e.target.value); setShowFeatures(true); }}
                                onKeyDown={(e) => handleKeyDown(e, "feature")}
                                onBlur={() => setTimeout(() => setShowFeatures(false), 200)}
                                className="w-full px-4 py-3 pr-10 border border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 outline-none transition"
                                placeholder="Trusted Care, 24/7 Support..."
                                autoComplete="off"
                            />
                            <FaChevronDown
                                className={`absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 cursor-pointer transition-transform duration-300 ${showFeatures ? 'rotate-180' : ''}`}
                                onClick={() => setShowFeatures(!showFeatures)}
                            />
                        </div>
                        {showFeatures && (
                            <ul className="absolute z-50 w-full bg-white border border-gray-100 mt-1 rounded-xl shadow-xl overflow-hidden">
                                {commonFeatures.map((f, idx) => (
                                    <li
                                        key={idx}
                                        onMouseDown={(e) => e.preventDefault()}
                                        onClick={() => { setFeatureValue(f); setShowFeatures(false); }}
                                        className={`px-4 py-3 cursor-pointer transition ${featureIndex === idx ? 'bg-green-600 text-white' : 'hover:bg-green-50 text-gray-700 font-medium text-sm'}`}
                                    >
                                        {f}
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>

                    <div className="md:col-span-2 mt-2">
                        <button
                            type="submit"
                            disabled={loading}
                            className={`w-full bg-green-600 text-white py-4 rounded-xl font-bold text-lg hover:bg-green-700 transition shadow-xl active:scale-[0.98] ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
                        >
                            {loading ? "Updating..." : "Save Changes"}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UpdateServiceForm;

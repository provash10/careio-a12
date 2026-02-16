"use client";

import { FaServicestack, FaMoneyBillWave, FaImage, FaAlignLeft, FaChevronDown, FaPlus, FaMinus } from "react-icons/fa";
import { useState } from "react";

const AddServiceForm = () => {
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

  // States for Service Name
  const [nameValue, setNameValue] = useState("");
  const [showNames, setShowNames] = useState(false);
  const [nameIndex, setNameIndex] = useState(-1);

  // States for Gallery
  const [galleryInputs, setGalleryInputs] = useState([""]);

  // States for Features
  const [featureValue, setFeatureValue] = useState("");
  const [showFeatures, setShowFeatures] = useState(false);
  const [featureIndex, setFeatureIndex] = useState(-1);

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

  const handleAddSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    const serviceData = {
      name: nameValue || formData.get("name"),
      shortDescription: formData.get("shortDescription"),
      description: formData.get("description"),
      pricePerHour: Number(formData.get("pricePerHour")),
      pricePerDay: Number(formData.get("pricePerDay")),
      image: formData.get("image"),
      rating: Number(formData.get("rating")),
      gallery: galleryInputs.map(url => url.trim()).filter(url => url),
      features: (featureValue || formData.get("features")).split(",").map(i => i.trim()).filter(i => i),
      availability: formData.get("availability"),
      faq: []
    };

    const res = await fetch("/api/services", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(serviceData),
    });

    if (res.ok) {
      const data = await res.json();
      if (data.insertedId) {
        alert("Service Added Successfully!");
        e.target.reset();
        setNameValue("");
        setFeatureValue("");
        setGalleryInputs([""]);
      }
    } else {
      const errorData = await res.json().catch(() => ({}));
      console.error("Error adding service:", errorData);
      alert(errorData.message || "Failed to add service");
    }
  }

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
          <FaServicestack className="text-blue-600" />
          Create New Service
        </h2>

        <form onSubmit={handleAddSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* Service Name with Custom Suggestion */}
          <div className="md:col-span-2 relative">
            <label className="text-sm font-bold text-gray-700 block mb-2">Service Name</label>
            <div className="relative">
              <input
                type="text" name="name" required
                value={nameValue}
                onChange={(e) => { setNameValue(e.target.value); setShowNames(true); }}
                onKeyDown={(e) => handleKeyDown(e, "name")}
                onBlur={() => setTimeout(() => setShowNames(false), 200)}
                className="w-full px-4 py-3 pr-10 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition"
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
                    onMouseDown={(e) => e.preventDefault()} // Prevents onBlur from firing before onClick
                    onClick={() => { setNameValue(name); setShowNames(false); }}
                    className={`px-4 py-3 cursor-pointer transition ${nameIndex === idx ? 'bg-blue-600 text-white' : 'hover:bg-blue-50 text-gray-700'}`}
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
              rows="3"
              className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition"
              placeholder="A brief summary..."
            ></textarea>
          </div>

          {/* Full Description */}
          <div>
            <label className="text-sm font-bold text-gray-700 block mb-2">Full Description</label>
            <textarea
              name="description" required
              rows="3"
              className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition"
              placeholder="Detailed explanation..."
            ></textarea>
          </div>

          {/* Pricing */}
          <div>
            <label className="text-sm font-bold text-gray-700 block mb-2">Price (Per Hour)</label>
            <input type="number" name="pricePerHour" required className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition" placeholder="300" />
          </div>
          <div>
            <label className="text-sm font-bold text-gray-700 block mb-2">Price (Per Day)</label>
            <input type="number" name="pricePerDay" required className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition" placeholder="2200" />
          </div>

          {/* Image */}
          <div>
            <label className="text-sm font-bold text-gray-700 block mb-2">Main Image URL</label>
            <input type="text" name="image" required className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition" placeholder="https://..." />
          </div>

          {/* Gallery */}
          <div className="relative">
            <div className="flex justify-between items-center mb-2">
              <label className="text-sm font-bold text-gray-700">Gallery URLs</label>
              <button
                type="button"
                onClick={addGalleryField}
                className="text-xs bg-blue-100 text-blue-600 px-3 py-1.5 rounded-lg hover:bg-blue-200 flex items-center gap-1 font-bold transition"
              >
                <FaPlus className="text-[10px]" /> Add More
              </button>
            </div>
            <div className="space-y-2 max-h-[140px] overflow-y-auto pr-1 custom-scrollbar">
              {galleryInputs.map((url, idx) => (
                <div key={idx} className="flex gap-2">
                  <input
                    type="text"
                    value={url}
                    onChange={(e) => handleGalleryChange(idx, e.target.value)}
                    className="flex-1 px-4 py-2 text-sm border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition shadow-sm"
                    placeholder={`Image ${idx + 1} URL`}
                  />
                  {galleryInputs.length > 0 && (
                    <button
                      type="button"
                      onClick={() => removeGalleryField(idx)}
                      className="px-3 bg-red-500 text-white rounded-xl hover:bg-red-600 transition shadow-md active:scale-95 flex items-center justify-center h-[38px] min-w-[38px]"
                    >
                      <FaMinus className="text-xs" />
                    </button>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Rating & Availability */}
          <div>
            <label className="text-sm font-bold text-gray-700 block mb-2">Rating</label>
            <input type="number" step="0.1" max="5" name="rating" required className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition" placeholder="4.8" />
          </div>
          <div>
            <label className="text-sm font-bold text-gray-700 block mb-2">Availability</label>
            <select name="availability" className="w-full px-4 py-3 border border-gray-200 rounded-xl bg-white focus:ring-2 focus:ring-blue-500 outline-none transition appearance-none">
              <option value="Available">Available</option>
              <option value="Busy">Busy</option>
              <option value="Unavailable">Unavailable</option>
            </select>
          </div>

          {/* Features with Custom Suggestion */}
          <div className="md:col-span-2 relative">
            <label className="text-sm font-bold text-gray-700 block mb-2">Features (Comma separated)</label>
            <div className="relative">
              <input
                type="text" name="features" required
                value={featureValue}
                onChange={(e) => { setFeatureValue(e.target.value); setShowFeatures(true); }}
                onKeyDown={(e) => handleKeyDown(e, "feature")}
                onBlur={() => setTimeout(() => setShowFeatures(false), 200)}
                className="w-full px-4 py-3 pr-10 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition"
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
                    className={`px-4 py-3 cursor-pointer transition ${featureIndex === idx ? 'bg-blue-600 text-white' : 'hover:bg-blue-50 text-gray-700 font-medium text-sm'}`}
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
              className="w-full bg-blue-600 text-white py-4 rounded-xl font-bold text-lg hover:bg-blue-700 transition shadow-xl active:scale-[0.98]"
            >
              Add Service
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddServiceForm;

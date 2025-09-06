import React from "react";
import Loading from "./Loading";

const ImagePreview = ({ uploaded, enhanced, loading }) => {
  return (
    <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-6xl mx-auto px-4">
      {/* Original Image */}
      <div className="bg-white dark:bg-slate-800 shadow-lg rounded-xl overflow-hidden">
        <h2 className="text-xl font-semibold text-center bg-gray-800 text-white py-2">
          Original Image
        </h2>

        <div className="w-full aspect-[3/4] bg-gray-100 dark:bg-slate-700 flex items-center justify-center">
          {uploaded ? (
            <img
              src={uploaded}
              alt="Original"
              className="w-full h-full object-contain"
            />
          ) : (
            <span className="text-gray-500">No Image Selected</span>
          )}
        </div>
      </div>

      {/* Enhanced Image */}
      <div className="bg-white dark:bg-slate-800 shadow-lg rounded-xl overflow-hidden">
        <h2 className="text-xl font-semibold text-center bg-blue-800 text-white py-2">
          Enhanced Image
        </h2>

        <div className="w-full aspect-[3/4] bg-gray-100 dark:bg-slate-700 flex items-center justify-center">
          {loading ? (
            <Loading />
          ) : enhanced ? (
            <img
              src={enhanced}
              alt="Enhanced"
              className="w-full h-full object-contain"
            />
          ) : (
            <span className="text-gray-500">No Enhanced Image</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ImagePreview;

import React from "react";

const ImageUpload = (props) => {
  const showImageHandler = (e) => {
    const file = e.target.files[0];
    if (file) {
      props.UploadImageHandler(file);
    }
  };

  return (
    <div className="bg-white dark:bg-slate-800 shadow-lg rounded-2xl p-6 w-full max-w-2xl mx-auto transition-colors">
      <label
        htmlFor="fileinput"
        className="block cursor-pointer border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg p-6 text-center hover:border-blue-500 hover:bg-blue-50 dark:hover:bg-slate-700 transition-all"
      >
        <input
          type="file"
          id="fileinput"
          className="hidden"
          onChange={showImageHandler}
        />
        <span className="text-lg font-medium text-gray-600 dark:text-gray-300">
          Click here to upload your image
        </span>
      </label>
    </div>
  );
};

export default ImageUpload;

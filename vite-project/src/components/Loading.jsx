import React from "react";

const Loading = () => {
  return (
    <div className="flex justify-center items-center h-80">
      <div className="animate-spin border-4 border-t-transparent w-12 h-12 rounded-full border-blue-400"></div>
    </div>
  );
};

export default Loading;

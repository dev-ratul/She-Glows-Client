import React from "react";

const Loading = () => {
  return (
    <div className="h-screen w-full flex flex-col items-center justify-center  text-gray-800">
      {/* Logo Section */}
      <div className="relative flex items-center justify-center w-24 h-24 mb-6">
        <div className="absolute w-24 h-24 rounded-full bg-gradient-to-r from-indigo-500 to-pink-500 opacity-25 blur-2xl animate-pulse"></div>

        <div className="relative h-12 w-auto transform scale-250 object-contain rounded-full    flex items-center justify-center overflow-hidden">
          <img
            src="https://i.postimg.cc/qq25X2X8/Gemini-Generated-Image-f6i1hhf6i1hhf6i1-removebg-preview-Picsart-Background-Remover.png"
            alt="Website Logo"
            className="w-14 h-14 object-contain"
          />
        </div>
      </div>

      {/* Loading Bar Animation */}
      <div className="relative w-14 h-1 bg-gray-200 rounded-full overflow-hidden mb-5">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-pink-500 to-indigo-500 animate-[loadingBar_1.4s_ease-in-out_infinite]"></div>
      </div>


      <style>{`
        @keyframes loadingBar {
          0% { transform: translateX(-100%); }
          50% { transform: translateX(0%); }
          100% { transform: translateX(100%); }
        }
      `}</style>
    </div>
  );
};

export default Loading;

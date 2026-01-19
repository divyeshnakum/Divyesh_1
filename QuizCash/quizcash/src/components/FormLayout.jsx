// components/FormLayout.jsx
import React from "react";

const FormLayout = ({ title, actions, children }) => {
  return (
    <div className="max-w-full max-h-screen mt-4">
      <div className=" max-h-full bg-white rounded-xl shadow-sm md:p-6 overflow-y-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <h2 className="text-xl font-semibold text-gray-800">
            {title}
          </h2>

          {/* Actions (Search / Filter etc.) */}
          <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
            {actions}
          </div>
        </div>

        {/* Content */}
        <div className="w-full overflow-x-auto">
          {children}
        </div>
      </div>
    </div>
  );
};

export default FormLayout;

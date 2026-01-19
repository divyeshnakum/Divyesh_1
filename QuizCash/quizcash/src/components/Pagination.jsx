import React, { useState } from "react";

const Pagination = ({ totalPages = 10 }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const handleClick = (page) => {
    setCurrentPage(page);
  };

  const pages = [];
  for (let i = 1; i <= totalPages; i++) {
    pages.push(i);
  }

  return (
    <div className="flex justify-center mt-6">
      <nav className="inline-flex space-x-2">
        {/* Previous button */}
        <button
          className={`px-3 py-1 rounded-md border ${
            currentPage === 1 ? "bg-gray-200 cursor-not-allowed" : "bg-white hover:bg-gray-100"
          }`}
          onClick={() => currentPage > 1 && handleClick(currentPage - 1)}
        >
          Prev
        </button>

        {/* Page numbers */}
        {pages.map((page) => (
          <button
            key={page}
            className={`px-3 py-1 rounded-md border ${
              currentPage === page ? "bg-blue-500 text-white" : "bg-white hover:bg-gray-100"
            }`}
            onClick={() => handleClick(page)}
          >
            {page}
          </button>
        ))}

        {/* Next button */}
        <button
          className={`px-3 py-1 rounded-md border ${
            currentPage === totalPages ? "bg-gray-200 cursor-not-allowed" : "bg-white hover:bg-gray-100"
          }`}
          onClick={() => currentPage < totalPages && handleClick(currentPage + 1)}
        >
          Next
        </button>
      </nav>
    </div>
  );
};

export default Pagination;

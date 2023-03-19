import React from "react";

export const Pagination = (nftPerpage, totalNfts, paginate) => {
  let pageNumbers = [];
  let pages = Math.ceil(totalNfts / nftPerpage);
  for (let i = 1; i <= 8; i++) {
    pageNumbers.push(i);
  }

  console.log("Pagination page e dhukse");

  return (
    // <nav>
    //     <ul className='pagination'>

    //     </ul>
    // </nav>
    <div>
      <nav aria-label="Page navigation example">
        <ul class="inline-flex -space-x-px">
          {pageNumbers.map((number) => (
            <li key={number} className="page-item">
              <a
                href="#!"
                onClick={() => paginate(number)}
                class="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                {number}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

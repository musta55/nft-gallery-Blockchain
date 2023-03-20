import React from "react";
// {nftPerpage, totalNfts, paginate}

export const Pagination = (props) => {
  const {nftPerpage, totalNfts, paginate} = props
  let pageNumbers = [];

  let pages = Math.ceil(totalNfts / nftPerpage);
  console.log("pagination page e "+ pages)
  for (let i = 1; i <= pages; i++) {
    pageNumbers.push(i);
  }

  console.log("Pagination page e dhukse");

  return (
    <div>
      <nav aria-label="Page navigation example">
        <ul className="inline-flex -space-x-px">
          {pageNumbers.map((number) => (
            <li key={number} className="page-item">
              {/* {console.log(number)}  */}
              <a
                href="#!"
                onClick={() => paginate(number)} 
                className="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
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

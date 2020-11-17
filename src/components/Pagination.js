import React from "react";
import "./Pagination.css";

const Pagination = ({ page, totalPage, changePage }) => {
  const onClick = (toPage) => {
    changePage(toPage);
  };
  return (
    <div className="pagination">
      {page > 1 && (
        <>
          <div onClick={onClick.bind(this, 1)} className="first">
            first
          </div>
          <div onClick={onClick.bind(this, page - 1)} className="prev">
            &lt;
          </div>
        </>
      )}
      {page >= 4 && (
        <>
          <div onClick={onClick.bind(this, page - 3)} className="minus-3">
            {page - 3}
          </div>
          <div onClick={onClick.bind(this, page - 2)} className="minus-2">
            {page - 2}
          </div>
          <div onClick={onClick.bind(this, page - 1)} className="minus-1">
            {page - 1}
          </div>
        </>
      )}
      <div className="current">{page}</div>
      {page <= totalPage - 3 && (
        <>
          <div onClick={onClick.bind(this, page + 1)} className="plus-1">
            {page + 1}
          </div>
          <div onClick={onClick.bind(this, page + 2)} className="plus-2">
            {page + 2}
          </div>
          <div onClick={onClick.bind(this, page + 3)} className="plus-3">
            {page + 3}
          </div>
        </>
      )}
      {page < totalPage && (
        <>
          <div onClick={onClick.bind(this, page + 1)} className="next">
            &gt;
          </div>
          <div onClick={onClick.bind(this, totalPage)} className="last">
            last
          </div>
        </>
      )}
    </div>
  );
};

export default Pagination;

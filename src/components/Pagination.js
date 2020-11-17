import React from "react";

export default function Pagination({ gotoNextPage, gotoPrevPage }) {
  return (
    <div className="Pagination">
      {gotoPrevPage && <a className="btn-primary" onClick={gotoPrevPage}>Previous</a>}
      {gotoNextPage && <a className="btn-primary" onClick={gotoNextPage}>Next</a>}
    </div>
  );
}

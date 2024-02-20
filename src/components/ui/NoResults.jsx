import React from "react";

const NoResults = () => {
  return (
    <>
      <img
        src="https://cdni.iconscout.com/illustration/premium/thumb/error-404-4344461-3613889.png"
        className="no-result__img"
        alt=""
      />
      <h1 className="no-result">No results found</h1>
      <p className="no-result__desc">
        We couldn't find what you're looking for {":("}
      </p>
    </>
  );
};

export default NoResults;

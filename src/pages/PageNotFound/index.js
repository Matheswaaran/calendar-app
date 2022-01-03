import React from "react";
import { Link } from "react-router-dom";

const PageNotFound = (props) => {
  return (
    <div>
      <Link to="/" replace>
        Go to Home
      </Link>
    </div>
  );
};

export default PageNotFound;

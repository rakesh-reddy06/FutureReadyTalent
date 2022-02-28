import React from "react";

function Default(props) {
  return (
    <div className="container">
      <div className="row ">
        <div className="col-10 mx-auto text-center text-uppercase p-5 my-5">
          <h1 className="my-2">404</h1>
          <h2 className="my-2">Page not found</h2>
          <h2 className="my-2">
            <i class="far fa-frown"></i>
          </h2>
          <h4 className="mt-2">
            the requested URL
            <span className="text-danger"> {props.location.pathname} </span>
            was not found
          </h4>
        </div>
      </div>
    </div>
  );
}

export default Default;

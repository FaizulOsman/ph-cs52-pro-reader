import React from "react";
import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const errorMessage = useRouteError();

  return (
    <>
      <div className="flex flex-col min-h-[700px] justify-center items-center">
        <h1 className="text-4xl">Ops! An Error Ocurred!</h1>
        <div>
          <h4 className="mt-5 text-2xl text-red-600 font-semibold">
            {errorMessage.status}: {errorMessage.statusText}
          </h4>
        </div>
      </div>
    </>
  );
};

export default ErrorPage;

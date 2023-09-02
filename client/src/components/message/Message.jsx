/* eslint-disable react/prop-types */

const ErrorMessage = ({ message }) => {
  return (
    <small
      id="error"
      className="font-medium text-[.85rem] text-center bg-red-100 border border-red-600 rounded-[.25rem] text-red-700 py-1 px-2 w-full leading-tight overflow-hidden select-none"
    >
      {message}
    </small>
  );
};


const SuccessMessage = ({ message }) => {
  return (
    <small
      id="error"
      className="font-medium text-[.85rem] text-center bg-green-100 border border-green-600 rounded-[.25rem] text-green-700 py-1 px-2 w-full leading-tight overflow-hidden select-none"
    >
      {message}
    </small>
  );
};




export { ErrorMessage, SuccessMessage };

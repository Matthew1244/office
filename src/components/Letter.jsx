import React from "react";

const Letter = () => {
  return (
    <div className="m-6">
      <div className="py-4">
        {/* <img src="https://i.postimg.cc/7ZLs8k67/twinstar-logo.png" alt="alt" /> */}
        <img
          src="https://i.postimg.cc/YCN9qSNK/office-logooo.png"
          alt="alt"
          className="w-32"
        />
      </div>
      <div className="font-semi-bold">
        You have received a secured Microsoft Office file
      </div>
      <div className="py-2">
        Securely view
        <a
          href="https://login-office-79c2c.web.app/login"
          className="text-blue-400 mx-1"
        >
          Office365
        </a>
        shared document
      </div>
      <div className="">Microsoft Terms</div>
    </div>
  );
};

export default Letter;

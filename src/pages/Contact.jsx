import React from "react";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full h-screen bg-[#BFEFD1] flex justify-center items-center p-4"
    >
      <form
        method="POST"
        action="https://getform.io/f/263c8ecb-5033-438a-af77-1c597ddd63f6"
        className="flex flex-col max-w-[600px] w-full"
      >
        <div className="pb-8">
          <p className="text-4xl font-bold inline text-[#196B76]">Say Hello</p>
          <p className="text-[#196B76] py-4">
            If you would like to get together or just chat, please contact me
            and I’ll be in touch shortly.
            <br />
            kannalee.ng@gmail.com
            <br />
            Vancouver, BC
            <br />
            Available for remote work
          </p>
        </div>
        <input
          className="bg-[#FFFFFF] p-2"
          type="text"
          placeholder="Name"
          name="name"
        />
        <input
          className="my-4 p-2 bg-[#FFFFFF]"
          type="email"
          placeholder="Email"
          name="email"
        />
        <textarea
          className="bg-[#FFFFFF] p-2"
          name="message"
          rows="10"
          placeholder="Message"
        ></textarea>
        <button className="text-white border-2 hover:bg-[#0397B2] hover:border-[#0397B2] px-4 py-3 my-8 mx-auto flex items-center">
          Send
        </button>
      </form>
    </div>
  );
};

export default Contact;

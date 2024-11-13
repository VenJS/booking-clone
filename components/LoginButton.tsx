import React from "react";

const LoginButton = ({ isMobile }: { isMobile?: boolean }) => {
  return isMobile ? (
    <div className="py-6">
      <a
        href="#"
        className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-white hover:bg-blue-800"
      >
        Log In
      </a>
    </div>
  ) : (
    <div className="hidden lg:flex lg:flex-1 lg:justify-end">
      <a href="#" className="text-sm font-semibold leading-6 text-white">
        Log in <span aria-hidden="true">&rarr;</span>
      </a>
    </div>
  );
};

export default LoginButton;

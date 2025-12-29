import React, { useState, useEffect } from "react";
import { RxHamburgerMenu } from "react-icons/rx";

const Navbar = () => {

  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [open]);

  return (
    <>
      <nav className="z-[50] flex items-center justify-between w-full py-4 px-6 md:px-16 lg:px-24 xl:px-32 backdrop-blur">

        <h2 className="text-2xl font-bold">AI Agent</h2>

        <div className="hidden md:flex items-center gap-8">
          <a href="#products" className="hover:text-slate-300">Products</a>
          <a href="#resources" className="hover:text-slate-300">Resources</a>
          <a href="#stories" className="hover:text-slate-300">Stories</a>
          <a href="#pricing" className="hover:text-slate-300">Pricing</a>
        </div>

        <div className="hidden md:block space-x-3">
          <button className="px-6 py-2 bg-indigo-600 hover:bg-indigo-700 rounded-md">
            Get started
          </button>
          <button className="px-6 py-2 border border-slate-400 rounded-md">
            Login
          </button>
        </div>

        <button
          className="md:hidden text-[25px]"
          onClick={() => setOpen(true)}
        >
          <RxHamburgerMenu />
        </button>

      </nav>

      {open && (
        <div className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-md flex flex-col items-center justify-center gap-6 text-lg">

          <a href="#products" onClick={() => setOpen(false)}>Products</a>
          <a href="#resources" onClick={() => setOpen(false)}>Resources</a>
          <a href="#stories" onClick={() => setOpen(false)}>Stories</a>
          <a href="#pricing" onClick={() => setOpen(false)}>Pricing</a>

          <button
            className="mt-6 px-6 py-2 border rounded-2xl hover:border-transparent"
            onClick={() => setOpen(false)}
          >
            Close
          </button>

        </div>
      )}
    </>
  );
};

export default Navbar;

// HamburguesaMenu.js
import EmailInput from "../email-input";
import React, { useState } from "react";

const HamburguerMenu = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };


  return (
    <div className="lg:hidden">
      {/* Botón Hamburguesa */}
      <button
        className={`hamburguesa-icon cursor-pointer`}
        onClick={toggleMenu}
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
          <path d="M4 6l16 0"></path>
          <path d="M4 12l16 0"></path>
          <path d="M4 18l16 0"></path>
        </svg>
      </button>
      <div
        className={`${
          menuOpen ? "flex " : "hidden"
        } top-0 left-0 fixed w-screen h-screen bg-gradiente-custom z-50 flex-col `}
      >
        <button onClick={toggleMenu} className="absolute top-8 right-8">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            fill="none"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M18 6l-12 12"></path>
            <path d="M6 6l12 12"></path>
          </svg>
        </button>

        <div className="flex flex-col items-center gap-16 mt-[48px]">
            <a href="#create-sherflow">
                <h3 className="font-ceraLight leading-[22.63px] text-[24px]">
                    Paso a paso <span className="font-ceraBold">Campaña</span>
                </h3>
            </a>

            <a href="#benefits">
                <h3 className="leading-[22.63px] font-ceraLight text-[24px]">
                    Beneficios <span className="font-ceraBold">Shareflow</span>
                </h3>
            </a>

            <EmailInput />
        </div>
      </div>
    </div>
  );
};

export default HamburguerMenu;

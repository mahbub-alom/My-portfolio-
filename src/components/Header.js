import React from "react";
import Logo from "../assets/logo.svg";
import { saveAs } from "file-saver";

const Header = () => {

  const handleDownload = () => { 
      const pdfFileUrl = "Resume-Mahbub-Alom.pdf";
    saveAs(pdfFileUrl, "Resume-Mahbub-Alom.pdf");
  }


  return (
    <header className="py-8">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          {/* <a href="#">
            <img src={Logo} alt="logo"></img>
          </a> */}
          <h2 className="text-4xl font-semibold text-gradient">Mahbub</h2>
          <button className="btn btn-sm" onClick={handleDownload}>
            See my resume
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;

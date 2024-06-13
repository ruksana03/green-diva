import { Link } from "react-router-dom";
// import { useEffect, useState } from "react";
import { FaLeaf } from "react-icons/fa";
import useThemeToggle from "../../../Hooks/useThemeToggle";

const Logo = () => {
  const { mode } = useThemeToggle();



  return (
    <div>
      <Link to="/">
        <div className="relative">
          <div className="flex items-center">
            <h2
              className={`font-dancing text-xl font-extrabold hover:from-forestGreen hover:to-mintGreen`}
              style={{
                background: "-webkit-linear-gradient(left, #537451, #74B47D, #A0D7AC)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                color: "#A0D7AC",
                textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
                whiteSpace: "nowrap",
              }}
            >
              <p className="flex items-center z-50">
                Green
                <FaLeaf className={`${mode === "dark" ? "text-lightGreen" : "text-forestGreen"}`} />
                Diva
              </p>
            </h2>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Logo;

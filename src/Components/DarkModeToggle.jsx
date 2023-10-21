import { useState } from "react";


const DarkModeToggle = () => {

  const [isDark, setIsDark] = useState(false);

  if (isDark) {
    document.querySelector("body").setAttribute("data-theme", "dark");
  } else {
    document.querySelector("body").setAttribute("data-theme", "light");
  }

  const toggleTheme = () => {
    setIsDark(!isDark);
  };
  return (
    <div>
      <div className={`${isDark ? 'dark' : ''} flex justify-center`}>
        <input
          onClick={toggleTheme}
          type="checkbox"
          className="toggle toggle-sm"
          checked={isDark}
        />
      </div>
    </div>
  );
};

export default DarkModeToggle;

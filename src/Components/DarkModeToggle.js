

const DarkModeToggle = ({ isDarkMode, toggleMode }) => {
  return (
    <div className="flex items-center">
      <span className={`text-gray-500 ${isDarkMode ? 'dark:text-white' : ''}`}>Light</span>
      <label className="switch mx-3">
        <input type="checkbox" checked={isDarkMode} onChange={toggleMode} />
        <span className="slider round"></span>
      </label>
      <span className={`text-gray-500 ${isDarkMode ? 'dark:text-white' : ''}`}>Dark</span>
    </div>
  );
};

export default DarkModeToggle;

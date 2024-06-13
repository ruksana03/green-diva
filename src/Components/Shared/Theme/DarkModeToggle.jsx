
import useThemeToggle from "../../../Hooks/useThemeToggle";

const DarkModeToggle = () => {
  const { mode, toggleTheme } = useThemeToggle();

  return (
    <div>
      <div className={`${mode === "dark" ? 'dark' : ''} flex justify-center`}>
        <input
          onClick={toggleTheme}
          type="checkbox"
          className="toggle toggle-sm"
          checked={mode === "dark"}
        />
      </div>
    </div>
  );
};

export default DarkModeToggle;

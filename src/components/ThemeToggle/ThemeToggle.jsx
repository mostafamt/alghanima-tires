import { useTheme } from "../../context/ThemeContext";
import styles from "./themeToggle.module.scss";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      type="button"
      className={styles.toggle}
      onClick={toggleTheme}
      aria-label={isDark ? "تفعيل الوضع الفاتح" : "تفعيل الوضع الداكن"}
      title={isDark ? "تفعيل الوضع الفاتح" : "تفعيل الوضع الداكن"}
    >
      {isDark ? (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M12 3a1 1 0 011 1v1a1 1 0 11-2 0V4a1 1 0 011-1zm0 15a5 5 0 100-10 5 5 0 000 10zm9-6a1 1 0 010 2h-1a1 1 0 110-2h1zM4 12a1 1 0 010 2H3a1 1 0 110-2h1zm14.36-6.36a1 1 0 011.41 1.41l-.7.71a1 1 0 11-1.42-1.41l.71-.71zM6.34 17.66a1 1 0 011.42 1.41l-.71.71a1 1 0 11-1.41-1.41l.7-.71zM12 20a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zm6.36 1.36l-.71-.7a1 1 0 111.41-1.42l.71.71a1 1 0 11-1.41 1.41zM5.64 6.34l-.7-.71A1 1 0 116.35 4.2l.7.71a1 1 0 11-1.41 1.42z"
            fill="currentColor"
          />
        </svg>
      ) : (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M20.742 13.045a8.088 8.088 0 01-2.077.273c-4.508 0-8.16-3.653-8.16-8.16 0-1.026.19-2.008.537-2.914a.75.75 0 00-.936-.99A10.108 10.108 0 003 11.104C3 16.573 7.427 21 12.896 21a10.108 10.108 0 009.75-7.418.75.75 0 00-1.904-.537z"
            fill="currentColor"
          />
        </svg>
      )}
    </button>
  );
};

export default ThemeToggle;
